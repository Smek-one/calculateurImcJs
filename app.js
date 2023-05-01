let btn = document.querySelector('.btn');
let result = document.querySelector('.result');



btn.addEventListener('click', (e) => {
    
    //RECUPERATION & CALCUL IMC
    let taille = document.querySelector('.taille').value;
    let poids = document.querySelector('.poids').value;
    tailleEnMetres = Number(taille / 100);
    tailleCalculee = Number(Math.pow(tailleEnMetres, 2));
    let resultat = Number(poids / tailleCalculee);
    result.innerHTML = "Votre IMC est de : " + resultat;
    e.preventDefault(resultat);

    //AFFICHAGE CATEGORIE
    let hint = document.querySelector('.hint');    
    let maigre = "Vous êtes maigre";
    let normal = "Vous avez le poids idéal";
    let surpoids = "Vous êtes en surpoids";
    let obese = "Vous êtes en obésité modéré";
    let obeseSevere = "Vous êtes en obésité sévère";
    
    if (resultat >16.5 && resultat < 18.5) {
        hint.innerHTML = maigre;
    }else if (resultat > 18.5 && resultat <25) {
        hint.innerHTML = normal;
    }else if(resultat > 25 && resultat < 30){
        hint.innerHTML = surpoids;
    }else if(resultat > 30 && resultat <35){
        hint.innerHTML = obese;
    }else if(resultat > 35){
        hint.innerHTML = obeseSevere;
    }
    e.preventDefault(hint);
});
