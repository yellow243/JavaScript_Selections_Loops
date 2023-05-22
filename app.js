console.log("Hello World!\n==========\n");

// Exercise 1: Ignore Evens

console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i+=2){
        console.log(i)
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++){

    console.log(i)
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ")
    } else {
        if (i % 3 == 0){
            console.log("FIZZ")
        }
        if (i % 5 == 0){
            console.log("BUZZ")
        }
    }
}

let i = 1;

while (i <= 100){
    let output = "";

    if (i % 3 == 0){
        output += "FIZZ"
    }
    if(i % 5 == 0){
        output += "BUZZ"
    }
    console.log(`${i} ${output}`);
    i++;

}
// Exercise 3
console.log("Exercise 3");

let x = 1
do {
    let output = "";

    if (x % 3 == 0){
        output += "FIZZ"
    }
    if(x % 5 == 0){
        output += "BUZZ"
    }
    console.log(`${x} ${output}`);
    i++;
}
while (x <= 100);


let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++){
    if (i == numberToFind){
        console.log(`Found ${numberToFind}!`);
        break;
    }
}

console.log(`Did not find ${numberToFind} within 1-${n}..`)