// Part 1: Variables and Conditionals
let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
    console.log(`Hello, ${name}! You are eligible to vote.`);
} else {
    console.log(`Hello, ${name}! You are not eligible to vote.`);
}

// Part 2: Functions
function greetUser(userName) {
    console.log(`Hello, ${userName}! Welcome to our website.`);
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

greetUser(name);
console.log(`Total cost: $${calculateTotal(19.99, 3)}`);

// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number: ${numbers[i]}`);
    sum += numbers[i];
}
console.log(`Sum: ${sum}`);

let fruits = ["Apple", "Banana", "Orange", "Cherry"];

fruits.forEach(fruit => {
    console.log(`Fruit: ${fruit}`);
});

// Part 4: DOM Manipulation
let header = document.getElementById("header");
header.style.color = "#f00";
header.textContent = "Welcome to My Website";

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    alert("Button clicked!");
    let output = document.getElementById("output");
    output.textContent = "Button was clicked!";
});

let list = document.getElementById("list");

for (let i = 1, i <= 5; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    list.appendChild(listItem);
}