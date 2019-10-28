let items =['Backpack', 'MiBand watch', 'Ring'];
console.log(items);
let x = document.getElementById('myList');
console.log(x);
let y = document.getElementById('item_input');
console.log(y);
let z = document.getElementById('on_btn');
console.log(z);

on_btn.addEventListener('click', onClickBtn);
function onClickBtn(){
    console.log('add butn clicked');
    let d = y.value;
    items.push(d);
    console.log(items);
    x.insertAdjacentHTML("beforeend", `<li class = 'delete'>
    <span>${d}</span>   
    <button class = 're'>remove</button>
    </li>`);
     y.value = '';
     console.log(items);
}
for(let i = 0; i < items.length; i++){
    x.insertAdjacentHTML("beforeend", `<li id = 'delete'>
    <span>${items[i]}</span>   
    <button id = "re `+${i}`">remove</button>
    </li>`);
    let r = document.getElementById('delete');
    delete[i].addEventListener('click', function(){
        console.log('remove');
        console.log(`Item: ${i}`);
        items.splice(i, 1);
        console.log(items);
    })
    // let s = document.getElementsByClassName('delete');
    // s[i].addEventListener('click', ()=>{
    //     s[i].remove();
    //     console.log(x);
    // })

    }


