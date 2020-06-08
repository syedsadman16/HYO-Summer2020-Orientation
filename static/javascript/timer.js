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
