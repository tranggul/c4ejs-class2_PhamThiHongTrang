const cmds = [
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 70,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'rect',
        x: 10,
        y: 20,
        width: 70,
        height: 20,
    },
    {
        shape: 'square',
        x: 25,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 33,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 50,
        y: 40,
        width: 14,
    },
    {
        shape: 'square',
        x: 58,
        y: 42,
        width: 6,
    },
    {
        shape: 'square',
        x: 40,
        y: 25,
        width: 8,
    },
    {
        shape: 'square',
        penWidth: 1,
        x: 500,
        y: 500,
        width: 15,
    },
]
clear();
for(let i = 0; i < cmds.length;i++){
  
   home();
    let a = cmds[i];
    if(a.shape == 'rect'){
        rt(90);
      penup();
      fd(a.x);
      lt(90);
      fd(a.y);
      pendown();
      
      for(let j = 0; j<2;j++){
        fd(a.height);
        rt(90);
        fd(a.width);
        rt(90);
      }
    }else{
      penup();
      rt(90);
      fd(a.x);
      lt(90);
      fd(a.y);
      pendown();
      for(let i = 0; i < 4; i++){
        fd(a.width);
        rt(90);
      }
      
    }
}