const pauseResumeBtn = document.getElementById('pauseResumeBtn');


pauseResumeBtn.addEventListener('click', () => {
    pauseResumeBtn.innerHTML = pauseResumeBtn.innerHTML === '<i class="fa-solid fa-pause"></i> pause' ? '<i class="fa-solid fa-play"></i> resume' : '<i class="fa-solid fa-pause"></i> pause';
});