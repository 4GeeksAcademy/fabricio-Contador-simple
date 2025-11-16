import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css
import '../styles/index.css'

// components
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));


let seconds = 0;
let running = true;
let mode = 'up';
let countFrom = 60;
let alertAt = '';


function startUp() {
  mode = 'up';
  seconds = 0;
  running = true;
  render();
}
function startDown(n = countFrom) {
  seconds = Math.max(0, parseInt(n || 0, 10));
  mode = 'down';
  running = true;
  render();
}
function pause() {
  running = false;
  render();
}
function resume() {
  if (mode !== 'down' || seconds > 0) {
    running = true;
    render();
  }
}
function reset() {
  running = false;
  mode = 'up';
  seconds = 0;
  render();
}
function setCountFromUI(v) {
  countFrom = Math.max(0, parseInt(v || 0, 10));
  render();
}
function setAlertAtUI(v) {
  alertAt = v;
  render();
}


function tick() {
  if (!running) return;

  if (mode === 'up') {
    seconds += 1;
  } else {
    seconds = Math.max(0, seconds - 1);
    if (seconds === 0) running = false;
  }

  if (alertAt !== '' && Number(alertAt) === seconds) {
    alert(`⏰ Se alcanzó ${seconds} segundo(s)`);
  }

  render();
}


function render() {
  root.render(
    <React.StrictMode>
      <Home
        seconds={seconds}
        running={running}
        mode={mode}
        countFrom={countFrom}
        alertAt={alertAt}
        actions={{
          startUp, startDown, pause, resume, reset,
          setCountFromUI, setAlertAtUI
        }}
      />
    </React.StrictMode>
  );
}


setInterval(tick, 1000);
render();