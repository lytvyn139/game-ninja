//add jump
//add canvas border line
//add option to select area
//add fast travel home pgdown home end
//add readme.md
//event log aded
let leftValue = 450;
let topValue = 100;
document.write(`the ninja won't move out those area`);
document.write('<br>');
document.write(`width: ${window.innerWidth}px / height: ${window.innerHeight}px`);

 let update = () => {
  document.getElementById("character").style.left = leftValue + "px";
  document.getElementById("character").style.top = topValue + "px";
}

document.onkeydown = function (event) {
  console.log(`event log: `);

  console.log('%c Event log:', 'color: darkgreen; font-weight: bold', event);
  const leftMoveKey = event.keyCode === 37 || event.keyCode === 65;
  const rightMoveKey = event.keyCode === 39 || event.keyCode === 68;
  const downMoveKey = event.keyCode === 40 || event.keyCode === 83;
  const upMoveKey = event.keyCode === 38 || event.keyCode === 87;
  
 
  if (leftMoveKey && leftValue > 50) {
    leftValue -= 10;
  } else if (rightMoveKey &&  leftValue < window.innerWidth - 100) {
    leftValue += 10;
  } else if (downMoveKey && topValue < window.innerHeight - 100 ) {
    topValue += 10;
  } else if (upMoveKey && topValue > 50) {
    topValue -= 10;
  }
  update();
};
