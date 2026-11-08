let strs = ["Johnny","DeeDee","Joey","Marky"];

function concat(strs) {
    let final_str = "";
    for (let i = 0; i < strs.length; i++) {
        final_str += strs[i] ;
    }

    return final_str;
}

document.querySelector('#target').innerHTML = concat(strs)