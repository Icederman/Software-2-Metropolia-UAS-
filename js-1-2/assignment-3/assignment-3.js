let first_num, second_num, third_num;

first_num = prompt("Type first number");
second_num = prompt("Type second number");
third_num = prompt("Type third number");

first_num = parseInt(first_num)
second_num = parseInt(second_num)
third_num = parseInt(third_num)

let sum, product, average;

sum = first_num + second_num + third_num
product = first_num * second_num * third_num
average = sum / 3

document.querySelector('#target').innerHTML = `Sum: ${sum}, Product: ${product} and Average: ${average}`