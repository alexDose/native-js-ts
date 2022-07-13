const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
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
        scores: 100
    }
];

const addScores = (arr) => {
    const result = []
    const getNewValue = (el) => (
        {...el, scores: el.scores + 10}
    )
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i]);
        result[i] = newValue
    }
    return result
}

const getMappedArray = (arr, mapFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = mapFn(arr[i]);
        result[i] = newValue
    }
    return result
}

const getFilteredArray = (arr, filterFn) => {
    const result = []
    for (let i=0; i<arr.length;i++) {
        const newValue = filterFn(arr[i]);
        if (newValue === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age > 20))

const student = {
    name: "Bob",
    age: 22,
    isMaried: true,
    scores: 85
}

const copyStudent = {}
copyStudent.name = student.name
copyStudent.age = student.age

const keys = Object.keys(student)
console.log(keys)

for (let i=0; i<keys.length; i++) {
    copyStudent[keys[i]] = student[keys[i]]
}

const copyStudent2 = {...student}

console.log(students.map(st => {
    if(st.name === "Nick") {
        return {...st, isMarried: true}
    }
}))