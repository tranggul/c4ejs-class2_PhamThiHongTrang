//link bang tinh : https://docs.google.com/spreadsheets/d/1qfpxNbvZ-qIiraHcXvI9V3K2nRlXg39m3y_aHtcFKyU/edit
const API_URL = 'https://sheetdb.io/api/v1/b7ki8srpze0b9';
read();

function genId(){
    const x = Math.random();
    const y = x.toString(36);
    const z = y.substring(2,9);
    // console.log(z);
    return z;
}
let input = document.getElementById('input');
let buttonAdd = document.getElementById('add');
let buttonDelete = document.getElementById('buttonDelete');
let list = document.getElementById('list');

async function creat(){
    const id = genId();
    const body = {
        data:[
            {
                id: id,
                name: input.value
            }
        ]
    }
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(body)
    }
    // const connection = await fetch(API_URL);
    // const data = await connection.json();
    list.insertAdjacentHTML('beforeend', `<li id = 'w_${id}' >${input.value}<button id = ${id}>X</button></li>`);
    input.value = '';
    const connection = await fetch(API_URL, options);
    const data = await connection.json();
    console.log(data);
    const de = document.getElementById(`${id}`);
    de.addEventListener('click', deleteItem);
    async function deleteItem(){
        document.getElementById(`w_${id}`).remove();
        const urlDelete = 'https://sheetdb.io/api/v1/b7ki8srpze0b9/id/' + `${id}`;
        const body = {
            data:[
                {
                    id: id
                }
            ]
        }
        const options = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(body)
        }
        const conn = await fetch(urlDelete, options);
        const data = await conn.json();
        console.log(data);
    }
    
}

//  function deleteItem(item){
//     item.parentNode.removeChild(item);
    

buttonAdd.addEventListener('click', creat);
async function read(){
const connection = await fetch(API_URL);
const data = await connection.json();
console.log(data);
for(let i = 0; i < data.length;i++){
    
    list.insertAdjacentHTML('beforeend',`<li id = 'w_${data[i].id}'>${data[i].name}<button id = '${data[i].id}' >X</button></li>`)
}
}


// let bt = document.getElementsByClassName('btn');
// for(let i = 0; i < bt.length; i++){
//     x_clicked = bt[i];
//     x_clicked.addEventListener('click', ()=>{
//         list.removeChild(list.childNodes[i]); 
//     })
// }

