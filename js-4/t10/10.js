const form = document.getElementById('source');
const p = document.getElementById('target');

function read(event) {
    event.preventDefault();
    const firstName = form.elements.firstname.value;
    const lastName = form.elements.lastname.value;

    p.textContent = "Your name is " + firstName + " " + lastName;
}

form.addEventListener('submit', read)