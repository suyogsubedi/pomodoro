pomoClock = document.getElementById("pomoClock");
studyTime = prompt("Study Time? in minutes");
time = studyTime * 60;
breakTime = prompt("Enter the time you want for break? in minutes");
breaks = breakTime * 60;

setInterval(function timer() {
  if (time != 0) {
    time = time - 1;

    pomoClock.innerHTML = time;
  } else {
    pomoClock.innerHTML = `Break Time`;
    if (breaks != 0) {
      breaks = breaks - 1;
      pomoClock.innerHTML = `Break Left : ${breaks}`;
    }
  }
}, 1000);
