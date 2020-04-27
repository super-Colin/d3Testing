




function blackCircle(){
    let width = 200;
    let height = 200;


    const domCanvas = document.getElementById('circleCanvas');
    const domContext = domCanvas.getContext('2d');
    domContext.clearRect(0,0,width,height);

    domContext.fillStyle = '#000';
    domContext.beginPath();
    let cx = width / 2;
    let cy = height / 2;
    let rad = width * 0.45;

    domContext.arc(cx,cy, rad, 0, 2 * Math.PI, false);
    domContext.fill();

}

blackCircle();















