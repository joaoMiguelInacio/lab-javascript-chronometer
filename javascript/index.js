
const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
const olElement= document.getElementById('splits');

let intervalID = setInterval(printTime, 10);

function printTime() { 
  printMinutes();
  printSeconds();
  printMilliSeconds();
}

function printMinutes() {  
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {  
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

function printMilliSeconds() {
  const miliseconds = chronometer.computeTwoDigitNumber(chronometer.getMiliSeconds());
  milDec.innerHTML = miliseconds[0];
  milUni.innerHTML = miliseconds[1];
}

function printSplit() {  
  const liTag = document.createElement('li');
  liTag.innerHTML= chronometer.split();
  olElement.appendChild(liTag);
}

function clearSplits() { 
  olElement.innerHTML="";
}

function setStopBtn() {  
  btnLeftElement.setAttribute('class', 'btn stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() { 
  btnRightElement.setAttribute('class', 'btn split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() { 
  btnLeftElement.setAttribute('class', 'btn start'); 
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() { 
  btnRightElement.setAttribute('class', 'btn reset');
  btnRightElement.innerHTML = 'RESET';
}

function resetDisplay () {
  minDec.innerHTML = 0;
  minUni.innerHTML = 0;
  secDec.innerHTML = 0;
  secUni.innerHTML = 0;
  milDec.innerHTML = 0;
  milUni.innerHTML = 0;
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.contains("stop")){
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  } else {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime());
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("split")){
    printSplit();
  } else {
    clearSplits();
    chronometer.reset();
    resetDisplay();
  }
});

