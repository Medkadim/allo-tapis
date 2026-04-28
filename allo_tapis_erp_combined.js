
// ===== DATA =====
const articles=[
  {name:'Barch',tp:20,tpr:0,tpro:0,ta:0,uom:'m²',actif:true,desc:''},
  {name:'fout',tp:15,tpr:0,tpro:0,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Lizar',tp:20,tpr:0,tpro:0,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Housse de couette',tp:15,tpr:10,tpro:10,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Nettoyage de moquette',tp:20,tpr:10,tpro:10,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Transport',tp:100,tpr:0,tpro:0,ta:0,uom:'Forfait',actif:true,desc:''},
  {name:'Banquette',tp:200,tpr:200,tpro:200,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Oreiller',tp:25,tpr:15,tpro:15,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:"Taie d'oreillers",tp:15,tpr:10,tpro:30,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Nappe',tp:25,tpr:15,tpro:15,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Tête de lit',tp:150,tpr:100,tpro:150,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Pouffe',tp:80,tpr:60,tpro:60,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Divers',tp:0,tpr:0,tpro:0,ta:0,uom:'Forfait',actif:true,desc:''},
  {name:'Assise fauteuil',tp:0,tpr:0,tpro:0,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Sur-Matelas',tp:100,tpr:100,tpro:100,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Coussin plein',tp:25,tpr:20,tpro:20,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Housse de matelas',tp:15,tpr:10,tpro:10,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Traitement spécial',tp:200,tpr:100,tpro:100,ta:0,uom:'Forfait',actif:true,desc:''},
  {name:'Siège bébé',tp:50,tpr:50,tpro:50,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Coussin peau de vache',tp:30,tpr:20,tpro:30,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Tapis peau de vache',tp:40,tpr:25,tpro:40,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Matelas 2P',tp:400,tpr:300,tpro:300,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Matelas 1P',tp:200,tpr:150,tpro:150,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Drap',tp:20,tpr:15,tpro:15,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Chaise',tp:70,tpr:50,tpro:50,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Fauteuil',tp:100,tpr:50,tpro:50,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Housse de coussin PF',tp:10,tpr:8,tpro:8,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Housse de coussin MF',tp:12,tpr:10,tpro:10,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Housse de coussin GF',tp:15,tpr:12,tpro:12,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Lhouf',tp:15,tpr:10,tpro:10,ta:0,uom:'m',actif:true,desc:''},
  {name:'Couvre-lit',tp:50,tpr:30,tpro:30,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Couverture',tp:30,tpr:20,tpro:25,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Tapis perse',tp:40,tpr:25,tpro:25,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Tapis velour',tp:40,tpr:25,tpro:25,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Tapis soie',tp:40,tpr:25,tpro:25,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Tapis laine',tp:40,tpr:25,tpro:25,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Tapis shaggy',tp:30,tpr:15,tpro:15,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Canapé',tp:100,tpr:60,tpro:60,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Rideau',tp:70,tpr:50,tpro:60,ta:0,uom:'m²',actif:true,desc:''},
  {name:'Couette',tp:50,tpr:25,tpro:25,ta:0,uom:'Pièce',actif:true,desc:''},
  {name:'Tapis synthétique',tp:22,tpr:15,tpro:15,ta:30,uom:'m²',actif:true,desc:''},
];

const uoms=[{name:'Forfait'},{name:'m'},{name:'m²'},{name:'mL'},{name:'Place'},{name:'Pièce'}];

const personnel=[
  {mat:'1',nom:'Naqi Redouane',fonction:'Gérant',telp:'0661440984',telper:'0661440984',cin:'w131220',lieu:'Administration',ville:'Tanger',active:true},
  {mat:'2',nom:'Naqi Rania',fonction:'Assistante',telp:'0661915871',telper:'0661915871',cin:'J521323',lieu:'Administration',ville:'Tanger',active:true},
  {mat:'3',nom:'Chaanoud Omar',fonction:"Chef d'atelier",telp:'0624736547',telper:'0624736547',cin:'P311850',lieu:'Atelier',ville:'Tanger',active:true},
  {mat:'4',nom:'Al ouardi Fathallah',fonction:'Technicien',telp:'0603073343',telper:'0603073343',cin:'K589990',lieu:'Atelier',ville:'Tanger',active:true},
  {mat:'5',nom:'Charkaoui Houcine',fonction:'Technicien',telp:'0621036639',telper:'0621036639',cin:'PA119690',lieu:'Atelier',ville:'Tanger',active:true},
  {mat:'0',nom:'Lui-même',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'6',nom:'Oujane Nadir',fonction:'Livreur',telp:'0662186589',telper:'0662269037',cin:'CB304972',lieu:'Tanger',ville:'Tanger',active:true},
  {mat:'7',nom:'Mohamed Najem',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'8',nom:'Fahmi Hassan',fonction:'Technicien',telp:'',telper:'0613868558',cin:'IE36902',lieu:'Ait Majden Azilal',ville:'Tanger',active:true},
  {mat:'9',nom:'Tiskt Assou',fonction:'Technicien',telp:'',telper:'0636926095',cin:'UA101229',lieu:'Errachidia',ville:'Tanger',active:true},
  {mat:'10',nom:'Barak Yassine',fonction:'Technicien',telp:'',telper:'0701302671',cin:'EE480954',lieu:'Ouazzane',ville:'Tanger',active:true},
  {mat:'14',nom:'Abdessamad Aboulfath',fonction:'Livreur',telp:'',telper:'0633322701',cin:'KB151836',lieu:'Salé',ville:'Tanger',active:true},
  {mat:'15',nom:'Taakouft Soufiane',fonction:'Livreur',telp:'',telper:'0660458462',cin:'K459322',lieu:'Tanger',ville:'Tanger',active:true},
  {mat:'18',nom:'lui meme',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'19',nom:'Messaoud Ameziane',fonction:'Livreur',telp:'',telper:'0649558556',cin:'JE318613',lieu:'',ville:'Tanger',active:true},
  {mat:'20',nom:'Kadim Mohamed',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'21',nom:'Anass Mounaouar',fonction:'Livreur',telp:'0660566500',telper:'',cin:'BA3002',lieu:'',ville:'Tanger',active:true},
  {mat:'22',nom:'Labiad Yassine',fonction:'Livreur',telp:'0662186589',telper:'',cin:'R362577',lieu:'',ville:'',active:true},
  {mat:'23',nom:'Koukouss Hafid',fonction:'Livreur',telp:'0694721361',telper:'',cin:'K504980',lieu:'',ville:'Tanger',active:true},
  {mat:'24',nom:'Ourouch Houssam',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'25',nom:'synt',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true},
  {mat:'26',nom:'Radi Abdellah',fonction:'Livreur',telp:'',telper:'',cin:'BK362103',lieu:'',ville:'',active:true},
];

const commandes=[
  {num:'264489',client:'Ahmed bou9tib',livreur:'Lui-même',date:'15/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264488',client:'Abdeljalil Salma',livreur:'Koukouss Hafid',date:'15/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264487',client:'Hanane',livreur:'Koukouss Hafid',date:'15/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264486',client:'Ibrahim elkhalil',livreur:'Koukouss Hafid',date:'15/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264485',client:'Laundry Service Irfane 1',livreur:'Koukouss Hafid',date:'15/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264475',client:'Greenzer',livreur:'Ourouch Houssam',date:'14/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:560},
  {num:'264474',client:'Laundry Service Mesnana',livreur:'Ourouch Houssam',date:'13/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:320},
  {num:'264472',client:'Thibeau Isabelle',livreur:'Ourouch Houssam',date:'13/04/2026',statut:'En traitement',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:180},
  {num:'264470',client:'Ouidad aboud',livreur:'Ourouch Houssam',date:'13/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:440},
  {num:'264469',client:'Homat el warda',livreur:'Koukouss Hafid',date:'13/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:260},
  {num:'264467',client:'Touria',livreur:'Koukouss Hafid',date:'13/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:150},
  {num:'264466',client:'Rachida',livreur:'Koukouss Hafid',date:'13/04/2026',statut:'Prêt à livrer',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:200},
  {num:'264465',client:'Tabari Sara',livreur:'Koukouss Hafid',date:'13/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
  {num:'264464',client:'Anass temsamani',livreur:'Koukouss Hafid',date:'13/04/2026',statut:'Brouillon',tel:'',adresse:'',remise:0,lignes:[],photos:[],montant:0},
];

const lignes=[
  {num:'L-001',article:'Tapis synthétique',larg:2.5,long:3.0,surface:7.5,empl:'A-01',statut:'Prêt',prix:165},
  {num:'L-002',article:'Canapé',larg:0,long:0,surface:0,empl:'B-03',statut:'Prêt',prix:100},
  {num:'L-003',article:'Rideau',larg:1.5,long:2.8,surface:4.2,empl:'',statut:'En traitement',prix:294},
  {num:'L-004',article:'Matelas 2P',larg:0,long:0,surface:0,empl:'C-02',statut:'Livré',prix:400},
  {num:'L-005',article:'Tapis laine',larg:3.0,long:4.0,surface:12,empl:'A-05',statut:'Prêt',prix:480},
  {num:'L-006',article:'Couette',larg:0,long:0,surface:0,empl:'',statut:'En traitement',prix:50},
  {num:'L-007',article:'Fauteuil',larg:0,long:0,surface:0,empl:'B-07',statut:'Prêt',prix:100},
  {num:'L-008',article:'Tapis shaggy',larg:2.0,long:3.0,surface:6,empl:'A-03',statut:'Livré',prix:180},
  {num:'L-009',article:'Chaise',larg:0,long:0,surface:0,empl:'',statut:'Confirmé',prix:70},
  {num:'L-010',article:'Matelas 1P',larg:0,long:0,surface:0,empl:'C-04',statut:'Prêt',prix:200},
];

const chargements=[
  {num:'CH-001',date:'2024-01-15',vehicule:'Toyota Hilux - 12345A',livreur:'Koukouss Hafid',nbBL:5,statut:'Livré'},
  {num:'CH-002',date:'2024-01-17',vehicule:'Renault Express - 67890B',livreur:'Oujane Nadir',nbBL:4,statut:'Livré'},
  {num:'CH-003',date:'2024-01-22',vehicule:'Toyota Hilux - 12345A',livreur:'Radi Abdellah',nbBL:6,statut:'Livré'},
  {num:'CH-004',date:'2024-01-29',vehicule:'Ford Transit - 11223C',livreur:'Taakouft Soufiane',nbBL:3,statut:'Livré'},
  {num:'CH-005',date:'2024-02-05',vehicule:'Renault Express - 67890B',livreur:'Anass Mounaouar',nbBL:7,statut:'En cours'},
  {num:'CH-006',date:'2024-02-12',vehicule:'Toyota Hilux - 12345A',livreur:'Koukouss Hafid',nbBL:4,statut:'Planifié'},
];

const statClients=[
  {nom:'Anassi Mohammed',ville:'Tanger',nbCmd:28,ca:12400,derniere:'2024-01-05'},
  {nom:'Bennani Fatima',ville:'Tanger',nbCmd:15,ca:6800,derniere:'2024-01-07'},
  {nom:'Chraibi Hassan',ville:'Tanger',nbCmd:22,ca:9600,derniere:'2024-01-09'},
  {nom:'El Alami Youssef',ville:'Tanger',nbCmd:11,ca:4200,derniere:'2024-01-12'},
  {nom:'Fassi Leila',ville:'Casablanca',nbCmd:8,ca:3100,derniere:'2024-01-14'},
  {nom:'Ghazali Omar',ville:'Tanger',nbCmd:31,ca:15800,derniere:'2024-01-15'},
  {nom:'Haddad Nadia',ville:'Tanger',nbCmd:19,ca:8200,derniere:'2024-01-17'},
  {nom:'Jalil Samira',ville:'Tanger',nbCmd:7,ca:2900,derniere:'2024-01-20'},
];

// ===== DATA RAMASSAGES =====
let ramassages = [];
let ramCounter = 1;

// ===== NAV =====
let currentPage='ramassage';
let artViewMode='kanban';
let currentArtIdx=-1,currentPersIdx=-1,currentUomIdx=-1;
let artReadOnly=false,persReadOnly=false,uomReadOnly=false;
let currentUomVal='';

function goPage(p){
  document.querySelectorAll('.page').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(el=>{
    if(el.textContent.trim()===navLabel(p))el.classList.add('active');
  });
  currentPage=p;
  initPage(p);
}

function navLabel(p){
  const m={
    'dashboard':'Dashboard','tresorerie':'Trésorerie','fidelite':'Programme fidélité',
    'campagnes':'Campagnes WhatsApp','ramassage':'Ramassage','commandes':'Commandes',
    'bons-livraison':'Bons de livraison','lignes':'Lignes de commande',
    'chargements':'Chargements','stat-clients':'Stat. clients','stat-articles':'Stat. articles',
    'clients':'Clients','articles':'Articles','uom':'Unités de mesure','personnel':'Personnel',
    'app-livreur':'App Livreur','app-finition':'App Finition','app-lavage':'App Lavage'
  };
  return m[p]||'';
}

function initPage(p){
  if(p==='dashboard')initDashboard();
  else if(p==='tresorerie'){initTresoreriePage();}
  else if(p==='fidelite'){initFidelite();}
  else if(p==='campagnes'){initCampagnes();}
  else if(p==='app-livreur'){initAppLivreur();}
  else if(p==='app-finition'){initAppFinition();}
  else if(p==='app-lavage'){initAppLavage();}
  else if(p==='ramassage')renderRamassage(ramassages);
  else if(p==='commandes')renderCommandes(commandes);
  else if(p==='bons-livraison')renderBL(blData);
  else if(p==='lignes'){renderLignes(lignesData);}
  else if(p==='chargements')renderChargements(chargementsData);
  else if(p==='stat-clients')renderStatClients();
  else if(p==='stat-articles')renderStatArticles();
  else if(p==='clients')renderClients(clients);
  else if(p==='articles'){renderKanban(articles);renderArtList(articles);}
  else if(p==='uom')renderUoms();
  else if(p==='personnel')renderPersonnel(personnel);
}

// ===== STATUT BADGE =====
function statutBadge(s){
  const m={'Confirmé':'badge-confirme','Brouillon':'badge-brouillon','En traitement':'badge-traitement',
    'Prêt à livrer':'badge-pret','Livré':'badge-livre','Payé':'badge-paye',
    'En cours':'badge-traitement','Planifié':'badge-confirme','Prêt':'badge-pret'};
  return `<span class="badge ${m[s]||'badge-brouillon'}">${s}</span>`;
}

function fonctionBadge(f){
  const m={'Gérant':'badge-gerant','Assistante':'badge-assistante',"Chef d'atelier":'badge-chef','Technicien':'badge-technicien','Livreur':'badge-livreur'};
  if(!f)return '';
  return `<span class="f-badge ${m[f]||''}">${f}</span>`;
}

function fmt(n){return n>0?n.toFixed(2):'0,00';}

// ===== COMMANDES =====
let cmdCounter = 1406; // dernier N° connu
let currentCmdIdx = -1;
let cmdReadOnly = false;
let cmdLignes = []; // lignes en cours d'édition
let cmdPhotos = [];

function genCmdNum(){
  const year = new Date().getFullYear().toString().slice(-2);
  cmdCounter++;
  return year + String(cmdCounter).padStart(4,'0');
}

function renderCommandes(data){
  document.getElementById('cmd-body').innerHTML = data.map(c=>`
    <tr onclick="showCmdForm(${commandes.indexOf(c)})" style="${['Prêt à livrer'].includes(c.statut)?'color:#1a5fa8;font-weight:500;':''}" >
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell" style="${['Prêt à livrer'].includes(c.statut)?'color:#1a5fa8':''}">
        ${c.num}
      </td>
      <td style="${['Prêt à livrer'].includes(c.statut)?'color:#1a5fa8;font-weight:500':''}">${c.client}</td>
      <td style="${['Prêt à livrer'].includes(c.statut)?'color:#1a5fa8':'color:#8899aa'}">${c.livreur||'—'}</td>
      <td style="${['Prêt à livrer'].includes(c.statut)?'color:#1a5fa8':'color:#8899aa'}">${c.date}</td>
      <td>${statutBadge(c.statut)}</td>
    </tr>`).join('');
  document.getElementById('cmd-pag').textContent=`1–${data.length} sur ${commandes.length}`;
}

function filterCommandes(q){
  const statut=document.getElementById('cmd-filter-statut').value;
  let data=commandes;
  if(q)data=data.filter(c=>c.client.toLowerCase().includes(q.toLowerCase())||String(c.num).includes(q));
  if(statut)data=data.filter(c=>c.statut===statut);
  renderCommandes(data);
}

function showCmdForm(i){
  document.getElementById('cmd-list-view').style.display='none';
  document.getElementById('cmd-form-view').style.display='block';
  cmdLignes=[];cmdPhotos=[];

  if(i===-1){
    // Nouvelle commande
    currentCmdIdx=-1;cmdReadOnly=false;
    document.getElementById('cmd-form-bc').textContent='Nouveau';
    document.getElementById('cmd-form-actions').innerHTML=`
      <button class="btn-save" onclick="saveCmdForm()">Enregistrer</button>
      <span style="color:#8899aa">ou</span>
      <button class="btn-cancel" onclick="hideCmdForm()">Annuler</button>`;
    document.getElementById('cmd-ro').classList.remove('show');
    document.getElementById('cf-num').value=genCmdNum();
    document.getElementById('cf-client').value='';
    document.getElementById('cf-tel').value='';
    document.getElementById('cf-adresse').value='';
    document.getElementById('cf-livreur').value='';
    document.getElementById('cf-date').value=new Date().toISOString().split('T')[0];
    document.getElementById('cf-remise').value=0;
    statutBarUpdate('Brouillon');
    setCmdReadOnly(false);
  } else {
    const c=commandes[i];
    currentCmdIdx=i;cmdReadOnly=true;
    document.getElementById('cmd-form-bc').textContent=c.num;
    document.getElementById('cmd-form-actions').innerHTML=`
      <button class="btn-modify" onclick="enableCmdEdit()">Modifier</button>
      <button class="btn-modify" onclick="showCmdForm(-1)">Créer</button>`;
    document.getElementById('cmd-ro').classList.add('show');
    document.getElementById('cf-num').value=c.num;
    document.getElementById('cf-client').value=c.client;
    document.getElementById('cf-tel').value=c.tel||'';
    document.getElementById('cf-adresse').value=c.adresse||'';
    document.getElementById('cf-livreur').value=c.livreur||'';
    document.getElementById('cf-date').value=c.date;
    document.getElementById('cf-remise').value=c.remise||0;
    cmdLignes=c.lignes?JSON.parse(JSON.stringify(c.lignes)):[];
    cmdPhotos=c.photos?[...c.photos]:[];
    statutBarUpdate(c.statut);
    setCmdReadOnly(true);
  }
  renderLignesForm();
  renderPhotosForm();
  recalcTotaux();
}

function hideCmdForm(){
  document.getElementById('cmd-list-view').style.display='';
  document.getElementById('cmd-form-view').style.display='none';
}

function enableCmdEdit(){
  cmdReadOnly=false;
  document.getElementById('cmd-form-actions').innerHTML=`
    <button class="btn-save" onclick="saveCmdForm()">Enregistrer</button>
    <span style="color:#8899aa">ou</span>
    <button class="btn-cancel" onclick="showCmdForm(${currentCmdIdx})">Annuler</button>`;
  document.getElementById('cmd-ro').classList.remove('show');
  setCmdReadOnly(false);
  // Rafraîchir la barre statut pour la rendre cliquable
  const statut=currentCmdIdx>=0?commandes[currentCmdIdx].statut:'Brouillon';
  statutBarUpdate(statut);
}

function setCmdReadOnly(ro){
  ['cf-client','cf-livreur','cf-date','cf-remise'].forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    if(el.tagName==='SELECT')el.disabled=ro;
    else el.readOnly=ro;
  });
  document.getElementById('btn-add-ligne').style.display=ro?'none':'inline-block';
  document.getElementById('btn-add-photo').style.display=ro?'none':'inline-block';
  document.getElementById('cf-remise').readOnly=ro;
  // re-render lignes pour montrer/cacher les inputs
  renderLignesForm();
}

function saveCmdForm(){
  const client=document.getElementById('cf-client').value.trim();
  if(!client){alert('Veuillez saisir un client.');return;}
  const obj={
    num:document.getElementById('cf-num').value,
    client,
    tel:document.getElementById('cf-tel').value,
    adresse:document.getElementById('cf-adresse').value,
    livreur:document.getElementById('cf-livreur').value,
    date:document.getElementById('cf-date').value,
    remise:parseFloat(document.getElementById('cf-remise').value)||0,
    statut:'Brouillon',
    lignes:JSON.parse(JSON.stringify(cmdLignes)),
    photos:[...cmdPhotos],
    montant:parseFloat(document.getElementById('total-net').textContent.replace(',','.'))||0
  };
  if(currentCmdIdx===-1){commandes.unshift(obj);}
  else{commandes[currentCmdIdx]=obj;}
  hideCmdForm();
  renderCommandes(commandes);
  showToast(`✓ Commande ${obj.num} enregistrée`,'#1D9E75');
  // Firebase
  (async()=>{ const fid = await fbSave('commandes', obj, obj._id||null); if(fid&&!obj._id){obj._id=fid;} })();
}

// CLIENT AUTOCOMPLETE dans commande
function cfClientSearch(){
  const q=document.getElementById('cf-client').value.trim().toLowerCase();
  const drop=document.getElementById('cf-client-drop');
  if(q.length<2){drop.style.display='none';return;}
  const matches=clients.filter(c=>c.nom.toLowerCase().includes(q)||c.tel.includes(q)).slice(0,5);
  if(!matches.length){drop.style.display='none';return;}
  drop.innerHTML=matches.map(c=>`
    <div onclick="cfSelectClient('${c.nom}','${c.tel}','${c.quartier||''}${c.ville?', '+c.ville:''}')"
      style="padding:9px 12px;cursor:pointer;font-size:13px;border-bottom:1px solid #f5f5f5;">
      <div style="font-weight:500">${c.nom}</div>
      <div style="font-size:11px;color:#8899aa">${c.tel} · ${c.quartier||''}, ${c.ville||''}</div>
    </div>`).join('');
  drop.style.display='block';
}
function cfSelectClient(nom,tel,adresse){
  document.getElementById('cf-client').value=nom;
  document.getElementById('cf-tel').value=tel;
  document.getElementById('cf-adresse').value=adresse;
  document.getElementById('cf-client-drop').style.display='none';
}
document.addEventListener('click',e=>{
  const d=document.getElementById('cf-client-drop');
  if(d&&!e.target.closest('#cf-client')&&!e.target.closest('#cf-client-drop'))d.style.display='none';
});

// LIGNES - version sans re-render à chaque frappe (fix bug focus)
let ligneCounter=1;

function addLigne(){
  cmdLignes.push({num:cmdLignes.length+1, article:'',larg:'',long:'',surface:'',qte:1,uom:'m²',prixU:0,pu:0,totalHT:0,obs:''});
  renderLignesForm();
  // Focus sur le select article de la nouvelle ligne
  setTimeout(()=>{
    const selects=document.querySelectorAll('#lignes-body .ligne-select-art');
    if(selects.length)selects[selects.length-1].focus();
  },50);
}

function renderLignesForm(){
  const ro=cmdReadOnly;
  document.getElementById('lignes-body').innerHTML=cmdLignes.map((l,i)=>`
    <tr id="ligne-row-${i}">
      <td><span style="padding:4px 8px;font-size:12px;font-weight:600;color:#5a6a7a;">${i+1}</span></td>
      <td style="position:relative;min-width:150px;">
        ${ro
          ? `<span style="font-size:12px;font-weight:500;padding:4px 6px;">${l.article||'—'}</span>`
          : `<input class="ligne-input ligne-art-input" id="art-input-${i}"
              value="${l.article||''}"
              placeholder="Rechercher article..."
              oninput="artInputSearch(${i},this.value)"
              onblur="artInputBlur(${i})"
              autocomplete="off"
              style="width:140px;"/>
             <div class="art-ac-drop" id="art-drop-${i}" style="display:none;position:absolute;top:100%;left:0;min-width:200px;background:white;border:1px solid #dde3ec;border-radius:8px;z-index:100;box-shadow:0 8px 24px rgba(0,0,0,.15);max-height:180px;overflow-y:auto;"></div>`
        }
      </td>
      <td><input class="ligne-input" id="ll-larg-${i}" type="number" value="${l.larg||''}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'larg',this.value)" style="width:58px;" placeholder="0" step="0.01"/></td>
      <td><input class="ligne-input" id="ll-long-${i}" type="number" value="${l.long||''}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'long',this.value)" style="width:58px;" placeholder="0" step="0.01"/></td>
      <td><input class="ligne-input" id="ll-surf-${i}" value="${l.surface||''}" readonly style="width:58px;background:#f8f9fb;text-align:center;" placeholder="auto"/></td>
      <td><input class="ligne-input" id="ll-qte-${i}" type="number" value="${l.qte||1}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'qte',this.value)" style="width:50px;" min="1"/></td>
      <td>
        <select class="ligne-select" ${ro?'disabled':''} onchange="onLigneBlur(${i},'uom',this.value)" style="width:82px;">
          ${['Forfait','m','m²','mL','Place','Pièce'].map(u=>`<option ${l.uom===u?'selected':''}>${u}</option>`).join('')}
        </select>
      </td>
      <td><input class="ligne-input" id="ll-prix-${i}" type="number" value="${l.prixU||0}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'prixU',this.value)" style="width:68px;text-align:right;" step="0.01"/></td>
      <td><input class="ligne-input" id="ll-pu-${i}" type="number" value="${l.pu||0}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'pu',this.value)" style="width:50px;text-align:right;" step="0.01"/></td>
      <td><span class="total-num" id="ll-total-${i}">${(l.totalHT||0).toFixed(2)}</span></td>
      <td><input class="ligne-input" id="ll-obs-${i}" value="${l.obs||''}" ${ro?'readonly':''} onblur="onLigneBlur(${i},'obs',this.value)" style="width:110px;" placeholder="—"/></td>
      <td style="text-align:center">
        ${ro?'<span style="color:#ccd3dc;font-size:11px">—</span>':`<button class="btn-print" style="padding:3px 6px;font-size:11px;" onclick="addLignePhoto(${i})">📷</button>`}
      </td>
      <td>${ro?'':'<button class="btn-del-ligne" onclick="delLigne('+i+')">×</button>'}</td>
    </tr>`).join('');
  recalcTotaux();
}

// AUTOCOMPLETE ARTICLE dans lignes
function artInputSearch(i, q){
  const drop=document.getElementById('art-drop-'+i);
  if(!drop)return;
  if(q.length<1){drop.style.display='none';return;}
  const matches=articles.filter(a=>a.name.toLowerCase().includes(q.toLowerCase())).slice(0,8);
  if(!matches.length){drop.style.display='none';return;}
  drop.innerHTML=matches.map(a=>`
    <div onmousedown="artSelect(${i},'${a.name.replace(/'/g,"\\'")}',${a.tp},'${a.uom}')"
      style="padding:8px 12px;cursor:pointer;font-size:12px;border-bottom:1px solid #f5f5f5;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-weight:500">${a.name}</span>
      <span style="color:#8899aa;font-size:11px">${a.tp} MAD · ${a.uom}</span>
    </div>`).join('');
  drop.style.display='block';
}

function artSelect(i, name, prix, uom){
  cmdLignes[i].article=name;
  cmdLignes[i].prixU=prix;
  cmdLignes[i].uom=uom;
  // Recalc total
  calcLigneTotalHT(i);
  // Fermer dropdown et mettre à jour visuellement sans re-render
  const input=document.getElementById('art-input-'+i);
  if(input)input.value=name;
  const drop=document.getElementById('art-drop-'+i);
  if(drop)drop.style.display='none';
  const prixEl=document.getElementById('ll-prix-'+i);
  if(prixEl)prixEl.value=prix;
}

function artInputBlur(i){
  // Délai pour laisser mousedown se déclencher avant blur
  setTimeout(()=>{
    const drop=document.getElementById('art-drop-'+i);
    if(drop)drop.style.display='none';
    // Sauvegarder la valeur tapée si pas sélectionné dans la liste
    const input=document.getElementById('art-input-'+i);
    if(input&&input.value!==cmdLignes[i].article){
      cmdLignes[i].article=input.value;
    }
  },200);
}

function onLigneBlur(i, field, val){
  const old=cmdLignes[i][field];
  const newVal=field==='obs'||field==='uom'?val:(parseFloat(val)||0);
  if(old==newVal)return; // Rien changé → pas de re-render
  cmdLignes[i][field]=newVal;
  if(field==='larg'||field==='long'){
    const larg=parseFloat(cmdLignes[i].larg)||0;
    const lon=parseFloat(cmdLignes[i].long)||0;
    const surf=larg>0&&lon>0?(larg*lon):'';
    cmdLignes[i].surface=surf;
    const surfEl=document.getElementById('ll-surf-'+i);
    if(surfEl)surfEl.value=surf?parseFloat(surf).toFixed(2):'';
  }
  calcLigneTotalHT(i);
}

function calcLigneTotalHT(i){
  const l=cmdLignes[i];
  const qte=parseFloat(l.qte)||1;
  const prix=parseFloat(l.prixU)||0;
  const surf=parseFloat(l.surface)||0;
  l.totalHT=l.uom==='m²'&&surf>0?prix*surf*qte:prix*qte;
  const totalEl=document.getElementById('ll-total-'+i);
  if(totalEl)totalEl.textContent=l.totalHT.toFixed(2);
  recalcTotaux();
}

function delLigne(i){
  cmdLignes.splice(i,1);
  // Renuméroter
  cmdLignes.forEach((l,idx)=>l.num=idx+1);
  renderLignesForm();
}

function addLignePhoto(i){
  showToast('📷 Fonctionnalité photo disponible sur Firebase','#1a5fa8');
}

function recalcTotaux(){
  const totalHT=cmdLignes.reduce((s,l)=>s+(l.totalHT||0),0);
  const remise=parseFloat(document.getElementById('cf-remise')?.value)||0;
  const net=totalHT-remise;
  const htEl=document.getElementById('total-ht');
  const netEl=document.getElementById('total-net');
  if(htEl)htEl.textContent=totalHT.toFixed(2).replace('.',',');
  if(netEl)netEl.textContent=Math.max(0,net).toFixed(2).replace('.',',');
}

// BARRE STATUT CLIQUABLE
function statutBarUpdate(statut){
  const steps=['Brouillon','En traitement','Prêt à livrer','Payé'];
  const ids=['ss-brouillon','ss-traitement','ss-pret','ss-paye'];
  const idx=steps.indexOf(statut);
  ids.forEach((id,i)=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.classList.remove('active','done');
    if(i===idx)el.classList.add('active');
    else if(i<idx)el.classList.add('done');
    el.onclick=()=>{
      if(cmdReadOnly)return;
      changeCmdStatut(steps[i]);
    };
    el.style.cursor=cmdReadOnly?'default':'pointer';
  });
  // Afficher champ date paiement si statut = Payé
  const rowPaiement=document.getElementById('row-date-paiement');
  const cfDatePaiement=document.getElementById('cf-date-paiement');
  if(rowPaiement){
    rowPaiement.style.display=statut==='Payé'?'flex':'none';
    if(statut==='Payé'&&cfDatePaiement&&!cfDatePaiement.value){
      cfDatePaiement.value=new Date().toISOString().split('T')[0];
    }
    if(cfDatePaiement)cfDatePaiement.readOnly=cmdReadOnly;
  }
}

function changeCmdStatut(newStatut){
  if(currentCmdIdx>=0)commandes[currentCmdIdx].statut=newStatut;
  statutBarUpdate(newStatut);
  showToast('✓ Statut → '+newStatut,'#1a5fa8');
}

// IMPRIMER BC — layout exact comme le PDF original
function imprimerBC(){
  const num=document.getElementById('cf-num').value;
  const client=document.getElementById('cf-client').value;
  const tel=document.getElementById('cf-tel').value;
  const date=document.getElementById('cf-date').value;
  const remise=parseFloat(document.getElementById('cf-remise').value)||0;
  const totalHT=cmdLignes.reduce((s,l)=>s+(l.totalHT||0),0);
  const net=Math.max(0,totalHT-remise);

  // Format date DD/MM/YYYY
  let dateStr=date;
  if(date&&date.includes('-')){
    const [y,m,d]=date.split('-');
    dateStr=`${d}/${m}/${y}`;
  }

  const lignesRows=cmdLignes.length>0?cmdLignes.map((l,i)=>`
    <tr>
      <td style="text-align:center">${i+1}</td>
      <td style="font-weight:bold;text-align:center">${l.article||'—'}</td>
      <td style="text-align:center">${parseFloat(l.larg||0).toFixed(2)}</td>
      <td style="text-align:center">${parseFloat(l.long||0).toFixed(2)}</td>
      <td style="text-align:center">${parseFloat(l.surface||0).toFixed(2)}</td>
      <td style="text-align:center">${parseFloat(l.prixU||0).toFixed(2)}</td>
      <td style="text-align:center">${l.qte||1}</td>
      <td style="text-align:center">${parseFloat(l.pu||0).toFixed(2)}</td>
      <td style="text-align:center">${parseFloat(l.totalHT||0).toFixed(2)}</td>
      <td style="text-align:center">${l.obs||''}</td>
    </tr>`).join('')
    :`<tr><td colspan="10" style="text-align:center;color:#aaa;padding:12px;font-style:italic;">Aucune ligne</td></tr>`;

  const html=`<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<title>BC - ${num}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:Arial,sans-serif;font-size:11px;color:#000;padding:20px 28px;}
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
  .logo-img{width:220px;}
  .cmd-info{text-align:right;padding-top:10px;}
  .cmd-info .cmd-num{font-size:18px;font-weight:bold;margin-bottom:8px;}
  .cmd-info .cmd-date{font-size:14px;font-weight:bold;}
  .client-box{border:1.5px solid #333;border-radius:6px;padding:10px 16px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;font-size:12px;}
  .client-box .nom{display:flex;gap:20px;}
  .client-box .label{color:#555;}
  .client-box .val{font-size:13px;margin-left:8px;}
  table{width:100%;border-collapse:collapse;margin-bottom:20px;}
  th{border:1px solid #333;padding:7px 8px;text-align:center;font-size:11px;font-weight:bold;background:#fff;}
  td{border:1px solid #333;padding:6px 8px;font-size:11px;}
  .totaux{width:340px;margin-left:auto;margin-bottom:20px;}
  .tot-row{display:flex;justify-content:space-between;padding:7px 12px;font-size:12px;border-bottom:1px solid #555;}
  .tot-row.net{font-weight:bold;font-size:14px;border-bottom:2px solid #000;padding-top:10px;}
  .footer{text-align:center;font-size:9px;color:#444;border-top:1px solid #999;padding-top:10px;margin-top:auto;}
  @media print{
    body{padding:10px 20px;}
    button{display:none;}
    @page{size:A5 landscape;margin:10mm;}
  }
</style>
</head><body>

<div class="header">
  <div>
    <img class="logo-img" src="https://www.allotapis.ma/wp-content/uploads/2021/03/logo-allo-tapis.png"
      onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
    <div style="display:none;background:#e8f8f0;border-radius:8px;padding:12px 18px;border:2px solid #1D9E75;">
      <div style="font-size:22px;font-weight:bold;color:#d40000;font-family:serif;">Allo <span style="color:#1D9E75">Tapis</span></div>
      <div style="font-size:11px;font-weight:bold;color:#333;margin-top:2px;">Nettoyage Professionnel</div>
      <div style="background:#1D9E75;color:white;font-size:9px;padding:2px 8px;border-radius:3px;margin-top:4px;display:inline-block;">Tapis - Fauteuils - Couettes - Matelas</div>
    </div>
  </div>
  <div class="cmd-info">
    <div class="cmd-num">Commande N° : ${num}</div>
    <div class="cmd-date">Date : ${dateStr}</div>
  </div>
</div>

<div class="client-box">
  <div class="nom">
    <span class="label">Nom :</span>
    <span class="val">${client}</span>
  </div>
  <div>
    <span class="label">Tél :</span>
    <span class="val">${tel||'—'}</span>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width:40px">N°</th>
      <th>Article</th>
      <th style="width:55px">Larg.</th>
      <th style="width:55px">Long.</th>
      <th style="width:55px">m²</th>
      <th style="width:70px">Px/m²</th>
      <th style="width:40px">Qté</th>
      <th style="width:65px">P.U</th>
      <th style="width:70px">P.T</th>
      <th>Observation</th>
    </tr>
  </thead>
  <tbody>${lignesRows}</tbody>
</table>

<div class="totaux">
  <div class="tot-row"><span>Total HT</span><span>${totalHT.toFixed(2)}</span></div>
  <div class="tot-row"><span>Remise</span><span>${remise.toFixed(2)}</span></div>
  <div class="tot-row net"><span>Net à payer HT</span><span>${net.toFixed(2)}</span></div>
</div>

<div class="footer">
  Boulevard ALQODS, Al awama Al gharbia - Tanger - Tél.: 05 39 36 35 05 - 06 60 56 65 00 - Email : allotapimaroc@gmail.com - Site web : www.allotapis.ma
</div>

<script>window.onload=()=>{window.print();}<\/script>
</body></html>`;

  const w=window.open('','_blank','width=900,height=650');
  if(w){w.document.write(html);w.document.close();}
  else{showToast('⚠️ Autorisez les popups pour imprimer','#e53e3e');}
}

// PHOTOS
function renderPhotosForm(){
  const grid=document.getElementById('photos-grid');
  const btn=document.getElementById('btn-add-photo');
  const thumbs=cmdPhotos.map((p,i)=>`
    <div class="photo-thumb">📸
      ${cmdReadOnly?'':'<button class="photo-del" onclick="delPhoto('+i+')">×</button>'}
    </div>`).join('');
  grid.innerHTML=thumbs;
  grid.appendChild(btn);
  btn.style.display=cmdReadOnly?'none':'inline-block';
}

function addPhoto(){cmdPhotos.push('photo');renderPhotosForm();}
function delPhoto(i){cmdPhotos.splice(i,1);renderPhotosForm();}

function showToast(msg,color){
  const t=document.createElement('div');
  t.style.cssText=`position:fixed;top:20px;right:20px;background:${color};color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 16px rgba(0,0,0,.2);`;
  t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),3500);
}

// ===== BONS DE LIVRAISON =====
const blData = [
  {num:'264475',client:'Greenzer',livreur:'Ourouch Houssam',dateCollecte:'14/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Tapis synthétique',larg:2.50,long:3.80,surface:9.50,qte:1,uom:'m²',prixU:22,pu:0,totalHT:209,obs:'beige'}]},
  {num:'264474',client:'Laundry Service Mesnana',livreur:'Ourouch Houssam',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Tapis synthétique',larg:3.00,long:4.00,surface:12.00,qte:1,uom:'m²',prixU:15,pu:0,totalHT:180,obs:'gris'}]},
  {num:'264470',client:'Ouidad aboud',livreur:'Ourouch Houssam',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Rideau',larg:1.5,long:2.8,surface:4.2,qte:2,uom:'m²',prixU:70,pu:0,totalHT:294,obs:'blanc'}]},
  {num:'264469',client:'Homat el warda',livreur:'Koukouss Hafid',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:20,lignes:[{numArt:1,article:'Canapé',larg:0,long:0,surface:0,qte:1,uom:'Pièce',prixU:100,pu:0,totalHT:100,obs:''}]},
  {num:'264467',client:'Touria',livreur:'Koukouss Hafid',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Tapis shaggy',larg:2.0,long:3.0,surface:6.0,qte:1,uom:'m²',prixU:30,pu:0,totalHT:180,obs:'beige'}]},
  {num:'264466',client:'Rachida',livreur:'Koukouss Hafid',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Tapis laine',larg:2.5,long:3.5,surface:8.75,qte:1,uom:'m²',prixU:40,pu:0,totalHT:350,obs:'rouge'}]},
  {num:'264462',client:'Zairi Firdaous',livreur:'Koukouss Hafid',dateCollecte:'13/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Matelas 2P',larg:0,long:0,surface:0,qte:1,uom:'Pièce',prixU:400,pu:0,totalHT:400,obs:''}]},
  {num:'264458',client:'El Ahmar Khalid',livreur:'Lui-même',dateCollecte:'13/04/2026',etat:'Livré & Payé',dateLivraison:'14/04/2026',datePaiement:'14/04/2026',remise:0,lignes:[{numArt:1,article:'Tapis synthétique',larg:2.80,long:4.60,surface:12.88,qte:1,uom:'m²',prixU:20,pu:257.60,totalHT:257.60,obs:'Beige'}]},
  {num:'264457',client:'Sekkouri Ferdaouss',livreur:'Koukouss Hafid',dateCollecte:'11/04/2026',etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[{numArt:1,article:'Couette',larg:0,long:0,surface:0,qte:2,uom:'Pièce',prixU:50,pu:0,totalHT:100,obs:''}]},
  {num:'264452',client:'Assia El Afia',livreur:'Lui-même',dateCollecte:'11/04/2026',etat:'Livré & Payé',dateLivraison:'12/04/2026',datePaiement:'12/04/2026',remise:50,lignes:[{numArt:1,article:'Canapé',larg:0,long:0,surface:0,qte:1,uom:'Pièce',prixU:100,pu:0,totalHT:100,obs:''},{numArt:2,article:'Tapis synthétique',larg:3.0,long:4.0,surface:12.0,qte:1,uom:'m²',prixU:22,pu:0,totalHT:264,obs:'beige'}]},
  {num:'264451',client:'Maroune Hanoun',livreur:'Lui-même',dateCollecte:'11/04/2026',etat:'Livré & Payé',dateLivraison:'13/04/2026',datePaiement:'13/04/2026',remise:0,lignes:[{numArt:1,article:'Fauteuil',larg:0,long:0,surface:0,qte:2,uom:'Pièce',prixU:100,pu:0,totalHT:200,obs:''}]},
  {num:'264443',client:'Saghir Abdellah',livreur:'Lui-même',dateCollecte:'11/04/2026',etat:'Livré & Payé',dateLivraison:'11/04/2026',datePaiement:'11/04/2026',remise:0,lignes:[{numArt:1,article:'Tapis perse',larg:2.0,long:3.0,surface:6.0,qte:1,uom:'m²',prixU:40,pu:0,totalHT:240,obs:''}]},
];

let currentBLIdx = 0;
let blEditMode = false;
let blFiltered = [...blData];

function blEtatBadge(etat){
  const m={
    'Prêt à livrer':'badge-bl-pret',
    'Livré':'badge-bl-livre',
    'Payé':'badge-bl-paye',
    'Livré & Payé':'badge-bl-livrepaye'
  };
  return `<span class="badge ${m[etat]||'badge-brouillon'}">${etat}</span>`;
}

function renderBL(data){
  blFiltered=data;
  document.getElementById('bl-body').innerHTML=data.map((b,i)=>{
    const isBlue=['Prêt à livrer'].includes(b.etat);
    const style=isBlue?'color:#1a5fa8;':'';
    return `<tr onclick="showBLFiche(${blData.indexOf(b)})" style="cursor:pointer;">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell" style="${style}">${b.num}</td>
      <td style="${style}font-weight:500">${b.client}</td>
      <td style="${style}">${b.livreur}</td>
      <td style="${style}">${b.dateCollecte}</td>
      <td>${blEtatBadge(b.etat)}</td>
    </tr>`;
  }).join('');
  document.getElementById('bl-pag').textContent=`1–${data.length} sur ${blData.length}`;
}

function filterBL(q){
  const etat=document.getElementById('bl-filter-etat').value;
  let data=blData;
  if(q)data=data.filter(b=>b.client.toLowerCase().includes(q.toLowerCase())||String(b.num).includes(q));
  if(etat)data=data.filter(b=>b.etat===etat);
  renderBL(data);
}

// FICHE BL
function showBLFiche(i){
  if(i===-1){
    // Nouveau BL vide
    blData.unshift({num:genCmdNum(),client:'',livreur:'',dateCollecte:new Date().toLocaleDateString('fr-FR'),etat:'Prêt à livrer',dateLivraison:'',datePaiement:'',remise:0,lignes:[]});
    i=0;
  }
  currentBLIdx=i; blEditMode=false;
  document.getElementById('bl-list-view').style.display='none';
  document.getElementById('bl-fiche-view').style.display='block';
  fillBLFiche(blData[i]);
  updateBLStatutBar(blData[i].etat);
  updateBLDates(blData[i]);
  updateBLNav();
}

function hideBLFiche(){
  document.getElementById('bl-list-view').style.display='';
  document.getElementById('bl-fiche-view').style.display='none';
  renderBL(blData);
}

function fillBLFiche(b){
  document.getElementById('bl-fiche-bc').textContent=b.num;
  document.getElementById('bf-client').textContent=b.client||'—';
  // Fix : toujours synchroniser le select avec la valeur actuelle avant d'afficher
  const livTxt=document.getElementById('bf-livreur-txt');
  const livSel=document.getElementById('bf-livreur-sel');
  livTxt.textContent=b.livreur||'—';
  livSel.value=b.livreur||'';
  livTxt.style.display=blEditMode?'none':'block';
  livSel.style.display=blEditMode?'block':'none';

  document.getElementById('bf-date-collecte').textContent=b.dateCollecte||'—';
  document.getElementById('bf-cmd-num').textContent=b.num;
  document.getElementById('bf-bl-num').textContent=b.num;
  document.getElementById('bf-etat-badge').innerHTML=blEtatBadge(b.etat);
  document.getElementById('bl-ro-banner').classList.toggle('show',!blEditMode);
  document.getElementById('bl-btn-modifier').textContent=blEditMode?'Enregistrer':'Modifier';
  renderBLLignes(b.lignes||[]);
  const totalHT=(b.lignes||[]).reduce((s,l)=>s+(l.totalHT||0),0);
  const remise=b.remise||0;
  document.getElementById('bl-total-ht').textContent=totalHT.toFixed(2).replace('.',',');
  document.getElementById('bl-remise').textContent=remise.toFixed(2).replace('.',',');
  document.getElementById('bl-net').textContent=Math.max(0,totalHT-remise).toFixed(2).replace('.',',');
  document.querySelectorAll('.bl-step').forEach(el=>{el.style.cursor=blEditMode?'pointer':'default';});
}

function renderBLLignes(lignes){
  document.getElementById('bl-lignes-body').innerHTML=lignes.length?lignes.map(l=>`
    <tr>
      <td style="text-align:center;font-weight:600;color:#1a5fa8">${l.numArt}</td>
      <td style="font-weight:500;color:#1a5fa8">${l.article}</td>
      <td style="text-align:center;color:#1a5fa8">${l.larg>0?l.larg.toFixed(2):'0,00'}</td>
      <td style="text-align:center;color:#1a5fa8">${l.long>0?l.long.toFixed(2):'0,00'}</td>
      <td style="text-align:center;color:#1a5fa8">${l.surface>0?l.surface.toFixed(2):'0,00'}</td>
      <td style="text-align:center;color:#1a5fa8">${l.qte}</td>
      <td style="color:#1a5fa8">${l.uom}</td>
      <td style="text-align:right;color:#1a5fa8">${(l.prixU||0).toFixed(2)}</td>
      <td style="text-align:right;color:#1a5fa8">${(l.pu||0).toFixed(2)}</td>
      <td style="text-align:right;font-weight:600;color:#1a5fa8">${(l.totalHT||0).toFixed(2)}</td>
      <td style="color:#1a5fa8">${l.obs||''}</td>
      <td style="text-align:center;color:#ccd3dc;font-size:11px">—</td>
    </tr>`).join('')
    :`<tr><td colspan="12" style="text-align:center;padding:20px;color:#ccd3dc;font-style:italic;">Aucune ligne</td></tr>`;
}

function toggleBLEdit(){
  if(blEditMode){
    // Sauvegarder livreur
    const sel=document.getElementById('bf-livreur-sel');
    blData[currentBLIdx].livreur=sel.value;
    blEditMode=false;
    showToast('✓ Bon de livraison enregistré','#1D9E75');
  } else {
    blEditMode=true;
  }
  fillBLFiche(blData[currentBLIdx]);
  updateBLStatutBar(blData[currentBLIdx].etat);
}

// BARRE STATUT + DATES DYNAMIQUES
function updateBLStatutBar(etat){
  const steps=['Prêt à livrer','Livré','Payé','Livré & Payé'];
  const ids=['bls-pret','bls-livre','bls-paye','bls-livpaye'];
  const idx=steps.indexOf(etat);
  ids.forEach((id,i)=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.classList.remove('active','done');
    if(i===idx)el.classList.add('active');
    else if(i<idx)el.classList.add('done');
    el.style.cursor=blEditMode?'pointer':'default';
    el.onclick=blEditMode?()=>changeBLStatut(steps[i]):null;
  });
}

function changeBLStatut(newEtat){
  if(!blEditMode)return;
  blData[currentBLIdx].etat=newEtat;
  // Dates auto si vides
  const today=new Date().toISOString().split('T')[0];
  if((newEtat==='Livré'||newEtat==='Livré & Payé')&&!blData[currentBLIdx].dateLivraison)
    blData[currentBLIdx].dateLivraison=today;
  if((newEtat==='Payé'||newEtat==='Livré & Payé')&&!blData[currentBLIdx].datePaiement)
    blData[currentBLIdx].datePaiement=today;
  updateBLStatutBar(newEtat);
  updateBLDates(blData[currentBLIdx]);
  document.getElementById('bf-etat-badge').innerHTML=blEtatBadge(newEtat);
  showToast('✓ Statut → '+newEtat,'#1a5fa8');
}

function updateBLDates(b){
  const section=document.getElementById('bl-dates-section');
  const grid=document.getElementById('bl-dates-grid');
  const etat=b.etat;

  let fields=[];
  if(etat==='Livré'||etat==='Livré & Payé'){
    fields.push({id:'bd-livraison',label:'📦 Date de livraison',val:b.dateLivraison||'',key:'dateLivraison'});
  }
  if(etat==='Payé'||etat==='Livré & Payé'){
    fields.push({id:'bd-paiement',label:'💰 Date de paiement',val:b.datePaiement||'',key:'datePaiement'});
  }

  if(fields.length===0){section.classList.remove('show');return;}

  section.classList.add('show');
  document.getElementById('bl-dates-label').textContent=
    etat==='Livré & Payé'?'📅 Dates de livraison & paiement':
    etat==='Livré'?'📅 Date de livraison':'💰 Date de paiement';

  grid.innerHTML=fields.map(f=>`
    <div class="bl-date-field">
      <label class="bl-date-label">${f.label}</label>
      <input class="bl-date-input" id="${f.id}" type="date" value="${f.val}"
        ${blEditMode?'':'readonly style="background:#f8f9fb;border-color:#d1fae5;"'}
        onchange="blData[${currentBLIdx}].${f.key}=this.value"/>
    </div>`).join('');
}

function blGoToCommande(){
  const num=document.getElementById('bf-cmd-num').textContent;
  hideBLFiche();
  goPage('commandes');
  setTimeout(()=>{
    const idx=commandes.findIndex(c=>String(c.num)===String(num));
    if(idx>=0)showCmdForm(idx);
  },100);
}

// NAVIGATION
function updateBLNav(){
  document.getElementById('bl-nav-pag').textContent=`${currentBLIdx+1} / ${blData.length}`;
}
function blNavPrev(){if(currentBLIdx>0){currentBLIdx--;blEditMode=false;fillBLFiche(blData[currentBLIdx]);updateBLStatutBar(blData[currentBLIdx].etat);updateBLDates(blData[currentBLIdx]);updateBLNav();}}
function blNavNext(){if(currentBLIdx<blData.length-1){currentBLIdx++;blEditMode=false;fillBLFiche(blData[currentBLIdx]);updateBLStatutBar(blData[currentBLIdx].etat);updateBLDates(blData[currentBLIdx]);updateBLNav();}}

// IMPRIMER BL — layout exact comme le PDF original
function imprimerBL(){
  const b=blData[currentBLIdx];
  const totalHT=(b.lignes||[]).reduce((s,l)=>s+(l.totalHT||0),0);
  const remise=b.remise||0;
  const net=Math.max(0,totalHT-remise);

  // Formatter date YYYY-MM-DD → DD/MM/YYYY
  function fmtDate(d){
    if(!d)return '—';
    if(d.includes('-')){const[y,m,dd]=d.split('-');return `${dd}/${m}/${y}`;}
    return d;
  }

  const lignesRows=(b.lignes||[]).map((l,i)=>`
    <tr>
      <td style="text-align:center">${l.numArt}</td>
      <td style="font-weight:bold;text-align:center">${l.article}</td>
      <td style="text-align:center">${l.larg>0?l.larg.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${l.long>0?l.long.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${l.surface>0?l.surface.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${(l.prixU||0).toFixed(2)}</td>
      <td style="text-align:center">${l.qte}</td>
      <td style="text-align:center">${(l.pu||0).toFixed(2)}</td>
      <td style="text-align:center">${(l.totalHT||0).toFixed(2)}</td>
      <td>${l.obs||''}</td>
    </tr>`).join('');

  const html=`<!DOCTYPE html>
<html><head><meta charset="UTF-8"/><title>BL-${b.num}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:Arial,sans-serif;font-size:11px;color:#000;padding:20px 28px;}
  .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
  .logo-img{width:220px;}
  .cmd-info{text-align:right;padding-top:10px;}
  .cmd-info div{font-size:14px;font-weight:bold;margin-bottom:8px;}
  .client-box{border:1.5px solid #333;border-radius:6px;padding:10px 16px;margin-bottom:16px;display:flex;justify-content:space-between;align-items:center;font-size:12px;}
  table{width:100%;border-collapse:collapse;margin-bottom:20px;}
  th{border:1px solid #333;padding:7px 8px;text-align:center;font-size:11px;font-weight:bold;}
  td{border:1px solid #333;padding:6px 8px;font-size:11px;}
  .net-row{display:flex;justify-content:space-between;width:340px;margin-left:auto;padding:10px 12px;font-size:14px;font-weight:bold;border-bottom:2px solid #000;margin-bottom:20px;}
  .footer{text-align:center;font-size:9px;color:#444;border-top:1px solid #999;padding-top:10px;}
  @media print{@page{size:A5 landscape;margin:8mm;}}
</style>
</head><body>

<div class="header">
  <div>
    <img class="logo-img" src="https://www.allotapis.ma/wp-content/uploads/2021/03/logo-allo-tapis.png"
      onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
    <div style="display:none;background:#e8f8f0;border-radius:8px;padding:12px 18px;border:2px solid #1D9E75;">
      <div style="font-size:22px;font-weight:bold;color:#d40000;font-family:serif;">Allo <span style="color:#1D9E75">Tapis</span></div>
      <div style="font-size:11px;font-weight:bold;margin-top:2px;">Nettoyage Professionnel</div>
      <div style="background:#1D9E75;color:white;font-size:9px;padding:2px 8px;border-radius:3px;margin-top:4px;display:inline-block;">Tapis - Fauteuils - Couettes - Matelas</div>
    </div>
  </div>
  <div class="cmd-info">
    <div>Bon de Livraison : ${b.num}</div>
    <div>Date collecte : ${fmtDate(b.dateCollecte)}</div>
    ${b.dateLivraison?`<div>Date livraison : ${fmtDate(b.dateLivraison)}</div>`:''}
  </div>
</div>

<div class="client-box">
  <div class="client-top">
    <div><span style="color:#555">Nom :</span>&nbsp;&nbsp;&nbsp;<strong>${b.client||'—'}</strong></div>
    <div><span style="color:#555">Tél :</span>&nbsp;<strong>${b.tel||''}</strong></div>
  </div>
  ${(()=>{const cl=clients.find(c=>c.nom.toLowerCase()===(b.client||'').toLowerCase());return cl?`<div style="font-size:11px;color:#555;margin-top:4px;">📍 ${cl.quartier||''}, ${cl.ville||'Tanger'}</div>`:''})()}
</div>

<table>
  <thead>
    <tr>
      <th style="width:40px">N°</th>
      <th>Article</th>
      <th style="width:55px">Larg.</th>
      <th style="width:55px">Long.</th>
      <th style="width:55px">m²</th>
      <th style="width:65px">Px/m²</th>
      <th style="width:40px">Qté</th>
      <th style="width:65px">P.U</th>
      <th style="width:70px">P.T</th>
      <th>Observation</th>
    </tr>
  </thead>
  <tbody>${lignesRows||'<tr><td colspan="10" style="text-align:center;color:#aaa;padding:12px;font-style:italic;">Aucune ligne</td></tr>'}</tbody>
</table>

<div class="net-row">
  <span>Net à payer HT</span>
  <span>${net.toFixed(2)}</span>
</div>

<div class="footer">
  Boulevard ALQODS, Al awama Al gharbia - Tanger - Tél.: 05 39 36 35 05 - 06 60 56 65 00 - Email : allotapimaroc@gmail.com - Site web : www.allotapis.ma
</div>

<script>window.onload=()=>{window.print();}<\/script>
</body></html>`;

  const w=window.open('','_blank','width=900,height=650');
  if(w){w.document.write(html);w.document.close();}
  else showToast('⚠️ Autorisez les popups pour imprimer','#e53e3e');
}

// ===== LIGNES DE COMMANDE =====
// Générer les lignes depuis les commandes + lignes statiques
const lignesData = [
  {cmdNum:'264504',numArt:1,article:'Tapis synthétique',larg:3.48,long:3.48,surface:12.11,qte:1,qteTraitee:0,uom:'m²',obs:'rouge beige',empl:'',etat:'Brouillon'},
  {cmdNum:'264503',numArt:1,article:'Divers',larg:0,long:0,surface:0,qte:1,qteTraitee:0,uom:'Pièce',obs:'',empl:'',etat:'Brouillon'},
  {cmdNum:'264495',numArt:1,article:'Tapis synthétique',larg:2.95,long:3.50,surface:10.32,qte:1,qteTraitee:0,uom:'m²',obs:'beige marron',empl:'',etat:'Brouillon'},
  {cmdNum:'264491',numArt:2,article:'Rideau',larg:0,long:0,surface:0,qte:2,qteTraitee:0,uom:'Forfait',obs:'',empl:'',etat:'Brouillon'},
  {cmdNum:'264491',numArt:1,article:'Tapis synthétique',larg:3.60,long:4.00,surface:14.40,qte:1,qteTraitee:0,uom:'m²',obs:'beige',empl:'',etat:'Brouillon'},
  {cmdNum:'264488',numArt:3,article:'Couette',larg:0,long:0,surface:0,qte:1,qteTraitee:1,uom:'Pièce',obs:'',empl:'B-02',etat:'En traitement'},
  {cmdNum:'264488',numArt:2,article:'Couverture',larg:0,long:0,surface:0,qte:5,qteTraitee:3,uom:'Pièce',obs:'',empl:'B-01',etat:'En traitement'},
  {cmdNum:'264488',numArt:1,article:'Tapis synthétique',larg:1.40,long:2.00,surface:2.80,qte:1,qteTraitee:1,uom:'m²',obs:'bleu',empl:'A-04',etat:'Prêt à livrer'},
  {cmdNum:'264487',numArt:2,article:'Tapis synthétique',larg:1.60,long:2.30,surface:3.68,qte:1,qteTraitee:0,uom:'m²',obs:'gris',empl:'',etat:'Brouillon'},
  {cmdNum:'264487',numArt:1,article:'Tapis shaggy',larg:1.65,long:2.30,surface:3.79,qte:1,qteTraitee:0,uom:'m²',obs:'beige',empl:'',etat:'Brouillon'},
  {cmdNum:'264486',numArt:1,article:'Tapis synthétique',larg:1.60,long:2.30,surface:3.68,qte:1,qteTraitee:0,uom:'m²',obs:'blanc',empl:'',etat:'Brouillon'},
  {cmdNum:'264485',numArt:1,article:'Tapis synthétique',larg:1.70,long:2.30,surface:3.91,qte:1,qteTraitee:0,uom:'m²',obs:'rouge beige',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:6,article:'Tapis synthétique',larg:2.96,long:3.50,surface:10.36,qte:1,qteTraitee:0,uom:'m²',obs:'jaune',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:5,article:'Tapis synthétique',larg:0.75,long:1.95,surface:1.46,qte:1,qteTraitee:0,uom:'m²',obs:'multi-coleur',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:4,article:'Tapis synthétique',larg:0.96,long:2.90,surface:2.78,qte:1,qteTraitee:0,uom:'m²',obs:'beige',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:3,article:'Tapis synthétique',larg:1.20,long:2.30,surface:2.76,qte:1,qteTraitee:0,uom:'m²',obs:'multi-coleur',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:2,article:'Tapis shaggy',larg:1.65,long:3.15,surface:5.20,qte:1,qteTraitee:0,uom:'m²',obs:'marron',empl:'',etat:'Brouillon'},
  {cmdNum:'264484',numArt:1,article:'Tapis synthétique',larg:2.50,long:4.55,surface:11.38,qte:1,qteTraitee:0,uom:'m²',obs:'doré',empl:'',etat:'Brouillon'},
  {cmdNum:'264483',numArt:1,article:'Tapis synthétique',larg:2.05,long:3.00,surface:6.15,qte:1,qteTraitee:0,uom:'m²',obs:'rouge',empl:'',etat:'Brouillon'},
  {cmdNum:'264482',numArt:1,article:'Tapis synthétique',larg:2.00,long:3.10,surface:6.20,qte:1,qteTraitee:0,uom:'m²',obs:'blanc',empl:'',etat:'Brouillon'},
];

let currentLigIdx = 0;
let ligEditMode = false;
let ligFilteredData = [...lignesData];

function ligEtatBadge(etat){
  const m={'Brouillon':'lig-etat-brouillon','En traitement':'lig-etat-traitement','Prêt à livrer':'lig-etat-pret'};
  return `<span class="lig-etat-badge ${m[etat]||'lig-etat-brouillon'}">${etat}</span>`;
}

function renderLignes(data){
  ligFilteredData=data;
  document.getElementById('lig-body').innerHTML=data.map((l,i)=>`
    <tr onclick="showLigFiche(${lignesData.indexOf(l)})" style="cursor:pointer">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">${l.cmdNum}</td>
      <td style="color:#5a6a7a;font-weight:600">${l.numArt}</td>
      <td style="font-weight:500">${l.article}</td>
      <td style="color:#5a6a7a">${l.larg>0?l.larg.toFixed(2):'0,00'}</td>
      <td style="color:#5a6a7a">${l.long>0?l.long.toFixed(2):'0,00'}</td>
      <td style="color:#5a6a7a">${l.surface>0?l.surface.toFixed(2):'0,00'}</td>
      <td style="color:#5a6a7a">${l.qte}</td>
      <td style="color:#5a6a7a">${l.uom}</td>
      <td style="color:#8899aa;font-style:${l.obs?'normal':'italic'}">${l.obs||'—'}</td>
      <td>${ligEtatBadge(l.etat)}</td>
    </tr>`).join('');
  document.getElementById('lig-pag').textContent=`1–${data.length} sur ${lignesData.length}`;
}

function filterLignes(q){
  const data=q?lignesData.filter(l=>
    l.cmdNum.includes(q)||
    l.article.toLowerCase().includes(q.toLowerCase())||
    (l.obs||'').toLowerCase().includes(q.toLowerCase())||
    (l.empl||'').toLowerCase().includes(q.toLowerCase())
  ):lignesData;
  renderLignes(data);
}

// FICHE LIGNE
function showLigFiche(i){
  currentLigIdx=i;ligEditMode=false;
  document.getElementById('lig-list-view').style.display='none';
  document.getElementById('lig-fiche-view').style.display='block';
  fillLigFiche(lignesData[i]);
  updateLigStatutBar(lignesData[i].etat);
  updateLigNav();
}

function hideLigFiche(){
  document.getElementById('lig-list-view').style.display='';
  document.getElementById('lig-fiche-view').style.display='none';
  renderLignes(lignesData);
}

function fillLigFiche(l){
  document.getElementById('lig-fiche-bc').textContent=l.numArt;
  document.getElementById('lf-commande').textContent=l.cmdNum;
  document.getElementById('lf-num-art').textContent=l.numArt;
  document.getElementById('lf-article').textContent=l.article;
  document.getElementById('lf-larg').textContent=l.larg>0?l.larg.toFixed(2):'0,00';
  document.getElementById('lf-long').textContent=l.long>0?l.long.toFixed(2):'0,00';
  document.getElementById('lf-surf').textContent=l.surface>0?l.surface.toFixed(2):'0,00';
  document.getElementById('lf-qte').textContent=l.qte;
  document.getElementById('lf-qte-traitee').textContent=l.qteTraitee||0;
  document.getElementById('lf-uom').textContent=l.uom;
  document.getElementById('lf-obs').textContent=l.obs||'—';
  document.getElementById('lf-etat').innerHTML=ligEtatBadge(l.etat);
  const emplInput=document.getElementById('lf-emplacement');
  emplInput.value=l.empl||'';
  emplInput.readOnly=!ligEditMode;
  document.getElementById('lig-ro-banner').classList.toggle('show',!ligEditMode);
  document.getElementById('lig-empl-hint').style.display=ligEditMode?'block':'none';
  document.getElementById('lig-btn-modifier').textContent=ligEditMode?'Enregistrer':'Modifier';
}

function toggleLigEdit(){
  if(ligEditMode){
    // Enregistrer
    saveEmplacement();
    ligEditMode=false;
  } else {
    ligEditMode=true;
  }
  fillLigFiche(lignesData[currentLigIdx]);
  // Focus sur emplacement si mode édition
  if(ligEditMode){
    setTimeout(()=>document.getElementById('lf-emplacement').focus(),50);
  }
}

function saveEmplacement(){
  const val=document.getElementById('lf-emplacement').value.trim();
  const old=lignesData[currentLigIdx].empl;
  lignesData[currentLigIdx].empl=val;
  // Si emplacement saisi et qte traitée = qte totale → passer en Prêt à livrer
  const l=lignesData[currentLigIdx];
  if(val && l.qteTraitee>=l.qte && l.etat!=='Prêt à livrer'){
    lignesData[currentLigIdx].etat='Prêt à livrer';
    updateLigStatutBar('Prêt à livrer');
    document.getElementById('lf-etat').innerHTML=ligEtatBadge('Prêt à livrer');
  }
  if(val!==old){
    const input=document.getElementById('lf-emplacement');
    input.style.animation='none';
    setTimeout(()=>{input.style.animation='empl-flash .6s ease';},10);
    showToast('✓ Emplacement enregistré : '+val,'#1D9E75');
  }
}

function goToCommande(){
  const num=document.getElementById('lf-commande').textContent;
  hideLigFiche();
  goPage('commandes');
  // Ouvrir la commande correspondante
  setTimeout(()=>{
    const idx=commandes.findIndex(c=>String(c.num)===String(num));
    if(idx>=0)showCmdForm(idx);
  },100);
}

// BOUTONS +1 / -1 / Tous
function ligQteAction(action){
  const l=lignesData[currentLigIdx];
  if(action==='+1') l.qteTraitee=Math.min(l.qte,(l.qteTraitee||0)+1);
  else if(action==='-1') l.qteTraitee=Math.max(0,(l.qteTraitee||0)-1);
  else if(action==='tous') l.qteTraitee=l.qte;

  // Mise à jour état
  if(l.qteTraitee===0) l.etat='Brouillon';
  else if(l.qteTraitee<l.qte) l.etat='En traitement';
  else if(l.qteTraitee>=l.qte){
    l.etat=l.empl?'Prêt à livrer':'En traitement';
  }

  document.getElementById('lf-qte-traitee').textContent=l.qteTraitee;
  document.getElementById('lf-etat').innerHTML=ligEtatBadge(l.etat);
  updateLigStatutBar(l.etat);

  // Flash animation sur qte traitée
  const el=document.getElementById('lf-qte-traitee');
  el.style.color=action==='-1'?'#DC2626':'#059669';
  setTimeout(()=>el.style.color='#1a2332',600);

  showToast(
    action==='+1'?`+1 traité (${l.qteTraitee}/${l.qte})`:
    action==='-1'?`-1 traité (${l.qteTraitee}/${l.qte})`:
    `Tous traités (${l.qte}/${l.qte})`,
    action==='-1'?'#e53e3e':'#1D9E75'
  );
}

// BARRE STATUT LIGNE
function updateLigStatutBar(etat){
  const steps=['Brouillon','En traitement','Prêt à livrer'];
  const ids=['ls-brouillon','ls-traitement','ls-pret'];
  const idx=steps.indexOf(etat);
  ids.forEach((id,i)=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.classList.remove('active','done');
    if(i===idx)el.classList.add('active');
    else if(i<idx)el.classList.add('done');
  });
}

// NAVIGATION ◄ ►
function updateLigNav(){
  document.getElementById('lig-nav-pag').textContent=`${currentLigIdx+1} / ${lignesData.length}`;
}

function ligNavPrev(){
  if(currentLigIdx>0){
    currentLigIdx--;
    ligEditMode=false;
    fillLigFiche(lignesData[currentLigIdx]);
    updateLigStatutBar(lignesData[currentLigIdx].etat);
    updateLigNav();
  }
}

function ligNavNext(){
  if(currentLigIdx<lignesData.length-1){
    currentLigIdx++;
    ligEditMode=false;
    fillLigFiche(lignesData[currentLigIdx]);
    updateLigStatutBar(lignesData[currentLigIdx].etat);
    updateLigNav();
  }
}

// ===== CHARGEMENTS =====
const chargementsData = [
  {date:'16/04/2026',ville:'Tanger',livreur:'Ourouch Houssam',vehicule:'DFSK',montant:2358.78,libelle:'Chargement du 16/04/2026',
    bls:[
      {num:'264099',client:'Amrani Mustapha',quartier:'Qasr Baladi',montant:560.87,dateCollecte:'23/02/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:2.80,long:3.80,surface:10.64,qte:1,empl:'A-01',obs:'beige'},{numArt:2,article:'Tapis shaggy',larg:1.60,long:2.30,surface:3.68,qte:1,empl:'A-02',obs:'gris'},{numArt:3,article:'Couette',larg:0,long:0,surface:0,qte:1,empl:'B-01',obs:''}]},
      {num:'264298',client:'zeyneb',quartier:'N/A',montant:557.00,dateCollecte:'30/03/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:3.00,long:4.00,surface:12.00,qte:1,empl:'A-03',obs:'rouge'},{numArt:2,article:'Tapis laine',larg:2.50,long:3.50,surface:8.75,qte:1,empl:'A-04',obs:'beige'},{numArt:3,article:'Fauteuil',larg:0,long:0,surface:0,qte:1,empl:'B-02',obs:''}]},
      {num:'264423',client:'Mohamed Yahya',quartier:'El Mssala',montant:222.60,dateCollecte:'08/04/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:2.95,long:3.50,surface:10.32,qte:1,empl:'A-05',obs:'blanc'}]},
      {num:'264442',client:'Pressing Roudaina',quartier:'Dradeb',montant:227.60,dateCollecte:'10/04/2026',articles:[{numArt:1,article:'Rideau',larg:1.5,long:2.8,surface:4.2,qte:2,empl:'C-01',obs:''},{numArt:2,article:'Couette',larg:0,long:0,surface:0,qte:1,empl:'B-03',obs:''},{numArt:3,article:'Canapé',larg:0,long:0,surface:0,qte:1,empl:'B-04',obs:''},{numArt:4,article:'Tapis synthétique',larg:1.40,long:2.00,surface:2.80,qte:1,empl:'A-06',obs:'bleu'}]},
      {num:'264453',client:'Bendafi Chaimaa',quartier:'Boubana',montant:217.71,dateCollecte:'11/04/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:3.00,long:3.90,surface:11.70,qte:1,empl:'A-07',obs:'biege'}]},
      {num:'264474',client:'Laundry Service Mesnana',quartier:'Mesnana',montant:91.20,dateCollecte:'13/04/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:1.60,long:2.30,surface:3.68,qte:1,empl:'A-08',obs:'gris'},{numArt:2,article:'Tapis shaggy',larg:1.65,long:2.30,surface:3.79,qte:1,empl:'A-09',obs:'beige'},{numArt:3,article:'Couverture',larg:0,long:0,surface:0,qte:1,empl:'B-05',obs:''}]},
      {num:'264475',client:'Greenzer',quartier:'N/A',montant:481.80,dateCollecte:'14/04/2026',articles:[{numArt:1,article:'Tapis synthétique',larg:2.80,long:3.80,surface:10.64,qte:1,empl:'A-10',obs:'gris noir'},{numArt:2,article:'Tapis synthétique',larg:2.98,long:2.50,surface:7.45,qte:1,empl:'A-11',obs:'rouge'},{numArt:3,article:'Tapis synthétique',larg:1.60,long:2.30,surface:3.68,qte:1,empl:'A-12',obs:'bleu'},{numArt:4,article:'Tapis synthétique',larg:1.30,long:3.10,surface:4.03,qte:1,empl:'A-13',obs:'beige'},{numArt:5,article:'Tapis synthétique',larg:1.40,long:3.20,surface:4.48,qte:1,empl:'A-14',obs:'beige'},{numArt:6,article:'Tapis synthétique',larg:1.15,long:1.60,surface:1.84,qte:1,empl:'A-15',obs:'beige'}]},
    ]},
  {date:'16/04/2026',ville:'Tanger',livreur:'Ourouch Houssam',vehicule:'DFSK',montant:4293.47,libelle:'Chargement du 16/04/2026',bls:[]},
  {date:'15/04/2026',ville:'Tanger',livreur:'Koukouss Hafid',vehicule:'Ford Transit',montant:4316.51,libelle:'Chargement du 15/04/2026',bls:[]},
  {date:'14/04/2026',ville:'Tanger',livreur:'Ourouch Houssam',vehicule:'DFSK',montant:1275.30,libelle:'chargement du 14/04/2026',bls:[]},
  {date:'13/04/2026',ville:'Tanger',livreur:'Koukouss Hafid',vehicule:'Ford Transit',montant:8677.85,libelle:'Chargement du 13/04/2026',bls:[]},
  {date:'11/04/2026',ville:'Tanger',livreur:'Koukouss Hafid',vehicule:'DFSK',montant:679.26,libelle:'chargement du 11/04/2026',bls:[]},
  {date:'09/04/2026',ville:'Tanger',livreur:'Koukouss Hafid',vehicule:'Ford Transit',montant:4477.39,libelle:'Livraison du 09/04/2026',bls:[]},
  {date:'09/04/2026',ville:'Tanger',livreur:'Ourouch Houssam',vehicule:'DFSK',montant:325.02,libelle:'Livraison du 09/04/2026',bls:[]},
  {date:'08/04/2026',ville:'Tanger',livreur:'Ourouch Houssam',vehicule:'DFSK',montant:1083.82,libelle:'Livraison du 08/04/2026',bls:[]},
  {date:'07/04/2026',ville:'Tanger',livreur:'Koukouss Hafid',vehicule:'Ford Transit',montant:3579.24,libelle:'Livraison du 07/04/2026',bls:[]},
];

let currentChargIdx = 0;
let chargEditMode = false;
let chargFiltered = [...chargementsData];

function renderChargements(data){
  chargFiltered = data;
  document.getElementById('charg-body').innerHTML = data.map((c,i)=>`
    <tr onclick="showChargFiche(${chargementsData.indexOf(c)})" style="cursor:pointer;">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td style="font-weight:500">${c.date}</td>
      <td style="color:#8899aa">${c.ville}</td>
      <td>${c.livreur}</td>
      <td style="color:#8899aa">${c.vehicule}</td>
      <td style="text-align:right;font-weight:600;color:#059669">${c.montant.toFixed(2)}</td>
      <td style="color:#8899aa">${c.libelle}</td>
    </tr>`).join('');
  document.getElementById('charg-pag').textContent=`1–${data.length} sur ${chargementsData.length}`;
}

function filterChargements(q){
  const data=q?chargementsData.filter(c=>c.livreur.toLowerCase().includes(q.toLowerCase())||c.date.includes(q)||c.libelle.toLowerCase().includes(q.toLowerCase())):chargementsData;
  renderChargements(data);
}

function showChargFiche(i){
  if(i===-1){
    // Nouveau chargement
    const today=new Date();
    const dateStr=today.toLocaleDateString('fr-FR');
    const dateISO=today.toISOString().split('T')[0];
    chargementsData.unshift({
      date:dateStr,ville:'Tanger',livreur:'',vehicule:'DFSK',
      montant:0,libelle:`Chargement du ${dateStr}`,bls:[],dateISO
    });
    i=0;chargEditMode=true;
  }
  currentChargIdx=i;
  document.getElementById('charg-list-view').style.display='none';
  document.getElementById('charg-fiche-view').style.display='block';
  fillChargFiche(chargementsData[i]);
  updateChargNav();
}

function hideChargFiche(){
  document.getElementById('charg-list-view').style.display='';
  document.getElementById('charg-fiche-view').style.display='none';
  chargEditMode=false;
  renderChargements(chargementsData);
}

function fillChargFiche(c){
  document.getElementById('charg-fiche-bc').textContent=c.date;
  document.getElementById('cf2-libelle').value=c.libelle||'';
  document.getElementById('cf2-vehicule').value=c.vehicule||'DFSK';
  document.getElementById('cf2-livreur').value=c.livreur||'';
  document.getElementById('cf2-date').value=c.dateISO||toISO(c.date);
  document.getElementById('cf2-ville').value=c.ville||'Tanger';
  document.getElementById('charg-ro-banner').classList.toggle('show',!chargEditMode);

  // Buttons
  document.getElementById('charg-btn-modifier').textContent=chargEditMode?'':'Modifier';
  document.getElementById('charg-btn-modifier').style.display=chargEditMode?'none':'inline-block';
  document.getElementById('charg-btn-enreg').style.display=chargEditMode?'inline-block':'none';
  document.getElementById('charg-btn-annuler').style.display=chargEditMode?'inline-block':'none';
  document.getElementById('charg-btn-add-bl').style.display=chargEditMode?'inline-block':'none';

  // Fields readonly
  ['cf2-libelle','cf2-date'].forEach(id=>{document.getElementById(id).readOnly=!chargEditMode;});
  ['cf2-vehicule','cf2-livreur','cf2-ville'].forEach(id=>{document.getElementById(id).disabled=!chargEditMode;});

  renderChargBLs(c.bls||[]);
}

function toISO(dateStr){
  if(!dateStr)return '';
  if(dateStr.includes('-'))return dateStr;
  const[d,m,y]=dateStr.split('/');
  return `${y}-${m}-${d}`;
}

function renderChargBLs(bls){
  const ro=!chargEditMode;
  document.getElementById('charg-bl-body').innerHTML=bls.map((b,i)=>{
    // Chercher infos client
    const clientInfo=clients.find(c=>c.nom.toLowerCase()===b.client.toLowerCase());
    const adresse=clientInfo?`${clientInfo.quartier||''}, ${clientInfo.ville||'Tanger'}`:(b.quartier||'—');
    return `
    <tr class="data-row">
      <td class="link-cell">${b.num}</td>
      <td>
        <span style="font-weight:500;color:#1a5fa8;cursor:pointer;text-decoration:underline;" onclick="showClientInfoPopup('${b.num}','${b.client.replace(/'/g,"\\'")}')">
          ${b.client}
        </span>
      </td>
      <td style="color:#8899aa">${adresse}</td>
      <td style="text-align:right;font-weight:600;color:#059669">${b.montant.toFixed(2)}</td>
      <td style="color:#8899aa">${b.dateCollecte}</td>
      <td style="color:#8899aa">(${b.articles?b.articles.length:0} enregistrements)</td>
      <td>
        <button onclick="imprimerBLFromCharg(${i})" style="padding:3px 8px;border:1px solid #dde3ec;border-radius:5px;background:white;font-size:11px;cursor:pointer;color:#1a5fa8;white-space:nowrap;" title="Imprimer BL">🖨️ BL</button>
      </td>
      <td>${ro?'':'<button class="btn-del-bl" onclick="removeChargBL('+i+')">×</button>'}</td>
    </tr>`;
  }).join('');
  // Total
  const total=bls.reduce((s,b)=>s+b.montant,0);
  document.getElementById('cf2-montant').textContent=total.toFixed(2)+' MAD';
  document.getElementById('charg-total-montant').textContent=total.toFixed(2)+' MAD';
  chargementsData[currentChargIdx].montant=total;
}

// POPUP INFOS CLIENT depuis chargement
function showClientInfoPopup(blNum, clientNom){
  const clientInfo=clients.find(c=>c.nom.toLowerCase()===clientNom.toLowerCase());
  const bl=chargementsData[currentChargIdx].bls.find(b=>b.num===blNum);
  const existing=document.getElementById('client-info-popup');
  if(existing)existing.remove();
  const popup=document.createElement('div');
  popup.id='client-info-popup';
  popup.style.cssText='position:fixed;inset:0;background:rgba(15,20,35,.5);display:flex;align-items:center;justify-content:center;z-index:500;';
  popup.innerHTML=`
    <div style="background:white;border-radius:14px;width:400px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.2);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="font-size:15px;font-weight:700;color:#1a2332;">👤 ${clientNom}</div>
        <button onclick="document.getElementById('client-info-popup').remove()" style="border:none;background:#f0f2f5;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:15px;">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;">
        <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid #f5f6f8;">
          <span style="width:120px;color:#8899aa;">Commande N°</span>
          <span style="font-weight:600;color:#1a5fa8;">${blNum}</span>
        </div>
        <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid #f5f6f8;">
          <span style="width:120px;color:#8899aa;">Téléphone</span>
          <span style="font-weight:500;">${clientInfo?.tel||'—'}</span>
        </div>
        <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid #f5f6f8;">
          <span style="width:120px;color:#8899aa;">Quartier</span>
          <span style="font-weight:500;">${clientInfo?.quartier||bl?.quartier||'—'}</span>
        </div>
        <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid #f5f6f8;">
          <span style="width:120px;color:#8899aa;">Ville</span>
          <span style="font-weight:500;">${clientInfo?.ville||'Tanger'}</span>
        </div>
        <div style="display:flex;gap:12px;padding:7px 0;border-bottom:1px solid #f5f6f8;">
          <span style="width:120px;color:#8899aa;">Type</span>
          <span style="font-weight:500;">${clientInfo?.type||'Particulier'}</span>
        </div>
        <div style="display:flex;gap:12px;padding:7px 0;">
          <span style="width:120px;color:#8899aa;">Montant BL</span>
          <span style="font-weight:700;color:#059669;">${bl?.montant?.toFixed(2)||'—'} MAD</span>
        </div>
      </div>
      <div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end;">
        <button onclick="document.getElementById('client-info-popup').remove()" style="padding:7px 16px;border:1px solid #dde3ec;border-radius:7px;background:white;font-size:13px;cursor:pointer;">Fermer</button>
        <button onclick="document.getElementById('client-info-popup').remove();imprimerBLFromCharg(chargementsData[currentChargIdx].bls.findIndex(b=>b.num==='${blNum}'))" style="padding:7px 16px;background:#1a5fa8;color:white;border:none;border-radius:7px;font-size:13px;cursor:pointer;">🖨️ Imprimer BL</button>
      </div>
    </div>`;
  popup.addEventListener('click',e=>{if(e.target===popup)popup.remove();});
  document.body.appendChild(popup);
}

// IMPRIMER BL DEPUIS CHARGEMENT
function imprimerBLFromCharg(blIdx){
  const c=chargementsData[currentChargIdx];
  const b=c.bls[blIdx];
  if(!b)return;
  const clientInfo=clients.find(cl=>cl.nom.toLowerCase()===b.client.toLowerCase());
  const adresse=clientInfo?`${clientInfo.quartier||''}, ${clientInfo.ville||'Tanger'}`:(b.quartier||'');
  const tel=clientInfo?.tel||'';
  const net=b.montant||0;
  const lignesRows=b.articles?b.articles.map(a=>`
    <tr>
      <td style="text-align:center">${a.numArt}</td>
      <td style="font-weight:bold;text-align:center">${a.article}</td>
      <td style="text-align:center">${a.larg>0?a.larg.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${a.long>0?a.long.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${a.surface>0?a.surface.toFixed(2):'0,00'}</td>
      <td style="text-align:center">${a.larg>0&&a.long>0?(a.larg*a.long>0?(a.larg*a.long).toFixed(2):'0,00'):(a.prixU||0).toFixed(2)}</td>
      <td style="text-align:center">${a.qte||1}</td>
      <td style="text-align:center">${a.pu||a.prixU||0}</td>
      <td style="text-align:center">${(a.totalHT||net).toFixed?.(2)||net}</td>
      <td>${a.obs||''}</td>
    </tr>`).join(''):'<tr><td colspan="10" style="text-align:center;color:#aaa">Aucune ligne</td></tr>';

  function fmtD(d){if(!d)return '—';if(d.includes('-')){const[y,m,dd]=d.split('-');return`${dd}/${m}/${y}`;}return d;}

  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>BL-${b.num}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;font-size:11px;color:#000;padding:20px 28px;}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
.logo-img{width:220px;}
.cmd-info{text-align:right;padding-top:10px;}.cmd-info div{font-size:14px;font-weight:bold;margin-bottom:8px;}
.client-box{border:1.5px solid #333;border-radius:6px;padding:10px 16px;margin-bottom:16px;font-size:12px;}
.client-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;}
.client-adresse{font-size:11px;color:#555;margin-top:4px;}
table{width:100%;border-collapse:collapse;margin-bottom:20px;}
th{border:1px solid #333;padding:7px 8px;text-align:center;font-size:11px;font-weight:bold;}
td{border:1px solid #333;padding:6px 8px;font-size:11px;}
.net-row{display:flex;justify-content:space-between;width:340px;margin-left:auto;padding:10px 12px;font-size:14px;font-weight:bold;border-bottom:2px solid #000;margin-bottom:20px;}
.footer{text-align:center;font-size:9px;color:#444;border-top:1px solid #999;padding-top:10px;}
@media print{@page{size:A5 landscape;margin:8mm;}}
</style></head><body>
<div class="header">
  <div>
    <img class="logo-img" src="https://www.allotapis.ma/wp-content/uploads/2021/03/logo-allo-tapis.png"
      onerror="this.style.display='none';this.nextElementSibling.style.display='block'"/>
    <div style="display:none;background:#e8f8f0;border-radius:8px;padding:12px 18px;border:2px solid #1D9E75;">
      <div style="font-size:22px;font-weight:bold;color:#d40000;font-family:serif;">Allo <span style="color:#1D9E75">Tapis</span></div>
      <div style="font-size:11px;font-weight:bold;margin-top:2px;">Nettoyage Professionnel</div>
      <div style="background:#1D9E75;color:white;font-size:9px;padding:2px 8px;border-radius:3px;margin-top:4px;display:inline-block;">Tapis - Fauteuils - Couettes - Matelas</div>
    </div>
  </div>
  <div class="cmd-info">
    <div>Bon de Livraison : ${b.num}</div>
    <div>Date collecte : ${fmtD(b.dateCollecte)}</div>
    ${c.date?`<div>Date livraison : ${fmtD(c.date)}</div>`:''}
  </div>
</div>
<div class="client-box">
  <div class="client-top">
    <div><span style="color:#555">Nom :</span>&nbsp;&nbsp;&nbsp;<strong>${b.client}</strong></div>
    <div><span style="color:#555">Tél :</span>&nbsp;<strong>${tel}</strong></div>
  </div>
  ${adresse?`<div class="client-adresse">📍 ${adresse}</div>`:''}
</div>
<table>
  <thead><tr>
    <th style="width:40px">N°</th><th>Article</th>
    <th style="width:55px">Larg.</th><th style="width:55px">Long.</th><th style="width:55px">m²</th>
    <th style="width:65px">Px/m²</th><th style="width:40px">Qté</th>
    <th style="width:65px">P.U</th><th style="width:70px">P.T</th><th>Observation</th>
  </tr></thead>
  <tbody>${lignesRows}</tbody>
</table>
<div class="net-row"><span>Net à payer HT</span><span>${net.toFixed(2)}</span></div>
<div class="footer">Boulevard ALQODS, Al awama Al gharbia - Tanger - Tél.: 05 39 36 35 05 - 06 60 56 65 00 - Email : allotapimaroc@gmail.com - Site web : www.allotapis.ma</div>
<script>window.onload=()=>{window.print();}<\/script>
</body></html>`;
  const w=window.open('','_blank','width=900,height=650');
  if(w){w.document.write(html);w.document.close();}
  else showToast('⚠️ Autorisez les popups pour imprimer','#e53e3e');
}

function removeChargBL(i){
  chargementsData[currentChargIdx].bls.splice(i,1);
  renderChargBLs(chargementsData[currentChargIdx].bls);
}

function toggleChargEdit(){
  chargEditMode=true;
  fillChargFiche(chargementsData[currentChargIdx]);
}

function saveChargement(){
  const c=chargementsData[currentChargIdx];
  c.libelle=document.getElementById('cf2-libelle').value;
  c.vehicule=document.getElementById('cf2-vehicule').value;
  c.livreur=document.getElementById('cf2-livreur').value;
  c.ville=document.getElementById('cf2-ville').value;
  const dateVal=document.getElementById('cf2-date').value;
  if(dateVal){c.dateISO=dateVal;const[y,m,d]=dateVal.split('-');c.date=`${d}/${m}/${y}`;}
  chargEditMode=false;
  fillChargFiche(c);
  showToast('✓ Chargement enregistré','#1D9E75');
  (async()=>{ const fid=await fbSave('chargements',c,c._id||null); if(fid&&!c._id)c._id=fid; })();
}

// MODAL AJOUTER BL
let chargModalFiltered=[];

function openChargModal(){
  // Afficher uniquement les BLs "Prêt à livrer" pas encore dans ce chargement
  const existingNums=chargementsData[currentChargIdx].bls.map(b=>b.num);
  chargModalFiltered=blData.filter(b=>b.etat==='Prêt à livrer'&&!existingNums.includes(b.num));
  document.getElementById('charg-modal-search').value='';
  renderChargModal(chargModalFiltered);
  document.getElementById('charg-bl-modal').style.display='flex';
}

function renderChargModal(data){
  document.getElementById('charg-modal-body').innerHTML=data.map(b=>`
    <tr onclick="addBLToCharg('${b.num}')">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">${b.num}</td>
      <td style="font-weight:500;color:#1a5fa8">${b.client}</td>
      <td style="color:#1a5fa8">${b.livreur}</td>
      <td style="color:#1a5fa8">${b.dateCollecte}</td>
      <td><span class="badge badge-bl-pret">Prêt à livrer</span></td>
    </tr>`).join('');
  document.getElementById('charg-modal-pag').textContent=`1–${data.length} sur ${data.length}`;
}

function filterChargModal(q){
  const data=q?chargModalFiltered.filter(b=>b.client.toLowerCase().includes(q.toLowerCase())||String(b.num).includes(q)):chargModalFiltered;
  renderChargModal(data);
}

function addBLToCharg(num){
  const bl=blData.find(b=>b.num===num);
  if(!bl)return;
  // Chercher les lignes correspondantes
  const lignesCorr=lignesData.filter(l=>l.cmdNum===num);
  chargementsData[currentChargIdx].bls.push({
    num:bl.num,client:bl.client,quartier:bl.quartier||'N/A',
    montant:bl.lignes?bl.lignes.reduce((s,l)=>s+(l.totalHT||0),0)-bl.remise:0,
    dateCollecte:bl.dateCollecte,
    articles:bl.lignes?bl.lignes.map((l,i)=>({numArt:i+1,article:l.article,larg:l.larg,long:l.long,surface:l.surface,qte:l.qte,empl:lignesCorr.find(lc=>lc.article===l.article)?.empl||'00',obs:l.obs})):[]
  });
  document.getElementById('charg-bl-modal').style.display='none';
  renderChargBLs(chargementsData[currentChargIdx].bls);
  showToast(`✓ BL ${num} ajouté au chargement`,'#1D9E75');
}

function closeChargModal(e){
  if(!e||e.target===e.currentTarget)document.getElementById('charg-bl-modal').style.display='none';
}

// NAVIGATION
function updateChargNav(){
  document.getElementById('charg-nav-pag').textContent=`${currentChargIdx+1} / ${chargementsData.length}`;
}
function chargNavPrev(){if(currentChargIdx>0){currentChargIdx--;chargEditMode=false;fillChargFiche(chargementsData[currentChargIdx]);updateChargNav();}}
function chargNavNext(){if(currentChargIdx<chargementsData.length-1){currentChargIdx++;chargEditMode=false;fillChargFiche(chargementsData[currentChargIdx]);updateChargNav();}}

// IMPRIMER CHARGEMENT (pour livraison - résumé livreur)
function imprimerChargementLivraison(){
  const c=chargementsData[currentChargIdx];
  const total=c.bls.reduce((s,b)=>s+b.montant,0);
  const lignesRows=c.bls.map(b=>`
    <tr>
      <td style="text-align:center">${b.num}</td>
      <td style="font-weight:bold;text-align:center">${b.client}</td>
      <td style="text-align:right">${b.montant.toFixed(2)}</td>
      <td style="text-align:center">${b.quartier||'—'}</td>
      <td style="text-align:center">${b.dateCollecte}</td>
      <td style="text-align:center">${b.articles?b.articles.length:0}</td>
      <td></td>
    </tr>`).join('');
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Chargement Livraison</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;font-size:11px;padding:20px 28px;}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;}
.logo-img{width:200px;}
.info-box{border:1.5px solid #333;border-radius:6px;padding:12px 16px;margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:12px;}
.info-item{display:flex;gap:6px;align-items:center;}.info-label{color:#555;font-size:11px;}
table{width:100%;border-collapse:collapse;margin-bottom:16px;}
th{border:1px solid #333;padding:6px 8px;text-align:center;font-size:10px;font-weight:bold;}
td{border:1px solid #333;padding:5px 8px;font-size:11px;}
.total-row{display:flex;justify-content:space-between;width:300px;margin-left:auto;padding:8px 12px;font-weight:bold;font-size:14px;border:2px solid #000;border-radius:4px;margin-bottom:16px;}
.footer{text-align:center;font-size:9px;color:#444;border-top:1px solid #999;padding-top:10px;}
@media print{@page{size:A4 portrait;margin:10mm;}}
</style></head><body>
<div class="header">
  <img class="logo-img" src="https://www.allotapis.ma/wp-content/uploads/2021/03/logo-allo-tapis.png" onerror="this.style.display='none'"/>
</div>
<div class="info-box">
  <div class="info-item"><span class="info-label">Date :</span><strong>${c.date}</strong></div>
  <div class="info-item"><span class="info-label">Livreur :</span><strong>${c.livreur}</strong></div>
  <div class="info-item"><span class="info-label">Montant :</span><strong>${total.toFixed(2)}</strong></div>
  <div class="info-item"><span class="info-label">Ville :</span><strong>${c.ville}</strong></div>
  <div class="info-item"><span class="info-label">Véhicule :</span><strong>${c.vehicule}</strong></div>
  <div class="info-item"><span class="info-label">Libellé :</span><strong>${c.libelle}</strong></div>
</div>
<table><thead><tr>
  <th style="width:70px">N°</th><th>Client</th><th style="width:80px">Montant</th>
  <th>Quartier</th><th style="width:90px">Date collecte</th><th style="width:60px">Article(s)</th><th>Observation</th>
</tr></thead><tbody>${lignesRows||'<tr><td colspan="7" style="text-align:center;color:#aaa">Aucun BL</td></tr>'}</tbody></table>
<div class="total-row"><span>Total à encaisser :</span><span>${total.toFixed(2)} MAD</span></div>
<div class="footer">Boulevard ALQODS, Al awama Al gharbia - Tanger - Tél.: 05 39 36 35 05 - 06 60 56 65 00 - Email : allotapimaroc@gmail.com - Site web : www.allotapis.ma</div>
<script>window.onload=()=>window.print();<\/script></body></html>`;
  const w=window.open('','_blank','width=900,height=700');
  if(w){w.document.write(html);w.document.close();}else showToast('⚠️ Autorisez les popups','#e53e3e');
}

// IMPRIMER CHARGEMENT DÉTAIL (pour atelier - avec emplacements par client)
function imprimerChargement(){
  const c=chargementsData[currentChargIdx];
  const clientsRows=c.bls.map(b=>{
    const artRows=b.articles?b.articles.map(a=>`
      <tr>
        <td><input type="checkbox" style="width:12px;height:12px;"/></td>
        <td style="text-align:center;font-weight:bold">${a.numArt}</td>
        <td style="font-weight:bold">${a.article}</td>
        <td style="text-align:center">${a.larg>0?a.larg.toFixed(2):'0,00'}</td>
        <td style="text-align:center">${a.long>0?a.long.toFixed(2):'0,00'}</td>
        <td style="text-align:center">${a.qte}</td>
        <td style="text-align:center;font-weight:bold">${a.empl||'00'}</td>
        <td>${a.obs||''}</td>
      </tr>`).join(''):'<tr><td colspan="8" style="color:#aaa;text-align:center">Aucune ligne</td></tr>';
    return `
      <div style="border:1.5px solid #333;border-radius:6px;margin-bottom:12px;overflow:hidden;">
        <div style="background:#f8f9fb;padding:8px 14px;display:flex;justify-content:space-between;align-items:center;">
          <span style="font-weight:bold;font-size:13px;">${b.num}</span>
          <span style="font-size:13px;font-weight:500">${b.client}</span>
          <span></span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:11px;">
          <thead><tr>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;width:28px;"></th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;text-align:center;font-weight:bold;">N°</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;font-weight:bold;">Article</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;text-align:center;font-weight:bold;">Larg.</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;text-align:center;font-weight:bold;">Long.</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;text-align:center;font-weight:bold;">Qté</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;text-align:center;font-weight:bold;">Emplacement</th>
            <th style="border:none;border-bottom:1px solid #eee;padding:5px 8px;font-weight:bold;">Observation</th>
          </tr></thead>
          <tbody>${artRows}</tbody>
        </table>
      </div>`;
  }).join('');
  const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"/><title>Chargement Détail</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}body{font-family:Arial,sans-serif;font-size:11px;padding:20px 24px;}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;}
.logo-img{width:180px;}
.header-info{text-align:right;}.header-info div{font-size:13px;font-weight:bold;margin-bottom:6px;}
.footer{text-align:center;font-size:9px;color:#444;border-top:1px solid #999;padding-top:10px;margin-top:16px;}
@media print{@page{size:A4 portrait;margin:8mm;}}
</style></head><body>
<div class="header">
  <img class="logo-img" src="https://www.allotapis.ma/wp-content/uploads/2021/03/logo-allo-tapis.png" onerror="this.style.display='none'"/>
  <div class="header-info">
    <div>Date : ${c.date}</div>
    <div>${c.libelle}</div>
  </div>
</div>
${clientsRows||'<p style="text-align:center;color:#aaa">Aucun BL dans ce chargement</p>'}
<div class="footer">Boulevard ALQODS, Al awama Al gharbia - Tanger - Tél.: 05 39 36 35 05 - 06 60 56 65 00 - Email : allotapimaroc@gmail.com - Site web : www.allotapis.ma</div>
<script>window.onload=()=>window.print();<\/script></body></html>`;
  const w=window.open('','_blank','width=900,height=700');
  if(w){w.document.write(html);w.document.close();}else showToast('⚠️ Autorisez les popups','#e53e3e');
}

// ===== TRÉSORERIE =====
const tresoMouvements = [
  {id:'R001',date:'2026-04-14',type:'recette',categorie:'Commande payée',libelle:'Paiement commande Greenzer',ref:'264475',montant:481.80,saisi:'Système',mois:3},
  {id:'R002',date:'2026-04-13',type:'recette',categorie:'Commande payée',libelle:'Paiement commande El Ahmar Khalid',ref:'264458',montant:257.60,saisi:'Système',mois:3},
  {id:'R003',date:'2026-04-12',type:'recette',categorie:'Commande payée',libelle:'Paiement commande Assia El Afia',ref:'264452',montant:314.00,saisi:'Système',mois:3},
  {id:'R004',date:'2026-04-13',type:'recette',categorie:'Commande payée',libelle:'Paiement commande Maroune Hanoun',ref:'264451',montant:200.00,saisi:'Système',mois:3},
  {id:'R005',date:'2026-04-11',type:'recette',categorie:'Commande payée',libelle:'Paiement commande Saghir Abdellah',ref:'264443',montant:240.00,saisi:'Système',mois:3},
  {id:'C001',date:'2026-04-01',type:'charge',categorie:'Loyer',libelle:'Loyer atelier Avril 2026',ref:'Contrat bail',montant:3500.00,saisi:'Administrator',mois:3},
  {id:'C002',date:'2026-04-05',type:'charge',categorie:'Salaires',libelle:'Salaires équipe Avril - Acompte',ref:'Virement 1',montant:9000.00,saisi:'Administrator',mois:3},
  {id:'C003',date:'2026-04-08',type:'charge',categorie:'Carburant',libelle:'Carburant Koukouss Hafid',ref:'Reçu #82',montant:480.00,saisi:'Administrator',mois:3},
  {id:'C004',date:'2026-04-10',type:'charge',categorie:'Entretien',libelle:'Entretien Ford Transit',ref:'Facture Garage Al Majd',montant:750.00,saisi:'Administrator',mois:3},
  {id:'C005',date:'2026-04-12',type:'charge',categorie:'Carburant',libelle:'Carburant Ourouch Houssam',ref:'Reçu #91',montant:380.00,saisi:'Administrator',mois:3},
  {id:'R006',date:'2026-03-28',type:'recette',categorie:'Commande payée',libelle:'Paiement lot Mars semaine 4',ref:'Multi',montant:8400.00,saisi:'Système',mois:2},
  {id:'C006',date:'2026-03-01',type:'charge',categorie:'Loyer',libelle:'Loyer atelier Mars 2026',ref:'Contrat bail',montant:3500.00,saisi:'Administrator',mois:2},
  {id:'C007',date:'2026-03-05',type:'charge',categorie:'Salaires',libelle:'Salaires équipe Mars',ref:'Virement',montant:18000.00,saisi:'Administrator',mois:2},
  {id:'C008',date:'2026-03-15',type:'charge',categorie:'Carburant',libelle:'Carburant mi-mars',ref:'Reçu #71',montant:850.00,saisi:'Administrator',mois:2},
  {id:'C009',date:'2026-03-20',type:'charge',categorie:'Divers',libelle:'Produits nettoyage',ref:'Facture fournisseur',montant:1200.00,saisi:'Administrator',mois:2},
];

let tresoActiveTab='tous';
let tresoPageMonth=3;

function initTresoreriePage(){
  tresoPageMonth=parseInt(document.getElementById('treso-page-month').value);
  renderTresoSummary();
  renderTresoTable();
}

function renderTresoSummary(){
  const m=tresoPageMonth;
  const mouvs=tresoMouvements.filter(mv=>mv.mois===m);
  const recettes=mouvs.filter(mv=>mv.type==='recette');
  const charges=mouvs.filter(mv=>mv.type==='charge');
  const totalRec=recettes.reduce((s,mv)=>s+mv.montant,0);
  const totalChg=charges.reduce((s,mv)=>s+mv.montant,0);
  const solde=totalRec-totalChg;
  const banner=document.getElementById('treso-page-banner');
  banner.className='treso-solde-banner '+(solde>=0?'positif':'negatif');
  document.getElementById('treso-page-solde').textContent=solde.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  document.getElementById('treso-page-solde').style.color=solde>=0?'#059669':'#DC2626';
  document.getElementById('treso-page-rec').textContent=totalRec.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  document.getElementById('treso-page-chg').textContent=totalChg.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  document.getElementById('treso-kpi-nb-cmd').textContent=recettes.length;
  document.getElementById('treso-kpi-nb-charges').textContent=charges.length;
  const maxRec=recettes.length?Math.max(...recettes.map(r=>r.montant)):0;
  const maxChg=charges.length?Math.max(...charges.map(c=>c.montant)):0;
  document.getElementById('treso-kpi-max-rec').textContent=maxRec.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  document.getElementById('treso-kpi-max-chg').textContent=maxChg.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  updateTreso();
}

function catClass(cat){
  const m={'Salaires':'treso-cat-salaire','Carburant':'treso-cat-carburant','Loyer':'treso-cat-loyer','Entretien':'treso-cat-entretien','Commande payée':'treso-cat-commande','Divers':'treso-cat-divers'};
  return m[cat]||'treso-cat-divers';
}

function renderTresoTable(){
  const m=tresoPageMonth;
  const cat=document.getElementById('treso-filter-cat')?.value||'';
  let data=tresoMouvements.filter(mv=>mv.mois===m);
  if(tresoActiveTab==='recettes')data=data.filter(mv=>mv.type==='recette');
  else if(tresoActiveTab==='charges')data=data.filter(mv=>mv.type==='charge');
  if(cat)data=data.filter(mv=>mv.categorie===cat);
  data.sort((a,b)=>b.date.localeCompare(a.date));
  document.getElementById('treso-table-body').innerHTML=data.length?data.map(mv=>`
    <tr>
      <td style="color:#8899aa">${mv.date.split('-').reverse().join('/')}</td>
      <td class="${mv.type==='recette'?'treso-type-recette':'treso-type-charge'}">${mv.type==='recette'?'💚 Recette':'🔴 Charge'}</td>
      <td><span class="treso-cat-badge ${catClass(mv.categorie)}">${mv.categorie}</span></td>
      <td style="font-weight:500">${mv.libelle}</td>
      <td style="color:#8899aa;font-size:12px">${mv.ref||'—'}</td>
      <td style="text-align:right;font-weight:700;${mv.type==='recette'?'color:#059669':'color:#DC2626'}">${mv.type==='recette'?'+':'−'}${mv.montant.toLocaleString('fr-FR',{minimumFractionDigits:2})} MAD</td>
      <td style="color:#8899aa;font-size:12px">${mv.saisi}</td>
      <td>${mv.type==='charge'?`<button onclick="deleteCharge('${mv.id}')" style="border:none;background:none;cursor:pointer;color:#ccd3dc;font-size:16px;width:24px;height:24px;border-radius:4px;" onmouseover="this.style.background='#FEE2E2';this.style.color='#DC2626'" onmouseout="this.style.background='none';this.style.color='#ccd3dc'">×</button>`:''}
      </td>
    </tr>`).join('')
    :`<tr><td colspan="8" style="text-align:center;padding:30px;color:#ccd3dc;font-style:italic;">Aucun mouvement</td></tr>`;
}

function switchTresoTab(tab){
  tresoActiveTab=tab;
  ['tous','recettes','charges'].forEach(t=>{const el=document.getElementById('ttab-'+t);if(el)el.classList.toggle('active',t===tab);});
  renderTresoTable();
}

function openAddCharge(){
  document.getElementById('ac-date').value=new Date().toISOString().split('T')[0];
  document.getElementById('ac-libelle').value='';
  document.getElementById('ac-montant').value='';
  document.getElementById('ac-ref').value='';
  document.getElementById('add-charge-modal').style.display='flex';
}

function closeAddCharge(e){if(e.target===e.currentTarget)document.getElementById('add-charge-modal').style.display='none';}

function saveNewCharge(){
  const date=document.getElementById('ac-date').value;
  const cat=document.getElementById('ac-cat').value;
  const libelle=document.getElementById('ac-libelle').value.trim();
  const montant=parseFloat(document.getElementById('ac-montant').value)||0;
  const ref=document.getElementById('ac-ref').value.trim();
  if(!date||!libelle||!montant){showToast('⚠️ Remplissez tous les champs obligatoires','#e53e3e');return;}
  const moisISO=parseInt(date.split('-')[1])-1;
  const id='C'+String(tresoMouvements.length+1).padStart(3,'0');
  const newCharge={id,date,type:'charge',categorie:cat,libelle,ref,montant,saisi:'Administrator',mois:moisISO};
  tresoMouvements.push(newCharge);
  document.getElementById('add-charge-modal').style.display='none';
  renderTresoSummary();renderTresoTable();
  showToast(`✓ Charge "${libelle}" — ${montant.toFixed(2)} MAD enregistrée`,'#1D9E75');
  (async()=>{ const fid=await fbSave('tresorerie',newCharge,null); if(fid)newCharge._id=fid; })();
}

function deleteCharge(id){
  const idx=tresoMouvements.findIndex(mv=>mv.id===id);
  if(idx>=0&&tresoMouvements[idx].type==='charge'){
    const mv=tresoMouvements[idx];
    if(confirm(`Supprimer "${mv.libelle}" (${mv.montant} MAD) ?`)){
      const fid=mv._id;
      tresoMouvements.splice(idx,1);
      renderTresoSummary();renderTresoTable();
      showToast('✓ Charge supprimée','#1D9E75');
      if(fid)(async()=>await fbDelete('tresorerie',fid))();
    }
  }
}

// Override updateTreso pour utiliser les vrais mouvements
function updateTreso(){
  const m=tresoMonth;
  const mouvs=tresoMouvements.filter(mv=>mv.mois===m);
  const rec=mouvs.filter(mv=>mv.type==='recette').reduce((s,mv)=>s+mv.montant,0);
  const chg=mouvs.filter(mv=>mv.type==='charge').reduce((s,mv)=>s+mv.montant,0);
  const benef=rec-chg;
  const e1=document.getElementById('treso-recette');
  const e2=document.getElementById('treso-charge');
  const e3=document.getElementById('treso-benef');
  if(e1)e1.textContent=rec.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';
  if(e2)e2.textContent=chg.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD ✏️';
  if(e3){e3.textContent=benef.toLocaleString('fr-FR',{minimumFractionDigits:2})+' MAD';e3.style.color=benef>=0?'#1a5fa8':'#DC2626';}
  const ml=document.getElementById('dash-treso-month');
  if(ml)ml.textContent=moisLabels[m]+' 2026';
}

// ===== FIDÉLITÉ =====
const FID_TIERS = {
  bronze:  {name:'Bronze', icon:'🥉', color:'#CD7F32', bg:'#FEF3E8', min:1,    max:500,  remise:'5%',  extra:''},
  silver:  {name:'Argent', icon:'🥈', color:'#9CA3AF', bg:'#F3F4F6', min:501,  max:1500, remise:'10%', extra:'Collecte prioritaire'},
  gold:    {name:'Or',     icon:'🥇', color:'#F59E0B', bg:'#FEF3C7', min:1501, max:5000, remise:'15%', extra:'1 collecte offerte/mois'},
  platine: {name:'Platine',icon:'💎', color:'#8B5CF6', bg:'#EDE9FE', min:5001, max:99999,remise:'20%', extra:'Service VIP + priorité absolue'},
};

const fidClients = [
  {id:1,nom:'Idrissi Mohamed Amine',tel:'0661234567',pts:5820,ca:8420,cmds:24,depuis:'2020'},
  {id:2,nom:'Mme Zerouali',         tel:'0662345678',pts:5340,ca:6130,cmds:18,depuis:'2021'},
  {id:3,nom:'Fellam Hassna',        tel:'0663456789',pts:3680,ca:5480,cmds:15,depuis:'2020'},
  {id:4,nom:'Iman Makroum',         tel:'0664567890',pts:3120,ca:4210,cmds:12,depuis:'2021'},
  {id:5,nom:'Jaafari Hanane',       tel:'0665678901',pts:2840,ca:3890,cmds:11,depuis:'2022'},
  {id:6,nom:'Bangoura Fatou',       tel:'0666789012',pts:1480,ca:2940,cmds:9, depuis:'2022'},
  {id:7,nom:'Greenzer',             tel:'0667890123',pts:1320,ca:2640,cmds:8, depuis:'2023'},
  {id:8,nom:'Maazouza Rachid',      tel:'0668901234',pts:980, ca:1960,cmds:7, depuis:'2022'},
  {id:9,nom:'Nour eddine',          tel:'0669012345',pts:790, ca:1580,cmds:6, depuis:'2023'},
  {id:10,nom:'Amina',               tel:'0660123456',pts:620, ca:1240,cmds:5, depuis:'2023'},
  {id:11,nom:'Latifa Pharmacie',    tel:'0667037468',pts:800, ca:1600,cmds:2, depuis:'2024'},
  {id:12,nom:'Fayz Hassan',         tel:'0661112222',pts:430, ca:860, cmds:4, depuis:'2024'},
];

const fidAccumRules = [
  {icon:'🛒',name:'Achat standard',desc:'Par tranche de 10 MAD dépensés',pts:'1 pt',color:'#F59E0B',bg:'#FEF3C7'},
  {icon:'🎉',name:'1ère commande',desc:'Bonus inscription au programme',pts:'+50 pts',color:'#10B981',bg:'#D1FAE5'},
  {icon:'👥',name:'Parrainage',desc:'Pour chaque ami parrainé',pts:'+100 pts',color:'#3B82F6',bg:'#DBEAFE'},
  {icon:'🎂',name:'Anniversaire',desc:'Cadeau annuel automatique',pts:'+30 pts',color:'#8B5CF6',bg:'#EDE9FE'},
  {icon:'⭐',name:'Avis Google',desc:'Après avoir laissé un avis',pts:'+20 pts',color:'#EF4444',bg:'#FEE2E2'},
  {icon:'💻',name:'Commande app',desc:"Via l'application mobile",pts:'+10 pts',color:'#6B7280',bg:'#F3F4F6'},
];

const fidRewards = [
  {icon:'💰',name:'Remise 20 MAD',desc:'Déductible sur prochaine commande',cost:200,tier:'bronze'},
  {icon:'💰',name:'Remise 50 MAD',desc:'Déductible sur prochaine commande',cost:500,tier:'silver'},
  {icon:'🚗',name:'Collecte gratuite',desc:'Ramassage à domicile offert',cost:800,tier:'silver'},
  {icon:'🎁',name:'Nettoyage offert',desc:'1 tapis synthétique 2×3m offert',cost:1500,tier:'gold'},
  {icon:'⚡',name:'Service express',desc:'Traitement prioritaire en 24h',cost:600,tier:'gold'},
  {icon:'👑',name:'Offre VIP',desc:'Remise 30% sur toute une commande',cost:3000,tier:'platine'},
];

let fidCurrentTierFilter='all';
let fidCurrentCarteIdx=0;
let fidCurrentTab='overview';

function getFidTier(pts){
  if(pts>=5001)return 'platine';
  if(pts>=1501)return 'gold';
  if(pts>=501) return 'silver';
  return 'bronze';
}

function getFidNextTier(pts){
  if(pts>=5001)return{name:'Max atteint',icon:'🏆',needed:0,pct:100};
  const thresholds=[{t:'silver',min:501},{t:'gold',min:1501},{t:'platine',min:5001}];
  for(const{t,min}of thresholds){
    if(pts<min){
      const tier=FID_TIERS[t];
      const idx=thresholds.findIndex(x=>x.t===t);
      const from=idx>0?thresholds[idx-1].min:1;
      const pct=Math.round(((pts-from)/(min-from))*100);
      return{name:tier.name,icon:tier.icon,needed:min-pts,pct:Math.max(0,Math.min(100,pct))};
    }
  }
}

function switchFidTab(tab){
  fidCurrentTab=tab;
  ['overview','clients','carte','recompenses','regles'].forEach(t=>{
    const v=document.getElementById('fid-view-'+t);
    const b=document.getElementById('ftab-'+t);
    if(v)v.style.display=t===tab?'block':'none';
    if(b)b.classList.toggle('active',t===tab);
  });
  if(tab==='overview')fidRenderOverview();
  if(tab==='clients')fidRenderClients();
  if(tab==='carte')fidRenderCarte(fidCurrentCarteIdx);
  if(tab==='recompenses')fidRenderRecompenses();
  if(tab==='regles')fidRenderRegles();
}

function initFidelite(){
  fidRenderOverview();
  switchFidTab('overview');
}

function fidRenderOverview(){
  const acc=document.getElementById('fid-rules-accum');
  const pal=document.getElementById('fid-rules-paliers');
  if(acc)acc.innerHTML=fidAccumRules.map(r=>`
    <div class="fid-rule-item">
      <div class="fid-rule-icon" style="background:${r.bg}">${r.icon}</div>
      <div style="flex:1"><div class="fid-rule-name">${r.name}</div><div class="fid-rule-desc">${r.desc}</div></div>
      <div class="fid-rule-pts">${r.pts}</div>
    </div>`).join('');
  if(pal)pal.innerHTML=Object.entries(FID_TIERS).map(([k,t])=>`
    <div class="fid-rule-item">
      <div class="fid-rule-icon" style="background:${t.bg}">${t.icon}</div>
      <div style="flex:1">
        <div class="fid-rule-name" style="color:${t.color}">${t.name} <span style="font-size:10px;color:#8899aa;font-weight:400">${t.min===1?'1':t.min.toLocaleString('fr-FR')}${t.max<99999?'–'+t.max.toLocaleString('fr-FR'):'+'}  pts</span></div>
        <div class="fid-rule-desc">${t.remise} remise${t.extra?' · '+t.extra:''}</div>
      </div>
    </div>`).join('');
}

function fidFilterTier(t){fidCurrentTierFilter=t;switchFidTab('clients');}
function fidFilterSearch(q){fidRenderClients(q);}

function fidRenderClients(search=''){
  // Filtres tier
  const tfilters=[['all','Tous'],['platine','💎 Platine'],['gold','🥇 Or'],['silver','🥈 Argent'],['bronze','🥉 Bronze']];
  const fp=document.getElementById('fid-tier-filters');
  if(fp)fp.innerHTML=tfilters.map(([val,lbl])=>{
    const tier=FID_TIERS[val];
    const active=fidCurrentTierFilter===val;
    const c=tier?tier.color:'#1a2332';
    const bg=active?(tier?tier.color:'#1a2332'):'transparent';
    const col=active?'#fff':(tier?tier.color:'#8899aa');
    return `<div class="fid-filter-pill" style="background:${bg};color:${col};border-color:${tier?tier.color:'#dde3ec'}" onclick="fidCurrentTierFilter='${val}';fidRenderClients(document.getElementById('fid-client-search')?.value||'')">${lbl}</div>`;
  }).join('');

  let data=[...fidClients];
  if(fidCurrentTierFilter!=='all')data=data.filter(c=>getFidTier(c.pts)===fidCurrentTierFilter);
  if(search)data=data.filter(c=>c.nom.toLowerCase().includes(search.toLowerCase()));

  const body=document.getElementById('fid-clients-body');
  if(!body)return;
  body.innerHTML=data.map(c=>{
    const t=getFidTier(c.pts);const tier=FID_TIERS[t];const next=getFidNextTier(c.pts);
    return `<tr onclick="fidCurrentCarteIdx=${fidClients.indexOf(c)};switchFidTab('carte')" style="cursor:pointer;">
      <td style="font-weight:500">${c.nom}</td>
      <td><span class="fid-tier-badge" style="background:${tier.bg};color:${tier.color}">${tier.icon} ${tier.name}</span></td>
      <td style="font-weight:700;color:#F59E0B">${c.pts.toLocaleString('fr-FR')}</td>
      <td>
        <div class="fid-progress-wrap">
          <div class="fid-progress-bar"><div class="fid-progress-fill" style="width:${next.pct}%;background:${tier.color}"></div></div>
          <div class="fid-progress-pct">${next.pct}%</div>
        </div>
      </td>
      <td style="font-size:11px;color:#8899aa">${next.needed>0?`${next.icon} ${next.needed.toLocaleString('fr-FR')} pts → ${next.name}`:'🏆 Niveau max'}</td>
      <td style="font-weight:600;color:#059669">${c.ca.toLocaleString('fr-FR')} MAD</td>
      <td><button class="fid-btn-points" onclick="event.stopPropagation();openFidAddPoints(${fidClients.indexOf(c)})">+ Points</button></td>
    </tr>`;
  }).join('');
}

function fidRenderCarte(idx){
  fidCurrentCarteIdx=idx;
  const c=fidClients[idx]||fidClients[0];
  const t=getFidTier(c.pts);const tier=FID_TIERS[t];const next=getFidNextTier(c.pts);

  // Populate select
  const sel=document.getElementById('fid-carte-select');
  if(sel){
    sel.innerHTML=fidClients.map((cl,i)=>{const tt=FID_TIERS[getFidTier(cl.pts)];return `<option value="${i}" ${i===idx?'selected':''}>${cl.nom} — ${tt.icon} ${tt.name}</option>`;}).join('');
    sel.onchange=()=>fidRenderCarte(parseInt(sel.value));
  }

  const preview=document.getElementById('fid-carte-preview');
  if(preview)preview.innerHTML=`
    <div class="carte-preview carte-${t}" style="width:100%;">
      <div class="carte-pattern"></div>
      <div style="font-size:15px;font-weight:700;color:rgba(255,255,255,.9);margin-bottom:22px;">✦ Allo Tapis</div>
      <div style="font-size:17px;font-weight:700;color:#fff;">${c.nom}</div>
      <div style="font-size:10px;color:rgba(255,255,255,.75);text-transform:uppercase;letter-spacing:.15em;margin-top:3px;">${tier.icon} Membre ${tier.name}</div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-top:18px;">
        <div>
          <div style="font-size:26px;font-weight:800;color:#fff;line-height:1;">${c.pts.toLocaleString('fr-FR')}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.65);text-transform:uppercase;letter-spacing:.1em;">Points</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;color:rgba(255,255,255,.55);">Membre depuis ${c.depuis}</div>
          <div style="font-size:11px;color:rgba(255,255,255,.7);margin-top:3px;">${tier.remise} de remise</div>
        </div>
      </div>
    </div>`;

  const details=document.getElementById('fid-carte-details');
  if(details)details.innerHTML=`
    <div class="dash-card" style="margin-bottom:12px;">
      <div class="dash-card-title">Informations membre</div>
      ${[['Palier',`<span style="color:${tier.color};font-weight:700">${tier.icon} ${tier.name}</span>`],
         ['Points',`<span style="color:#F59E0B;font-weight:700">${c.pts.toLocaleString('fr-FR')} pts</span>`],
         ['Avantage',tier.remise+' de remise'],
         ['Extra',tier.extra||'—'],
         ['CA total',c.ca.toLocaleString('fr-FR')+' MAD'],
         ['Commandes',c.cmds],
         ['Depuis',c.depuis]
        ].map(([l,v])=>`
        <div style="display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #f5f6f8;font-size:12px;">
          <span style="color:#8899aa;">${l}</span><span style="font-weight:500;">${v}</span>
        </div>`).join('')}
    </div>
    <div class="dash-card">
      <div class="dash-card-title">Progression → ${next.name}</div>
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <div style="flex:1;height:10px;background:#f0f2f5;border-radius:5px;overflow:hidden;">
          <div style="height:100%;width:${next.pct}%;background:${tier.color};border-radius:5px;"></div>
        </div>
        <span style="font-size:13px;font-weight:700;color:${tier.color}">${next.pct}%</span>
      </div>
      <div style="font-size:12px;color:#8899aa;">${next.needed>0?`Encore <strong>${next.needed.toLocaleString('fr-FR')} points</strong> pour ${next.icon} ${next.name}`:'🏆 Niveau maximum atteint !'}</div>
    </div>`;
}

function fidUpdateCarte(idx){fidRenderCarte(idx);}

function fidRenderRecompenses(){
  const grid=document.getElementById('fid-rewards-grid');
  if(grid)grid.innerHTML=fidRewards.map(r=>{
    const tier=FID_TIERS[r.tier];
    return `<div class="fid-reward-card">
      <div class="fid-reward-icon">${r.icon}</div>
      <div class="fid-reward-name">${r.name}</div>
      <div class="fid-reward-desc">${r.desc}</div>
      <div class="fid-reward-cost">${r.cost.toLocaleString('fr-FR')} pts</div>
      <div style="font-size:10px;color:${tier.color};margin-top:3px;">${tier.icon} Dès ${tier.name}</div>
    </div>`;}).join('');

  const exchanges=[
    {client:'Idrissi M. Amine',reward:'Remise 50 MAD',pts:500,date:'15/04/2026',tier:'platine'},
    {client:'Mme Zerouali',reward:'Collecte gratuite',pts:800,date:'12/04/2026',tier:'platine'},
    {client:'Fellam Hassna',reward:'Remise 20 MAD',pts:200,date:'08/04/2026',tier:'gold'},
    {client:'Iman Makroum',reward:'Service express',pts:600,date:'05/04/2026',tier:'gold'},
    {client:'Jaafari Hanane',reward:'Remise 20 MAD',pts:200,date:'01/04/2026',tier:'gold'},
  ];
  const tbody=document.getElementById('fid-exchanges-body');
  if(tbody)tbody.innerHTML=exchanges.map(e=>{
    const tier=FID_TIERS[e.tier];
    return `<tr>
      <td style="font-weight:500;padding:8px 12px;">${e.client}</td>
      <td style="padding:8px 12px;">${e.reward}</td>
      <td style="color:#DC2626;font-weight:700;padding:8px 12px;">−${e.pts.toLocaleString('fr-FR')} pts</td>
      <td style="color:#8899aa;padding:8px 12px;">${e.date}</td>
      <td style="padding:8px 12px;"><span class="fid-tier-badge" style="background:${tier.bg};color:${tier.color}">${tier.icon} ${tier.name}</span></td>
    </tr>`;}).join('');
}

function fidRenderRegles(){
  const rl=document.getElementById('fid-rules-edit');
  if(rl)rl.innerHTML=fidAccumRules.map(r=>`
    <div style="display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid #f5f6f8;">
      <div style="width:32px;height:32px;border-radius:8px;background:${r.bg};display:flex;align-items:center;justify-content:center;font-size:16px">${r.icon}</div>
      <div style="flex:1"><div style="font-size:12px;font-weight:600">${r.name}</div><div style="font-size:11px;color:#8899aa">${r.desc}</div></div>
      <div style="font-size:13px;font-weight:700;color:#F59E0B;min-width:55px;text-align:right">${r.pts}</div>
      <button onclick="showToast('✏️ Règle modifiée')" style="padding:4px 8px;background:#f0f2f5;border:1px solid #dde3ec;border-radius:6px;font-size:10px;cursor:pointer;">✏️</button>
    </div>`).join('');

  const pl=document.getElementById('fid-paliers-edit');
  if(pl)pl.innerHTML=Object.entries(FID_TIERS).map(([k,t])=>`
    <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #f5f6f8;">
      <span style="font-size:20px">${t.icon}</span>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:700;color:${t.color}">${t.name}</div>
        <div style="font-size:11px;color:#8899aa">${t.min===1?'1':t.min.toLocaleString('fr-FR')} — ${t.max<99999?t.max.toLocaleString('fr-FR'):'∞'} pts</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:12px;font-weight:700;color:${t.color}">${t.remise}</div>
        <div style="font-size:10px;color:#8899aa">${t.extra||'—'}</div>
      </div>
      <button onclick="showToast('✏️ Palier modifié')" style="padding:4px 8px;background:#f0f2f5;border:1px solid #dde3ec;border-radius:6px;font-size:10px;cursor:pointer;">✏️</button>
    </div>`).join('');
}

function openFidAddPoints(idx){
  const sel=`<select id="fid-m-client" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:8px;font-size:13px;background:white;">
    ${fidClients.map((c,i)=>{const t=FID_TIERS[getFidTier(c.pts)];return `<option value="${i}" ${i===idx?'selected':''}>${c.nom} (${c.pts.toLocaleString('fr-FR')} pts) ${t.icon}</option>`;}).join('')}
  </select>`;
  document.getElementById('fid-m-client').outerHTML=sel;
  document.getElementById('fid-m-pts').value='';
  document.getElementById('fid-modal').style.display='flex';
}

function fidSavePoints(){
  const idx=parseInt(document.getElementById('fid-m-client').value);
  const pts=parseInt(document.getElementById('fid-m-pts').value)||0;
  if(!pts){showToast('⚠️ Saisissez un nombre de points');return;}
  fidClients[idx].pts+=pts;
  document.getElementById('fid-modal').style.display='none';
  showToast(`✅ +${pts} points ajoutés à ${fidClients[idx].nom}`);
  if(fidCurrentTab==='clients')fidRenderClients();
  if(fidCurrentTab==='carte')fidRenderCarte(fidCurrentCarteIdx);
}

function closeFidModal(e){if(e.target===e.currentTarget)document.getElementById('fid-modal').style.display='none';}

// Ajouter points auto depuis commande payée
function fidAddPointsFromCommande(clientNom, montant){
  const pts=Math.floor(montant/10);
  const idx=fidClients.findIndex(c=>c.nom.toLowerCase()===clientNom.toLowerCase());
  if(idx>=0&&pts>0){
    fidClients[idx].pts+=pts;
    showToast(`⭐ +${pts} points fidélité pour ${fidClients[idx].nom}`);
  }
}

// ===== CAMPAGNES WHATSAPP =====
const campCampaigns = [
  {name:'Offre Ramadan 2026',    type:'promo',    seg:'Tous',      count:5500,ouverts:3740,rep:880, conv:1320,date:'01/04/2026',status:'sent',   icon:'🌙',color:'#F59E0B',bg:'#FEF3C7'},
  {name:'Réactivation dormants', type:'react',    seg:'Dormants',  count:1240,ouverts:856, rep:210, conv:298, date:'15/03/2026',status:'sent',   icon:'😴',color:'#EF4444',bg:'#FEE2E2'},
  {name:'Promo printemps',       type:'saison',   seg:'Réguliers', count:1650,ouverts:1122,rep:285, conv:396, date:'01/03/2026',status:'sent',   icon:'🌸',color:'#10B981',bg:'#D1FAE5'},
  {name:'Rappel fidélité Or',    type:'fidelite', seg:'VIP',       count:385, ouverts:308, rep:96,  conv:115, date:'15/02/2026',status:'sent',   icon:'🥇',color:'#F59E0B',bg:'#FEF3C7'},
  {name:'Campagne avril 2026',   type:'promo',    seg:'Tous',      count:5500,ouverts:0,   rep:0,   conv:0,   date:'20/04/2026',status:'planned',icon:'📅',color:'#3B82F6',bg:'#DBEAFE'},
  {name:'Offre été -10%',        type:'promo',    seg:'Réguliers', count:1650,ouverts:1056,rep:248, conv:330, date:'01/06/2025',status:'sent',   icon:'☀️',color:'#F59E0B',bg:'#FEF3C7'},
];

const campTemplates = [
  {emoji:'🎉',name:'Offre promo',     preview:"Bonjour {Prénom} ! Profitez de -15% sur votre prochain nettoyage. Valable jusqu'au {date}. Réservez : 06 60 56 65 00",cat:'Promotion'},
  {emoji:'😴',name:'Réactivation',    preview:"Bonjour {Prénom}, ça fait longtemps ! 😊 Vos tapis méritent un nettoyage professionnel. Profitez de -10% avec le code RETOUR.",cat:'Réactivation'},
  {emoji:'🥇',name:'Rappel fidélité', preview:"Bonjour {Prénom} ! Vous avez {Points} points {Palier}. Utilisez-les pour une remise sur votre prochaine commande.",cat:'Fidélité'},
  {emoji:'🌸',name:'Saisonnier',      preview:"Le printemps est là {Prénom} ! C'est le moment idéal pour un grand nettoyage. Tapis, fauteuils, couettes — on s'occupe de tout.",cat:'Saisonnier'},
  {emoji:'⭐',name:'Satisfaction',    preview:"Bonjour {Prénom}, merci pour votre confiance ! Votre commande a été livrée. Êtes-vous satisfait(e) ? Donnez-nous votre avis !",cat:'Service'},
  {emoji:'🎂',name:'Anniversaire',    preview:"Joyeux anniversaire {Prénom} ! 🎂 Allo Tapis vous offre un cadeau : {Points} points bonus sur votre compte fidélité.",cat:'Fidélité'},
];

const campSegs = [
  {icon:'👥',name:'Tous les clients',  count:'5 500'},
  {icon:'🥇',name:'VIP',              count:'385'},
  {icon:'😴',name:'Dormants',         count:'1 240'},
  {icon:'🔵',name:'Réguliers',        count:'1 650'},
  {icon:'🟢',name:'Occasionnels',     count:'2 225'},
  {icon:'⚙️',name:'Personnalisé',     count:'Filtres'},
];

let campWizardStep=1;
let campSelectedSeg='Tous les clients';
let campSelectedCount='5 500';
let campPlanMode='now';

function switchCampTab(tab){
  ['dashboard','creer','historique','templates','analytics'].forEach(t=>{
    const v=document.getElementById('camp-view-'+t);
    const b=document.getElementById('ctab-'+t);
    if(v)v.style.display=t===tab?'block':'none';
    if(b)b.classList.toggle('active',t===tab);
  });
  if(tab==='dashboard')campRenderDashboard();
  if(tab==='creer'){campWizardStep=1;campRenderWizard();}
  if(tab==='historique')campRenderHistory();
  if(tab==='templates')campRenderTemplates();
  if(tab==='analytics')campRenderAnalytics();
}

function initCampagnes(){campRenderDashboard();switchCampTab('dashboard');}

function campBarChart(data){
  return data.map(([l,v,c])=>`
    <div class="camp-bar-row">
      <span class="camp-bar-label">${l}</span>
      <div class="camp-bar-wrap"><div class="camp-bar-fill" style="width:${v};background:${c}"></div></div>
      <span class="camp-bar-val">${v}</span>
    </div>`).join('');
}

function campRenderDashboard(){
  // Campagnes récentes
  const el=document.getElementById('camp-recent-list');
  if(el)el.innerHTML=campCampaigns.slice(0,4).map(c=>`
    <div class="camp-card-erp" onclick="switchCampTab('historique')">
      <div class="camp-type-icon-erp" style="background:${c.bg}">${c.icon}</div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:#1a2332;">${c.name}</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
          <span class="camp-tag-erp" style="background:${c.bg};color:${c.color}">${c.seg}</span>
          <span style="font-size:11px;color:#8899aa;">${c.date}</span>
        </div>
      </div>
      ${c.status==='sent'?`
      <div style="display:flex;gap:16px;flex-shrink:0;">
        <div style="text-align:center;"><div style="font-size:13px;font-weight:700;">${c.count.toLocaleString('fr-FR')}</div><div style="font-size:9px;color:#8899aa;text-transform:uppercase;">Envoyés</div></div>
        <div style="text-align:center;"><div style="font-size:13px;font-weight:700;color:#25D366;">${Math.round(c.ouverts/c.count*100)}%</div><div style="font-size:9px;color:#8899aa;text-transform:uppercase;">Ouverts</div></div>
        <div style="text-align:center;"><div style="font-size:13px;font-weight:700;color:#8B5CF6;">${Math.round(c.conv/c.count*100)}%</div><div style="font-size:9px;color:#8899aa;text-transform:uppercase;">Converti</div></div>
      </div>`:''}
      <span class="camp-status-erp ${c.status==='sent'?'cs-sent':c.status==='planned'?'cs-planned':'cs-draft'}">${c.status==='sent'?'✓ Envoyée':c.status==='planned'?'⏰ Planifiée':'Brouillon'}</span>
    </div>`).join('');

  const sp=document.getElementById('camp-seg-perf');
  if(sp)sp.innerHTML=campBarChart([['VIP 🥇','80%','#F59E0B'],['Dormants 😴','69%','#EF4444'],['Réguliers 🔵','71%','#3B82F6'],['Tous 👥','68%','#10B981'],['Occasionnels','62%','#6B7280']]);
  const tp=document.getElementById('camp-timing-perf');
  if(tp)tp.innerHTML=campBarChart([['09h00','58%','#3B82F6'],['12h00','61%','#3B82F6'],['17h00','68%','#25D366'],['19h00','65%','#3B82F6'],['21h00','42%','#EF4444']]);
}

function campRenderWizard(){
  for(let i=1;i<=4;i++){
    const s=document.getElementById('ws-'+i);
    const p=document.getElementById('camp-step-'+i);
    if(s)s.className='wiz-step-erp'+(i===campWizardStep?' active':i<campWizardStep?' done':'');
    if(p)p.style.display=i===campWizardStep?'block':'none';
  }
  const prev=document.getElementById('camp-btn-prev');
  const next=document.getElementById('camp-btn-next');
  const send=document.getElementById('camp-btn-send');
  if(prev)prev.style.display=campWizardStep>1?'block':'none';
  if(next)next.style.display=campWizardStep<4?'block':'none';
  if(send)send.style.display=campWizardStep===4?'block':'none';

  if(campWizardStep===1)campRenderSegOptions();
  if(campWizardStep===2)campRenderTplGrid();
  if(campWizardStep===4)campRenderSummary();
}

function campNextStep(){if(campWizardStep<4){campWizardStep++;campRenderWizard();}}
function campPrevStep(){if(campWizardStep>1){campWizardStep--;campRenderWizard();}}

function campRenderSegOptions(){
  const el=document.getElementById('camp-seg-options');
  if(!el)return;
  el.innerHTML=campSegs.map((s,i)=>`
    <div class="seg-opt-erp ${i===0?'selected':''}" onclick="campSelectSeg(this,'${s.name}','${s.count}')">
      <div style="font-size:22px;margin-bottom:6px;">${s.icon}</div>
      <div style="font-size:12px;font-weight:600;color:#1a2332;">${s.name}</div>
      <div style="font-size:11px;color:#8899aa;font-weight:500;">${s.count}</div>
    </div>`).join('');
}

function campSelectSeg(el,name,count){
  document.querySelectorAll('.seg-opt-erp').forEach(s=>s.classList.remove('selected'));
  el.classList.add('selected');
  campSelectedSeg=name;campSelectedCount=count;
  const tc=document.getElementById('camp-target-count');
  if(tc)tc.textContent=count+(count==='Filtres'?'':' contacts');
}

function campRenderTplGrid(){
  const el=document.getElementById('camp-tpl-grid');
  if(!el)return;
  el.innerHTML=campTemplates.slice(0,3).map((t,i)=>`
    <div class="tpl-card-erp ${i===0?'selected':''}" onclick="campSelectTpl(this,'${t.preview.replace(/'/g,"\\'")}')">
      <div style="font-size:18px;margin-bottom:5px;">${t.emoji}</div>
      <div style="font-size:12px;font-weight:600;color:#1a2332;margin-bottom:3px;">${t.name}</div>
      <div style="font-size:10px;color:#8899aa;line-height:1.4;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;">${t.preview}</div>
    </div>`).join('');
  const ta=document.getElementById('camp-msg-input');
  if(ta&&!ta.value)ta.value=campTemplates[0].preview;
  campUpdatePreview();campUpdateCharCount();
}

function campSelectTpl(el,preview){
  document.querySelectorAll('.tpl-card-erp').forEach(c=>c.classList.remove('selected'));
  el.classList.add('selected');
  const ta=document.getElementById('camp-msg-input');
  if(ta){ta.value=preview;campUpdatePreview();campUpdateCharCount();}
}

function campInsertVar(v){
  const ta=document.getElementById('camp-msg-input');
  if(ta){ta.value+=v;campUpdatePreview();campUpdateCharCount();}
}

function campFormat(type){
  const ta=document.getElementById('camp-msg-input');
  if(!ta)return;
  if(type==='bold')ta.value+='*texte en gras*';
  if(type==='italic')ta.value+='_texte en italique_';
  if(type==='emoji')ta.value+=' 🎉';
  campUpdatePreview();campUpdateCharCount();
}

function campUpdatePreview(){
  const msg=(document.getElementById('camp-msg-input')?.value||'')
    .replace('{Prénom}','Fatima').replace('{Points}','1 250')
    .replace('{Palier}','🥇 Or').replace('{Remise}','15%').replace('{LastCmd}','11/04/2026');
  const e1=document.getElementById('camp-wa-preview');
  const e2=document.getElementById('camp-wa-preview-final');
  if(e1)e1.textContent=msg||'Votre message apparaîtra ici...';
  if(e2)e2.textContent=msg||'—';
}

function campUpdateCharCount(){
  const len=document.getElementById('camp-msg-input')?.value?.length||0;
  const el=document.getElementById('camp-char-count');
  if(el)el.textContent=len+' / 1024';
}

function campSelectPlan(mode){
  campPlanMode=mode;
  const n=document.getElementById('camp-plan-now');
  const l=document.getElementById('camp-plan-later');
  const dt=document.getElementById('camp-plan-dt');
  if(n)n.className='plan-opt-erp'+(mode==='now'?' selected':'');
  if(l)l.className='plan-opt-erp'+(mode==='later'?' selected':'');
  if(dt)dt.style.display=mode==='later'?'block':'none';
}

function campRenderSummary(){
  const count=parseInt(campSelectedCount.replace(/\s/g,''))||5500;
  const cost=(count*0.05/1000).toFixed(2);
  const fc=document.getElementById('camp-final-count');
  const fco=document.getElementById('camp-final-cost');
  if(fc)fc.textContent=campSelectedCount;
  if(fco)fco.textContent='~'+cost+' USD';
  const sb=document.getElementById('camp-summary-box');
  if(sb)sb.innerHTML=[
    ['Segment cible',campSelectedSeg],['Nombre de contacts',campSelectedCount],
    ['Planification',campPlanMode==='now'?'Immédiat':'Programmé'],
    ['Canal','WhatsApp Business API'],['Template','Personnalisé']
  ].map(([l,v])=>`
    <div style="display:flex;justify-content:space-between;font-size:12px;padding:6px 0;border-bottom:1px solid #f5f6f8;">
      <span style="color:#8899aa;">${l}</span><span style="font-weight:600;">${v}</span>
    </div>`).join('');
}

function campSend(){
  showToast(`✅ Campagne lancée — ${campSelectedCount} messages envoyés !`);
  // Ajouter à l'historique
  campCampaigns.unshift({
    name:`Campagne ${new Date().toLocaleDateString('fr-FR')}`,type:'promo',
    seg:campSelectedSeg,count:parseInt(campSelectedCount.replace(/\s/g,''))||5500,
    ouverts:0,rep:0,conv:0,date:new Date().toLocaleDateString('fr-FR'),
    status:campPlanMode==='now'?'sent':'planned',icon:'📲',color:'#25D366',bg:'#F0FDF4'
  });
  setTimeout(()=>switchCampTab('dashboard'),1500);
}

function campRenderHistory(){
  const el=document.getElementById('camp-history-body');
  if(!el)return;
  el.innerHTML=campCampaigns.map(c=>`
    <tr>
      <td style="font-weight:600;"><span style="margin-right:6px">${c.icon}</span>${c.name}</td>
      <td><span class="camp-tag-erp" style="background:${c.bg};color:${c.color}">${c.seg}</span></td>
      <td style="font-weight:500;">${c.count.toLocaleString('fr-FR')}</td>
      <td style="color:#25D366;font-weight:600;">${c.status==='sent'?Math.round(c.ouverts/c.count*100)+'%':'—'}</td>
      <td>${c.status==='sent'?c.rep.toLocaleString('fr-FR'):'—'}</td>
      <td style="color:#8B5CF6;font-weight:600;">${c.status==='sent'?Math.round(c.conv/c.count*100)+'%':'—'}</td>
      <td style="color:#8899aa;">${c.date}</td>
      <td><span class="camp-status-erp ${c.status==='sent'?'cs-sent':c.status==='planned'?'cs-planned':'cs-draft'}">${c.status==='sent'?'✓ Envoyée':c.status==='planned'?'⏰ Planifiée':'Brouillon'}</span></td>
    </tr>`).join('');
}

function campRenderTemplates(){
  const el=document.getElementById('camp-all-templates');
  if(!el)return;
  el.innerHTML=campTemplates.map(t=>`
    <div style="background:white;border:1px solid #edf0f5;border-radius:14px;padding:18px;cursor:pointer;transition:all .15s;" onmouseover="this.style.borderColor='#25D366'" onmouseout="this.style.borderColor='#edf0f5'">
      <div style="font-size:26px;margin-bottom:10px;">${t.emoji}</div>
      <div style="font-size:13px;font-weight:600;color:#1a2332;margin-bottom:4px;">${t.name}</div>
      <div style="font-size:10px;font-weight:600;color:#25D366;background:#F0FDF4;padding:2px 8px;border-radius:6px;display:inline-block;margin-bottom:10px;">${t.cat}</div>
      <div style="font-size:12px;color:#8899aa;line-height:1.5;">${t.preview}</div>
      <button onclick="switchCampTab('creer');showToast('Template chargé !')" style="margin-top:12px;width:100%;padding:8px;background:#25D366;color:white;border:none;border-radius:8px;font-size:12px;font-weight:600;cursor:pointer;">Utiliser ce template →</button>
    </div>`).join('');
}

function campRenderAnalytics(){
  const oc=document.getElementById('camp-open-chart');
  if(oc)oc.innerHTML=campBarChart([['VIP 🥇','80%','#F59E0B'],['Dormants 😴','69%','#EF4444'],['Réguliers 🔵','71%','#3B82F6'],['Tous 👥','68%','#10B981'],['Occasionnels','62%','#6B7280']]);
  const ca=document.getElementById('camp-ca-chart');
  if(ca)ca.innerHTML=campBarChart([['Ramadan','89%','#F59E0B'],['Printemps','64%','#10B981'],['Réactivation','30%','#EF4444'],['Fidélité','22%','#8B5CF6']]);
  const tc=document.getElementById('camp-timing-chart');
  if(tc)tc.innerHTML=campBarChart([['09h00','58%','#3B82F6'],['12h00','61%','#3B82F6'],['17h00','68%','#25D366'],['19h00','65%','#3B82F6'],['21h00','42%','#EF4444']]);
  const mc=document.getElementById('camp-monthly-chart');
  if(mc)mc.innerHTML=campBarChart([['Janvier','47%','#3B82F6'],['Février','41%','#3B82F6'],['Mars','75%','#25D366'],['Avril','100%','#F59E0B']]);
}

// ===== APPLICATIONS MOBILES INTÉGRÉES =====
// Pont de données partagé entre ERP et les 3 apps
const ERPData = {
  // Données partagées (source unique)
  getBLsPret:        () => blData.filter(b=>b.etat==='Prêt à livrer'),
  getRamassagesActifs: () => ramassages.filter(r=>r.statut==='En attente'),
  getLignesData:     () => lignesData,
  getCommandes:      () => commandes,
  getClients:        () => clients,

  // Appliquer mise à jour depuis app finition
  applyFinitionUpdate(upd){
    const ligne = lignesData.find(l=>l.cmdNum===upd.cmdNum && l.numArt===upd.numArt);
    if(!ligne) return false;
    ligne.empl = upd.empl;
    ligne.qteTraitee = upd.qteTraitee;
    ligne.etat = upd.etat;
    // Si toutes les lignes de la commande sont prêtes → commande prête
    const cmdLignes = lignesData.filter(l=>l.cmdNum===upd.cmdNum);
    if(cmdLignes.length && cmdLignes.every(l=>l.etat==='Prêt à livrer')){
      const cmd = commandes.find(c=>c.num===upd.cmdNum);
      if(cmd && cmd.statut!=='Prêt à livrer'){
        cmd.statut='Prêt à livrer';
        showToast(`✅ Commande ${upd.cmdNum} → Prêt à livrer`,'#1D9E75');
      }
      const bl = blData.find(b=>b.num===upd.cmdNum);
      if(bl) bl.etat='Prêt à livrer';
    }
    return true;
  },

  // Appliquer mise à jour depuis app livreur
  applyLivreurUpdate(upd){
    const bl = blData.find(b=>b.num===upd.blNum);
    if(!bl) return false;
    bl.etat = upd.etat;
    if(upd.etat==='Livré & Payé'||upd.etat==='Payé'){
      // Ajouter en trésorerie
      const bl2 = blData.find(b=>b.num===upd.blNum);
      const montant = bl2?.lignes?.reduce((s,l)=>s+(l.totalHT||0),0)||0;
      if(montant>0){
        const today = new Date().toISOString().split('T')[0];
        const moisIdx = new Date().getMonth();
        tresoMouvements.push({
          id:'R'+Date.now(),date:today,type:'recette',
          categorie:'Commande payée',
          libelle:`Paiement commande ${upd.blNum} - ${upd.livreur}`,
          ref:upd.blNum,montant,saisi:'App Livreur',mois:moisIdx
        });
        showToast(`💰 +${montant.toFixed(2)} MAD en trésorerie (${upd.blNum})`,'#1D9E75');
      }
    }
    return true;
  }
};

// ─── APP LIVREUR ───
function initAppLivreur(){
  const bls = ERPData.getBLsPret();
  const rams = ERPData.getRamassagesActifs();

  // Mettre à jour banner
  const blEl = document.getElementById('livreur-bl-count');
  const ramEl = document.getElementById('livreur-ram-count');
  if(blEl) blEl.textContent = bls.length;
  if(ramEl) ramEl.textContent = rams.length;

  // Cartes par livreur
  const livreurStats = {};
  bls.forEach(b=>{
    const l = b.livreur||'Non assigné';
    if(!livreurStats[l]) livreurStats[l]={bls:0,montant:0};
    livreurStats[l].bls++;
    livreurStats[l].montant += (b.lignes||[]).reduce((s,l)=>s+(l.totalHT||0),0)-(b.remise||0);
  });

  const cardsEl = document.getElementById('livreur-cards');
  if(cardsEl){
    const entries = Object.entries(livreurStats);
    if(entries.length === 0){
      cardsEl.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:20px;color:#ccd3dc;font-size:13px;">Aucun BL prêt à livrer</div>`;
    } else {
      cardsEl.innerHTML = entries.map(([nom,s])=>`
        <div style="background:white;border-radius:12px;padding:16px;box-shadow:0 1px 4px rgba(0,0,0,.07);border:1px solid #edf0f5;">
          <div style="font-size:13px;font-weight:700;color:#1a2332;margin-bottom:2px;">${nom}</div>
          <div style="font-size:11px;color:#8899aa;margin-bottom:10px;">Livreur</div>
          <div style="display:flex;gap:10px;">
            <div style="flex:1;text-align:center;background:#f8f9fb;border-radius:8px;padding:8px;">
              <div style="font-size:18px;font-weight:800;color:#1a5fa8;">${s.bls}</div>
              <div style="font-size:9px;color:#8899aa;text-transform:uppercase;">BLs</div>
            </div>
            <div style="flex:1;text-align:center;background:#f8f9fb;border-radius:8px;padding:8px;">
              <div style="font-size:14px;font-weight:800;color:#059669;">${s.montant.toFixed(0)}</div>
              <div style="font-size:9px;color:#8899aa;text-transform:uppercase;">MAD</div>
            </div>
          </div>
        </div>`).join('');
    }
  }

  // Charger l'iframe
  loadAppIframe('livreur','allo_tapis_livreur.html');
}

function syncLivreurData(){
  initAppLivreur();
  showToast('🔄 Données livreur synchronisées','#1D9E75');
}

// ─── APP FINITION ───
function initAppFinition(){
  const lignes = ERPData.getLignesData();
  const sansEmpl = lignes.filter(l=>!l.empl).length;
  const pret = lignes.filter(l=>l.etat==='Prêt à livrer').length;
  const total = lignes.length;

  const sansEl = document.getElementById('finition-sans-empl');
  const pretEl = document.getElementById('finition-pret');
  if(sansEl) sansEl.textContent = sansEmpl;
  if(pretEl) pretEl.textContent = pret;

  // Barre de progression
  const card = document.getElementById('finition-progress-card');
  if(card){
    const pct = total > 0 ? Math.round(pret/total*100) : 0;
    const brouillon = lignes.filter(l=>l.etat==='Brouillon').length;
    const traitement = lignes.filter(l=>l.etat==='En traitement').length;
    card.innerHTML = `
      <div class="dash-card-title">📊 Progression finition — ${pct}% complet</div>
      <div style="height:10px;background:#f0f2f5;border-radius:5px;overflow:hidden;margin-bottom:14px;">
        <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,#3B82F6,#2ECC9B);border-radius:5px;transition:width .5s;"></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
        ${[
          {lbl:'Brouillon',val:brouillon,color:'#94A3B8'},
          {lbl:'En traitement',val:traitement,color:'#3B9EE8'},
          {lbl:'Prêt à livrer',val:pret,color:'#2ECC9B'},
        ].map(s=>`
          <div style="text-align:center;background:#f8f9fb;border-radius:8px;padding:10px;">
            <div style="font-size:20px;font-weight:800;color:${s.color};">${s.val}</div>
            <div style="font-size:10px;color:#8899aa;text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">${s.lbl}</div>
          </div>`).join('')}
      </div>`;
  }

  loadAppIframe('finition','allo_tapis_finition.html');
}

function applyFinitionUpdates(){
  const majEl = document.getElementById('finition-maj');
  // Dans la version Firebase: lire les updates depuis Firestore
  // Pour l'instant simuler avec ERPSync si disponible
  showToast('✓ Mises à jour finition appliquées','#1D9E75');
  if(majEl) majEl.textContent = '0';
  initAppFinition();
}

// Écouter les messages de l'app finition
window.addEventListener('message',(e)=>{
  if(e.data?.type==='FINITION_SYNC' && e.data.updates){
    let count = 0;
    e.data.updates.forEach(upd=>{
      if(ERPData.applyFinitionUpdate(upd)) count++;
    });
    const majEl = document.getElementById('finition-maj');
    if(majEl) majEl.textContent = (parseInt(majEl.textContent)||0) + count;
    showToast(`🔗 ${count} mise(s) à jour finition reçue(s)`,'#1D9E75');
    initAppFinition();
  }
  if(e.data?.type==='LIVREUR_SYNC' && e.data.update){
    ERPData.applyLivreurUpdate(e.data.update);
    initAppLivreur();
  }
});

// ─── APP LAVAGE ───
function initAppLavage(){
  const lignes = ERPData.getLignesData();
  const cmds = ERPData.getCommandes();

  // Calculer urgents (commandes urgentes dans les ramassages)
  const urgentCmds = new Set(
    ramassages.filter(r=>r.urgent).map(r=>r.num)
  );
  // Aussi compter les lignes de commandes Pro/Pressing
  const clientsMap = {};
  clients.forEach(c=>{ clientsMap[c.nom.toLowerCase()]=c.type; });

  const urgentLignes = lignes.filter(l=>{
    const cmd = cmds.find(c=>c.num===l.cmdNum);
    return urgentCmds.has(l.cmdNum) ||
      (cmd && ['Professionnel','Pressing'].includes(clientsMap[cmd.client?.toLowerCase()]));
  });

  const today = new Date();
  const maxWait = Math.max(...lignes.map(l=>{
    const cmd = cmds.find(c=>c.num===l.cmdNum);
    if(!cmd?.date) return 0;
    let d;
    if(cmd.date.includes('/')) { const [dd,mm,yy]=cmd.date.split('/'); d=new Date(`${yy}-${mm}-${dd}`); }
    else d = new Date(cmd.date);
    return Math.floor((today-d)/(1000*60*60*24));
  }).filter(v=>v>=0), 0);

  const urgEl = document.getElementById('lavage-urgent-count');
  const maxEl = document.getElementById('lavage-max-wait');
  if(urgEl) urgEl.textContent = urgentLignes.length;
  if(maxEl){
    maxEl.textContent = maxWait + ' jours';
    maxEl.style.color = maxWait>4?'#DC2626':maxWait>2?'#F59E0B':'#059669';
  }

  // KPIs
  const kpisEl = document.getElementById('lavage-kpis');
  if(kpisEl){
    const brouillon = lignes.filter(l=>l.etat==='Brouillon').length;
    const traitement = lignes.filter(l=>l.etat==='En traitement').length;
    const pret = lignes.filter(l=>l.etat==='Prêt à livrer').length;
    kpisEl.innerHTML = [
      {lbl:'Total articles',val:lignes.length,    color:'#1a5fa8'},
      {lbl:'Brouillon',     val:brouillon,         color:'#94A3B8'},
      {lbl:'En traitement', val:traitement,         color:'#3B9EE8'},
      {lbl:'Prêt à livrer', val:pret,              color:'#059669'},
    ].map(k=>`
      <div style="background:white;border-radius:12px;padding:14px;box-shadow:0 1px 4px rgba(0,0,0,.07);text-align:center;border:1px solid #edf0f5;">
        <div style="font-size:24px;font-weight:800;color:${k.color};">${k.val}</div>
        <div style="font-size:10px;color:#8899aa;text-transform:uppercase;letter-spacing:.06em;margin-top:3px;">${k.lbl}</div>
      </div>`).join('');
  }

  loadAppIframe('lavage','allo_tapis_lavage.html');
}

// ─── CHARGEMENT IFRAMES ───
const iframeLoaded = {livreur:false, finition:false, lavage:false};

function loadAppIframe(app, filename){
  const iframe = document.getElementById('iframe-'+app);
  if(!iframe) return;
  // Charger seulement la première fois
  if(!iframeLoaded[app]){
    iframeLoaded[app] = true;
    iframe.src = filename;
    iframe.onload = () => {
      const dot = document.getElementById(app+'-sync-dot');
      const lbl = document.getElementById(app+'-sync-lbl');
      if(dot) dot.style.background = '#059669';
      if(lbl) lbl.textContent = 'Connecté';
    };
    iframe.onerror = () => {
      const lbl = document.getElementById(app+'-sync-lbl');
      if(lbl) lbl.textContent = 'Hors ligne (ouvrir séparément)';
    };
  }
}

function openAppExternal(app){
  const files = {livreur:'allo_tapis_livreur.html', finition:'allo_tapis_finition.html', lavage:'allo_tapis_lavage.html'};
  window.open(files[app], '_blank');
}

// ===== SYNCHRONISATION FINITION → ERP =====
// Ce pont lit les mises à jour de l'app Finition et les applique aux lignesData et commandes
// En production Firebase, ce serait un onSnapshot() sur la collection 'finition_updates'

function applyFinitionSync(updates){
  if(!updates||!updates.length)return;
  let cmdsToPret = new Set();

  updates.forEach(upd=>{
    // Trouver la ligne dans lignesData
    const ligne = lignesData.find(l=>
      l.cmdNum===upd.cmdNum && l.numArt===upd.numArt
    );
    if(ligne){
      const oldEtat = ligne.etat;
      ligne.empl = upd.empl;
      ligne.qteTraitee = upd.qteTraitee;
      ligne.etat = upd.etat;
      if(upd.etat==='Prêt à livrer') cmdsToPret.add(upd.cmdNum);
    }
  });

  // Vérifier si toutes les lignes d'une commande sont "Prêt à livrer"
  cmdsToPret.forEach(cmdNum=>{
    const cmdLignes = lignesData.filter(l=>l.cmdNum===cmdNum);
    const allPret = cmdLignes.length>0 && cmdLignes.every(l=>l.etat==='Prêt à livrer');
    if(allPret){
      // Mettre à jour la commande
      const cmd = commandes.find(c=>c.num===cmdNum);
      if(cmd && cmd.statut !== 'Prêt à livrer'){
        cmd.statut = 'Prêt à livrer';
        showToast(`✅ Commande ${cmdNum} → Prêt à livrer (sync Finition)`,'#1D9E75');
      }
      // Mettre à jour le BL
      const bl = blData.find(b=>b.num===cmdNum);
      if(bl) bl.etat = 'Prêt à livrer';
    }
  });

  // Re-render si on est sur les pages concernées
  const currentPage = document.querySelector('.page.active');
  if(currentPage){
    const id = currentPage.id;
    if(id==='page-lignes') renderLignes(lignesData);
    if(id==='page-commandes') renderCommandes(commandes);
    if(id==='page-bons-livraison') renderBL(blData);
  }
  showToast(`🔗 ${updates.length} mise(s) à jour Finition appliquées`,'#1D9E75');
}

// Simuler une réception de sync (à remplacer par onSnapshot Firebase)
// Appelé manuellement ou automatiquement via postMessage entre les 2 onglets
window.addEventListener('message',(e)=>{
  if(e.data?.type==='FINITION_SYNC' && e.data.updates){
    applyFinitionSync(e.data.updates);
  }
});

// ===== STAT CLIENTS =====
function renderStatClients(){
  document.getElementById('stat-cl-body').innerHTML=statClients.map(c=>`
    <tr>
      <td><input type="checkbox"/></td>
      <td class="link-cell">${c.nom}</td>
      <td style="color:#8899aa">${c.ville}</td>
      <td style="text-align:right;font-weight:600">${c.nbCmd}</td>
      <td style="text-align:right;font-weight:600">${c.ca.toLocaleString()} MAD</td>
      <td style="color:#8899aa">${c.derniere}</td>
    </tr>`).join('');
}

// ===== STAT ARTICLES =====
function renderStatArticles(){
  const sorted=[...articles].sort((a,b)=>b.tp-a.tp);
  document.getElementById('stat-art-body').innerHTML=sorted.map(a=>`
    <tr>
      <td class="link-cell">${a.name}</td>
      <td><span class="uom-chip">${a.uom}</span></td>
      <td style="text-align:right;color:#8899aa">${Math.floor(Math.random()*2000+100)}</td>
      <td style="text-align:right;font-weight:600">${fmt(a.tp)}</td>
      <td style="text-align:right">${fmt(a.tpr)}</td>
      <td style="text-align:right">${fmt(a.tpro)}</td>
    </tr>`).join('');
}

// ===== CLIENTS =====
const clients=[
  {nom:'Anassi Mohammed',tel:'0661234567',tel2:'',email:'',num:'12',etage:'',residence:'Res. Al Fath',avenue:'Av. Hassan II',quartier:'Malabata',codepost:'90000',ville:'Tanger',type:'Particulier',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
  {nom:'Bennani Fatima',tel:'0662345678',tel2:'0662345679',email:'bennani@gmail.com',num:'5',etage:'2',residence:'',avenue:'Rue Ibn Batouta',quartier:'Marshan',codepost:'90000',ville:'Tanger',type:'Particulier',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
  {nom:'Chraibi Hassan',tel:'0663456789',tel2:'',email:'',num:'',etage:'',residence:'',avenue:'Bd Mohammed V',quartier:'Centre-ville',codepost:'90000',ville:'Tanger',type:'Pressing',maps:'https://maps.app.goo.gl/abc123',contactNom:'Chraibi Youssef',contactTel1:'0663456790',contactTel2:'',notes:'Client pressing — tarif pressing appliqué'},
  {nom:'Daoudi Karima',tel:'0664567890',tel2:'',email:'',num:'8',etage:'1',residence:'Res. Najmat',avenue:'Av. Moulay Ismail',quartier:'Beni Makada',codepost:'90000',ville:'Tanger',type:'Particulier',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
  {nom:'El Alami Youssef',tel:'0665678901',tel2:'0665678902',email:'elalami@pro.ma',num:'22',etage:'',residence:'',avenue:'Rue de Fès',quartier:'Val Fleuri',codepost:'90000',ville:'Tanger',type:'Professionnel',maps:'https://maps.app.goo.gl/xyz456',contactNom:'El Alami Sarah',contactTel1:'0665678903',contactTel2:'',notes:'Société — facturation mensuelle'},
  {nom:'Fassi Leila',tel:'0666789012',tel2:'',email:'',num:'',etage:'',residence:'',avenue:'Bd Zerktouni',quartier:'Bourgogne',codepost:'20000',ville:'Casablanca',type:'Professionnel',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
  {nom:'Ghazali Omar',tel:'0667890123',tel2:'',email:'',num:'3',etage:'',residence:'',avenue:'Av. Prince Héritier',quartier:'Mesnana',codepost:'90000',ville:'Tanger',type:'Particulier',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
  {nom:'Haddad Nadia',tel:'0668901234',tel2:'',email:'',num:'15',etage:'3',residence:'Res. Marina',avenue:'Av. Mohamed VI',quartier:'Iberia',codepost:'90000',ville:'Tanger',type:'Particulier',maps:'https://maps.app.goo.gl/nadia123',contactNom:'',contactTel1:'',contactTel2:'',notes:''},
];

let currentClIdx=0;
let clReadOnly=false;
let clViewMode='kanban';
let clFilteredData=[...clients];

function setClientView(mode){
  clViewMode=mode;
  document.getElementById('cl-kanban-grid').style.display=mode==='kanban'?'grid':'none';
  document.getElementById('cl-list-grid').style.display=mode==='list'?'block':'none';
  document.getElementById('cl-kanban-btn').className='view-btn'+(mode==='kanban'?' active':'');
  document.getElementById('cl-list-btn').className='view-btn'+(mode==='list'?' active':'');
}

function renderClientsKanban(data){
  document.getElementById('cl-kanban-grid').innerHTML=data.map(c=>`
    <div onclick="showClientForm(${clients.indexOf(c)})" style="background:white;border-radius:10px;border:1px solid #edf0f5;padding:14px;cursor:pointer;display:flex;gap:12px;align-items:flex-start;box-shadow:0 1px 3px rgba(0,0,0,.06);transition:all .15s;" onmouseover="this.style.boxShadow='0 4px 12px rgba(26,95,168,.12)';this.style.borderColor='#93C5FD'" onmouseout="this.style.boxShadow='0 1px 3px rgba(0,0,0,.06)';this.style.borderColor='#edf0f5'">
      <div style="width:44px;height:44px;border-radius:50%;background:#e8edf4;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:18px;">👤</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:13px;font-weight:600;color:#1a5fa8;margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${c.nom}</div>
        <div style="font-size:12px;color:#8899aa;">${c.ville||'—'}</div>
        ${c.tel?`<div style="font-size:11px;color:#5a6a7a;margin-top:2px;">${c.tel}</div>`:''}
        ${c.type!=='Particulier'?`<div style="margin-top:4px;"><span style="font-size:10px;font-weight:600;padding:1px 8px;border-radius:10px;background:#DBEAFE;color:#1D4ED8;">${c.type}</span></div>`:''}
      </div>
    </div>`).join('');
}

function renderClients(data){
  clFilteredData=data;
  renderClientsKanban(data);
  document.getElementById('clients-body').innerHTML=data.map(c=>`
    <tr onclick="showClientForm(${clients.indexOf(c)})" style="cursor:pointer;">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">${c.nom}</td>
      <td style="color:#8899aa">${c.tel||'—'}</td>
      <td style="color:#8899aa">${c.quartier||'—'}</td>
      <td style="color:#8899aa">${c.ville||'—'}</td>
      <td><span class="badge ${c.type==='Particulier'?'badge-brouillon':c.type==='Pressing'?'badge-traitement':'badge-pret'}">${c.type}</span></td>
    </tr>`).join('');
  document.getElementById('cl-pag').textContent=`1–${data.length} sur 5 500`;
}

function filterClients(q){
  const type=document.getElementById('cl-filter-type')?.value||'';
  let data=clients;
  if(q)data=data.filter(c=>c.nom.toLowerCase().includes(q.toLowerCase())||c.tel.includes(q)||(c.quartier||'').toLowerCase().includes(q.toLowerCase()));
  if(type)data=data.filter(c=>c.type===type);
  renderClients(data);
}

// FICHE CLIENT
function showClientForm(i){
  if(i===-1){
    clients.unshift({nom:'',tel:'',tel2:'',email:'',num:'',etage:'',residence:'',avenue:'',quartier:'',codepost:'',ville:'Tanger',type:'Particulier',maps:'',contactNom:'',contactTel1:'',contactTel2:'',notes:''});
    i=0;clReadOnly=false;
  } else {
    clReadOnly=true;
  }
  currentClIdx=i;
  document.getElementById('cl-kanban-view').style.display='none';
  document.getElementById('cl-fiche-view').style.display='block';
  fillClientForm(clients[i]);
  updateClNav();
}

function hideClientForm(){
  document.getElementById('cl-kanban-view').style.display='';
  document.getElementById('cl-fiche-view').style.display='none';
  renderClients(clients);
}

function fillClientForm(c){
  document.getElementById('cl-fiche-bc').textContent=c.nom||'Nouveau';
  document.getElementById('clf-nom').value=c.nom||'';
  document.getElementById('clf-type').value=c.type||'Particulier';
  document.getElementById('clf-num').value=c.num||'';
  document.getElementById('clf-etage').value=c.etage||'';
  document.getElementById('clf-residence').value=c.residence||'';
  document.getElementById('clf-avenue').value=c.avenue||'';
  document.getElementById('clf-quartier').value=c.quartier||'';
  document.getElementById('clf-codepost').value=c.codepost||'';
  document.getElementById('clf-ville').value=c.ville||'';
  document.getElementById('clf-tel1').value=c.tel||'';
  document.getElementById('clf-tel2').value=c.tel2||'';
  document.getElementById('clf-email').value=c.email||'';
  document.getElementById('clf-maps').value=c.maps||'';
  document.getElementById('clf-contact-nom').value=c.contactNom||'';
  document.getElementById('clf-contact-tel1').value=c.contactTel1||'';
  document.getElementById('clf-contact-tel2').value=c.contactTel2||'';
  document.getElementById('clf-notes').value=c.notes||'';

  // Boutons
  if(clReadOnly){
    document.getElementById('cl-form-actions').innerHTML=`
      <button class="btn-modify" onclick="enableClEdit()">Modifier</button>
      <button class="btn-modify" onclick="showClientForm(-1)">Créer</button>`;
    document.getElementById('cl-ro-banner').classList.add('show');
  } else {
    document.getElementById('cl-form-actions').innerHTML=`
      <button class="btn-save" onclick="saveClient()">Enregistrer</button>
      <span style="color:#8899aa">ou</span>
      <button class="btn-cancel" onclick="hideClientForm()">Annuler</button>`;
    document.getElementById('cl-ro-banner').classList.remove('show');
  }
  setClReadOnly(clReadOnly);
  // Maps btn
  document.getElementById('clf-maps-btn').style.display=c.maps?'inline-block':'none';
}

function enableClEdit(){
  clReadOnly=false;
  document.getElementById('cl-form-actions').innerHTML=`
    <button class="btn-save" onclick="saveClient()">Enregistrer</button>
    <span style="color:#8899aa">ou</span>
    <button class="btn-cancel" onclick="showClientForm(${currentClIdx})">Annuler</button>`;
  document.getElementById('cl-ro-banner').classList.remove('show');
  setClReadOnly(false);
}

function setClReadOnly(ro){
  const ids=['clf-nom','clf-num','clf-etage','clf-residence','clf-avenue','clf-quartier','clf-codepost','clf-ville','clf-tel1','clf-tel2','clf-email','clf-maps','clf-contact-nom','clf-contact-tel1','clf-contact-tel2','clf-notes'];
  ids.forEach(id=>{const el=document.getElementById(id);if(el)el.readOnly=ro;});
  const sel=document.getElementById('clf-type');
  if(sel)sel.disabled=ro;
  // Montrer/cacher bouton maps
  const mapsVal=document.getElementById('clf-maps').value;
  document.getElementById('clf-maps-btn').style.display=mapsVal?'inline-block':'none';
  // Maps input: afficher icône si valeur
  document.getElementById('clf-maps').oninput=()=>{
    document.getElementById('clf-maps-btn').style.display=document.getElementById('clf-maps').value?'inline-block':'none';
  };
}

function saveClient(){
  const nom=document.getElementById('clf-nom').value.trim();
  if(!nom){showToast('⚠️ Veuillez saisir un nom','#e53e3e');return;}
  const c=clients[currentClIdx];
  c.nom=nom;
  c.type=document.getElementById('clf-type').value;
  c.num=document.getElementById('clf-num').value;
  c.etage=document.getElementById('clf-etage').value;
  c.residence=document.getElementById('clf-residence').value;
  c.avenue=document.getElementById('clf-avenue').value;
  c.quartier=document.getElementById('clf-quartier').value;
  c.codepost=document.getElementById('clf-codepost').value;
  c.ville=document.getElementById('clf-ville').value;
  c.tel=document.getElementById('clf-tel1').value;
  c.tel2=document.getElementById('clf-tel2').value;
  c.email=document.getElementById('clf-email').value;
  c.maps=document.getElementById('clf-maps').value;
  c.contactNom=document.getElementById('clf-contact-nom').value;
  c.contactTel1=document.getElementById('clf-contact-tel1').value;
  c.contactTel2=document.getElementById('clf-contact-tel2').value;
  c.notes=document.getElementById('clf-notes').value;
  clReadOnly=true;
  fillClientForm(c);
  showToast(`✓ Client "${nom}" enregistré`,'#1D9E75');
  (async()=>{ const fid=await fbSave('clients',c,c._id||null); if(fid&&!c._id)c._id=fid; })();
}

function openMaps(){
  const url=document.getElementById('clf-maps').value;
  if(url)window.open(url,'_blank');
}

function switchClTab(tab){
  document.getElementById('cltab-contact-body').style.display=tab==='contact'?'block':'none';
  document.getElementById('cltab-notes-body').style.display=tab==='notes'?'block':'none';
  document.getElementById('cltab-contact').style.borderBottomColor=tab==='contact'?'#1a5fa8':'transparent';
  document.getElementById('cltab-contact').style.color=tab==='contact'?'#1a5fa8':'#8899aa';
  document.getElementById('cltab-notes').style.borderBottomColor=tab==='notes'?'#1a5fa8':'transparent';
  document.getElementById('cltab-notes').style.color=tab==='notes'?'#1a5fa8':'#8899aa';
}

function updateClNav(){
  document.getElementById('cl-nav-pag').textContent=`${currentClIdx+1} / ${clients.length}`;
}
function clNavPrev(){if(currentClIdx>0){currentClIdx--;clReadOnly=true;fillClientForm(clients[currentClIdx]);updateClNav();}}
function clNavNext(){if(currentClIdx<clients.length-1){currentClIdx++;clReadOnly=true;fillClientForm(clients[currentClIdx]);updateClNav();}}

// ===== ARTICLES =====
function setArtView(v){
  artViewMode=v;
  document.getElementById('art-kanban-view').style.display=v==='kanban'?'block':'none';
  document.getElementById('art-list-view').style.display=v==='list'?'block':'none';
  document.getElementById('art-kanban-btn').className='view-btn'+(v==='kanban'?' active':'');
  document.getElementById('art-list-btn').className='view-btn'+(v==='list'?' active':'');
}

function artEmoji(name){
  if(name.includes('Tapis'))return '🪞';
  if(name.includes('Canapé'))return '🛋️';
  if(name.includes('Matelas'))return '🛏️';
  if(name.includes('Rideau'))return '🪟';
  if(name.includes('Couette')||name.includes('Couverture'))return '🛌';
  if(name.includes('Fauteuil'))return '🪑';
  if(name.includes('Chaise'))return '🪑';
  return '🏷️';
}

function renderKanban(data){
  document.getElementById('art-kanban-grid').innerHTML=data.map(a=>`
    <div class="kanban-card" onclick="showArtForm(${articles.indexOf(a)})">
      <div class="art-photo">${artEmoji(a.name)}</div>
      <div class="art-info">
        <div class="art-name">${a.name}</div>
        <div class="art-tarif">
          Tarif Particulier: <span>${fmt(a.tp)}</span><br>
          Tarif Pressing: <span>${fmt(a.tpr)}</span><br>
          Tarif Pro: <span>${fmt(a.tpro)}</span>
        </div>
        <div><span class="uom-chip">${a.uom}</span></div>
      </div>
    </div>`).join('');
}

function renderArtList(data){
  document.getElementById('art-list-body').innerHTML=data.map(a=>`
    <tr onclick="showArtForm(${articles.indexOf(a)})">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">${a.name}</td>
      <td style="text-align:right;font-weight:600">${fmt(a.tp)}</td>
      <td style="text-align:right">${fmt(a.tpr)}</td>
      <td style="text-align:right">${fmt(a.tpro)}</td>
      <td><span class="uom-chip">${a.uom}</span></td>
      <td style="text-align:center">${a.actif?'<span style="color:#1D9E75;font-size:15px">✓</span>':'✗'}</td>
    </tr>`).join('');
}

function filterArticles(q){
  const d=q?articles.filter(a=>a.name.toLowerCase().includes(q.toLowerCase())):articles;
  renderKanban(d);renderArtList(d);
}

function showArtForm(i){
  currentArtIdx=i;artReadOnly=(i>=0);
  document.getElementById('articles-list-view').style.display='none';
  document.getElementById('art-form-view').style.display='block';
  if(i===-1){
    document.getElementById('art-form-bc').textContent='Nouveau';
    document.getElementById('art-form-actions').innerHTML=`<button class="btn-save" onclick="hideArtForm()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="hideArtForm()">Annuler</button>`;
    document.getElementById('art-ro').classList.remove('show');
    fillArtForm({name:'',tp:0,tpr:0,tpro:0,ta:0,uom:'',actif:true,desc:''});
    setArtReadOnly(false);
  } else {
    const a=articles[i];
    document.getElementById('art-form-bc').textContent=a.name;
    document.getElementById('art-form-actions').innerHTML=`<button class="btn-modify" onclick="enableArtEdit()">Modifier</button> <button class="btn-modify" onclick="showArtForm(-1)">Créer</button>`;
    document.getElementById('art-ro').classList.add('show');
    fillArtForm(a);setArtReadOnly(true);
  }
}

function hideArtForm(){
  document.getElementById('articles-list-view').style.display='';
  document.getElementById('art-form-view').style.display='none';
}

function saveArtForm(){
  const a = articles[currentArtIdx] || {};
  a.name = document.getElementById('af-nom').value.trim();
  a.tp   = parseFloat(document.getElementById('af-tp').value) || 0;
  a.tpr  = parseFloat(document.getElementById('af-tpr').value) || 0;
  a.tpro = parseFloat(document.getElementById('af-tpro').value) || 0;
  a.ta   = parseFloat(document.getElementById('af-ta').value) || 0;
  a.uom  = currentUomVal || '';
  a.actif = document.getElementById('af-actif').checked;
  a.desc  = document.getElementById('af-desc').value;

  if(!a.name){ showToast('⚠️ Saisissez le nom de l\'article','#e53e3e'); return; }

  if(currentArtIdx === -1){
    articles.unshift(a);
    currentArtIdx = 0;
  } else {
    articles[currentArtIdx] = a;
  }

  hideArtForm();
  setArtView(artViewMode);
  showToast('✓ Article "'+a.name+'" enregistré','#1D9E75');

  // Firebase
  (async()=>{
    const fid = await fbSave('articles', a, a._id||null);
    if(fid && !a._id) a._id = fid;
  })();
}

function enableArtEdit(){
  artReadOnly=false;
  document.getElementById('art-form-actions').innerHTML=`<button class="btn-save" onclick="saveArtForm()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="showArtForm(${currentArtIdx})">Annuler</button>`;
  document.getElementById('art-ro').classList.remove('show');
  setArtReadOnly(false);
}

function fillArtForm(a){
  document.getElementById('af-nom').value=a.name;
  document.getElementById('af-tp').value=a.tp;
  document.getElementById('af-tpr').value=a.tpr;
  document.getElementById('af-tpro').value=a.tpro;
  document.getElementById('af-ta').value=a.ta||0;
  currentUomVal=a.uom||'';
  document.getElementById('uom-val').textContent=a.uom||'—';
  document.getElementById('af-actif').checked=a.actif;
  document.getElementById('af-desc').value=a.desc||'';
}

function setArtReadOnly(ro){
  ['af-nom','af-tp','af-tpr','af-tpro','af-ta','af-desc'].forEach(id=>{
    const el=document.getElementById(id);if(el){el.readOnly=ro;}
  });
  document.getElementById('af-actif').disabled=ro;
  const t=document.getElementById('uom-trigger');
  t.style.pointerEvents=ro?'none':'auto';
  t.style.borderColor=ro?'transparent':'';
  t.style.background=ro?'transparent':'';
}

// UOM DROPDOWN
function toggleUom(){if(artReadOnly)return;const d=document.getElementById('uom-drop');d.style.display=d.style.display==='none'?'block':'none';}
function pickUom(v){currentUomVal=v;document.getElementById('uom-val').textContent=v;document.getElementById('uom-drop').style.display='none';}
function openUomModal(){document.getElementById('uom-drop').style.display='none';document.getElementById('uom-modal').style.display='flex';}
function closeUomModal(){document.getElementById('uom-modal').style.display='none';}
function saveNewUom(){
  const v=document.getElementById('new-uom-input').value.trim();
  if(!v)return;
  uoms.push({name:v});
  const drop=document.getElementById('uom-drop');
  const create=drop.querySelector('.uom-create');
  const opt=document.createElement('div');opt.className='uom-opt';opt.textContent=v;
  opt.onclick=()=>pickUom(v);drop.insertBefore(opt,create);
  pickUom(v);closeUomModal();
}
function toggleDescTooltip(){document.getElementById('desc-tooltip').classList.toggle('show');}

document.addEventListener('click',e=>{
  if(!e.target.closest('.uom-wrap'))document.getElementById('uom-drop').style.display='none';
  if(!e.target.closest('.info-btn'))document.getElementById('desc-tooltip').classList.remove('show');
});

// ===== UOM =====
function renderUoms(){
  document.getElementById('uom-body').innerHTML=uoms.map((u,i)=>`
    <tr onclick="showUomForm(${i})">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">${u.name}</td>
      <td style="color:#8899aa">Unité de mesure de référence pour cette catégorie</td>
    </tr>`).join('');
}

function showUomForm(i){
  currentUomIdx=i;uomReadOnly=(i>=0);
  document.getElementById('uom-list-view').style.display='none';
  document.getElementById('uom-form-view').style.display='block';
  if(i===-1){
    document.getElementById('uom-form-bc').textContent='Nouveau';
    document.getElementById('uom-form-actions').innerHTML=`<button class="btn-save" onclick="hideUomForm()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="hideUomForm()">Annuler</button>`;
    document.getElementById('uom-ro').classList.remove('show');
    document.getElementById('uf-nom').value='';document.getElementById('uf-nom').readOnly=false;
  } else {
    const u=uoms[i];
    document.getElementById('uom-form-bc').textContent=u.name;
    document.getElementById('uom-form-actions').innerHTML=`<button class="btn-modify" onclick="enableUomEdit()">Modifier</button> <button class="btn-modify" onclick="showUomForm(-1)">Créer</button>`;
    document.getElementById('uom-ro').classList.add('show');
    document.getElementById('uf-nom').value=u.name;document.getElementById('uf-nom').readOnly=true;
  }
}

function hideUomForm(){document.getElementById('uom-list-view').style.display='';document.getElementById('uom-form-view').style.display='none';}
function enableUomEdit(){
  document.getElementById('uom-form-actions').innerHTML=`<button class="btn-save" onclick="hideUomForm()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="showUomForm(${currentUomIdx})">Annuler</button>`;
  document.getElementById('uom-ro').classList.remove('show');
  document.getElementById('uf-nom').readOnly=false;
}

// ===== PERSONNEL =====
function renderPersonnel(data){
  document.getElementById('pers-body').innerHTML=data.map(p=>`
    <tr onclick="showPersForm(${personnel.indexOf(p)})">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td style="color:#8899aa">${p.mat}</td>
      <td style="font-weight:500">${p.nom}</td>
      <td>${fonctionBadge(p.fonction)}</td>
      <td style="color:#8899aa">${p.telp||''}</td>
      <td style="color:#8899aa">${p.telper||''}</td>
      <td style="color:#8899aa">${p.cin||''}</td>
      <td style="color:#8899aa">${p.lieu||''}</td>
      <td style="color:#8899aa">${p.ville||''}</td>
    </tr>`).join('');
}
function filterPersonnel(q){renderPersonnel(q?personnel.filter(p=>p.nom.toLowerCase().includes(q.toLowerCase())||(p.cin||'').toLowerCase().includes(q.toLowerCase())):personnel);}

function showPersForm(i){
  currentPersIdx=i;persReadOnly=(i>=0);
  document.getElementById('pers-list-view').style.display='none';
  document.getElementById('pers-form-view').style.display='block';
  if(i===-1){
    document.getElementById('pers-form-bc').textContent='Nouveau';
    document.getElementById('pers-form-actions').innerHTML=`<button class="btn-save" onclick="savePersForme()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="hidePersForm()">Annuler</button>`;
    document.getElementById('pers-ro').classList.remove('show');
    fillPersForm({nom:'',fonction:'',telp:'',telper:'',cin:'',lieu:'',ville:'',active:true});
    setPersReadOnly(false);
  } else {
    const p=personnel[i];
    document.getElementById('pers-form-bc').textContent=p.nom;
    document.getElementById('pers-form-actions').innerHTML=`<button class="btn-modify" onclick="enablePersEdit()">Modifier</button> <button class="btn-modify" onclick="showPersForm(-1)">Créer</button>`;
    document.getElementById('pers-ro').classList.add('show');
    fillPersForm(p);setPersReadOnly(true);
  }
}

function hidePersForm(){document.getElementById('pers-list-view').style.display='';document.getElementById('pers-form-view').style.display='none';}
function enablePersEdit(){
  document.getElementById('pers-form-actions').innerHTML=`<button class="btn-save" onclick="savePersForme()">Enregistrer</button> <span style="color:#8899aa">ou</span> <button class="btn-cancel" onclick="showPersForm(${currentPersIdx})">Annuler</button>`;
  document.getElementById('pers-ro').classList.remove('show');
  setPersReadOnly(false);
}
function fillPersForm(p){
  document.getElementById('pf-nom').value=p.nom||'';
  document.getElementById('pf-fonction').value=p.fonction||'';
  document.getElementById('pf-telp').value=p.telp||'';
  document.getElementById('pf-cin').value=p.cin||'';
  document.getElementById('pf-lieu').value=p.lieu||'';
  document.getElementById('pf-telper').value=p.telper||'';
  document.getElementById('pf-ville').value=p.ville||'';
  document.getElementById('pf-active').checked=p.active;
}
function setPersReadOnly(ro){
  ['pf-nom','pf-telp','pf-cin','pf-lieu','pf-telper'].forEach(id=>{const el=document.getElementById(id);if(el)el.readOnly=ro;});
  document.getElementById('pf-fonction').disabled=ro;
  document.getElementById('pf-ville').disabled=ro;
  document.getElementById('pf-active').disabled=ro;
}

// Carte fonction → app
const FONCTION_APP_MAP = {"Gérant": "ERP", "Administrateur": "ERP", "Assistante": "ERP", "Livreur": "App Livreur", "Chauffeur": "App Livreur", "Finition": "App Finition", "Chef Finition": "App Finition", "Lavage": "App Lavage", "Chef Lavage": "App Lavage", "Technicien": "Atelier", "Manutentionnaire": "Atelier"};
const FONCTION_BADGE = {"ERP": "#DBEAFE;color:#1D4ED8", "App Livreur": "#D1FAE5;color:#065F46", "App Finition": "#EDE9FE;color:#5B21B6", "App Lavage": "#E0F2FE;color:#0369A1", "Atelier": "#FEF3C7;color:#92400E"};

function onFonctionChange(val){
  const badge = document.getElementById('pf-app-badge');
  if(!badge) return;
  const app = FONCTION_APP_MAP[val];
  if(app && val){
    const colors = FONCTION_BADGE[app] || '#f0f2f5;color:#5a6a7a';
    const url = app==='ERP'?'(ERP Admin)':
                app==='App Livreur'?'→ allotapis.netlify.app/allo_tapis_livreur.html':
                app==='App Finition'?'→ allotapis.netlify.app/allo_tapis_finition.html':
                app==='App Lavage'?'→ allotapis.netlify.app/allo_tapis_lavage.html':'';
    badge.style.display='block';
    badge.innerHTML=`<div style="background:${colors};padding:6px 12px;border-radius:8px;font-size:12px;font-weight:600;">
      📱 ${app} ${url}
    </div>`;
  } else {
    badge.style.display='none';
  }
}

function savePersForme(){
  const p = personnel[currentPersIdx] || {};
  p.nom     = document.getElementById('pf-nom').value.trim();
  p.fonction= document.getElementById('pf-fonction').value;
  p.telp    = document.getElementById('pf-telp').value.trim();
  p.cin     = document.getElementById('pf-cin').value.trim();
  p.lieu    = document.getElementById('pf-lieu').value.trim();
  p.telper  = document.getElementById('pf-telper').value.trim();
  p.ville   = document.getElementById('pf-ville').value.trim();
  p.active  = document.getElementById('pf-active').checked;
  p.app     = FONCTION_APP_MAP[p.fonction] || '';

  if(!p.nom){ showToast('⚠️ Saisissez le nom','#e53e3e'); return; }
  if(!p.fonction){ showToast('⚠️ Choisissez une fonction','#e53e3e'); return; }

  if(currentPersIdx === -1){ personnel.unshift(p); currentPersIdx=0; }
  else { personnel[currentPersIdx] = p; }

  persReadOnly = true;
  fillPersForm(p);
  setPersReadOnly(true);
  document.getElementById('pers-form-actions').innerHTML=`
    <button class="btn-modify" onclick="enablePersEdit()">Modifier</button>
    <button class="btn-modify" onclick="showPersForm(-1)">Créer</button>`;
  document.getElementById('pers-ro-banner').classList.add('show');
  showToast('✓ '+p.nom+' enregistré — '+p.app,'#1D9E75');

  // Firebase
  (async()=>{ const fid=await fbSave('personnel',p,p._id||null); if(fid&&!p._id)p._id=fid; })();
}

// ===== DASHBOARD =====
const caData = [
  {mois:'Jan',val:38400},{mois:'Fév',val:42100},{mois:'Mar',val:51200},
  {mois:'Avr',val:47800},{mois:'Mai',val:0},{mois:'Jun',val:0},
  {mois:'Jul',val:0},{mois:'Aoû',val:0},{mois:'Sep',val:0},
  {mois:'Oct',val:0},{mois:'Nov',val:0},{mois:'Déc',val:0}
];

let tresoMonth = 3; // Avril (0-indexed)

const moisLabels=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function initDashboard(){
  // Greeting
  const h=new Date().getHours();
  const greet=h<12?'Bonjour 🌅':h<18?'Bon après-midi ☀️':'Bonsoir 🌙';
  document.getElementById('dash-greeting').textContent=greet+' — Allo Tapis';
  const now=new Date();
  document.getElementById('dash-date-str').textContent=now.toLocaleDateString('fr-FR',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  // KPIs
  const ramAttente=ramassages.filter(r=>r.statut==='En attente').length;
  const cmdEnCours=commandes.filter(c=>['Brouillon','En traitement'].includes(c.statut)).length;
  const blPret=blData.filter(b=>b.etat==='Prêt à livrer').length;
  // CA du mois courant depuis tresoMouvements (source unique)
  const caApril=tresoMouvements.filter(mv=>mv.mois===3&&mv.type==='recette').reduce((s,mv)=>s+mv.montant,0);

  document.getElementById('kpi-ram').textContent=ramAttente;
  document.getElementById('kpi-cmd').textContent=cmdEnCours;
  document.getElementById('kpi-pret').textContent=blPret;
  document.getElementById('kpi-ca').textContent=caApril.toLocaleString('fr-FR',{minimumFractionDigits:2});

  // Statuts commandes
  const statutsInfo=[
    {label:'Brouillon',color:'#94A3B8',statuts:['Brouillon']},
    {label:'En traitement',color:'#3B82F6',statuts:['En traitement']},
    {label:'Prêt à livrer',color:'#1a5fa8',statuts:['Prêt à livrer']},
    {label:'Payé',color:'#059669',statuts:['Payé','Livré & Payé']},
  ];
  const totalCmds=commandes.length||1;
  const maxStatut=Math.max(...statutsInfo.map(s=>commandes.filter(c=>s.statuts.includes(c.statut)).length))||1;
  document.getElementById('dash-statuts').innerHTML=statutsInfo.map(s=>{
    const n=commandes.filter(c=>s.statuts.includes(c.statut)).length;
    const pct=Math.round(n/totalCmds*100);
    const barPct=Math.round(n/maxStatut*100);
    return `<div class="statut-item">
      <span class="statut-label">${s.label}</span>
      <div class="statut-bar-wrap"><div class="statut-bar-fill" style="width:${barPct}%;background:${s.color}"></div></div>
      <span class="statut-count">${n}</span>
    </div>`;
  }).join('');

  // Livreurs actifs (BLs prêts)
  const livreurStats={};
  blData.filter(b=>['Prêt à livrer','Livré','Livré & Payé'].includes(b.etat)).forEach(b=>{
    if(!b.livreur)return;
    if(!livreurStats[b.livreur])livreurStats[b.livreur]={count:0,montant:0};
    livreurStats[b.livreur].count++;
    livreurStats[b.livreur].montant+=(b.lignes||[]).reduce((s,l)=>s+(l.totalHT||0),0)-(b.remise||0);
  });
  const livSorted=Object.entries(livreurStats).sort((a,b)=>b[1].count-a[1].count).slice(0,5);
  document.getElementById('dash-livreurs').innerHTML=livSorted.length?livSorted.map(([nom,s])=>`
    <div class="livreur-row">
      <div>
        <div class="livreur-name">${nom}</div>
        <div class="livreur-count">${s.count} BL</div>
      </div>
      <div class="livreur-montant">${s.montant.toFixed(0)} MAD</div>
    </div>`).join(''):`<div style="color:#ccd3dc;font-size:13px;text-align:center;padding:20px;">Aucune activité</div>`;

  // Alertes — inclut commandes en retard
  const alertes=[];

  // 1. Ramassages urgents
  const urgents=ramassages.filter(r=>r.urgent&&r.statut==='En attente');
  if(urgents.length>0)alertes.push({type:'rouge-dark',icon:'🚨',text:`<strong>${urgents.length} ramassage(s) URGENT(S)</strong> en attente de collecte — à traiter immédiatement`});

  // 2. Commandes en retard (Brouillon ou En traitement depuis plus de 5 jours)
  const today=new Date();
  const retard=commandes.filter(c=>{
    if(!['Brouillon','En traitement'].includes(c.statut))return false;
    if(!c.date)return false;
    let d;
    if(c.date.includes('/')){const[dd,mm,yy]=c.date.split('/');d=new Date(`${yy}-${mm}-${dd}`);}
    else d=new Date(c.date);
    const diffDays=Math.floor((today-d)/(1000*60*60*24));
    return diffDays>5;
  });
  if(retard.length>0){
    const maxRetard=Math.max(...retard.map(c=>{
      let d;if(c.date.includes('/')){const[dd,mm,yy]=c.date.split('/');d=new Date(`${yy}-${mm}-${dd}`);}else d=new Date(c.date);
      return Math.floor((today-d)/(1000*60*60*24));
    }));
    alertes.push({type:'rouge',icon:'⏰',text:`<strong>${retard.length} commande(s) en retard</strong> — statut "${retard[0].statut}" depuis plus de 5 jours (max: ${maxRetard}j). <span style="color:#1a5fa8;cursor:pointer;text-decoration:underline;" onclick="goPage('commandes')">Voir →</span>`});
  }

  // 3. BLs en attente
  const blPretCount=blData.filter(b=>b.etat==='Prêt à livrer').length;
  if(blPretCount>3)alertes.push({type:'orange',icon:'⚠️',text:`<strong>${blPretCount} BL</strong> prêts à livrer — chargements à préparer`});

  // 4. Commandes brouillon sans articles
  const cmdBrouillon=commandes.filter(c=>c.statut==='Brouillon'&&(!c.lignes||c.lignes.length===0)).length;
  if(cmdBrouillon>0)alertes.push({type:'bleu',icon:'ℹ️',text:`<strong>${cmdBrouillon} commande(s)</strong> en brouillon sans articles saisis`});

  // 5. Trésorerie — lien rapide si solde négatif (géré par updateTreso, pas d'alerte ici)

  if(alertes.length===0)alertes.push({type:'bleu',icon:'✅',text:'<strong>Tout est en ordre</strong> — aucune alerte pour aujourd\'hui'});

  document.getElementById('dash-alertes').innerHTML=alertes.map(a=>`
    <div class="alert-item ${a.type}">
      <span class="alert-icon">${a.icon}</span>
      <span class="alert-text">${a.text}</span>
    </div>`).join('');

  // CA barres
  const maxCA=Math.max(...caData.map(d=>d.val))||1;
  document.getElementById('dash-ca-bars').innerHTML=caData.map((d,i)=>`
    <div class="ca-bar-wrap">
      <div class="ca-bar" style="height:${d.val?Math.max(8,Math.round(d.val/maxCA*100))+'%':'4px'};background:${d.val?(i===3?'#1a5fa8':'#93C5FD'):'#f0f2f5'};" title="${d.mois}: ${d.val.toLocaleString()} MAD">
        ${d.val?`<span class="ca-bar-val">${(d.val/1000).toFixed(0)}k</span>`:''}
      </div>
      <span class="ca-bar-label">${d.mois}</span>
    </div>`).join('');

  // Trésorerie
  updateTreso();

  // Ramassages du jour
  const todayRam=ramassages.filter(r=>r.statut==='En attente').slice(0,5);
  document.getElementById('dash-ram-today').innerHTML=todayRam.length?todayRam.map(r=>`
    <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f5f6f8;">
      <div style="width:8px;height:8px;border-radius:50%;background:${r.urgent?'#DC2626':'#1a5fa8'};flex-shrink:0;"></div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:500;color:#1a2332;">${r.nom} ${r.urgent?'<span style="font-size:10px;background:#FEE2E2;color:#DC2626;padding:1px 6px;border-radius:10px;font-weight:700;">URGENT</span>':''}</div>
        <div style="font-size:11px;color:#8899aa;">${r.adresse} ${r.creneau?'· '+r.creneau:''}</div>
      </div>
      <div style="font-size:12px;color:#1a5fa8;font-weight:500;">${r.livreur||'—'}</div>
    </div>`).join(''):`<div style="color:#ccd3dc;font-size:13px;text-align:center;padding:20px;">Aucun ramassage en attente</div>`;

  // Dernières commandes
  document.getElementById('dash-last-cmds').innerHTML=commandes.slice(0,7).map(c=>`
    <tr onclick="goPage('commandes')">
      <td style="color:#1a5fa8;font-weight:500">${c.num}</td>
      <td style="font-weight:500">${c.client}</td>
      <td style="color:#8899aa">${c.livreur||'—'}</td>
      <td>${statutBadge(c.statut)}</td>
      <td style="text-align:right;font-weight:600;color:#059669">${c.montant?c.montant.toFixed(0)+' MAD':'—'}</td>
    </tr>`).join('');

  // ── Stats Apps mobiles dans le dashboard ──
  const blsPret = blData.filter(b=>b.etat==='Prêt à livrer').length;
  const ramsActifs = ramassages.filter(r=>r.statut==='En attente').length;
  const lignesSansEmpl = lignesData.filter(l=>!l.empl).length;
  const lignesPret = lignesData.filter(l=>l.etat==='Prêt à livrer').length;
  const lignesTotal = lignesData.length;

  // Livreur
  const dbBls=document.getElementById('dash-livreur-bls');
  const dbRams=document.getElementById('dash-livreur-rams');
  const dbBadge=document.getElementById('dash-livreur-badge');
  if(dbBls)dbBls.textContent=blsPret;
  if(dbRams)dbRams.textContent=ramsActifs;
  if(dbBadge)dbBadge.textContent=blsPret+' BLs';

  // Finition
  const dfPret=document.getElementById('dash-finition-pret');
  const dfSans=document.getElementById('dash-finition-sans');
  const dfBadge=document.getElementById('dash-finition-badge');
  if(dfPret)dfPret.textContent=lignesPret;
  if(dfSans)dfSans.textContent=lignesSansEmpl;
  if(dfBadge)dfBadge.textContent=lignesTotal+' articles';

  // Lavage — calcul temps d'attente max
  const todayD=new Date();
  let maxWait=0;
  commandes.forEach(c=>{
    if(!c.date)return;
    let d;
    if(c.date.includes('/')){const[dd,mm,yy]=c.date.split('/');d=new Date(`${yy}-${mm}-${dd}`);}
    else d=new Date(c.date);
    const diff=Math.floor((todayD-d)/(1000*60*60*24));
    if(diff>maxWait)maxWait=diff;
  });
  const dlTotal=document.getElementById('dash-lavage-total');
  const dlWait=document.getElementById('dash-lavage-wait');
  const dlBadge=document.getElementById('dash-lavage-badge');
  const urgentCount=ramassages.filter(r=>r.urgent&&r.statut==='En attente').length;
  if(dlTotal)dlTotal.textContent=lignesTotal;
  if(dlWait){dlWait.textContent=maxWait+'j';dlWait.style.color=maxWait>4?'#DC2626':maxWait>2?'#F59E0B':'#059669';}
  if(dlBadge)dlBadge.textContent=urgentCount+' urgents';
}

function dashTresoMonth(dir){
  tresoMonth=Math.max(0,Math.min(11,tresoMonth+dir));
  tresoPageMonth=tresoMonth;
  updateTreso();
}
function ramStatutBadge(s){
  const m={'En attente':'badge-ramassage-attente','Collecté':'badge-ramassage-collecte','Annulé':'badge-ramassage-annule'};
  return `<span class="badge ${m[s]||'badge-brouillon'}">${s}</span>`;
}

function renderRamassage(data){
  const tbody = document.getElementById('ram-body');
  const emptyRow = document.getElementById('ram-empty-row');
  if(data.length===0){
    tbody.innerHTML='';
    tbody.appendChild(emptyRow||createEmptyRow());
    document.getElementById('ram-pag').textContent='0 ramassage';
    return;
  }
  tbody.innerHTML = data.map(r=>`
    <tr onclick="viewRamassage(${ramassages.indexOf(r)})" style="cursor:pointer;">
      <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
      <td class="link-cell">RAM-${String(r.id).padStart(3,'0')}</td>
      <td style="font-weight:500">${r.nom}</td>
      <td style="color:#8899aa">${r.tel}</td>
      <td style="color:#2c3e50;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.adresse}</td>
      <td style="color:#8899aa">${r.creneau||'—'}</td>
      <td>${r.livreur||'<span style="color:#ccd3dc">Non assigné</span>'}</td>
      <td>${ramStatutBadge(r.statut)}</td>
      <td>${r.urgent?'<span class="urgent-badge">🔴 URGENT</span>':''}</td>
      <td style="color:#8899aa">${r.date}</td>
    </tr>`).join('');
  const total=data.length;
  document.getElementById('ram-pag').textContent=`${total} ramassage${total>1?'s':''}`;
}

function filterRamassage(q){
  const statut=document.getElementById('ram-filter-statut').value;
  const urgentOnly=document.getElementById('ram-filter-urgent').checked;
  let data=ramassages;
  if(q)data=data.filter(r=>r.nom.toLowerCase().includes(q.toLowerCase())||r.tel.includes(q));
  if(statut)data=data.filter(r=>r.statut===statut);
  if(urgentOnly)data=data.filter(r=>r.urgent);
  renderRamassage(data);
}

function createEmptyRow(){
  const tr=document.createElement('tr');tr.id='ram-empty-row';
  tr.innerHTML=`<td colspan="10" style="text-align:center;padding:40px;color:#8899aa;">
    <div style="font-size:32px;margin-bottom:8px;">🛵</div>
    <div style="font-weight:500;margin-bottom:4px;">Aucun ramassage enregistré</div>
    <div style="font-size:12px;">Cliquez sur "+ Nouveau ramassage" pour commencer</div>
  </td>`;
  return tr;
}

function viewRamassage(i){
  const r=ramassages[i];
  // Construire les boutons d'action selon statut actuel
  let actions='';
  if(r.statut==='En attente'){
    actions=`
      <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
        <button onclick="openEditRam(${i})" style="flex:1;padding:9px;background:#EFF6FF;color:#1a5fa8;border:1px solid #93C5FD;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">✏️ Modifier</button>
        <button onclick="changeRamStatut(${i},'Collecté')" style="flex:1;padding:9px;background:#D1FAE5;color:#065F46;border:1px solid #6EE7B7;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">✓ Collecté</button>
        <button onclick="changeRamStatut(${i},'Annulé')" style="flex:1;padding:9px;background:#FEE2E2;color:#991B1B;border:1px solid #FCA5A5;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">✕ Annuler</button>
      </div>`;
  }

  // Créer popup détail
  const existing=document.getElementById('ram-detail-popup');
  if(existing)existing.remove();

  const popup=document.createElement('div');
  popup.id='ram-detail-popup';
  popup.style.cssText='position:fixed;inset:0;background:rgba(15,20,35,.5);display:flex;align-items:center;justify-content:center;z-index:300;';
  popup.innerHTML=`
    <div style="background:white;border-radius:14px;width:440px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.2);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
        <div style="font-size:15px;font-weight:700;color:#1a2332;">RAM-${String(r.id).padStart(3,'0')} ${r.urgent?'<span class="urgent-badge">🔴 URGENT</span>':''}</div>
        <button onclick="document.getElementById('ram-detail-popup').remove()" style="border:none;background:#f0f2f5;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:15px;">✕</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px;">
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Client</div><div style="font-weight:500">${r.nom}</div></div>
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Téléphone</div><div>${r.tel}</div></div>
        <div style="grid-column:1/-1"><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Adresse pick-up</div><div>${r.adresse}</div></div>
        ${r.maps?`<div style="grid-column:1/-1"><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Google Maps</div><a href="${r.maps}" target="_blank" style="color:#1a5fa8;font-size:12px;">${r.maps.substring(0,45)}...</a></div>`:''}
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Créneau</div><div>${r.creneau||'—'}</div></div>
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Livreur</div><div>${r.livreur||'—'}</div></div>
        ${r.notes?`<div style="grid-column:1/-1"><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Notes</div><div>${r.notes}</div></div>`:''}
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Statut</div>${ramStatutBadge(r.statut)}</div>
        <div><div style="color:#8899aa;font-size:11px;font-weight:600;text-transform:uppercase;margin-bottom:3px;">Date</div><div>${r.date}</div></div>
      </div>
      ${actions}
    </div>`;
  popup.addEventListener('click',e=>{if(e.target===popup)popup.remove();});
  document.body.appendChild(popup);
}

function changeRamStatut(i, newStatut){
  ramassages[i].statut=newStatut;
  document.getElementById('ram-detail-popup').remove();

  // Si Collecté → créer commande Brouillon automatiquement
  if(newStatut==='Collecté'){
    const r=ramassages[i];
    const num=genCmdNum();
    const todayISO=new Date().toISOString().split('T')[0]; // format YYYY-MM-DD pour input[type=date]
    const todayFR=new Date().toLocaleDateString('fr-FR');
    commandes.unshift({
      num,
      client:r.nom,
      tel:r.tel,
      adresse:r.adresse,
      livreur:r.livreur,
      date:todayISO,        // date collecte = date du ramassage collecté
      statut:'Brouillon',
      remise:0,lignes:[],photos:[],montant:0
    });
    renderRamassage(ramassages);
    const msg=document.createElement('div');
    msg.style.cssText='position:fixed;top:20px;right:20px;background:#1D9E75;color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 16px rgba(0,0,0,.2);cursor:pointer;';
    msg.innerHTML=`✓ Collecté — Commande <strong>${num}</strong> créée en Brouillon · <u>Ouvrir</u>`;
    msg.onclick=()=>{msg.remove();goPage('commandes');};
    document.body.appendChild(msg);
    setTimeout(()=>msg&&msg.remove(),6000);
  } else {
    renderRamassage(ramassages);
    showToast(`✓ RAM-${String(ramassages[i].id).padStart(3,'0')} → ${newStatut}`,'#1D9E75');
  }
}

// MODAL
function openRamModal(){
  document.getElementById('ram-modal').style.display='flex';
  document.getElementById('ram-nom').value='';
  document.getElementById('ram-tel').value='';
  document.getElementById('ram-adresse').value='';
  document.getElementById('ram-maps').value='';
  document.getElementById('ram-creneau').value='';
  document.getElementById('ram-livreur').value='';
  document.getElementById('ram-notes').value='';
  document.getElementById('ram-urgent').checked=false;
  document.getElementById('new-client-hint').classList.remove('show');
  document.getElementById('ac-dropdown').style.display='none';
  ['ram-nom','ram-tel','ram-adresse','ram-maps'].forEach(id=>document.getElementById(id).classList.remove('autofilled'));
  setTimeout(()=>document.getElementById('ram-nom').focus(),100);
}

function closeRamModal(){document.getElementById('ram-modal').style.display='none';}
function closeRamModalOutside(e){if(e.target===e.currentTarget)closeRamModal();}
function openEditRam(i){
  // Fermer le popup détail
  const existing = document.getElementById('ram-detail-popup');
  if(existing) existing.remove();

  const r = ramassages[i];
  const livreurs = ['Ourouch Houssam','Koukouss Hafid','Radi Abdellah','Oujane Nadir','Abdessamad Aboulfath','Taakouft Soufiane','Anass Mounaouar','Labiad Yassine'];

  const popup = document.createElement('div');
  popup.id = 'ram-edit-popup';
  popup.style.cssText = 'position:fixed;inset:0;background:rgba(15,20,35,.5);display:flex;align-items:center;justify-content:center;z-index:400;';
  popup.innerHTML = `
    <div style="background:white;border-radius:14px;width:460px;padding:22px;box-shadow:0 20px 60px rgba(0,0,0,.2);max-height:85vh;overflow-y:auto;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;">
        <div style="font-size:15px;font-weight:700;color:#1a2332;">✏️ Modifier le ramassage</div>
        <button onclick="document.getElementById('ram-edit-popup').remove()" style="border:none;background:#f0f2f5;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:15px;">✕</button>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div>
          <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Nom client *</div>
          <input id="re-nom" value="${r.nom||''}" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;" placeholder="Nom du client"/>
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Téléphone WhatsApp *</div>
          <input id="re-tel" value="${r.tel||''}" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;" placeholder="06XXXXXXXX"/>
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Adresse pick-up *</div>
          <input id="re-adresse" value="${r.adresse||''}" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;" placeholder="Quartier, adresse"/>
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Livreur assigné *</div>
          <select id="re-livreur" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;background:white;">
            ${livreurs.map(l=>`<option value="${l}" ${l===r.livreur?'selected':''}>${l}</option>`).join('')}
          </select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          <div>
            <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Créneau horaire</div>
            <input id="re-creneau" value="${r.creneau||''}" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;" placeholder="Ex: 10:00 - 12:00"/>
          </div>
          <div>
            <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Date</div>
            <input id="re-date" type="date" value="${r.dateISO||new Date().toISOString().split('T')[0]}" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;"/>
          </div>
        </div>
        <div>
          <div style="font-size:11px;font-weight:600;color:#8899aa;text-transform:uppercase;margin-bottom:4px;">Notes</div>
          <textarea id="re-notes" style="width:100%;padding:8px 12px;border:1px solid #dde3ec;border-radius:7px;font-size:13px;resize:none;height:60px;">${r.notes||''}</textarea>
        </div>
        <div style="display:flex;align-items:center;gap:8px;padding:8px 0;">
          <input type="checkbox" id="re-urgent" ${r.urgent?'checked':''} style="width:16px;height:16px;cursor:pointer;accent-color:#DC2626;"/>
          <label for="re-urgent" style="font-size:13px;font-weight:600;color:#DC2626;cursor:pointer;">🔴 Marquer comme URGENT</label>
        </div>
      </div>
      <div style="display:flex;gap:8px;margin-top:18px;justify-content:flex-end;">
        <button onclick="document.getElementById('ram-edit-popup').remove()" style="padding:9px 18px;border:1px solid #dde3ec;border-radius:8px;background:white;font-size:13px;cursor:pointer;">Annuler</button>
        <button onclick="saveEditRam(${i})" style="padding:9px 22px;background:#1D9E75;color:white;border:none;border-radius:8px;font-size:13px;font-weight:700;cursor:pointer;">✓ Enregistrer</button>
      </div>
    </div>`;
  popup.addEventListener('click', e => { if(e.target===popup) popup.remove(); });
  document.body.appendChild(popup);
}

function saveEditRam(i){
  const nom     = document.getElementById('re-nom').value.trim();
  const tel     = document.getElementById('re-tel').value.trim();
  const adresse = document.getElementById('re-adresse').value.trim();
  const livreur = document.getElementById('re-livreur').value;
  if(!nom || !tel || !adresse || !livreur){ showToast('⚠️ Remplissez tous les champs obligatoires','#e53e3e'); return; }

  const r = ramassages[i];
  r.nom     = nom;
  r.tel     = tel;
  r.adresse = adresse;
  r.livreur = livreur;
  r.creneau = document.getElementById('re-creneau').value;
  r.dateISO = document.getElementById('re-date').value;
  r.notes   = document.getElementById('re-notes').value;
  r.urgent  = document.getElementById('re-urgent').checked;

  document.getElementById('ram-edit-popup').remove();
  renderRamassage(ramassages);
  showToast('✓ Ramassage modifié','#1D9E75');

  // Firebase
  (async()=>{
    if(r._id) await fbSave('ramassages', r, r._id);
  })();
}

// AUTOCOMPLETE
function acSearch(field){
  const nomVal=document.getElementById('ram-nom').value.trim().toLowerCase();
  const telVal=document.getElementById('ram-tel').value.trim();
  const query=field==='nom'?nomVal:telVal;
  const drop=document.getElementById('ac-dropdown');

  // Reset autofill style when user types
  ['ram-adresse','ram-maps'].forEach(id=>document.getElementById(id).classList.remove('autofilled'));
  document.getElementById('new-client-hint').classList.remove('show');

  if(query.length<2){drop.style.display='none';return;}

  const matches=clients.filter(c=>{
    if(field==='nom')return c.nom.toLowerCase().includes(query);
    return c.tel.replace(/\s/g,'').includes(telVal.replace(/\s/g,''));
  }).slice(0,6);

  if(matches.length===0){
    drop.innerHTML=`<div class="autocomplete-item"><span class="ac-new">➕ Nouveau client — "${document.getElementById('ram-nom').value}"</span></div>`;
    drop.style.display='block';
    document.getElementById('new-client-hint').classList.add('show');
    return;
  }

  drop.innerHTML=matches.map((c,i)=>`
    <div class="autocomplete-item" onclick="selectClient(${clients.indexOf(c)})">
      <span class="ac-name">${c.nom}</span>
      <span class="ac-tel">${c.tel} · ${c.quartier}, ${c.ville}</span>
    </div>`).join('');
  drop.style.display='block';
}

function selectClient(i){
  const c=clients[i];
  document.getElementById('ram-nom').value=c.nom;
  document.getElementById('ram-tel').value=c.tel;
  // Auto-remplir adresse depuis le quartier
  const adresse=`${c.quartier||''}, ${c.ville||'Tanger'}`.replace(/^, /,'');
  document.getElementById('ram-adresse').value=adresse;
  document.getElementById('ram-adresse').classList.add('autofilled');
  if(c.maps){document.getElementById('ram-maps').value=c.maps;document.getElementById('ram-maps').classList.add('autofilled');}
  document.getElementById('ac-dropdown').style.display='none';
  document.getElementById('new-client-hint').classList.remove('show');
}

function submitRamassage(){
  const nom=document.getElementById('ram-nom').value.trim();
  const tel=document.getElementById('ram-tel').value.trim();
  const adresse=document.getElementById('ram-adresse').value.trim();
  const livreur=document.getElementById('ram-livreur').value;

  if(!nom){alert('Veuillez saisir le nom du client.');document.getElementById('ram-nom').focus();return;}
  if(!tel){alert('Veuillez saisir le téléphone WhatsApp.');document.getElementById('ram-tel').focus();return;}
  if(!adresse){alert('Veuillez saisir l\'adresse pick-up.');document.getElementById('ram-adresse').focus();return;}
  if(!livreur){alert('Veuillez assigner un livreur.');document.getElementById('ram-livreur').focus();return;}

  // Enregistrer nouveau client si pas dans la base
  const exists=clients.find(c=>c.tel.replace(/\s/g,'')===tel.replace(/\s/g,''));
  if(!exists){
    clients.push({nom,tel,quartier:adresse.split(',')[0]||'',ville:'Tanger',type:'Particulier',maps:document.getElementById('ram-maps').value});
  }

  // Créer le ramassage
  const r={
    id:ramCounter++,
    nom,tel,
    adresse,
    maps:document.getElementById('ram-maps').value.trim(),
    creneau:document.getElementById('ram-creneau').value.trim(),
    livreur,
    notes:document.getElementById('ram-notes').value.trim(),
    urgent:document.getElementById('ram-urgent').checked,
    statut:'En attente',
    date:new Date().toLocaleDateString('fr-FR')
  };
  ramassages.unshift(r);
  closeRamModal();
  renderRamassage(ramassages);

  // ── FIRESTORE : sauvegarder le ramassage ──
  (async () => {
    try {
      const { initializeApp, getApps, getApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
      const { getFirestore, collection, addDoc } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
      const firebaseConfig={apiKey:"AIzaSyD1iwObYKpiaqBXpmX1iXaYVZm9FjMpVp8",authDomain:"allo-tapis.firebaseapp.com",projectId:"allo-tapis",storageBucket:"allo-tapis.firebasestorage.app",messagingSenderId:"566002084826",appId:"1:566002084826:web:463f92dd116be3ccdfeee3"};
      const fbApp2=getApps().length?getApp():initializeApp(firebaseConfig);
      const db = getFirestore(fbApp2);
      const docRef = await addDoc(collection(db, 'ramassages'), {
        ...r,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      r._id = docRef.id; // garder l'ID Firestore
      console.log('✅ Ramassage sauvegardé dans Firestore:', docRef.id);
    } catch(e) {
      console.warn('Firestore non disponible, sauvegarde locale seulement:', e.message);
    }
  })();

  // Flash confirmation
  const msg=document.createElement('div');
  msg.style.cssText='position:fixed;top:20px;right:20px;background:#1D9E75;color:white;padding:12px 20px;border-radius:10px;font-size:13px;font-weight:500;z-index:999;box-shadow:0 4px 16px rgba(0,0,0,.2);';
  msg.innerHTML=`✓ Ramassage RAM-${String(r.id).padStart(3,'0')} créé — assigné à ${livreur}${!exists?' · Nouveau client enregistré':''}`;
  document.body.appendChild(msg);
  setTimeout(()=>msg.remove(),4000);
}

// Fermer dropdown si clic ailleurs
document.addEventListener('click',e=>{
  if(!e.target.closest('.autocomplete-wrap'))document.getElementById('ac-dropdown').style.display='none';
});

// ===== INIT =====
goPage('dashboard');





// ══════════════════════════════════════════════════════════
// FIREBASE HELPER — Source unique pour toutes les sauvegardes
// ══════════════════════════════════════════════════════════
let _fbDb = null;
let _fbAddDoc = null;
let _fbUpdateDoc = null;
let _fbDeleteDoc = null;
let _fbDoc = null;
let _fbCollection = null;

async function getDb() {
  if (_fbDb) return _fbDb;
  try {
    const { getFirestore } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    const { addDoc, updateDoc, deleteDoc, doc, collection } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");
    _fbDb = getFirestore();
    _fbAddDoc = addDoc;
    _fbUpdateDoc = updateDoc;
    _fbDeleteDoc = deleteDoc;
    _fbDoc = doc;
    _fbCollection = collection;
    return _fbDb;
  } catch(e) { return null; }
}

async function fbSave(colName, data, id) {
  const db = await getDb();
  if (!db) return null;
  try {
    if (id) {
      await _fbUpdateDoc(_fbDoc(db, colName, id), { ...data, updatedAt: new Date().toISOString() });
      return id;
    } else {
      const ref = await _fbAddDoc(_fbCollection(db, colName), { ...data, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
      return ref.id;
    }
  } catch(e) { console.warn('fbSave error:', colName, e.message); return null; }
}

async function fbDelete(colName, id) {
  const db = await getDb();
  if (!db || !id) return;
  try { await _fbDeleteDoc(_fbDoc(db, colName, id)); }
  catch(e) { console.warn('fbDelete error:', colName, e.message); }
}

// ============================================================
// FIREBASE — Connexion temps réel (s'ajoute aux données statiques)
// Les données statiques s'affichent immédiatement
// Firebase met à jour en arrière-plan quand disponible
// ============================================================
(async function initFirebase() {
  try {
    // Import dynamique Firebase (ne bloque pas le rendu)
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
    const { getFirestore, collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, query, where, serverTimestamp }
      = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

    const firebaseConfig = {
      apiKey: "AIzaSyD1iwObYKpiaqBXpmX1iXaYVZm9FjMpVp8",
      authDomain: "allo-tapis.firebaseapp.com",
      projectId: "allo-tapis",
      storageBucket: "allo-tapis.firebasestorage.app",
      messagingSenderId: "566002084826",
      appId: "1:566002084826:web:463f92dd116be3ccdfeee3"
    };

    const fbApp = initializeApp(firebaseConfig);
    const db = getFirestore(fbApp);

    // Indicateur connexion OK
    function setOnline(ok) {
      const dot = document.getElementById('online-dot');
      const lbl = document.getElementById('online-lbl');
      if (dot) dot.style.background = ok ? '#059669' : '#DC2626';
      if (lbl) lbl.textContent = ok ? '🟢 Firebase connecté' : '🔴 Hors ligne';
    }

    // ── LISTENERS TEMPS RÉEL ──
    // Chaque listener met à jour les données locales ET re-render si nécessaire

    onSnapshot(collection(db, 'commandes'), snap => {
      if (snap.empty) return; // Pas encore de données → garder les statiques
      commandes = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      commandes.sort((a, b) => (b.num || '').localeCompare(a.num || ''));
      setOnline(true);
      if (currentPage === 'commandes') renderCommandes(commandes);
      if (currentPage === 'dashboard') initDashboard();
    }, err => { console.warn('Commandes offline:', err.message); });

    onSnapshot(collection(db, 'bons_livraison'), snap => {
      if (snap.empty) return;
      blData = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      blData.sort((a, b) => (b.num || '').localeCompare(a.num || ''));
      if (currentPage === 'bons-livraison') renderBL(blData);
      if (currentPage === 'dashboard') initDashboard();
    }, err => console.warn('BL offline:', err.message));

    onSnapshot(collection(db, 'ramassages'), snap => {
      if (snap.empty) return;
      ramassages = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      if (currentPage === 'ramassage') renderRamassage(ramassages);
      if (currentPage === 'dashboard') initDashboard();
    }, err => console.warn('Ramassages offline:', err.message));

    onSnapshot(collection(db, 'lignes'), snap => {
      if (snap.empty) return;
      lignesData = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      if (currentPage === 'lignes') renderLignesPage(lignesData);
      if (currentPage === 'app-finition') initAppFinition();
    }, err => console.warn('Lignes offline:', err.message));

    onSnapshot(collection(db, 'clients'), snap => {
      if (snap.empty) return;
      clients = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      clients.sort((a, b) => (a.nom || '').localeCompare(b.nom || ''));
      if (currentPage === 'clients') renderClients(clients);
    }, err => console.warn('Clients offline:', err.message));

    onSnapshot(collection(db, 'tresorerie'), snap => {
      if (snap.empty) return;
      tresoMouvements = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      tresoMouvements.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      if (currentPage === 'tresorerie') initTresoreriePage();
      if (currentPage === 'dashboard') updateTreso();
    }, err => console.warn('Tréso offline:', err.message));

    onSnapshot(collection(db, 'chargements'), snap => {
      if (snap.empty) return;
      chargementsData = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      chargementsData.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      if (currentPage === 'chargements') renderChargements(chargementsData);
    }, err => console.warn('Chargements offline:', err.message));

    onSnapshot(collection(db, 'fid_clients'), snap => {
      if (snap.empty) return;
      fidClients = snap.docs.map(d => ({ _id: d.id, ...d.data() }));
      fidClients.sort((a, b) => b.pts - a.pts);
    }, err => console.warn('Fidélité offline:', err.message));

    // ── ÉCRITURE FIRESTORE ──
    // Override des fonctions de sauvegarde pour persister dans Firestore

    // Sauvegarder commande
    const _origSaveCmd = window.saveCmdForm;
    window.saveCmdForm = async function() {
      _origSaveCmd && _origSaveCmd();
      const cmd = commandes[currentCmdIdx];
      if (!cmd) return;
      try {
        if (cmd._id) await updateDoc(doc(db, 'commandes', cmd._id), { ...cmd, updatedAt: new Date().toISOString() });
        else { const r = await addDoc(collection(db, 'commandes'), { ...cmd, createdAt: new Date().toISOString() }); cmd._id = r.id; }
      } catch(e) { console.warn('Save cmd error:', e); }
    };

    // Sauvegarder ramassage
    const _origSaveRam = window.saveNewRamassage;
    window.saveNewRamassage = async function() {
      _origSaveRam && _origSaveRam();
      const ram = ramassages[ramassages.length - 1];
      if (!ram) return;
      try { await addDoc(collection(db, 'ramassages'), { ...ram, createdAt: new Date().toISOString() }); }
      catch(e) { console.warn('Save ram error:', e); }
    };

    // Sauvegarder charge trésorerie
    const _origSaveCharge = window.saveNewCharge;
    window.saveNewCharge = async function() {
      _origSaveCharge && _origSaveCharge();
      // La charge vient d'être ajoutée à tresoMouvements en local
      const mv = tresoMouvements[0];
      if (!mv || mv._id) return; // déjà synced
      try { const r = await addDoc(collection(db, 'tresorerie'), { ...mv, createdAt: new Date().toISOString() }); mv._id = r.id; }
      catch(e) { console.warn('Save charge error:', e); }
    };

    // Supprimer charge
    const _origDelCharge = window.deleteCharge;
    window.deleteCharge = async function(id) {
      const mv = tresoMouvements.find(m => m.id === id);
      _origDelCharge && _origDelCharge(id);
      if (mv?._id) {
        try { await deleteDoc(doc(db, 'tresorerie', mv._id)); }
        catch(e) { console.warn('Del charge error:', e); }
      }
    };

    // Sauvegarder client
    const _origSaveClient = window.saveClient;
    window.saveClient = async function() {
      _origSaveClient && _origSaveClient();
      const cl = clients[currentClIdx];
      if (!cl) return;
      try {
        if (cl._id) await updateDoc(doc(db, 'clients', cl._id), { ...cl, updatedAt: new Date().toISOString() });
        else { const r = await addDoc(collection(db, 'clients'), { ...cl, createdAt: new Date().toISOString() }); cl._id = r.id; }
      } catch(e) { console.warn('Save client error:', e); }
    };

    // Sauvegarder emplacement finition → synchronise avec l'app Finition
    const _origSaveEmpl = window.saveEmpl;
    if (_origSaveEmpl) {
      window.saveEmpl = async function(id) {
        _origSaveEmpl(id);
        const l = lignesData.find(x => x.id === id);
        if (l?._id) {
          try {
            await updateDoc(doc(db, 'lignes', l._id), {
              empl: l.empl, etat: l.etat, qteTraitee: l.qteTraitee || 0,
              updatedAt: new Date().toISOString()
            });
          } catch(e) { console.warn('Save empl error:', e); }
        }
      };
    }

    // Écouter mises à jour des apps atelier
    window.addEventListener('message', async (e) => {
      if (e.data?.type === 'FINITION_SYNC' && e.data.updates) {
        for (const upd of e.data.updates) {
          const ligne = lignesData.find(l => l.cmdNum === upd.cmdNum && l.numArt === upd.numArt);
          if (ligne?._id) {
            try {
              await updateDoc(doc(db, 'lignes', ligne._id), {
                empl: upd.empl, etat: upd.etat, qteTraitee: upd.qteTraitee,
                syncedBy: upd.syncedBy, updatedAt: new Date().toISOString()
              });
            } catch(e) { console.warn('Finition sync error:', e); }
          }
        }
        showToast('🔗 Emplacement(s) synchronisé(s)', '#1D9E75');
      }

      if (e.data?.type === 'LIVREUR_SYNC' && e.data.update) {
        const u = e.data.update;
        const bl = blData.find(b => b.num === u.blNum);
        if (bl?._id) {
          try {
            await updateDoc(doc(db, 'bons_livraison', bl._id), { etat: u.etat, updatedAt: new Date().toISOString() });
            if (u.etat === 'Livré & Payé' || u.etat === 'Payé') {
              await addDoc(collection(db, 'tresorerie'), {
                date: new Date().toISOString().split('T')[0],
                type: 'recette', categorie: 'Commande payée',
                libelle: `Paiement BL ${u.blNum} — ${u.livreur}`,
                ref: u.blNum, montant: bl.montant || 0,
                saisi: 'App Livreur', mois: new Date().getMonth(),
                createdAt: new Date().toISOString()
              });
            }
          } catch(e) { console.warn('Livreur sync error:', e); }
        }
      }
    });

    console.log('✅ Firebase connecté et listeners actifs');
    setOnline(true);

  } catch(err) {
    // Firebase indisponible → l'app fonctionne quand même en mode statique
    console.warn('Firebase non disponible, mode offline:', err.message);
    const lbl = document.getElementById('online-lbl');
    if (lbl) lbl.textContent = '⚪ Mode hors ligne';
  }
})();
