let products6  = [
    {name : 'Xiaomi portablecharger 20000mah',brand : 'Xiaomi' ,price: 428 , category : 'charger', color : 'white', provider: ['thukienzero','dientuccc']},
    {name : 'VSmart Active 1', brand : 'VSmart'  ,price: 5487, category : 'Phone', color : 'Black', provider: ['tgdd','tdghn','thStore']},
    {name : 'IPhone X',brand : 'Apple',  price: 21490, category : 'Phone', color : 'Gray', provider: ['tgdd']},
    {name : 'Samsung Galaxy A9',brand : 'Samsung' , price: 8490, category : 'Phone', color : 'Blue', provider: ['tgdd']},
];
let input1 = prompt('Enter provider');
for(let i = 0 ; i < products6.length; i ++){
    let o = products6[i];
    let {provider: res9} = o;
    
    let s= res9.indexOf(input1);
    if(s!= -1){
        console.log('---------------------------');
        for( let l in o){
            console.log(`${l} :  ${o[l]}`);
        }
    }
}
