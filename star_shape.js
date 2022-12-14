window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 1;
    canvas.height = window.innerHeight * 1.3;

    // canvas settings
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 25;

    // effect settings
    let size = 170;
    let sides = 10;
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.scale(1,1);
    ctx.rotate(0);
    // ctx.fillRect(0,0,canvas.width, canvas.height);
    
    for (let i = 0; i < sides; i++){
        ctx.beginPath();    // start drawing a new shape
        ctx.moveTo(0,0);    // set starting x and y co-ordinates of a new shape
        ctx.lineTo(size,0);   // set ending co-ordinates of a line
        ctx.stroke();   // outlines the current path with the current stroke style
        ctx.rotate((Math.PI * 2)/sides);    // angle values in radians
        ctx.scale(0.97, 0.97);
        ctx.translate(30,50)
    }
    
    ctx.restore()
});