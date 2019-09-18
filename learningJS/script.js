"using strict"
const sentence = document.getElementById("sentence");

const name = prompt("Please enter  your name");
const coffees = prompt("Enter the number of coffees you would like to order.");
const tip = prompt("Please enter the tip you would like to leave.");
const totalPreTip = (coffees * 4.75 + 3) * 1.07;
sentence.innerHTML = `${name} ordered ${coffees} coffees. Total: $${totalPreTip.toFixed(2)}`;