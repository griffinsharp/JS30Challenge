const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const clock = () => {
    let now = new Date ();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hour = now.getHours();

    let secValue = ((sec / 60) * 360) + 90;
    let minValue = ((min / 60) * 360) + 90;
    let hourValue = (hour / 12) * 360 + 90;

    secHand.style.transform = `rotate(${secValue}deg)`;
    minHand.style.transform = `rotate(${minValue}deg)`;
    hourHand.style.transform = `rotate(${hourValue}deg)`;
};

setInterval(clock, 1000);