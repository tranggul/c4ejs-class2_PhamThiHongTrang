function randomNumber(a, b){
    const ranNum =Math.floor(Math.random() * (b-a)) + a;
    return ranNum;
}
const x = randomNumber(4, 16);
if (x < 4) {
console.log('Failed: the number is smaller than 4');
} else if (x > 16) {
console.log('Failed: the number is bigger than 16');
} else {
console.log('Passed, bravo');
}

