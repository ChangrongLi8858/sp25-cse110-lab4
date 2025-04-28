function logCurrentTime() {
    const d = new Date();
    const time = d.toLocaleTimeString(); 
    console.log(time);
  }
  
  logCurrentTime();
  setInterval(logCurrentTime, 1000);
  