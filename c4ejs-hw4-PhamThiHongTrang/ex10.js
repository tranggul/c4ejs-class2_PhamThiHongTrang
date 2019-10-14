let products4  = [
    {name : 'Xiaomi portablecharger 20000mah', brand : 'Xiaomi',price: 428 , color : 'white', category : 'Charger'},
    {name : 'VSmart Active 1', brand : 'VSmart' ,price: 5487 ,color : 'Black' , category : 'Phone'},
    {name : 'IPhone X',brand : 'Apple' ,price: 21490 , color : 'Gray', category : 'Phone'},
    {name : 'Samsung Galaxy A9',  brand : 'Samsung',price: 8490,  color : 'Blue',category : 'Phone'},
];
    for(let i = 0 ; i < products4.length; i ++){
        let c = products4[i];
        let {name : res1, price: res2} = c;
        console.log(`#${i+1}.` + ` ${res1}\n\t${res2} `);
    }
    let position = prompt('Enter product position');
    for(let i = 0 ; i < products4.length; i++){
        if(i == position-1){
           let d = products4[i];
           for(let y in d){
               console.log(`${y} :  ${d[y]}`);
           }
        }
    }
