function updateClock(){
    const date= new Date();
    const hours=date.getHours().toString().padStart(2,0);
    const mins=date.getMinutes().toString().padStart(2,0);
    const seconds=date.getSeconds().toString().padStart(2,0);
    const timeNow=`${hours}:${mins}:${seconds}`;
    document.getElementById("clock").textContent=timeNow;
}
updateClock();
setInterval(updateClock,1000);