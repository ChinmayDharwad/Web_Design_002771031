$(document).ready(function () {
  let timer = $("#timer");
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  let intervalId = null;

  async function startTimer() {
    intervalId = setInterval(function () {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      timer.text(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }, 500);
  }

  $("#start").click(function () {
    startTimer();
  });

  $("#stop").click(function () {
    clearInterval(intervalId);
  });

  $("#reset").click(function () {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.text("00:00:00");
  });
});
