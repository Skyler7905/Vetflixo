document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('video-container');

    // Extract video ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    console.log('URL Parameters:', window.location.search);
    console.log('Video ID:', videoId);

    // Check if the video ID is empty or null, and if so, redirect to an error page or handle appropriately
    if (!videoId) {
        console.error('Video ID not found. Redirect or handle the error appropriately.');
        return;
    }

    // Create a video element dynamically based on the selected video ID
    const videoElement = document.createElement('div');
    videoElement.innerHTML = `
        <video controls playsinline preload="metadata">
            <source src="https://drive.google.com/uc?id=${videoId}" type="video/mp4">
        </video>
    `;

    console.log('Video Element:', videoElement);

    // Append the video element to the video container
    videoContainer.appendChild(videoElement);

    // Initialize Plyr for the video element
    const player = new Plyr(videoElement.querySelector('video'), {
        controls: [
            'play-large',
            'play',
            'progress',
            'current-time',
            'mute',
            'volume',
            'fullscreen'
        ],
        fullscreen: { enabled: true, fallback: true, iosNative: true },
    });

    console.log('Plyr Player:', player);
});
