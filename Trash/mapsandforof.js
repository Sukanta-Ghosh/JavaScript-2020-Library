var john = {
    name: 'I am John',
    age: 24,
    Active: true,
}

var marry = {
    name: 'I am Marry',
    age: 23,
    Active: true,
}

var sam = {
    name: 'I am Sam',
    age: 29,
    Active: false,
}

let users = new Map()

// set() takes key,value pair. key ccan be anything.
users.set('John', john)
users.set('Marry', marry)
users.set('sam', sam)

//users.size can give number of entities inside a map. .size is property.
//console.log(users.size) 

//console.log(users.get('John'))
//console.log(users.keys())
//console.log(users.values())

//for of loop
for (const key of users.keys()) {
    //console.log(key)
}

//for of loop using key,value pair
for (const [key, value] of users.entries()) {
    //console.log(`${key}: ${value.name}`)
}

//for-each loop using arrow function
users.forEach((value, key) => console.log(`${key}: ${value.name}`))

//Array to Map
let arrtoArr = [['one',1], ['two',2], ['three',3]]
let newMap = new Map(arrtoArr)

console.log(newMap)
