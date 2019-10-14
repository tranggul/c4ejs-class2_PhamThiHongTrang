const f = prompt('Enter a number');
let factorial = 1;
for(let i = 1; i<=f; i++){
    factorial= factorial * i;
}
console.log('The factorial of 5 is ' + factorial);