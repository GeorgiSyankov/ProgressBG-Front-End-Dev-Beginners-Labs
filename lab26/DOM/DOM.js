// TASK: "item 2" == 'ITEM 2'
// get second li as li2
li2 = document.querySelector('li:nth-child(2)');
// li2.innerHTML =  li2.innerHTML.toUpperCase();
li2.innerHTML = '<i>aaaa</i>';


let ul = document.querySelector('ul');

let newLI =  document.createElement('li');
console.dir(newLI);
newLI.innerHTML = 'Item 0';


ul.insertBefore(newLI);




