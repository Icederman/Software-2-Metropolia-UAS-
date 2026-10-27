let year

year = prompt("Type a year");
year = parseInt(year);

if (year % 4 == 0 && year % 100 != 0) {
    document.querySelector('#target').innerHTML = `${year} is a leap year`
}

else if (year % 400 == 0) {
    document.querySelector('#target').innerHTML = `${year} is a leap year`
}

else {
    document.querySelector('#target').innerHTML = `${year} is not a leap year`
}