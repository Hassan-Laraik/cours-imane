const Notes = [];
let element = document.getElementById('element');

for (let index = 0; index < 4; index++) {
    
    Notes[index]= prompt('Entrer La Note : ','');
    
}
element.innerHTML = Notes[2];
for (let i = 0; i < Notes.length; i++) {
     element.innerHTML += Notes[i];
    
}


