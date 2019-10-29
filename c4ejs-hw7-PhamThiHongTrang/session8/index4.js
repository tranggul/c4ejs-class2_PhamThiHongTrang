let data = [
    { project: 'Learn front-end', task: 'learn html', time_spent: '6' },
    { project: 'Learn front-end', task: 'learn css', time_spent: '8' },
    { project: 'Learn front-end', task: 'Learn js variables and data types', time_spent: '6' },
    { project: 'Learn git', task: 'learn git basics', time_spent: '2' },
];

let x = document.getElementById("ts_body");
console.log(x);
function h() {
    for (let i = 0; i < data.length; i++) {
        let y = data[i];
        x.insertAdjacentHTML('beforeend', `<tr id =' ${i}'>
    <td class="value">${y.project}</td>
    <td class="value">${y.task}</td>
    <td class="value">${y.time_spent}</td>
    
    <td class = 'value' ><button onClick = 'deleteRow(this)' class = 'bc'>x</button><button class= 'update'>U</button></td>
   
    </tr>`);
    }
}
h();
let z = document.getElementById('input_project');
let d = document.getElementById('input_task');
let e = document.getElementById('input_timespent');
let object = {};


//function to add
function onbtn() {
    let f = z.value;
    let g = d.value;
    let h = e.value;
    object.project = f;
    object.task = g;
    object.time_spent = h;
    data.push(object);
    x.insertAdjacentHTML('beforeend', `<tr> 
    <td class="value">${object.project}</td>
    <td class="value">${object.task}</td>
    <td class="value">${object.time_spent}</td>
    <td class ='value'><button onClick = 'deleteRow(this)' class = 'bc'>x</button><button class = 'update'>U</button></td>
    </tr>`);
    z.value = '';
    d.value = '';
    e.value = '';
}

// addEventListener cho add
let l = document.getElementById('add');
l.addEventListener('click', onbtn);
function clear(){
    z.value = '';
    d.value = '';
    e.value = '';
}
let rr = document.getElementById('clear');
rr.addEventListener('click', clear);

let up = document.getElementsByClassName('update');

for (let i = 0; i < up.length; i++) {
    let up_clicked = up[i];
    up_clicked.addEventListener('click', () => {
        l.remove();
        rr.insertAdjacentHTML('beforebegin', `<button id = 'u'>Update</button>`);
        z.value = data[i].project;
        d.value = data[i].task;
        e.value = data[i].time_spent;
        console.log(data);
        let tr = document.getElementById('u');
        console.log(tr);
        function update1() {
            data[i].project = z.value;
            data[i].task = d.value;
            data[i].time_spent = e.value;
            let ttt = document.getElementById('table');
            for (let i = ttt.rows.length - 1; i > 0; i--) {
                ttt.deleteRow(i);
            }
            h();
        }
        tr.addEventListener('click', update1);

    })
}
//clear
function deleteRow(row){
var d = row.parentNode.parentNode.rowIndex;
document.getElementById('table').deleteRow(d);
}
// let j = document.getElementsByClassName('bc');
// for (let i = 0; i < j.length; i++) {
//     var x_clicked = j[i];
//     x_clicked.addEventListener('click', () => {
        
//         let s = x_clicked.parentNode;
//         let m = s.parentNode;
//         m.parentNode.removeChild(m);
// })
// }
