function sayHi(name, msg)
{
alert('hello' + name);
const m = msg || 'you don not enter your wish';
if(msg){
    alert(m);
}else{
alert(m);
}
}
let name = prompt('Enter name');
let msg = prompt('Enter wish');
sayHi(name, msg);
