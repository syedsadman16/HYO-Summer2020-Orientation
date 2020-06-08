function switchTimer(evt, timer) {
   let timerTabs;
   timerTabs = document.getElementsByClassName(tabContent);
   for (let i = 0; i < timerTabs.length; i++) {
      timerTabs[i].style.display = "none";
   }
