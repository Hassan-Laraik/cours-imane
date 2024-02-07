function domFunction() {
  document.getElementById("resultat").innerHTML =
    document.querySelectorAll("p")[1].innerHTML;
}











/*
function domFunction() {

    let monParagraphe = document.getElementById('monParagraphe');
    let resultat = document.getElementById('resultat');
    resultat.innerHTML = monParagraphe.innerHTML;
}


function domFunction() {

    let monParagraphe = document.getElementsByTagName("p")[0];
    let resultat =document.getElementsByTagName("span")[0];
    resultat.innerHTML = monParagraphe.innerHTML;
}


function domFunction() {

    let redClass = document.getElementsByClassName("red")[1];
    let resultat = document.getElementById("resultat");
    resultat.innerHTML = redClass.innerHTML;
}
*/