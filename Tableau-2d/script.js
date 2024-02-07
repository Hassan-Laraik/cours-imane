let Number_eleve = Number(prompt('Enter le nombre eleve',''));
let examens = new Array(Number_eleve);
for (i=0; i < Number_eleve; i++){
      examens[i] = new Array(3)
}
let p =0;
for (k=0; k <  Number_eleve; k++){     
      examens[k][p] = prompt("Enterz le nom  : ","");
      examens[k][p+1] = Number(prompt("Enterz la note : ",""));
      examens[k][p+2] = prompt("Enterz matiere : ","");     
}
let somme_note = 0;
for (let i = 0; i < Number_eleve ; i++) { 
  somme_note = somme_note + examens[i][1] ;
}

let moyenne_note = somme_note/Number_eleve

alert("Moyenne est :" +  moyenne_note)





 /*      
function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < 3; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 3; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(
            langages[i][j]
        );
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "1");
  }
  */

        