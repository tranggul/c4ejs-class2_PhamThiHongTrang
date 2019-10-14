
let products5  = [
    {name : 'Xiaomi portablecharger 20000mah', brand : 'Xiaomi',price: 428 , color : 'white', category : 'Charger', provider: ['Phukienzero','Dientuccc']},
    {name : 'VSmart Active 1', brand : 'VSmart' ,price: 5487 ,color : 'Black' , category : 'Phone',  provider: ['Tgdd','Ddghn','VhStore']},
    {name : 'IPhone X',brand : 'Apple' ,price: 21490 , color : 'Gray', category : 'Phone', provider: ['Tgdd']},
    {name : 'Samsung Galaxy A9',  brand : 'Samsung',price: 8490,  color : 'Blue',category : 'Phone',  provider: ['Tgdd']},
];
for(let i = 0 ; i < products5.length; i ++){
    let u = products5[i];
    let {name: res6, price: res7, provider: res8} = u;
    console.log(`#${i+1}.` + ` ${res6}\n\tPrice : ${res7}\n\t` + `Provider: ${res8.join(" ")}`);
}