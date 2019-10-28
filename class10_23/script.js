//let person = new Object();

//let person = {};
/*
let person = {
    firstName: "John",
    lastName: "Smith",
    age: 20,
    hobbies: ["reading", "learning", "studying"]
}

console.log(person.firstName + " " + person.lastName)

//Get a key from the user and display the value 

let key = "firstName";
console.log(person[key]);
console.log(person["lastName"]);

//Loop through the keys
for(key in person)
{
    console.log(key + ": " + person[key])
}

let MenuItem = {
    Cheese: 3,
    Banana: 2,
    OJ: 5,
}

let total = 0;

for(key in MenuItem)
{
    MenuItem[key] = MenuItem[key]*2
    total += MenuItem[key];
    console.log(key + ": " + MenuItem[key])
}

console.log(total);*/

window.onload = function()
{
    const radiusButton = this.document.getElementById("radius-button");
    radiusButton.onclick = displayRadius;
}

function Circle(radius)
{
    this.radius = radius;

    this.getArea = function()
    {
        return Math.PI * Math.pow(this.radius, 2);
    }

    this.getPerimeter = function()
    {
        return 2 * Math.PI * radius;
    }
}

function displayRadius()
{
    let input = document.getElementById("radius-input").value;
    const resultsPara = document.getElementById("results");

    let newCircle = new Circle(input);

    resultsPara.innerHTML = "Area: " + newCircle.getArea() + "<br> Perimeter: " + newCircle.getPerimeter();
}