const button = document.getElementById('startBtn');
const message = document.getElementById('message');
const countdownEl = document.getElementById('countdown');

let countdownInterval;

button.addEventListener("click", () => {
  message.classList.remove("hidden");

  //Initial countdown time (5 minutes)
  let timeInSeconds = 30 * 60;

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    countdownEl.textContent = `${days
      .toString()
      .padStart(2, "0")} days, ${hours
      .toString()
      .padStart(2, "0")} hours, ${minutes
      .toString()
      .padStart(2, "0")} minutes and
      ${seconds.toString().padStart(2, "0")} seconds`;   

        if (timeInSeconds <= 0) {
          clearInterval(countdownInterval);
          alert("Maintenance completed! The website is now live.");
          countdownEl.textContent = "Maintenance completed!";
        }

        timeInSeconds--;
  }, 1000);
});


// let time = 60;
// const timer = document.getElementById('timer');

// const countdown = setInterval(() => {
//   time--;
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;
//   timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

//   if(time <= 0) {
//     clearInterval(countdown);
//     timer.style.color = 'red';
//     timer.innerHTML = "Time's Up! <br> Please Refresh the Page.";
//   }
// }, 1000);