let nums = []

for (let i = 0; i < 5; i++) {
    const num = Number(prompt("Enter a number"));
    nums.push(num);
}

for (let i = 4; i >= 0; i--) {
    console.log(nums[i]);
}