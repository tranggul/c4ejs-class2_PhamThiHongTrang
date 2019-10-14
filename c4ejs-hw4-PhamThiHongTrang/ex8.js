let products2  = [
    {name : 'Xiaomi portablecharger 20000mah', brand : 'Xiaomi',price: 428 , color : 'white', category : 'Charger'},
    {name : 'VSmart Active 1', brand : 'VSmart' ,price: 5487 ,color : 'Black' , category : 'Phone'},
    {name : 'IPhone X',brand : 'Apple' ,price: 21490 , color : 'Gray', category : 'Phone'},
    {name : 'Samsung Galaxy A9',  brand : 'Samsung',price: 8490,  color : 'Blue',category : 'Phone'},
];
let array = [];
for(let i = 0 ; i < products2.length; i ++){
    let a = products2[i];
    let {name : res1, price: res2} = a;
    console.log('-----------------------' + ` \r\nName:${res1} \r\nPrice:${res2} `);

}


