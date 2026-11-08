let nums = []

while(!nums.includes(0)) {
    const num = Number(prompt("Enter a number"));
    nums.push(num);
}

nums.sort((a, b) => b - a)

for (i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}