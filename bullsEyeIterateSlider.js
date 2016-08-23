window.onload = init;

// canvas and context variables
var canvas,context,centerX,centerY;


function init() {
     canvas = document.getElementById("Canvas");
     context = canvas.getContext("2d");

    // Get the center coordinates of circles
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    // draw the initial pattern
    drawPattern();
    console.log(bandWidth.value);
}

    function drawPattern() {
        var radius = 200;
        var bandWidth = document.getElementById("bandWidth").value;
        var i = 1;
        // draw the patterns with loops
        while (radius > 0) {
            if (i % 2 == 1) {
                circlePattern(radius, "red");
            }
            else {
                circlePattern(radius, "blue");
            }
            i++;
            radius -= bandWidth;
        }
    }

    //create a pattern function
    function circlePattern(radius, color) {
        var radius = radius;
        context.fillStyle = color;
        //begin drawing the circle
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }

