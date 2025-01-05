// Function to fetch and display reviews
function fetchReviews() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(reviews => {
            const reviewsList = document.getElementById('reviews-list');
            reviewsList.innerHTML = ''; // Clear existing reviews

            reviews.slice(0, 5).forEach(review => { // Limit to first 5 reviews
                const reviewCard = document.createElement('div');
                reviewCard.classList.add('review-card');
                reviewCard.innerHTML = `
                    <strong>${review.title}</strong>
                    <p>${review.body}</p>
                `;
                reviewsList.appendChild(reviewCard);
            });
        })
        .catch(err => console.error('Error fetching reviews:', err));
}

// Function to handle review form submission
function handleReviewSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const reviewText = document.getElementById('review').value.trim();

    if (name && reviewText) {
        // Here, you can save the review to your backend or a mock API
        const reviewData = {
            title: name,
            body: reviewText
        };

        // Send the review to a backend (for now, we use a mock API)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => response.json())
        .then(newReview => {
            alert('Review submitted successfully!');
            fetchReviews(); // Reload reviews
            document.getElementById('review-form').reset(); // Reset form
        })
        .catch(err => console.error('Error submitting review:', err));
    } else {
        alert('Please fill in both fields.');
    }
}

// Initialize the page
window.onload = function () {
    fetchReviews(); // Fetch and display existing reviews when page loads

    // Set up event listener for form submission
    const reviewForm = document.getElementById('review-form');
    reviewForm.addEventListener('submit', handleReviewSubmit);
};
