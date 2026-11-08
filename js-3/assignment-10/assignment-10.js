let cand_num = Number(prompt("Enter number of candidates: "))
let cand_info = [];

for (let i = 0; i < cand_num; i++) {
    let cand_name = String(prompt("Enter name of the candidate: "))
    cand_info.push({
        name: cand_name,
        votes: 0,
    })
}

let voters_num = Number(prompt("Enter number of voters: "))

for (let i = 0; i < voters_num; i++){
    const vote = String(prompt("Who do you want to vote for? "));
    for (let j = 0; j < cand_info.length; j++){
        if (vote === cand_info[j].name) {
            cand_info[j].votes += 1
        }
    }
}

cand_info.sort((a, b) => b.votes - a.votes)

console.log(`The winner is ${cand_info[0].name} with ${cand_info[0].votes} votes.`)
console.log("results:")

for (let i = 0; i < cand_info.length; i++) {
    console.log(`${cand_info[i].name}: ${cand_info[i].votes} votes`)
}

