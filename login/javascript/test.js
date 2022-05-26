function pageLoaded(){
    var canvas = document.getElementById("testcanvas");
    var context = canvas.getContext("2d");
    // Draw a solid square with width and height of 100 pixels at (200,10)
context.fillRect(200, 10, 100, 100);
// Draw a solid square with width of 90 pixels and height of 30 pixels at (50,70)
context.fillRect(50, 70, 90, 30);
// STROKED RECTANGLES
// Draw a rectang   ular outline with width and height of 50 pixels at (110, 10)
context.strokeRect(110, 10, 50, 50);
// Draw a rectangular outline with width and height of 50 pixels at (30, 10)
context.strokeRect(30, 10, 50, 50);
}

userGreeting=()=>{
    console.log("Hello there!")
}
