function appendP() {
    
    let body = document.getElementsByTagName("body")[0];

    let monP = document.createElement("p")
   console.log(monP);
   body.appendChild(monP);
   monP.innerHTML="Bravo";
}