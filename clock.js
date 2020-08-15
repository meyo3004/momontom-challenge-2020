const clockContainer = document.querySelector(".js_clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds();
  const showHour = `${hour < 10 ? `0${hour}` : hour}`;
  const showMin = `${min < 10 ? `0${min}` : min}`;

  clockTitle.innerText = `${showHour}:${showMin}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
