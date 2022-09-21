const clock = document.querySelector(".main-clock");
/* 왜 new Date 이렇게 하는지*/ 
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);