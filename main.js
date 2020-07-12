/* 
# Make a Stop Clock

- Make the hand tick round the clock face every second.
- If you've forgotten how then try this website https://www.google.com
- If have finished then try starting on the click of a button.
- And if you finish that then try stopping the clock with a button!

   Happy coding!
*/

//We need to write an animation for the clock hand.
// animation should be transform rotate 6deg
//Add the animation to the hand element.

let hand = document.querySelector("#hand");
let clockContainer = document.querySelector("#clock-container");
let input = document.querySelector("input");

let rotate = 0;
let tick;
let isTicking = false;

function rotateHand() {
  incrementRotate();
  hand.style.transform = `rotate(${rotate}deg)`;
}

function tickTockGo() {
  if (isTicking == false) {
    tick = setInterval(rotateHand, 1000);
    isTicking = true;
  } else {
    return;
  }
}

function incrementRotate() {
  if (rotate < 360) {
    return (rotate += 6);
  }
  return (rotate = 6);
}

function stopTicking() {
  clearInterval(tick);
  isTicking = false;
}

function resetClock() {
  hand.style.transform = `rotate(0deg)`;
}

function runSetTime(timeValue) {
  tickTockGo();
  setTimeout(stopTicking, timeValue);
}

let controls = document.createElement("div");
clockContainer.before(controls);
controls.style.margin = "50px auto 0";
controls.style.display = "flex";
controls.style.justifyContent = "space-evenly";

let startBtn = document.createElement("button");
startBtn.innerText = "START CLOCK";
controls.appendChild(startBtn);

let stopBtn = document.createElement("button");
stopBtn.innerText = "STOP CLOCK";
controls.appendChild(stopBtn);

let resetBtn = document.createElement("button");
resetBtn.innerText = "RESET CLOCK";
controls.appendChild(resetBtn);

startBtn.addEventListener("click", tickTockGo);

stopBtn.addEventListener("click", stopTicking);

resetBtn.addEventListener("click", resetClock);

// let timeValue = input.value;

let setTimeBtn = document.querySelector("#set-time");
setTimeBtn.addEventListener("click", () => runSetTime(input.value * 1000));

// make a promise that runs clock for st time
