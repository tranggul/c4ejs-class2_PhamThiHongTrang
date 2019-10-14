let products  = [
        {name : 'Xiaomi portablecharger 20000mah', price: 428, brand : 'Xiaomi', category : 'charger', color : 'white'},
        {name : 'VSmart Active 1', price: 5487 , brand : 'VSmart', category : 'Phone', color : 'Black'},
        {name : 'IPhone X', price: 21490, brand : 'Apple', category : 'Phone', color : 'Gray'},
        {name : 'Samsung Galaxy A9', price: 8490, brand : 'Samsung', category : 'Phone', color : 'Blue'},
    ];
    for(let i = 0 ; i < products.length; i ++){
        let c = products[i];
        let {name : res1, price: res2} = c;
        console.log(`#${i+1}.` + ` ${res1}\n\t${res2} `);
    }
    let position = prompt('Enter a position');
    for(let i = 0 ; i < products.length; i++){
        if(i == position-1){
           let d = products[i];
           for(let y in d){
               console.log(`${y} :  ${d[y]}`);
           }
        }
    }
