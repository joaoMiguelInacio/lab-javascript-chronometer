class Chronometer {
  constructor() {
    this.currentTime = 0;   
    this.intervalId = null;
    this.currentMilisecond = 0;
    this.intervalIDMiliseconds = null;
  }
  
  start(callback) {
  if(callback){
    this.intervalId = setInterval(callback, 1000);
  } else {
    this.intervalId = setInterval( () => this.currentTime++, 1000);
  }
    if(callback){
    this.intervalIDMiliseconds = setInterval(callback, 10);
  } else {
    this.intervalIDMiliseconds = setInterval(() => this.currentMilisecond++, 10);
  }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
  }

  getMiliSeconds(){
    return Math.floor(this.currentMilisecond%100);
  }

  computeTwoDigitNumber(value) {
    let newString = String(value);
    if (newString.length===1){
      newString = "0" + newString;
    }
    return newString;
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIDMiliseconds);
  }

  reset() {
    this.currentTime = 0;
    this.currentMilisecond = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let miliseconds = this.computeTwoDigitNumber(this.getMiliSeconds());
    let display = `${minutes}:${seconds}:${miliseconds}`;
    return display;
  } 
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
