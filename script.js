const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "shadow_dog.png";

const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 1;
let frameY = 3;



function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.drawImage(image, sx, sy, sw ,sh, dx, dy, dw , dh)
    // sx , sy, sw, sh ----> area we want to cut out from the image
    // dx, dy, dw , dh ----> where to place the cut out image on the canvas
     ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight,
        spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
        if(frameX < 6) 
        frameX++;
        else 
        frameX = 0;
        requestAnimationFrame(animate);

};
animate();