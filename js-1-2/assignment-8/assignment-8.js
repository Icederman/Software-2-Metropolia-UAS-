const start_year = Number(prompt("Enter start year:"))
const end_year = Number(prompt("Enter end year: "))

for (let year = start_year; year <= end_year; year++) {

    if (year % 4 == 0 && year % 100 != 0) {
       const li = document.createElement('li')
       li.textContent = year
       document.querySelector('#target').appendChild(li)
    }

    else if (year % 400 == 0) {
       const li = document.createElement('li')
       li.textContent = year
       document.querySelector('#target').appendChild(li)
    }
}