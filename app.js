document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.project-video video').forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // reset
        });
    });
});
