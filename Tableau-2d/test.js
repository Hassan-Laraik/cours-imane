let notes = [];
let eleves =[];

nb_eleve = prompt("Donnez Le nombre Eleves : ","");

for (let index = 0; index < nb_eleve ; index++) {

    eleves[index] = 
    Number(prompt("Entrez le nom de eleve  "+(index+1)+' :',''));
    notes[index] = 
    Number(prompt("Entrez la note de eleve  "+(index+1)+' :',''));
    
}

let somme_note = 0;

for (let i = 0; i < notes.length; i++) {
    console.log("Note de eleve " + eleves[i] + " :" + notes[i] );
    somme_note = somme_note + notes[i];
}

let moyenne_note = somme_note / nb_eleve;

alert("La note de calsse: " + somme_note);
alert("La moyenne de la classe est : " + moyenne_note);

