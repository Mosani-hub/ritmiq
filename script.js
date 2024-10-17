document.addEventListener('DOMContentLoaded', function () {
    const envelope = document.getElementById('envelope');
    const audio = document.getElementById('weddingMusic');

    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
        audio.play();
    });
});