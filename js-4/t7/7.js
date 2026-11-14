const img = document.getElementById('target');
const p = document.getElementById('trigger');

p.addEventListener('mouseenter', () => img.src = 'img/picB.jpg')
p.addEventListener('mouseleave', () => img.src = 'img/picA.jpg')