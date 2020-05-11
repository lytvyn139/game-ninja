//add jump
//add canvas border line
//add option to select area
//add fast travel home pgdown home end
//add readme.md
//add back ground forest
//shift + run fast
//make ninja home
//R = RANDOM teleport and change color


const hero = document.getElementById("character");

document.open();  
document.write("<h1>Hello World</h1>");
//document.write('<font color="white">'+'the ninja won\'t move out those area'+"</font>");
document.write('<br>');
document.write('<font color="white">'+`window size: ${window.innerWidth}px/${window.innerHeight}px`+"</font>");
document.write('<br>');
console.log(`${hero.leftValue}`);
console.log(hero.style.left);
console.log(`${document.getElementById('character').style.top}`);


var animationFrame = 1;
let leftValue = 450;
let topValue = 100;


document.onkeydown = function (event) {
  //debug
  console.log("%c Event log:", "color: darkgreen; font-weight: bold", event);
  const leftMoveKey = event.keyCode === 37 || event.keyCode === 65;
  const rightMoveKey = event.keyCode === 39 || event.keyCode === 68;
  const downMoveKey = event.keyCode === 40 || event.keyCode === 83;
  const upMoveKey = event.keyCode === 38 || event.keyCode === 87;
  
  if (animationFrame == 1) {
    animationFrame = 2;
  } else if (animationFrame == 2) {
    animationFrame = 1;
  }


  //left move
  if (leftMoveKey && leftValue > 20) {
      leftValue -= 12;
      hero.style.left = leftValue + "px";
      hero.style.backgroundImage = "url('/public/img/left" + animationFrame + ".png')";

  //right move
  } else if (rightMoveKey && leftValue < window.innerWidth - 100) {
      leftValue += 12;
      hero.style.left = leftValue + "px";
      hero.style.backgroundImage = "url('/public/img/right" + animationFrame + ".png')";

  //up move
  } else if (upMoveKey && topValue > 20) {
      topValue -= 12;
      hero.style.top = topValue + "px";
      hero.style.backgroundImage = "url('/public/img/top" + animationFrame + ".png')";
  
  //down move
  } else if (downMoveKey && topValue < window.innerHeight - 100) {
      topValue += 12;
      hero.style.top = topValue + "px";
      hero.style.backgroundImage = "url('/public/img/down" + animationFrame + ".png')";
  }
};
