const clockContainer = document.querySelector(".js_clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds();
  const showHour = `${hour < 10 ? `0${hour}` : hour}`;
  const showMin = `${min < 10 ? `0${min}` : min}`;
  const showSec = `${sec < 10 ? `0${sec}` : sec}`;

  clockTitle.innerText = `${showHour}:${showMin}:${showSec}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
