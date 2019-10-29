
let e = document.getElementById("start");
let f = document.getElementById("stop");
let z = document.getElementById("input_value");
let g = document.getElementById("result");
 
var id;
function h(){
    let v = z.value;
    
     id = setInterval(()=>{
        g.innerHTML = v--;
        if(v==-1){
            clear(id);
        }
        f.addEventListener('click', function(){
            clearInterval(id);
        });
    
    }, 1000);
}
function clear(id){
    clearInterval(id);
    
}

    e.addEventListener('click', h);
   