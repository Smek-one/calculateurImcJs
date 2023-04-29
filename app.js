let btn = document.querySelector('.btn');
let result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
    
    let taille = document.querySelector('.taille').value;
    let poids = document.querySelector('.poids').value;
    tailleEnMetres = Number(taille / 100);
    tailleCalculee = Number(Math.pow(tailleEnMetres, 2));
    let resultat = Number(poids / tailleCalculee);
    console.log(resultat);
    result.innerHTML = "Votre IMC est de : " + resultat;
    e.preventDefault(resultat);
});