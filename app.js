pomoClock = document.getElementById("pomoClock");
studyTime = prompt("Enter the time you want to work for. (in minutes)");
time = studyTime * 60;
breakTime = prompt("Enter the time you want for break. (in minutes)");
breaks = breakTime * 60;

setInterval(function timer() {
  if (time != 0) {
    time = time - 1;

    pomoClock.innerHTML = `Work For ${time} seconds`;
  } else {
    pomoClock.innerHTML = `Break Time`;
    if (breaks != 0) {
      breaks = breaks - 1;
      pomoClock.innerHTML = `Break for : ${breaks}seconds`;
    }
  }
}, 1000);
