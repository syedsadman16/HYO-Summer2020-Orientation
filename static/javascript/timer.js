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
   document.getElementById("lBreak).style.display = "block";
   evt.currentTarget.className += " active";
}


function startTimer(numPomodoros) {
   let onePomo = 25 * 60000;
   let end = Date.now() + onePomo * numPomodoros;

   setInterval(()=> {
      let delta = end - Date.now(); 
      document.getElementById("mins").innerHTML = Math.floor(delta / (1000 * 60) % 60).toString();
      document.getElementById("secs").innerHTML = Math.floor((delta / 1000) % 60);
   }, 100);
}

