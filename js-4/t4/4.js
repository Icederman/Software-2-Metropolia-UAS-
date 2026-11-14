'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

students.forEach(i => {
  const opt = document.createElement('option');
  opt.textContent = i.name;
  opt.value = i.id;
  target.appendChild(opt);
})