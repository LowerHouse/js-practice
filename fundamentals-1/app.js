let admin;
let name;
let a = 10;
const MAX = 57;

name = 'John';
console.log(name)

admin = name

//alert(admin)

console.log(342 + 432)
let sum = 5 + 4 + 30 + 5399 + 24 + 54;

console.log(sum)

console.log((4 + 6 + 9) / 77)

console.log(a)

let actual = MAX - 13
let percentage = actual/MAX

console.log(percentage)

console.log(`Hello ${name}`)

let fruitList = "Apple, Banana, Kiwi";
let part = fruitList.slice(7);
console.log(part)

let greetings = 'Please visit Microsoft!';
let newGreetings = greetings.replace('Microsoft', 'The odin Project')
console.log(newGreetings)

let textToTrim = "      Hello World!      ";
let trimText = textToTrim.trim();

console.log(trimText)

function add7(num){
    return num + 7
}

console.log(add7(3))

function multiply(num1, num2){
    return num1*num2
}

console.log(multiply(3, 9))

function capitalize(str){
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

console.log(capitalize('kDlsSlaA ASDAKJD asdkjsadlk'))

function lastLetter(str){
    return str.slice(-1)
}

console.log(lastLetter('asdkjskdjasdl'))