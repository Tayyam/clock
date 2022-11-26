function setCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let seconds = date.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let year = date.getFullYear();
  let month = date.getMonth();
  month += 1;
  month = month < 10 ? "0" + month : month;
  let daynumberw = date.getDay();
  let daynumberm = date.getDate();
  daynumberm = daynumberm < 10 ? "0" + daynumberm : daynumberm;
  let daysList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayname = daysList[daynumberw];
  let dateformat = ` ${daynumberm}/${month}/${year}`;

  if (hours > 12) {
    hours = hours - 12;
    hours = hours < 10 ? "0" + hours : hours;

    document.getElementById("apm").innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("day").innerHTML = dayname;
  document.getElementById("date").innerHTML = dateformat;
}

setInterval(setCurrentTime, 1000);
