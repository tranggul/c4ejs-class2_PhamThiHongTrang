const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
    };
    
    clear();
    setshape('rocket');
    rt(90)
    penup();
    fd(rect.x);
    lt(90);
    penup();
    fd(rect.y);
    pendown();
    for(let i = 0; i < 2; i++){
      fd(rect.height);
      rt(90);
      fd(rect.width);
      rt(90);
    }
    