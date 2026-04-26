// ============================================================
// ALLO TAPIS ERP — Version Firebase (temps réel)
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore, collection, doc,
  onSnapshot, addDoc, updateDoc, deleteDoc,
  query, where, orderBy, serverTimestamp, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1iwObYKpiaqBXpmX1iXaYVZm9FjMpVp8",
  authDomain: "allo-tapis.firebaseapp.com",
  projectId: "allo-tapis",
  storageBucket: "allo-tapis.firebasestorage.app",
  messagingSenderId: "566002084826",
  appId: "1:566002084826:web:463f92dd116be3ccdfeee3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ── ÉTAT GLOBAL (alimenté par Firestore en temps réel) ──
let commandes = [];
let blData = [];
let ramassages = [];
let lignesData = [];
let chargementsData = [];
let clients = [];
let tresoMouvements = [];
let fidClients = [];

// ── INDICATEUR DE CONNEXION ──
function setOnlineStatus(ok){
  const dot = document.getElementById('online-dot');
  const lbl = document.getElementById('online-lbl');
  if(dot) dot.style.background = ok ? '#059669' : '#DC2626';
  if(lbl) lbl.textContent = ok ? 'Firebase connecté' : 'Hors ligne';
}

// ── LISTENERS TEMPS RÉEL ──
// Chaque onSnapshot se déclenche à chaque modification dans Firestore
// → toutes les apps voient les changements en temps réel

function initFirebaseListeners(){
  setOnlineStatus(false);

  // COMMANDES
  onSnapshot(collection(db,'commandes'), snap => {
    commandes = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    commandes.sort((a,b) => (b.num||'').localeCompare(a.num||''));
    setOnlineStatus(true);
    // Re-render si on est sur la page commandes
    if(currentPage === 'commandes') renderCommandes(commandes);
    if(currentPage === 'dashboard') initDashboard();
    if(currentPage === 'lignes') renderLignesPage(lignesData);
  }, err => { console.error('commandes:', err); setOnlineStatus(false); });

  // BONS DE LIVRAISON
  onSnapshot(collection(db,'bons_livraison'), snap => {
    blData = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    blData.sort((a,b) => (b.num||'').localeCompare(a.num||''));
    if(currentPage === 'bons-livraison') renderBL(blData);
    if(currentPage === 'dashboard') initDashboard();
  });

  // RAMASSAGES
  onSnapshot(collection(db,'ramassages'), snap => {
    ramassages = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    ramassages.sort((a,b) => (b.id||0)-(a.id||0));
    if(currentPage === 'ramassage') renderRamassage(ramassages);
    if(currentPage === 'dashboard') initDashboard();
  });

  // LIGNES DE COMMANDE
  onSnapshot(collection(db,'lignes'), snap => {
    lignesData = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    if(currentPage === 'lignes') renderLignesPage(lignesData);
    if(currentPage === 'app-finition') initAppFinition();
  });

  // CHARGEMENTS
  onSnapshot(collection(db,'chargements'), snap => {
    chargementsData = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    chargementsData.sort((a,b) => (b.date||'').localeCompare(a.date||''));
    if(currentPage === 'chargements') renderChargements(chargementsData);
  });

  // CLIENTS
  onSnapshot(collection(db,'clients'), snap => {
    clients = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    clients.sort((a,b) => (a.nom||'').localeCompare(b.nom||''));
    if(currentPage === 'clients') renderClients(clients);
  });

  // TRÉSORERIE
  onSnapshot(collection(db,'tresorerie'), snap => {
    tresoMouvements = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    tresoMouvements.sort((a,b) => (b.date||'').localeCompare(a.date||''));
    if(currentPage === 'tresorerie') initTresoreriePage();
    if(currentPage === 'dashboard') updateTreso();
  });

  // FIDÉLITÉ
  onSnapshot(collection(db,'fid_clients'), snap => {
    fidClients = snap.docs.map(d => ({_id:d.id, ...d.data()}));
    fidClients.sort((a,b) => b.pts - a.pts);
    if(currentPage === 'fidelite') fidRenderClients();
  });
}

// ── HELPERS D'ÉCRITURE FIRESTORE ──
// Toutes les fonctions de sauvegarde passent par ces helpers

async function fsAdd(colName, data){
  return addDoc(collection(db, colName), {
    ...data, updatedAt: new Date().toISOString(), createdAt: new Date().toISOString()
  });
}

async function fsUpdate(colName, id, data){
  if(!id){ console.error('fsUpdate: id manquant pour', colName); return; }
  return updateDoc(doc(db, colName, id), {
    ...data, updatedAt: new Date().toISOString()
  });
}

async function fsDelete(colName, id){
  if(!id){ console.error('fsDelete: id manquant'); return; }
  return deleteDoc(doc(db, colName, id));
}

// ── REMPLACEMENTS DES FONCTIONS DE SAUVEGARDE ──

// Commande
async function saveCmdFirebase(cmd){
  if(cmd._id){
    await fsUpdate('commandes', cmd._id, cmd);
  } else {
    await fsAdd('commandes', cmd);
  }
  showToast('✅ Commande sauvegardée','#1D9E75');
}

// BL
async function saveBLFirebase(bl){
  if(bl._id) await fsUpdate('bons_livraison', bl._id, bl);
  else await fsAdd('bons_livraison', bl);
  showToast('✅ BL sauvegardé','#1D9E75');
}

// Ramassage
async function saveRamassageFirebase(ram){
  if(ram._id) await fsUpdate('ramassages', ram._id, ram);
  else await fsAdd('ramassages', ram);
  showToast('✅ Ramassage enregistré','#1D9E75');
}

// Ligne de commande (emplacement finition)
async function saveLigneFirebase(ligne){
  if(ligne._id) await fsUpdate('lignes', ligne._id, ligne);
  else await fsAdd('lignes', ligne);
}

// Charge trésorerie
async function saveChargeFirebase(charge){
  await fsAdd('tresorerie', charge);
  showToast('✅ Charge enregistrée','#1D9E75');
}

async function deleteChargeFirebase(id){
  await fsDelete('tresorerie', id);
  showToast('✅ Charge supprimée','#1D9E75');
}

// Client
async function saveClientFirebase(client){
  if(client._id) await fsUpdate('clients', client._id, client);
  else await fsAdd('clients', client);
  showToast('✅ Client enregistré','#1D9E75');
}

// Chargement
async function saveChargementFirebase(charg){
  if(charg._id) await fsUpdate('chargements', charg._id, charg);
  else await fsAdd('chargements', charg);
  showToast('✅ Chargement enregistré','#1D9E75');
}

// Points fidélité
async function addPointsFidFirebase(clientId, pts){
  const cl = fidClients.find(c=>c._id===clientId);
  if(!cl) return;
  await fsUpdate('fid_clients', clientId, { pts: (cl.pts||0)+pts });
  showToast(`⭐ +${pts} points pour ${cl.nom}`,'#F59E0B');
}

// ── ÉCOUTER LES MISES À JOUR DES APPS ATELIER ──
// Finition → met à jour les lignes en temps réel
// Livreur  → met à jour les BLs et la trésorerie
window.addEventListener('message', async (e) => {
  if(e.data?.type === 'FINITION_SYNC' && e.data.updates){
    for(const upd of e.data.updates){
      const ligne = lignesData.find(l=>l.cmdNum===upd.cmdNum && l.numArt===upd.numArt);
      if(ligne?._id){
        await fsUpdate('lignes', ligne._id, {
          empl: upd.empl, etat: upd.etat, qteTraitee: upd.qteTraitee, syncedBy: upd.syncedBy
        });
      }
    }
    showToast(`🔗 ${e.data.updates.length} emplacement(s) synchronisé(s)`,'#1D9E75');
  }
  if(e.data?.type === 'LIVREUR_SYNC' && e.data.update){
    const u = e.data.update;
    const bl = blData.find(b=>b.num===u.blNum);
    if(bl?._id){
      await fsUpdate('bons_livraison', bl._id, { etat: u.etat });
      if(u.etat === 'Livré & Payé' || u.etat === 'Payé'){
        await fsAdd('tresorerie',{
          date: new Date().toISOString().split('T')[0],
          type:'recette', categorie:'Commande payée',
          libelle:`Paiement BL ${u.blNum} — ${u.livreur}`,
          ref: u.blNum, montant: bl.montant||0,
          saisi:'App Livreur', mois: new Date().getMonth()
        });
      }
    }
  }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initFirebaseListeners();
  goPage('dashboard');
});
