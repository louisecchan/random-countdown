const countdown = () => {
  const countDate = new Date("Jul 26, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // How the fuck does time work?
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate the shit
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document.querySelector(".text-day").innerText = textDay;
  document.querySelector(".text-hour").innerText = textHour;
  document.querySelector(".text-minute").innerText = textMinute;
  document.querySelector(".text-second").innerText = textSecond;
};

setInterval(countdown, 1000);
