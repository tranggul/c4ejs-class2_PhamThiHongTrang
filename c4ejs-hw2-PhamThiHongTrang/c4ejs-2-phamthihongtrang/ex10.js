let weight = prompt('Your weight in kg?');
let height = prompt('Your height in cm?');
let changeHeight = height/100;
let result = weight/(changeHeight*changeHeight);
alert('Your BMI is '+ result);
if(result< 18){
alert('You are severely underweight');
}else if(result< 18.5){
alert('You are underweight');
}else if(result<25){
    alert('You are normal');
}else if(result<30){
alert('You are overweight');
}else{
    alert('You are obese');
}

