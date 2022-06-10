//Деструктуризация, обмен значениями
let first = "Tom";
let second = "Bob";
[first, second] = [second, first];

console.log(first); //Bob
console.log(second);    //Tom

//Сортировка массива
let nums = [5, 3, 1, 8, 9, 0, 2, 6, 4, 7];
for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
        if (nums[i] < nums[j]) [nums[j], nums[i]] = [nums[i], nums[j]];
    }
}
console.log(nums);

