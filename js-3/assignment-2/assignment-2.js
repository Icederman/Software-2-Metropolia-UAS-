const parts = Number(prompt("Enter number of participants"));
let names = [];

for (i = 0; i < parts; i++) {
    const name = String(prompt("Enter name: "));
    names.push(name);
}

names.sort();

for (i = 0; i < names.length; i++){
    const li = document.createElement('li');
    li.textContent = names[i]
    document.querySelector('#target').appendChild(li)
}
