let products  = [
    {name : 'Xiaomi portablecharger 20000mah', price: 428, brand : 'Xiaomi', category : 'charger', color : 'white'},
    {name : 'VSmart Active 1', price: 5487 , brand : 'VSmart', category : 'Phone', color : 'Black'},
    {name : 'IPhone X', price: 21490, brand : 'Apple', category : 'Phone', color : 'Gray'},
    {name : 'Samsung Galaxy A9', price: 8490, brand : 'Samsung', category : 'Phone', color : 'Blue'},
];
let b = prompt('Enter your category');
let input = b.toLowerCase();
for(let i = 0 ; i < products.length; i ++){
    let a = products[i];
    let {name: res4, price: res5} = a;
    if(a.category.toLowerCase()== input){
        
        console.log('-----------------------' + ` \r\n ${res4} \r\n ${res5} `);

    }
}