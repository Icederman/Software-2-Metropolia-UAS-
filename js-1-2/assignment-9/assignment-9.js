const num = Number(prompt("Enter a number"))
let prime = true

for ( let i = 2; i < num; i++ ){
    if ( num % i == 0 ) {
        prime = false
        break
    }
}


if (prime && num != 1 && num > 0){
    document.querySelector('#target').innerHTML = `${num} is a prime number`
}

else {
    document.querySelector('#target').innerHTML = `${num} is not a prime number`
}