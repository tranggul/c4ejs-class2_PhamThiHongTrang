let products  = [
    {name : 'Xiaomi portablecharger 20000mah', price: 428, brand : 'Xiaomi', category : 'charger', color : 'white', provider: ['Phukienzero','Dientuccc']},
    {name : 'VSmart Active 1', price: 5487 , brand : 'VSmart', category : 'Phone', color : 'Black', provider: ['Tgdd','Ddghn','VhStore']},
    {name : 'IPhone X', price: 21490, brand : 'Apple', category : 'Phone', color : 'Gray', provider: ['Tgdd']},
    {name : 'Samsung Galaxy A9', price: 8490, brand : 'Samsung', category : 'Phone', color : 'Blue', provider: ['Tgdd']},
];
for(let i = 0 ; i < products.length; i ++){
    let u = products[i];
    let {name: res6, price: res7, provider: res8} = u;
    console.log(`#${i+1}.` + ` ${res6}\n\tPrice : ${res7}\n\t` + `Provider: ${res8.join(" ")}`);
}