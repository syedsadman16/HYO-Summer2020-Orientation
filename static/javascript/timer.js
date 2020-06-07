let startingMinutes = 25;
let time = startingMinutes * 60;
var id;
let counting = false;

let countdownEl = document.getElementById('countdown');
display();

function display() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (seconds == 0) {
        counting = false;
        document.getElementById('start-stop').innerHTML = "Start";

    }
    
    countdownEl.innerHTML = `${minutes}: ${seconds}`;
}

function count() {
    display();
    time--;
}

function timer() {

    counting = !counting;


    if (counting) {
        id = setInterval(count, 1000);
        document.getElementById('start-stop').innerHTML = "Stop";
    } else {
        clearInterval(id);
        alert("no u");
        document.getElementById('start-stop').innerHTML = "Start";

    }
   
}

function set() {
   startingMinutes = arguments[0];
   time = startingMinutes * 60;
   display();
}

