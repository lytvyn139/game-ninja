const hero = document.getElementById("ninja");
const backdropElement = document.getElementById("backdrop");
const modalLinkElements = document.querySelectorAll(".info-modal");
let infoModal = null;
let animationFrame = 1;
let leftValue = 920;
let topValue = 180;
let speed = 10;
let bullets = [];

function instructionsModule() {
  function toggleBackdrop() {
    backdropElement.classList.toggle("visible");
  }
  function presentInfoModal(event) {
    const text = event.target.dataset.text;
    toggleBackdrop();
    infoModal = document.createElement("div");
    infoModal.classList.add("modal");
    infoModal.innerHTML = `
    <h2>🥋 CONTROLS 🥋</h2>
    <p>${text}</p>
  `;
    document.body.appendChild(infoModal);
  }
  function hideInfoModal() {
    toggleBackdrop();
    document.body.removeChild(infoModal);
  }
  for (const linkElement of modalLinkElements) {
    linkElement.addEventListener("click", presentInfoModal);
  }
  backdropElement.addEventListener("click", hideInfoModal);
}

function teleportModule() {
  let randomTop = Math.floor(Math.random() * (window.innerHeight - 100));
  let randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
  const teleportSound = document.getElementById("teleport-mp3");
  teleportSound.play();
  hero.style.backgroundImage = "url('/public/img/teleport.png')";
  console.log("%c TELEPORTING TO:", "color: blue; font-weight: bold",`${randomLeft}px/${randomTop}px`);
  hero.style.left = randomLeft + "px";
  hero.style.top = randomTop + "px";
  leftValue = randomLeft;
  topValue = randomTop;
}

function shootWhateverModule() {
  content = "";
  for (let i = 0; i < bullets.length; i++) {
    content += "<div class='bullet' style='left:" + bullets[i].left + "px; top: " + bullets[i].top + "px'></div>"; 
  }
  
  /* will shoot something up, uncomment on bottom //setTimeout(init, 100); but the speed menu and instructions will be not available   
  for (let j = 0; j < bullets.length; j++) {
    bullets[j].top = bullets[j].top - 20;
  } */
  document.getElementById("bullets").innerHTML = content;
}

function speedModule() {
  document.getElementById("stats").innerHTML = `${window.innerWidth}px/${window.innerHeight}px`;
  document.getElementById("speed-info").innerHTML = `speed: 10`;
  const increaseSpeed = document.getElementById("plus-btn");
  const decreaseSpeed = document.getElementById("minus-btn");
  increaseSpeed.addEventListener("click", (event) => {
    speed += 5;
    document.getElementById("speed-info").innerHTML = `speed: ${speed}`;
  });

  decreaseSpeed.addEventListener("click", (event) => {
    speed -= 5;
    document.getElementById("speed-info").innerHTML = `speed: ${speed}`;
    if (speed = 5) {
      speed = 5;
    }
  });
}

function mainLogic() {
  const maintheme = document.getElementById("maintheme-mp3");
  maintheme.play();
  document.onkeydown = function (event) {
    //debug
    //console.log("%c Event log:", "color: darkgreen; font-weight: bold", event);
    const leftMoveKey = event.keyCode === 37 || event.keyCode === 65;
    const rightMoveKey = event.keyCode === 39 || event.keyCode === 68;
    const downMoveKey = event.keyCode === 40 || event.keyCode === 83;
    const upMoveKey = event.keyCode === 38 || event.keyCode === 87;
    const teleportKey = event.keyCode === 82; //R
    const fireKey = event.keyCode === 69 || event.keyCode === 32; //E, space

    if (animationFrame == 1) {
      animationFrame = 2;
    } else if (animationFrame == 2) {
      animationFrame = 1;
    }

    //left move
    if (leftMoveKey && leftValue > 20) {
      leftValue -= speed;
      hero.style.left = leftValue + "px";
      hero.style.backgroundImage =
        "url('/public/img/left" + animationFrame + ".png')";

      //right move
    } else if (rightMoveKey && leftValue < window.innerWidth - 100) {
      leftValue += speed;
      hero.style.left = leftValue + "px";
      hero.style.backgroundImage =
        "url('/public/img/right" + animationFrame + ".png')";

      //up move
    } else if (upMoveKey && topValue > 20) {
      topValue -= speed;
      hero.style.top = topValue + "px";
      hero.style.backgroundImage =
        "url('/public/img/top" + animationFrame + ".png')";

      //down move
    } else if (downMoveKey && topValue < window.innerHeight - 100) {
      topValue += speed;
      hero.style.top = topValue + "px";
      hero.style.backgroundImage =
        "url('/public/img/down" + animationFrame + ".png')";

      //teleport
    } else if (teleportKey) {
      setTimeout(function () {
        teleportModule();
      }, 1000);

    
     //shurikens
    } else if (fireKey) {
        console.log(`player poss: ${leftValue}, ${topValue}` )
        //will shot from arm
        //bullets.push({ left: leftValue + 34, top: topValue + 8 });
        //will shit not from arm ))
        bullets.push({ left: leftValue + 27, top: topValue + 75 });
        console.log(bullets)
        shootWhateverModule();
    }
  };
}



function init() {
  console.log("%c GAME STARTED 🤖", "color: darkgreen; font-weight: bold");
  speedModule();
  instructionsModule();
  shootWhateverModule();
  mainLogic();
 // setTimeout(init, 100);
}
init();
