document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('eidCard');
    const card = cardContainer.querySelector('.card');
    const audio = document.getElementById('eidAudio');

    cardContainer.addEventListener('click', () => {
        card.classList.toggle('open');
        audio.loop = true;
        if (audio.paused) {
            audio.play().catch(() => {
                // If playback is blocked, the user interaction still allows it on next click.
            });
        }
    });
});