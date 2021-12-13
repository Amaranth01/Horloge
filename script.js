function date () {
    let hrsReel = document.querySelector('#hour');
    let minsReel = document.querySelector("#minute");
    let secondsReel = document.querySelector('#second');
    const Today = new Date();

    let seconds = Today.getSeconds();
    secondsReel.style.transform = "rotate (" + (seconds *6) + " deg)";

    let mins = Today.getMinutes();
    minsReel.style.transform = "rotate (" + (mins * 6 ) + "deg)";

    let hrs = Today.getHours()
    hrsReel.style.transform = "rotate (" + (hrs * 30) + "deg)";
}

setInterval(date, 1000);