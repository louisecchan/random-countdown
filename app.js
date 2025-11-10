const countdown = () => {
  // Get cake day from localStorage
  const savedCakeDay = localStorage.getItem("cakeDay");

  if (!savedCakeDay) {
    // If no cake day is set, redirect to index page
    window.location.href = "index.html";
    return;
  }

  // Parse the saved cake day (format: YYYY-MM-DD)
  const cakeDayParts = savedCakeDay.split("-");
  const cakeMonth = parseInt(cakeDayParts[1]) - 1; // Month is 0-indexed
  const cakeDate = parseInt(cakeDayParts[2]);

  // Calculate next occurrence of the cake day
  const now = new Date();
  const currentYear = now.getFullYear();
  const targetThisYear = new Date(currentYear, cakeMonth, cakeDate, 0, 0, 0, 0);
  const targetDate =
    now > targetThisYear
      ? new Date(currentYear + 1, cakeMonth, cakeDate, 0, 0, 0, 0)
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
