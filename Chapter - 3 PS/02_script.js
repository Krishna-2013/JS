let i = 0;
const num = Math.floor(Math.random() * 101);

let user = Number(prompt("Guess the number (0 to 100): ", i++));
console.log("Your input =", user);

while (user !== num) {
    if (num < user) {
        user = Number(prompt("Lower number please (0 to 100): ", i++));
        console.log("Your input =", user);
    } else if (num > user) {
        user = Number(prompt("Higher number please (0 to 100): ", i++));
        console.log("Your input =", user);
    }
}

alert(`You entered the right number ${num}. In ${i} tries`);
console.log(`You entered the right number ${num}. In ${i} tries`);
