const inp = document.getElementById('calculation');
const p = document.getElementById('result');
const calc = document.querySelector('button');

function calculate(){

    if(inp.value.includes("+")){
        const nums = inp.value.split("+");
        let sum = 0;
        nums.forEach(i => {
            sum += Number(i);
        });
        return sum;
    }

    else if (inp.value.includes("-")) {
        const nums = inp.value.split("-");
        const n1 = Number(nums[0]);
        const n2 = Number(nums[1]);

        return n1-n2;
    }

    else if(inp.value.includes("*")){
        const nums = inp.value.split("*");
        const n1 = Number(nums[0]);
        const n2 = Number(nums[1]);

        return n1*n2;
    }

    else if(inp.value.includes("/")){
        const nums = inp.value.split("/");
        const n1 = Number(nums[0]);
        const n2 = Number(nums[1]);

        return n1/n2;
    }
}

function result(){
    p.textContent = calculate();
}

calc.addEventListener('click', result);