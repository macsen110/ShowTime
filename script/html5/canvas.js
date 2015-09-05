var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    // Grab our context
    var context = canvas.getContext('2d');
    
    // Make sure we have a valid defintion of requestAnimationFrame
    var requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function(callback) {
                return setTimeout(callback, 16);
            };
    
    // Let's define our square
    var square = {
        'x': 50,
        'y': 50,
        'width': 100,
        'height': 100,
        'fill': '#000000'
    };
    
    var render = function() {
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the square
        context.beginPath();
        context.rect(square.x, square.y, square.width, square.height);
        context.fillStyle = square.fill;
        context.fill();
        
        // Redraw
        requestAnimationFrame(render);
    };
    
    // Start the redrawing process
    render();
    
    var animate = function(prop, val, duration) {
      // The calculations required for the step function
      var start = new Date().getTime();
      var end = start + duration;
      var current = square[prop];
      var distance = val - current;
        
      var step = function() {
        // Get our current progres
        var timestamp = new Date().getTime();
        var progress = Math.min((duration - (end - timestamp)) / duration, 1);
          
        // Update the square's property
        square[prop] = current + (distance * progress);
        
        // If the animation hasn't finished, repeat the step.
        if (progress < 1) requestAnimationFrame(step);
      };
      
      // Start the animation
      return step();
    };
    
    animate('x', 0, 1000);
    
    setTimeout(function() {
        animate('y', 0, 1000);
        
        setTimeout(function() {
            animate('x', 50, 1000);
            animate('y', 50, 1000);
        }, 1000);
    }, 1000);
};