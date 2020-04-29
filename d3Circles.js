


function makeCircles(canvasID){
let canvasContext = document.getElementById(canvasID).getContext('2d');

    let width = 400;
    let height = 400;
    let cx = width / 2;
    let cy = height / 2;
    let rad = width * 0.45;

    // canvasContext.beginPath();
    canvasContext.fillStyle = '#000';
    drawCircle(canvasContext, cx, cy, rad, false);

    canvasContext.beginPath();
    canvasContext.arc(cx, cy, rad/2, 0, 1.57);
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.arc(cx, cy, rad/2, 1.57, 3.14);
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.arc(cx, cy, rad/2, 3.14, 4.71);
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.arc(cx, cy, rad/2, 4.71, Math.PI * 2);
    canvasContext.fill();
  
}

makeCircles('circlesCanvas');


function drawCircle(context, cx, cy, rad, fill = true) {
    context.beginPath();
    context.arc(cx, cy, rad, 0, 2 * Math.PI, false);
    if(fill === true){
        context.fill();
    }else{
        context.stroke();
    }

}



