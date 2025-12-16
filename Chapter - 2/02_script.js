// Artimetic Operators: 

let a = 5;
let b = 2;

console.log("\n\nArtimetic Operators: ");
console.log("a = ", a, " & b = ", b);
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);

// modulus operators: 
console.log("\n\nModulus Operators: ");
console.log("a % b = ",a%b);

// Exponentiation: 
console.log("\n\nExponentiation operators: ");
console.log("a to the power b = ", a**b) //5^2 = 25

// Uary operators: 
/* For Increment, a++ == a+1 and,
For decrement a-- == a-1 */

console.log("\n\nIncrement and decrement operators: ");
a++
console.log("a + 1 = ",a);

a--
console.log("a - 1 = ",a);


console.log("\n++a = ", ++a); //pre
console.log("a++ = ", a++); //post
console.log("a = ", a);

console.log("\n--a = ", --a); //pre
console.log("a-- = ", a--); //post
console.log("a = ", a);

// Asignment Operators: 
console.log("\n\nAsignment operators: ");

a += 4; // a = a+4
console.log("a += 4 = ",a);

a -= 4; // a = a-4
console.log("a -= 4 = ",a);

a *= 4; // a = a*4
console.log("a *= 4 = ",a);

a /= 4; // a = a/4
console.log("a /= 4 = ",a);

a %= 4; // a = a%4
console.log("a %= 4 = ",a);

a **= 4; // a = a**4
console.log("a **= 4 = ",a);


// Comparison Operators: 
console.log("\n\nComparison Operators: ");

/* 
Equal to is ==
Not Equal to is !=
*/

console.log("a = b is ", a == b);
console.log("a ≠ b is ", a != b);

let x = 5;
let y = "5";
console.log("\nx = y is ", x == y); //true because double equal to makes the string into number than compeare


/*
strict Equal to is ====;
strict not equal to is !==;
that never rerurn true when it compeares string and number
*/

console.log("x = y is ", x === y);//false

console.log("\na is greater than b is ", a>b);
console.log("a is less than b is ", a<b);
console.log("a greater than b or equal to b is ", a>=b);
console.log("a less than b or equal to b is ", a<=b);

// Logical Operators:
console.log("\n\nLogical Operators: ");

console.log(`
Logical "And" = &&
Logical "Or" = ||
Logical "Not" = ! //It reverse like, !(5 === 10); that returns true

    condition 1    |  Condition 2   |     &&    |     ||
---------------------------------------------------------
    True	   |     True	    |    True   |   True    |
---------------------------------------------------------
    True	   |     False	    |    False  |   True    |
---------------------------------------------------------
    False	   |     True	    |    False  |   True    |
--------------------------------------------------------
    False	   |     False	    |    False  |   False   |
`);