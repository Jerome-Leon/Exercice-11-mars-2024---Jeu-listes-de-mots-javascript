const listeChats = ["Garfield","Félix","Potté","Sylvestre"];
const listeChiens = ["Rantanplan","Idéfix","Gromit","Zéro"];
let score=0;
let nombreDeMots=0;

// AFFICHAGE RESULTATS

function afficherResultat (score,nombreDeMots){
    alert("Vous avez récolté "+score+" points sur "+nombreDeMots);
};

// CHOIX DE LA LISTE 

function choixChatsOuChiens (){
    let choixDeListe = prompt('Choisissez une liste entre "chats" et "chiens"');
    while (choixDeListe !== "chats" && choixDeListe !== "chiens"){
        choixDeListe = prompt('Erreur de saisie, tapez "chats" ou "chiens"');
    }
    return choixDeListe;
};

// BOUCLE DU JEU 

function boucleDuJeu (listeDeMots){
    for(let i=0; i<listeDeMots.length; i++){
        motUtilisateur=prompt("Tapez le mot suivant : "+listeDeMots[i]);
        if(motUtilisateur===listeDeMots[i]){
            score++;
            console.log("Bravo! Vous marquez 1 point");
        }else{
            console.log("Erreur de saisie, pas de point cette fois" );
        };
    };
    return score;
};

// LANCER LE JEU 

function lancerLeJeu (){
    let choixDeListe = choixChatsOuChiens();
    if(choixDeListe==="chats"){
        score=boucleDuJeu(listeChats);
        nombreDeMots=listeChats.length;
    }else{
        score=boucleDuJeu(listeChiens);
        nombreDeMots=listeChiens.length;
    };
    afficherResultat(score,nombreDeMots);
};

lancerLeJeu();