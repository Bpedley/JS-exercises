const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();
let second = date.getSeconds() * 6;
let minute = (date.getMinutes() * 6) + (second / 60);
let hour = (date.getHours() * 30) + (minute / 12);


function getTime() {
  second += 6;
  minute += (6 / 60);
  hour += (3 / 360);

  HOURHAND.style.transform = `rotate(${hour}deg)`;
  MINUTEHAND.style.transform = `rotate(${minute}deg)`;
  SECONDHAND.style.transform = `rotate(${second}deg)`;
}


setInterval(getTime, 1000);
