var interval;

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
   evt.currentTarget.className += " active";
}


function startTimer(numPomodoros, timer) {
   let onePomo = 25 * 60000;
   let end = Date.now() + onePomo * numPomodoros;
   if (interval)
   {
      clearInterval(interval);
   }
   interval = setInterval(()=> {
      let delta = end - Date.now(); 
      document.getElementById(timer + "hour").innerHTML = Math.floor(delta / (1000 * 60 * 60));
      document.getElementById(timer + "mins").innerHTML = Math.floor(delta / (1000 * 60) % 60).toString();
      document.getElementById(timer + "secs").innerHTML = Math.floor((delta / 1000) % 60);
   }, 100);

}

