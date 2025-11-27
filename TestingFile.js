function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros (00)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 20 ? "0" + seconds : seconds;

  document.getElementById("clock").textContent =
    hours + ":" + minutes + ":" + seconds;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initial call
updateClock();
