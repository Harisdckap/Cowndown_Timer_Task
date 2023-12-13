"use strict";

var Dayscal=document.querySelector(".Days");
var Hourscal=document.querySelector(".Hours");
var Minscal=document.querySelector(".Mins");
var Secscal=document.querySelector(".Secs");



let futureDate = new Date("Dec 31, 2023 16:38:00").getTime();


let timecalc = setInterval(function() {

  let currenttime = new Date().getTime();
  let timediffer = futureDate - currenttime;
  // console.log(timediffer);
  
  let Day = Math.floor(timediffer / 1000 / 60 / 60 /24)
  // console.log(Day);
  let Hour = Math.floor((timediffer / 1000 / 60 / 60) % 24);
  // console.log(Hour);
  let Minute = Math.floor((timediffer / 1000 / 60) % 60);
  // console.log(Minute);
  let Secs = Math.floor((timediffer / 1000) % 60);
  // console.log(Secs);

  Dayscal.innerHTML = Day;
  Hourscal.innerHTML = Hour;
  Minscal.innerHTML = Minute;
  Secscal.innerHTML = Secs;

  if (timediffer < 0) {
    Dayscal.innerHTML = 0;
    Hourscal.innerHTML = 0;
    Minscal.innerHTML = 0;
    Secscal.innerHTML = 0;
  }

},1000);






























// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// // Divide Time with a year
// const d = new Date();

// let years = Math.round(d.getTime() / year);
// console.log(years);

// let days = Math.round(d.getTime() / day);
// console.log(days);


// let hours = Math.round(d.getTime() / hour);
// console.log(hours);

// let minutes = Math.round(d.getTime() / minute);
// console.log(minutes);
















































// const year = futureDate.getFullYear();
//  hours = futureDate.getHours();
// let minutes = futureDate.getMinutes();
// let month = futureDate.getMonth();
// month = months[month];

// const weekday = weekdays[futureDate.getDay()];

// const date = futureDate.getDate();
// DTHM.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

