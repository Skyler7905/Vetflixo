document.addEventListener('DOMContentLoaded', () => {
    // Get all image links with the data-video-id attribute
    const imageLinks = document.querySelectorAll('.box a[data-video-id]');

    // Add a click event listener to each image link
    imageLinks.forEach(link => {
        link.addEventListener('click', event => {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the data-video-id attribute value
            const videoId = link.getAttribute('data-video-id');

            // Redirect to vid.html with the video ID as a query parameter
            window.location.href = `vid.html?id=${videoId}`;
        });
    });
});
