let btn = document.querySelector('.btn');
let result = document.querySelector('.result');






btn.addEventListener('click', (e) => {
    
    //RECUPERATION & CALCUL IMC
    let taille = document.querySelector('.taille').value;
    let poids = document.querySelector('.poids').value;
    tailleEnMetres = Number(taille / 100);
    tailleCalculee = Number(Math.pow(tailleEnMetres, 2));
    let resultat = parseInt(poids / tailleCalculee);
    result.innerHTML = "Votre IMC est de : " + resultat;
    e.preventDefault(resultat);
    

    //AFFICHAGE CATEGORIE
    let hint = document.querySelector('.hint');
    let conseil = document.querySelector('.conseil');
    let maigre = "Vous êtes maigre";
    let normal = "Vous avez le poids idéal";
    let surpoids = "Vous êtes en surpoids";
    let obese = "Vous êtes en obésité modéré";
    let obeseSevere = "Vous êtes en obésité sévère";

    if(taille === "" || poids === ""){
        conseil.innerHTML = "Veuillez saisir des données...";
        result.innerHTML = "";
    }else if (resultat < 16.5) {
        hint.innerHTML = "Vérifiez vos données..."        
    }else if (resultat >16.5 && resultat < 18.5) {
        hint.innerHTML = maigre;
        conseil.innerHTML = "Votre poids est insuffisant et peut occasionner certains risques pour la santé.";
    }else if (resultat > 18.5 && resultat <25) {
        hint.innerHTML = normal;
        conseil.innerHTML = "Votre poids n'augmente pas les risques pour votre santé.";
    }else if(resultat > 25 && resultat < 30){
        hint.innerHTML = surpoids;
        conseil.innerHTML = "Excès de poids pouvant occasionner certains risques pour votre santé.";
    }else if(resultat > 30 && resultat <35){
        hint.innerHTML = obese;
        conseil.innerHTML = "Obésité, risque accru de développer certaines maladies.";
    }else if(resultat > 35){
        hint.innerHTML = obeseSevere;
    }
    e.preventDefault(hint);

    document.form.reset();
    
});


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
