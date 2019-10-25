
let y = document.getElementById('upper_btn');
console.log(y);
let x = document.getElementById('name_input');
console.log(x);
let d = document.getElementById('result_div');
console.log(d);
upper_btn.addEventListener('click', log);
function log(){
    console.log('upper it!!! justed click');
    let name = x.value;
    console.log("User's name: "+name);
    let z = name.toUpperCase();
    console.log("User name uppercase: "+ z);
    d.textContent= z;
}
