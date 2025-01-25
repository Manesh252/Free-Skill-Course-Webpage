document.addEventListener('DOMContentLoaded', function () {
    const videoItems = [
        { title: 'Introduction to HTML', duration: '3 hours', views: 1500 },
        { title: 'CSS Basics', duration: '8 hours', views: 1200 },
        { title: 'JavaScript Fundamentals', duration: '3 hours', views: 2000 },
    ];

    const videoContainer = document.getElementById('video-items');
    videoItems.forEach((video, index) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('video-item');
        videoElement.innerHTML = `
            <div>
                <strong>${video.title}</strong><br>
                Duration: ${video.duration} | Views: ${video.views}
            </div>
            <label>
                <input type="checkbox" class="completed-checkbox" data-video-index="${index}"> Mark as Completed
            </label>
        `;
        videoContainer.appendChild(videoElement);
    });
    document.querySelectorAll('.completed-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const index = this.getAttribute('data-video-index');
            const video = videoItems[index];
            if (this.checked) {
                alert(`You completed: ${video.title}`);
            }
        });
    });
    document.getElementById('save-notes').addEventListener('click', function () {
        const notes = document.getElementById('notes').value;
        if (notes) {
            alert('Notes saved!');
        } else {
            alert('Please add some notes first.');
        }
    });
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let completedVideos = 0;

    document.querySelectorAll('.completed-checkbox').forEach((checkbox) => {
        checkbox.addEventListener('change', updateProgress);
    });

    function updateProgress() {
        completedVideos = document.querySelectorAll('.completed-checkbox:checked').length;
        const progressPercentage = (completedVideos / videoItems.length) * 100;
        progressBar.value = progressPercentage;
        progressText.textContent = `Progress: ${Math.round(progressPercentage)}%`;
    }
    document.getElementById('submit-rating').addEventListener('click', function () {
        const rating = document.getElementById('course-rating').value;
        if (rating >= 1 && rating <= 5) {
            alert(`You rated the course: ${rating} stars.`);
        } else {
            alert('Please provide a rating between 1 and 5.');
        }
    });
});
