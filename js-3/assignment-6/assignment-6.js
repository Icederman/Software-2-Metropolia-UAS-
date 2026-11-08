function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

function roller(){
    return randInt(1,6)
}

let rolls = []

while(!rolls.includes(6)) {
    const roll = roller();
    rolls.push(roll);
}



for (let i = 0; i < rolls.length; i++) {
    let li = document.createElement('li');
    li.textContent = rolls[i]
    document.querySelector('#target').appendChild(li)
}