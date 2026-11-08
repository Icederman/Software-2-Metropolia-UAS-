let names = []

for (i = 0; i < 6; i++) {
    const name = String(prompt("Enter name: "));
    names.push(name);
}

names.sort().reverse();

for (i = 0; i < names.length; i++){
    const li = document.createElement('li');
    li.textContent = names[i]
    document.querySelector('#target').appendChild(li)
}