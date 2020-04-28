




function yinYang(canvasID,whiteColor = '#FFF', blackColor = '#000'){
    let width = 200;
    let height = 200;


    const domCanvas = document.getElementById(canvasID);
    // domCanvas.style.backgroundColor = whiteColor;
    domCanvas.style.backgroundColor = '#999';
    const domContext = domCanvas.getContext('2d');

    domContext.clearRect(0,0,width,height);

    let cx = width / 2;
    let cy = height / 2;
    let rad = width * 0.45;

    let smallRad = rad / 2;

    let cx1 = cx;
    let cy1 = cy + smallRad;
    let cx2 = cx;
    let cy2 = cy - smallRad;

    domContext.fillStyle = blackColor;
    domContext.beginPath();
        domContext.arc(cx,cy, rad, 0, 2 * Math.PI, false);
        domContext.fill();
    
    domContext.clearRect(0,0, width / 2, height);

    domContext.beginPath();
        domContext.arc(cx1, cy1, smallRad, 0, 2 * Math.PI, false);
        domContext.fill();

    domContext.fillStyle = whiteColor;
    domContext.beginPath();
        domContext.arc(cx2, cy2, smallRad, 0, 2 * Math.PI, false);
        domContext.arc(cx1, cy1, smallRad / 4, 0, 2 * Math.PI, false);
        domContext.fill();

    domContext.fillStyle = blackColor;
    domContext.beginPath();
        domContext.arc(cx2, cy2, smallRad / 4, 0, 2 * Math.PI, false);
        domContext.fill();

    domContext.beginPath();
        domContext.lineWidth = '2';
        domContext.arc(cx, cy, rad, 0, 2 * Math.PI, false);
        domContext.stroke();

}
yinYang('circleCanvas');















