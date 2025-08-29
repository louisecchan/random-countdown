const countdown = () => {
  // Next occurrence of Dec 26, 00:00:00 (rolls to next year once reached)
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetThisYear = new Date(currentYear, 11, 26, 0, 0, 0, 0); // Dec is month 11
  const targetDate =
    now > targetThisYear
      ? new Date(currentYear + 1, 11, 26, 0, 0, 0, 0)
      : targetThisYear;

  const gap = targetDate.getTime() - now.getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

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
