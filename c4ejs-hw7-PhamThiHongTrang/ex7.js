var x = document.getElementById('button1');
var y = document.getElementById('button2');
button1.addEventListener('click', (e)=> {
console.log(e.target);
})
button2.addEventListener('click', (e1)=> {
    console.log(e1.target);
    //<button id="button1">button 1</button>
})
var z = document.getElementById('input');
input.addEventListener('keydown', (e2)=>{
    console.log(e2.key);
    //value user input
})

    