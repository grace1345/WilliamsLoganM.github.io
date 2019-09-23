"using strict"
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const prodName = document.getElementById("prodName");
const count = document.getElementById("count");
const price = document.getElementById("price");
const tax = document.getElementById("tax");
const sentence = document.getElementById("sentence");
const total = document.getElementById("total");

firstName.innerHTML = 'Logan';
lastName.innerHTML = 'Williams';
prodName.innerHTML = 'Beach Ball';
count.innerHTML = '3';
price.innerHTML = '3.47';
tax.innerHTML = '0.07';

const cost = (price.innerHTML * count.innerHTML * 1.07); 

sentence.innerHTML = `${firstName.innerHTML} ${lastName.innerHTML}  ordered ${count.innerHTML} ${prodName.innerHTML}(s)`;
total.innerHTML = `$${cost.toFixed(2)}`;