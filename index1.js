/*
const arr = []
arr.push(1,2,3,4,5,6,7,8,9,10)
console.log(arr);
arr.unshift(1);


arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.splice(3,2)
console.log(arr);

arr.splice(3,0, 5)
console.log(arr);

new_array = arr.slice(0);

const newArr =  new_array.slice(0, arr.length / 2)
console.log(newArr)


const arr3 = [,,,,,,,,]
console.log(arr3)
arr3.fill(0, 0, 4)
console.log(arr3)

let filtered = arr3.filter(function (el) {
  return el != null;
});

console.log(filtered);


let arr4 = [1,2,3,4,5,6,7,8,9,10]
console.log(arr4);

let roots = arr4.map(Math.sqrt);


console.log(roots);

const elem = ['Andrey', 'Igor', 'Inna'];
console.log(elem.join('&&'));



//////////////////////////////////////////////////////

///Последнее не получилось правильно сделать (

let products = []; 

products[0] = {
    id:1,
    name: "Apples",
    Price: 30,
    inStock : true,
    availability: 50

}
products[1] = {
   id:2,
   name: "Pear",
   Price: 40,
   inStock : false,
   availability: 0,
}

products[2] = {
  id:3,
  name: "Melon",
  Price: 20,
  inStock : true,
  availability: 100
}

products[3] = {
  id:4,
  name: "Oranges",
  Price: 70,
  inStock : true,
  availability: 3

}

let availableProducts = products.filter(function (el) {
  return el.Price > 5 &&
         el.inStock >= true;
});
console.log(availableProducts);



let cart = [];


const name222 = prompt('Введите ID продукта');

let total = cart.push(name222);

console.log(cart);


*/

  class Userclass {
    constructor( username, age, password, male){
    this.username = username;
    this.age = age;
    this.password = password;
    this.male = male;
    this.func = function () {}


  }
}

 


new Userclass ("asas", "asasas")
console.log(Userclass)