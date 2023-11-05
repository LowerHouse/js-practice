const shopList = document.querySelector('.shopList')

function addItem(shopItem){
    const item = document.createElement('li')
    item.classList.add('item')
    item.textContent = shopItem
    shopList.appendChild(item)
}

const itemAddBtn = document.querySelector('#itemAddBtn');
itemAddBtn.addEventListener('click', (e) => {
    addItem(document.querySelector('#shopInput').value)
});

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// const pRed = document.createElement('p')
// pRed.classList.add('pRed')
// pRed.textContent = 'Hey, i\'m red!'
// pRed.style.cssText = 'color: red;'

// container.appendChild(pRed)

// const h3Blue = document.createElement('h3')
// h3Blue.classList.add('h3Blue')
// h3Blue.textContent = 'Hey, i\'m blue h3!'
// h3Blue.style.cssText = 'color: blue;'

// container.appendChild(h3Blue)


// const borderContainer = document.createElement('div');
// borderContainer.classList.add('borderContainer');
// borderContainer.style.cssText = 'border:black solid; background-color:pink;'

// const h1 = document.createElement('h1')
// h1.classList.add('h1')
// h1.textContent = 'i\'m in a div'

// borderContainer.appendChild(h1)

// const p = document.createElement('p')
// p.classList.add('p')
// p.textContent = 'ME TOO!'

// borderContainer.appendChild(p)

// container.appendChild(borderContainer);

// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");

// const btnE = document.querySelector('#btnE');
// btnE.addEventListener('click', (e) => {
// //   alert("Hello World");
//   console.log(e.target);
//   e.target.style.background = 'blue';
// });

// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
// });
// let admin;
// let name;
// let a = 10;
// const MAX = 57;

// name = 'John';
// console.log(name)

// admin = name

// //alert(admin)

// console.log(342 + 432)
// let sum = 5 + 4 + 30 + 5399 + 24 + 54;

// console.log(sum)

// console.log((4 + 6 + 9) / 77)

// console.log(a)

// let actual = MAX - 13
// let percentage = actual/MAX

// console.log(percentage)

// console.log(`Hello ${name}`)

// let fruitList = "Apple, Banana, Kiwi";
// let part = fruitList.slice(7);
// console.log(part)

// let greetings = 'Please visit Microsoft!';
// let newGreetings = greetings.replace('Microsoft', 'The odin Project')
// console.log(newGreetings)

// let textToTrim = "      Hello World!      ";
// let trimText = textToTrim.trim();

// console.log(trimText)

// function add7(num){
//     return num + 7
// }

// console.log(add7(3))

// function multiply(num1, num2){
//     return num1*num2
// }

// console.log(multiply(3, 9))

// function capitalize(str){
//     return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
// }

// console.log(capitalize('kDlsSlaA ASDAKJD asdkjsadlk'))

// function lastLetter(str){
//     return str.slice(-1)
// }

// console.log(lastLetter('asdkjskdjasdl'))

