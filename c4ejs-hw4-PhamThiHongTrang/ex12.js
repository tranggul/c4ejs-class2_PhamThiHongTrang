let products  = [
    {name : 'Xiaomi portablecharger 20000mah', price: 428, brand : 'Xiaomi', category : 'charger', color : 'white', provider: ['thukienzero','dientuccc']},
    {name : 'VSmart Active 1', price: 5487 , brand : 'VSmart', category : 'Phone', color : 'Black', provider: ['tgdd','tdghn','thStore']},
    {name : 'IPhone X', price: 21490, brand : 'Apple', category : 'Phone', color : 'Gray', provider: ['tgdd']},
    {name : 'Samsung Galaxy A9', price: 8490, brand : 'Samsung', category : 'Phone', color : 'Blue', provider: ['tgdd']},
];
let input1 = prompt('Enter provider');
for(let i = 0 ; i < products.length; i ++){
    let o = products[i];
    let {provider: res9} = o;
    let k = res9.toLocaleString;
    console.group(k);
    let s= res9.indexOf(input1);
    if(s!= -1){
        console.log('---------------------------');
        for( let l in o){
            console.log(`${l} :  ${o[l]}`);
        }
    }
}
