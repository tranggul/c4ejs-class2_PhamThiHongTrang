let products  = [
    {name : 'Xiaomi portablecharger 20000mah', price: 428, brand : 'Xiaomi', category : 'Charger', color : 'white'},
    {name : 'VSmart Active 1', price: 5487 , brand : 'VSmart', category : 'Phone', color : 'Black'},
    {name : 'IPhone X', price: 21490, brand : 'Apple', category : 'Phone', color : 'Gray'},
    {name : 'Samsung Galaxy A9', price: 8490, brand : 'Samsung', category : 'Phone', color : 'Blue'},
];
let array = [];
for(let i = 0 ; i < products.length; i ++){
    let a = products[i];
    // let {name : res1, price: res2} = a;
    // console.log('-----------------------' + ` \r\nName:${res1} \r\nPrice${res2} `);
    let {name : res1} = a;
    array.push(res1);

}
let string = 'There ';
for(let i = 0; i < array.length; i++){
    string =` ${string}  ${array[i]} \r\n`;
}
alert(string);
// console.log(array);