let products3  = [
    {name : 'Xiaomi portablecharger 20000mah', brand : 'Xiaomi',price: 428 , color : 'white', category : 'Charger'},
    {name : 'VSmart Active 1', brand : 'VSmart' ,price: 5487 ,color : 'Black' , category : 'Phone'},
    {name : 'IPhone X',brand : 'Apple' ,price: 21490 , color : 'Gray', category : 'Phone'},
    {name : 'Samsung Galaxy A9',  brand : 'Samsung',price: 8490,  color : 'Blue',category : 'Phone'},
];
];
let b = prompt('Enter your category');
let input = b.toLowerCase();
for(let i = 0 ; i < products3.length; i ++){
    let a = products3[i];
    let {name: res4, price: res5} = a;
    if(a.category.toLowerCase()== input){
        
        console.log('-----------------------' + ` \r\nName: ${res4} \r\nPrice:${res5} `);

    }
}