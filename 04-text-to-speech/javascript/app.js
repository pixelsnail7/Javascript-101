const display = document.getElementById('display');
const speakBtn = document.getElementById('speakBtn');
const pauseResumeBtn = document.getElementById('pauseResumeBtn');
const cancleBtn = document.getElementById('cancleBtn');
const pitch = document.getElementById('pitch');
const pitchOutput = document.getElementById('pitchOutput');
const rate = document.getElementById('rate');
const rateOutput = document.getElementById('rateOutput');
const volume = document.getElementById('volume');
const volumeOutput = document.getElementById('volumeOutput');

import { Tts } from "./tts.mjs";
const tts = new Tts();

// speak text
speakBtn.addEventListener('click', () => {
    // set display text to tts text
    tts.SetText = display.textContent;
    // speak text
    String(tts.text).trim().length != 0 ? tts.speak() : display.textContent = 'No text to speak';
});

// change pauseResumeBtn ui and pause/resume speaking
pauseResumeBtn.addEventListener('click', () => {
    pauseResumeBtn.innerHTML = pauseResumeBtn.innerHTML === '<i class="fa-solid fa-pause"></i> pause' ? '<i class="fa-solid fa-play"></i> resume' : '<i class="fa-solid fa-pause"></i> pause';
    tts.resume() || tts.pause();
});

// cancel speaking
cancleBtn.addEventListener('click', () => tts.cancel());


// set dafault values
function dafaultValues() {
    // set default values
    pitch.value = tts.pitch; pitchOutput.innerText = tts.pitch;
    rate.value = tts.rate; rateOutput.innerText = tts.rate;
    volume.value = tts.volume; volumeOutput.innerText = tts.volume;
} dafaultValues();


// change tts values
pitch.addEventListener('change', () => tts.SetPitch = pitch.value);
rate.addEventListener('change', () => tts.SetRate = rate.value);
volume.addEventListener('change', () => tts.SetVolume = volume.value);