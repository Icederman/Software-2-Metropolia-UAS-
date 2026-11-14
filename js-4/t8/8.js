const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const calc = document.querySelector('button');
const sel = document.getElementById('operation');
const p = document.getElementById('result');

function calculate() {
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    if(sel.value === "add") {
        return n1 + n2;
    }

    else if (sel.value === "sub") {
        return n1 - n2;
    }

    else if (sel.value === "multi") {
        return n1 * n2;
    }

    else if (sel.value === "div") {
        return n1 / n2;
    }
}

function result() {
    let r = calculate();
    p.textContent = r;
}

calc.addEventListener('click', result)
