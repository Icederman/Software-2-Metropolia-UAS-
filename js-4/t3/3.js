'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');

names.forEach(text => {
    target.innerHTML += "<li>" + text + "</li>";
})