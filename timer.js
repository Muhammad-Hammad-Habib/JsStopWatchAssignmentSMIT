var min, sec, msec, interval;
min = 0;
sec = 0;
msec = 0;


const startBtn = () => {
    interval = setInterval(watch, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("reset").disabled = false;
}
const pauseBtn = () => {
    clearInterval(interval, 0.0001);
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = false;
}

const resetBtn = () => {
    clearInterval(interval, 0.0001)
    document.getElementById("min").value = "";
    document.getElementById("sec").value = "";
    document.getElementById("mSec").value = "";
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("reset").disabled = true;

}


const watch = () => {
    document.getElementById("mSec").value = msec;
    msec++;
    if (msec == 99) {
        msec = 0;
        document.getElementById("sec").value = sec;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            document.getElementById("min").value = min;

            if (min == 60) {
                min = 0;
            }
        }
    }
}