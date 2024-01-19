document.addEventListener('DOMContentLoaded', () => {
  const startStopBtn = document.querySelector('.toggle');
  const resetBtn = document.querySelector('.reset');
  let isRunning = false;
  let internalCounter = {
    hours: 0,
    mins: 0,
    secs: 0,
    centisecs: 0
  }
  let intervals = {};
  
  function incrementCounter(key) {
    internalCounter[key] += 1;

    if (key === 'hours' && internalCounter.hours === 100) internalCounter.hours = 0;
    if (key === 'mins' && internalCounter.mins === 60) internalCounter.mins = 0;
    if (key === 'secs' && internalCounter.secs === 60) internalCounter.secs = 0;
    if (key === 'centisecs' && internalCounter.centisecs === 100) internalCounter.centisecs = 0;
  }

  function render(key) {
    document.querySelector(`.${key}`).textContent = String(internalCounter[key])
                                                    .padStart(2, '0');
  }

  function resetRender() {
    document.querySelectorAll('span').forEach(counter => {
      counter.textContent = '00';
    });
  }

  function runCounter(key) {
    incrementCounter(key);
    render(key);
  }

  function start() {
    intervals.hours = setInterval(runCounter, 3600000, 'hours');
    intervals.mins = setInterval(runCounter, 60000, 'mins');
    intervals.secs = setInterval(runCounter, 1000, 'secs');
    intervals.centisecs = setInterval(runCounter, 10, 'centisecs');
    startStopBtn.textContent = 'Stop';
    isRunning = true;
  }

  function stop() {
    Object.keys(intervals).forEach(key => {
      clearInterval(intervals[key]);
    });
    startStopBtn.textContent = 'Start';
    isRunning = false;
  }

  function reset() {
    stop();
    Object.keys(internalCounter).forEach(key => {
      internalCounter[key] = 0;
    });
    resetRender();
  }

  startStopBtn.addEventListener('click', event => {
    if (!isRunning) {
      start();
    } else {
      stop();
    }
  });

  resetBtn.addEventListener('click', event => {
    reset();
  })
});