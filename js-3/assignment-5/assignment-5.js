let nums = [];

while(true) {
    const num = Number(prompt("Enter a number: "))
    if (nums.includes(num)) {
        alert("This already exits");
        break;
    }

    else {
        nums.push(num);
    }
}

nums.sort((a,b) => a - b)

for (i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}