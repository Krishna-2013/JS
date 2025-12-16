let list = ["Potato", "Cucumber", "Tomato", "Apple", "Mango"];

list.push("Jackfruit");
console.log(list);

list.pop()
console.log(list);

console.log(list.toString());

let marvel_heros = ["Thor", "Spiderman", "Ironman", "Dr.strange"];
let dc_heros = ["Superman", "Batman"];

heros = marvel_heros.concat(dc_heros);
console.log(heros);

heros.unshift("Krish");
console.log(heros);

heros.shift();
console.log(heros);

console.log(heros.slice(1, 3));


let num = [0, 1, 2,3, 4, 5, 6, 7, 8, 9];

// num.splice(2,2,10,11);

//add element: 
// num.splice(2, 0, 45);

//remove element: 
// num.splice(3,1);

//replace element: 
// num.splice(5,1,101);
console.log(num);