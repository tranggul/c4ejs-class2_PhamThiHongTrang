clear();
setshape("rocket");
let number = prompt('enter number of polygons');
let fix = 3;
for(let i = 0; i < number; i++){
  for(let j = 0;j < fix;j++){
    if(fix%2==0){
      color("green");
    }else{
      color("red");
    }
    fd(50);
    rt(360/fix);
  }
  fix++;
}