clear();
setshape("rocket");
let number = prompt('enter number of edges');
for(let i = 0; i < number; i++){
  fd(50);
  rt(360/number);
}