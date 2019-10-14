//9a
for(let i = 0; i <3;i++){
    console.log('L');
}
for(let i = 0; i < 3; i++){
    console.log('H');
}
//9b
let quantity = Number(prompt('Enter x= '));
for(let i = 0; i < quantity/2;i++){
    console.log('L');
}
for(let i = 0; i < Math.floor(quantity/2);i++){
console.log('H');
}
//9c
for(let i = 0; i < 8;i++){
    if(i%2==0){
        console.log('0');
    }else{
        console.log('1');
    }
}
//9d
let v = Number(prompt("Enter the total number of 1's and 0's"));
for(let i = 0; i < v;i++){
    if(i%2==0){
        console.log('0');
    }else{
        console.log('1');
    }
}