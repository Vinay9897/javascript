var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var x = 0;
var y = 1;
let speed = 100;
var t = Date.now();;
function draw() {
    // We take the current Date.now() value 
    // and subtract the previous t value from it.
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    var fps = Math.round(1 / timePassed);
    context.clearRect(0, 0, 600, 400);
    context.font = "25px Arial";
    context.fillStyle = "black";
    context.fillText("FPS:" + fps, 20, 30);

    context.beginPath();
    context.rect(x, y, 100, 100);
    context.fillStyle = "green";
    context.fill();
    x += speed * timePassed;
    if (x >= 600 - 100) {
        speed = 0;
    }
    window.requestAnimationFrame(draw);
}
// draw();


