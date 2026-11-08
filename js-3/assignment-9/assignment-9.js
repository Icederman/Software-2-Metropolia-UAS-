let nums = [1,2,3,4,5,6];

function even(nums) {
    let even_nums = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
            even_nums.push(nums[i]);
        }
    }

    return even_nums;
}

even_nums = even(nums);

for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

for (let i = 0; i < even_nums.length; i++){
    console.log(nums[i]);
}
