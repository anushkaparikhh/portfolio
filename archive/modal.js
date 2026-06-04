document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    
    // Get all clickable images and videos in the grid
    const images = document.querySelectorAll('.grid-container .image, .grid-container-phone .image');
    
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Hide both first
            modalImage.style.display = 'none';
            modalVideo.style.display = 'none';
            
            // Check if it's an image or video
            if (image.tagName === 'IMG') {
                modalImage.src = image.src || image.dataset.src;
                modalImage.style.display = 'block';
            } else if (image.tagName === 'VIDEO') {
                modalVideo.src = image.src;
                modalVideo.style.display = 'block';
            }
            
            // Show the modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Make the cursor indicate it's clickable
        image.style.cursor = 'pointer';
    });
    
    // Close modal when clicking on the overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });
    
    // Optional: Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            modalImage.src = '';
            modalVideo.src = '';
        }
    });
});
