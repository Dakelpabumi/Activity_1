document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.sign-up-step-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const image = this.nextElementSibling;
            if (image.classList.contains('active')) {
                image.classList.remove('active');
            } else {
                // Hide all other active images
                document.querySelectorAll('.sign-up-image.active').forEach(activeImage => {
                    activeImage.classList.remove('active');
                });
                image.classList.add('active');
            }
        });
    });
});