const answer = confirm("Should I calculate the root?");

if (answer == true) {
    const num = prompt("Enter a number: ")
    if (num >= 0){
        const sqr = Math.sqrt(num)
        document.querySelector('#target').innerHTML = sqr
    }
    
    else {
        document.querySelector('#target').innerHTML = "The square root of a negative number is not defined"
    }
}

else {
    document.querySelector('#target').innerHTML = "The square root is not calculated."
}