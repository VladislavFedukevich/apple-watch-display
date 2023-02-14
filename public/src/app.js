const setTime = () => {
  const date = new Date();
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

  const time = document.querySelector('.time');
  const year = document.querySelector('.year-since');

  year.textContent = date.getFullYear();
  time.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(setTime, 1000);
