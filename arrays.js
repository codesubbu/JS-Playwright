let p =["Subbu", "edhj"];
console.log(p[0]);
//push
p.push("usha","pooja");
console.log(p[3]);
//pop - remove last elemest from arrays

p.pop();
console.log(p);

//shift method

let vegies = ["carrot","Bettrrot","cucumner","beans","okhra"]
let shiftedvegie = vegies.shift();
console.log(shiftedvegie);

//unsfhift - add new element in first and returns nelement length not the elements
let color = ['blue','pink','white','green','orange','black'];

let newcolor= color.unshift('magenta');
console.log(color);
console.log(newcolor);

//splice - adds and removes element whereverr we wanrt 
let animals = ['cats','dogs','cheetah','bull']
animals.splice(1,2,'tiger','lion');
console.log(animals);
//slice - removes the elements and returns except last element
console.log(animals.slice(1,3));

//concat - joins 2 array
let fruits = ['apple','banan','chikoo'];
let nu = ['chapati','poouri',2,5]
console.log(fruits.concat(nu));

//indexof = element index
console.log(fruits.indexOf('banan'));