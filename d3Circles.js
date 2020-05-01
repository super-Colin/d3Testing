


function makeCircles(canvasID, numberOfCircles) {
    let canvasContext = document.getElementById(canvasID).getContext('2d');

    let width = 400;
    let height = 400;
    let cx = width / 2;
    let cy = height / 2;
    let radius = width * 0.45;

    // canvasContext.beginPath();
    canvasContext.fillStyle = '#000';
    // drawCircle(canvasContext, cx, cy, radius, false);
    // drawCircle(canvasContext, cx, cy, radius);


    // Spiral
    let smallRadius = 4;
    for(let i = 1; i <= numberOfCircles; i++){
        let ratio = i / numberOfCircles;
        let spiralRadiusCenter = i * ratio;
        let angle = i * 2 * Math.PI / numberOfCircles;
        let x = cx + Math.cos(angle) * spiralRadiusCenter;
        let y = cx + Math.sin(angle) * spiralRadiusCenter;

        drawCircle(canvasContext, x, y, smallRadius, true);
    }

    
    // let smallRadius = ((radius * 2 * Math.PI) / numberOfCircles) / 2;
    // for(let i = 1; i <= numberOfCircles; i++){
    //     let angle = i * 2 * Math.PI / numberOfCircles;
    //     let x = cx + Math.cos(angle) * radius;
    //     let y = cx + Math.sin(angle) * radius;
    //     // canvasContext.beginPath();
    //     // canvasContext.arc(x, y, smallRadius, 0, 360, false);
    //     // canvasContext.fill();
    //     drawCircle(canvasContext, x, y, smallRadius, true);
    // }
    

  
}

makeCircles('circlesCanvas', 400);


function drawCircle(context, cx, cy, radius, fill = true) {
    context.beginPath();
    context.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    if(fill === true){
        context.fill();
    }else{
        context.stroke();
    }

}



