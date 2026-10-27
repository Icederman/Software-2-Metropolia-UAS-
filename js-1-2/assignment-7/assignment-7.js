const rolls = Number(prompt("Enter number of rolls: "))
let roll_list = []
let sum = 0

function randInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

for (let i = 0; i < rolls; i++){
    const roll = randInt(1,6)
    roll_list.push(roll)
}

roll_list.forEach((i) => {
    sum += i
})

console.log(sum)