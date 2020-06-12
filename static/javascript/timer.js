var interval, activeTimer;

var time = {
   "Pomo": 25,
   "sBreak":5,
   "lBreak":15
}

var timeLeft;
window.onload = function() {

   switchTimer(0,'Pomo');
   toggleActive('POMODORO');
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

   let currTime = time[timer] * selectedPomos * 60000;

   output(currTime);
   stopTimer();
   timeLeft = currTime;
}


function startTimer() {
   let end = Date.now() + timeLeft;

   interval = setInterval(()=> {
      let delta = end - Date.now();
      timeLeft = delta;
      output(delta);
      if (delta <= 0) {
         stopTimer();
         if (activeTimer == 'Pomo')
         {
            switchTimer(0, 'sBreak');
            toggleActive('SHORT BREAK');
         }
         else
         {
            switchTimer(0, 'Pomo');
            toggleActive('POMODORO');
         }
      }
   }, 100);


   toggleButton(false);
   document.getElementById("fu_message").innerHTML = "";
}


function stopTimer() {
   (interval) ? clearInterval(interval) : null;
   toggleButton(true);

}


function stopButtonClicked() {
   document.getElementById("fu_message").innerHTML = "Get back to work you lazy piece of human garbage!";
   stopTimer();
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


function toggleActive(btnName){
  tabLinks = document.getElementsByClassName("tabLinks");
   for (let i = 0; i < tabLinks.length; i++) {
     if (tabLinks[i].innerHTML == btnName) {
      tabLinks[i].className = tabLinks[i].className += " active";
     }
   }

}
