target = document.getElementById('target');
let items = ["First item","Second item","Third item"];

items.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    target.appendChild(li);
})

target.children[1].classList.add('my-item');