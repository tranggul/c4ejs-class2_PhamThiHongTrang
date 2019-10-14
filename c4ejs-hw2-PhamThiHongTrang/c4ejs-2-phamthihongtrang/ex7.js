let comparedNum = Number(prompt('n ='));
let compareNum = prompt('x =');
if(compareNum<comparedNum/2){
    alert('Lower half of '+ comparedNum);
}else if(compareNum ==comparedNum/2){
    alert('Half of '+ comparedNum);
}else{
    alert('Higher half of '+ comparedNum);
}