
let dictionary1 = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done : 'When your task is complete, the only thing you have to do is to wait forusers to use it (no additional codes or actions needed)',
    defect : 'The formal word for ‘error’',
    pm : 'The short version of Project Manager, the person in charge of the finalresult of a project',
    ux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'

};
alert('Hi there, this is dev dictionary');
let keyword = prompt('enter a keyword');
if(dictionary1['keyword'] == undefined){
    alert('we  could not find your word:  ' + `${keyword}`);
}else{
    alert( `${keyword} \n ${dictionary1[keyword]}`);
}
