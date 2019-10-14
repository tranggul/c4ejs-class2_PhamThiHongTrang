//13.1
let data = [{name: 'HTML', complete: 'false'}, 
{name: 'CSS', completed: 'false'},
{name: 'Basic of javaScript', complete: 'false'},
{name: 'Node package manager (npm)', complete: 'false'},
{name: 'git', complete: 'false'},];
while(true){
console.log('Hi there, this is your learning tasks to front-end developer career');
for(let i = 0; i < data.length;i++ ){
    let a1 = data[i];
    let {name: res10, complete: res11}=a1;
   
        console.log(`#${i+1}. `+`${res10}\n\tComplete : ${res11}`);
    
}
//13.2, 13.3, 13.4, 13.5
let command = prompt('Enter your command(New, Delete, Update, Complete');
let commandChange = command.toLowerCase();

if(commandChange=='new'){
let new1 = prompt('enter new task:');
var newTask={};
newTask.name = new1;
newTask.complete = 'false';
data.push(newTask);
}else if(commandChange=='delete'){
    let pos1 = prompt('Enter position');
    data.splice(pos1-1,1);

}else if(commandChange=='update'){
    let pos2 = prompt('Enter position');
    let newTitle = prompt('Enter new title');
    let w = data[pos2-1];
    console.log(w);
    w.name = newTitle;

}else if(commandChange=='complete'){
    let pos3 = prompt('Enter position');
    let z = data[pos3-1];
    z.complete = true;
}
}