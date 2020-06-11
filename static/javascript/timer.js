var interval, activeTimer;

var time = {
   "Pomo": 25,
   "sBreak": .1,
   "lBreak": 15
}

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
   document.getElementById(timer).style.display = "block";
   activeTimer = timer;
   if (evt) evt.currentTarget.className += " active";

   let currTime = time[timer] * 60000; 

   output(currTime);
   stopTimer();
}


function startTimer() {
   let totalTime = time[activeTimer] * 60000;
   let end = Date.now() + totalTime;
   
   interval = setInterval(()=> {
      let delta = end - Date.now(); 
      output(delta);
      if (delta <= 0) {
         stopTimer();
         output(0);
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
   document.getElementById(activeTimer + "Hour").innerHTML = (hours == 0) ? "" : hours;
   document.getElementById(activeTimer + "Mins").innerHTML = (minutes < 10) ? "0" + minutes:minutes;
   document.getElementById(activeTimer + "Secs").innerHTML = (seconds < 10) ? "0" + seconds : seconds;
}


function toggleButton(isStart) {
   document.getElementById("startButton").style.display = (isStart) ? "inline" : "none";
   document.getElementById("stopButton").style.display = (isStart) ? "none" : "inline";
}

