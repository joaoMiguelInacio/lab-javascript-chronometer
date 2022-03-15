class Chronometer {
  constructor() {
    this.currentTime = 0;   
    this.intervalId = null; 
  }
  
  start(callback) {
  if(callback){
    this.intervalId = setInterval(callback, 1000);
  } else {
     this.intervalId = setInterval( () => this.currentTime++, 1000);
  }
}

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime%60);
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
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let display = `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
    return display;
  } 
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
