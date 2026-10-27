const name = prompt("Type your name");

function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

const class_num = randInt(1,4)

if (class_num == 1){
    document.querySelector('#target').innerHTML = `${name}, you are Gryffindor.`;
}

else if (class_num == 2) {
    document.querySelector('#target').innerHTML = `${name}, you are Slytherin.`;
}

else if (class_num == 3) {
    document.querySelector('#target').innerHTML = `${name}, you are Hufflepuff.`;
}

else {
    document.querySelector('#target').innerHTML = `${name}, you are Ravenclaw.`;
}