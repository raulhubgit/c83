var lastPositionX,lastPositionY;
var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

color = "space gray";
widthLine = 1;
var width = screen.width;
newWidth = screen.width - 10;
newHeight = screen.height - 98;
if(width<992){
    document.getElementById("canvas").width = newWidth;
    document.getElementById("canvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
    console.log("OLHA QUEM CHEGOU");
    color = document.getElementById("color").value;
    widthLine = document.getElementById("linha").value;
    lastPositionOfX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionOfY=e.touches[0].clientY-canvas.offsetTop;
   

}
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e) {
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    
        ctx.beginPath(); 
        ctx.strokeStyle = color; 
        ctx.lineWidth = widthLine; 
        console.log("lastPositionX,lastPositionY = " );
        console.log("x= "+ lastPositionX + " y=" + lastPositionY );
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Cordenadas,Posicoes x e y = " );
        console.log("x= "+ currentPositionOfTouchX + " y=" + currentPositionOfTouchY );
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();
    
    
        lastPositionX=currentPositionOfTouchX;
        lastPositionY=currentPositionOfTouchY;
}
function clearArea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
