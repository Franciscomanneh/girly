// Simple TikTok-like behavior: play/pause, double-tap like, keyboard toggle
(function(){
  const video = document.getElementById('tiktokVideo');
  const btn = document.getElementById('tiktokPlayBtn');
  const likeBtn = document.getElementById('likeBtn');
  const dtHeart = document.getElementById('dtHeart');

  if(!video) return;

  // Toggle play/pause
  function togglePlay(){
    if(video.paused){
      video.play();
      btn.textContent = 'Pause';
    } else {
      video.pause();
      btn.textContent = 'Play';
    }
  }

  // Double-tap detection
  let lastTap = 0;
  video.addEventListener('touchend', function(e){
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if(tapLength < 300 && tapLength > 0){
      animateHeart();
      likeBtn.classList.add('liked');
    }
    lastTap = currentTime;
  });

  // Also support double click with mouse
  video.addEventListener('dblclick', function(){
    animateHeart();
    likeBtn.classList.add('liked');
  });

  function animateHeart(){
    dtHeart.classList.add('show');
    setTimeout(()=> dtHeart.classList.remove('show'), 700);
  }

  // click handlers
  btn.addEventListener('click', togglePlay);
  likeBtn.addEventListener('click', function(){
    likeBtn.classList.toggle('liked');
  });

  // spacebar toggles play/pause when focused on page
  window.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
      e.preventDefault();
      togglePlay();
    }
  });

  // when video starts playing, ensure button label
  video.addEventListener('play', ()=> btn.textContent = 'Pause');
  video.addEventListener('pause', ()=> btn.textContent = 'Play');

})();
