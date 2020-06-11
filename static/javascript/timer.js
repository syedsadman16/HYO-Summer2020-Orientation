var interval, activeTimer;

var time = {
   "Pomo": 25,
   "sBreak":5,
   "lBreak":15
}
var timeLeft;
window.onload = function() {
   switchTimer(0,'Pomo');
}

function switchTimer(evt, timer) {
   let timerTabs, tabLinks;
   timerTabs = document.getElementsByClassName("tabContent");
   for (let i = 0; i < timerTabs.length; i++) {
      timerTabs[i].style.display = "none";
   }
   tabLinks = document.getElementsByClassName("tabLinks");
   for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
   }
   document.getElementById(timer).style.display = "inline";
   activeTimer = timer;
   if (evt) evt.currentTarget.className += " active";

   let currTime = time[timer] * 60000; 

   output(currTime);
   stopTimer();
   timeLeft = time[activeTimer] * 60000;
}


function startTimer() {
   let end = Date.now() + timeLeft;
   
   interval = setInterval(()=> {
      let delta = end - Date.now(); 
      timeLeft = delta;
      output(delta);
      if (delta <= 0) {
         stopTimer();
         switchTimer(0, 'Pomo');
      }
   }, 100);

   
   toggleButton(false);
}


function stopTimer() {
   (interval) ? clearInterval(interval) : null;
   toggleButton(true);

}


function output(delta) {
   let seconds =  Math.floor((delta / 1000) % 60);
   let minutes = Math.floor(delta / (1000 * 60) % 60);
   let hours = Math.floor(delta / (1000 * 60 * 60));
   let hourCount = (hours == 0) ? "" : ((hours < 10)? "0" + hours : hours) +  ':';
   let minsCount = (minutes < 10) ? "0" + minutes : minutes;
   let secCount = (seconds < 10) ? "0" + seconds : seconds;
   let countdown = `${hourCount}  ${minsCount} : ${secCount}`
   document.getElementById(activeTimer + "Count").innerHTML = countdown;
}


function toggleButton(isStart) {
   document.getElementById("startButton").style.display = (isStart) ? "inline" : "none";
   document.getElementById("stopButton").style.display = (isStart) ? "none" : "inline";
}

