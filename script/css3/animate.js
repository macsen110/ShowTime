// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// var start = null;
// var d = document.getElementById('SomeElementYouWantToAnimate');
// function step(timestamp) { 
//   if (start === null) start = timestamp;
//   var progress = timestamp - start;
//   console.log(progress)
//   d.style.left = Math.min(progress/10, 200) + "px";
//   if (progress < 2000) {
//     console.log('timestamp :' + timestamp + ' start: ' + start + ' progress: ' + progress )
//     requestAnimationFrame(step);
//   }
// }
// requestAnimationFrame(step);


function updateProgress(timestamp) {
  var div = document.getElementById('status');
  div.style.width = (parseInt(div.style.width, 10) + 1) + '%';
  console.log(div.style.width);
  if (div.style.width != "100%") {
    requestAnimationFrame(updateProgress);
  }
}

requestAnimationFrame(updateProgress)