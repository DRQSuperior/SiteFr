function playVideo() {
    const video = document.getElementById('background-video');
    const overlay = document.querySelector('.overlay');
    
    overlay.style.display = 'none'; // Hide overlay
    video.play(); // Play video
    video.muted = false; // Unmute video
  }
  