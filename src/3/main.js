const handler = (event) => {
    event.stopPropagation()
    console.log(event.currentTarget.id)
}

const sm = document.getElementById("small");
const md = document.getElementById("medium");
const bg = document.getElementById("big");

sm.onclick = handler;
md.onclick = handler;
bg.onclick = handler;
//sm.onclick = null;

sm.addEventListener("click", handler);
sm.removeEventListener("click", handler);

/*let a = "my-short-string";
let arr = a.split("-");
let arrUp = arr.map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1));
console.log(arrUp);
let result = arrUp.join("");
console.log(result);





let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(el => ({fullName: el.name + " " + el.surname, id: el.id}))

console.log(usersMapped)*/

/*let arr = [1,22,3,4,5];
function returnMaxNumber(item) {
    return Math.max(...item);
}

console.log(returnMaxNumber(arr));*/

/*
let arr = [[1,2,3], [4,5,6]];

const max = (item) => item.map(el => Math.max(...el));

console.log(max(arr));*/

/*
let arr = [1,2,3,4, false, 5,6];

function deleteNum(item) {
    item.splice(item.indexOf(false), 1);
    return item;
}

console.log(deleteNum(arr));*/

/*
let a1 = [1,2,3,4,5,5];
let b1 = 5;

function getIndex(arr, num) {
    for (let i = 0; i < arr.log; i++) {
        if (arr[i] !== num) {
            return arr[i];
        }
    }
}
console.log(getIndex(a1, b1));*/

let users = {
    '101': {id: 2, name: 'dima'},
    '123124': {id: 122321, name: 'lena'},
    '31': {id: 3123, name: 'kolya'},
    '1': {id: 1, name: 'gena'}
}
let user = {id: 100500, name: 'igor'}
users[user.id] = user
users[user.id].name = 'vitya'

console.log(users)