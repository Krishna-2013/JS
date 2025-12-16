let full_name = prompt("Hey! Enter your full name here: ");
let full_name_without_any_space = full_name.split(" ").join("");
let full_name_lowercase = full_name_without_any_space.toLowerCase();
let usernmae = "@".concat(full_name_lowercase).concat(full_name_lowercase.length);
console.log(usernmae);