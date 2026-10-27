const dice_num = Number(prompt("Enter number of die: "))
const sum = Number(prompt("Enter sum of the eye numbers of interest: "))
const max = 10000
let roll = 0
let dice_sum
let times = 0


function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

for (let i = 0; i < max; i++) {
    for (let j = 0; j < dice_num; j++){
        roll = randInt(1,6)
        dice_sum += roll
    }

    if (dice_sum == sum){
        times += 1
    }

    dice_sum = 0
}

const prob = (times / max) * 100

document.querySelector('#target').innerHTML = `Probability to get sum ${sum} with ${dice_num} dice is ${prob}%`