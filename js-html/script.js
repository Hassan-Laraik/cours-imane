function Somme(chiffre1,chiffre2) {
    return(chiffre1 + chiffre2);
}

 let resultat = document.getElementById('resultat');
 let alert1  =  document.getElementById('alert1');
 let alert2  =  document.getElementById('alert2');

function Calculer_Somme() {
    alert1.innerHTML = "";
    alert2.innerHTML = "";

    let Chiffre1 = Number(document.getElementById("Chiffre1").value);
    let Chiffre2 = Number(document.getElementById("Chiffre2").value);
    
    if (Chiffre1 <= 0 ) {
        alert1.innerHTML = "** Champ doit etre non vide";
        return;
    } 
   
    if (Chiffre2 <= 0 ) {
        alert2.innerHTML = "** Champ doit etre non vide";
        return;
    } 
    
        
        resultat.innerHTML = Somme(Chiffre1,Chiffre2);
    
      
}















//var resultat = document.getElementById("resultat");


/*function Calculer_Somme() {
    let  a = Number(prompt("Entrez Le Premier chiffre  : ",""));
    let  b = Number(prompt("Enterz le dexieme chiffre  : ",''));
    if (a > 0 && b > 0 ) {
        resultat.innerHTML= Somme(a,b);
    } else {
       resultat.innerHTML = "Operation Non Valide";
    } 
}*/




 
 