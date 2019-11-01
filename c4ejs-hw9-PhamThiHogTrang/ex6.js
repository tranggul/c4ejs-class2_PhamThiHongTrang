function cal(x1,y1,x2,y2){
const a = Math.pow((x1-x2), 2);


const b = Math.pow((y1-y2), 2);

const result = Math.sqrt((a+b));
return result;
}
const x = cal(3, 10, 0, 6);
if (x !== 5) {
console.log('Failed: the calculation is wrong');
} else {
console.log('Passed, bravo');
}