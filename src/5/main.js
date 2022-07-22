const names = ['Bob', 'Donald', 'Alex', 'alex', '007', 'юрий'];
console.log(names.sort());

const num = [100, 9, 1000, 66, 1];
console.log(num.sort());

const compareFunction = (a, b) => { //по возврастанию :const compareFunction = (a, b) => a - b

    if (a > b) {
        return 1000;
    } else {
        return -10;
    }
}
console.log(num.sort(compareFunction));
console.log(num.sort(compareFunction).reverse());

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log(students.sort((a, b) => b.scores - a.scores)); //по убыванию
console.log(students.sort((a, b) => a.name.localeCompare(b.name))); //сортирует по порядку
console.log(students.sort((a, b) => a.name.toUpperCase > b.name.toUpperCase) ? 1 : -1);
console.log(students.sort((a, b) => a.name.toUpperCase > b.name.toUpperCase)); // toUpperCase работает только в условии, на выходе исходный массив обьектов

/*const nums = [32, 12, 21, 45, 32, 23, 11];
for (let i = 0; i < nums.length - 1; i++) {  // возвращает наибольшее число в конец массива
    if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
    }
}
console.log(nums);*/

const nums = [32, 12, 21, 45, 62, 23, 11];
for (let j = 0; j < nums.length - 1; j++) {  // возвращает массив по возврастанию
    let isSorted = true;
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
/*
            const temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
*/
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]];
        }
    }
    if (isSorted) break;
}
console.log(nums);
