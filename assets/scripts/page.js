const banner = document.getElementById('banner');
const video = document.getElementById('bannerVideo');
const playBtn = document.querySelector('.playButton');
const closeBtn = document.getElementById('closeVideo');
const muteBtn = document.getElementById('muteVideo');

// Play button
playBtn.addEventListener('click', () => {
     video.style.transition = "opacity 1s ease";
    banner.style.opacity = 0;
    playBtn.style.opacity = 0;
    video.style.opacity = 1;
    muteBtn.style.opacity=1;
    closeBtn.style.opacity=1;
    video.play();
});

// Close button
closeBtn.addEventListener('click', () => {
     video.style.transition = "opacity .2s ease";

    video.pause();
    video.currentTime = 0;
    video.style.opacity = 0;

    banner.style.opacity = 1;
    playBtn.style.opacity = 1;
    muteBtn.style.opacity=0;
    closeBtn.style.opacity=0;
});

// Mute/unmute toggle
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    if (video.muted) {
        muteBtn.classList.remove('fa-volume-high');
        muteBtn.classList.add('fa-volume-xmark');
    } else {
        muteBtn.classList.remove('fa-volume-xmark');
        muteBtn.classList.add('fa-volume-high');
    }
});

// Reset when video ends
video.addEventListener('ended', () => {
    video.pause();
    video.currentTime = 0;
    video.style.opacity = 0;

    banner.style.opacity = 1;
    playBtn.style.opacity = 1;

    muteBtn.style.opacity=0;
    closeBtn.style.opacity=0;
});



//Scroll Button

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 2600) {  // show after 300px
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
