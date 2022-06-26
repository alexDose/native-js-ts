const user = {
    name: "Alex",
    age: 18,
    isOnline: false
} // ссылка на ячейку №123
const user2 = user // ссылка на ячейку №123
console.log(user2 === user) //true
user2.name ="Bob"
console.log(user)
console.log({}==={}) //false

const arr = []
const arr2 = arr

const copyUser = {}
copyUser.name = user.name
copyUser.age = user.age
copyUser.isOnline = user.isOnline
copyUser.friends = ["Alex", "Mila", "Bob"]

user.isOnline = true

const copyUser2 = {...user, city: "Minsk"} //spread. копия объекта, а не ссылки
// + добавили новый ключ: значение
// но, если в объекте есть массивы или объекты, то они копируются как ссылки

const copyUser3 = {...copyUser, friends: [...copyUser.friends]}
copyUser3.friends.push("Anna")
console.log(copyUser)