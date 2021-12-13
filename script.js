function date () {
    let hrsReel = document.querySelector('#hour');
    let minsReel = document.querySelector("#minute");
    let secondsReel = document.querySelector('#second');

    let seconds = new Date().getSeconds();
    secondsReel.style.transform = "rotate(" + (seconds *6) + "deg)";

    let mins = new Date().getMinutes();
    minsReel.style.transform = "rotate(" + (mins * 6 ) + "deg)";

    let hrs = new Date().getHours()
    hrsReel.style.transform = "rotate(" + (hrs * 30) + "deg)";
    console.log(seconds);
}

setInterval(date, 1000);