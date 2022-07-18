const todolistID_1 = '12fd-45sf'
const todolistID_2 = '34fd-67sf'

const todolist = [
    {
        id: todolistID_1,
        title: 'What to learn',
        filter: 'all',
        tasks: [
            {id: 12, title: 'JS', isDone: false},
            {id: 13, title: 'TS', isDone: false},
            {id: 14, title: 'HTML', isDone: false}
        ]
    },
    {
        id: todolistID_2,
        title: 'What to buy',
        filter: 'all',
        tasks: [
            {id: 22, title: 'Beer', isDone: false},
            {id: 23, title: 'Meat', isDone: false},
            {id: 24, title: 'Fish', isDone: false}
        ]
    }
]

const tasks = {
    todolistID_1: [
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'TS', isDone: false},
        {id: 14, title: 'HTML', isDone: false}
    ],
    todolistID_2: [
        {id: 22, title: 'Beer', isDone: false},
        {id: 23, title: 'Meat', isDone: false},
        {id: 24, title: 'Fish', isDone: false}
    ]
}

let nums = [10, 20, 30]
console.log(nums.reduce((acc, el) => acc + el, 0)) //60 summ all elements of array
console.log(nums.reduce((acc, el) => acc > el ? acc : el)) //30 max value of array
console.log(nums.reduce((acc, el) => acc < el ? acc : el)) //10 min value of array

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {   id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {})) //delete all id elements

console.log(students.reduce((acc, el) => acc + el.scores, 0)) //summa scores