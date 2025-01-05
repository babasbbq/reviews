// Function to display all reviews from localStorage
function displayReviews() {
    const reviewsList = document.getElementById("reviews-list");
    reviewsList.innerHTML = ""; // Clear existing reviews

    // Fetch reviews from localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    // Display each review
    reviews.forEach((review) => {
        const reviewCard = document.createElement("div");
        reviewCard.classList.add("review-card");

        reviewCard.innerHTML = `
            <strong>${review.name}</strong>
            <p>${review.text}</p>
        `;

        reviewsList.appendChild(reviewCard);
    });
}

// Function to handle review submission
function handleReviewSubmit(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const reviewText = document.getElementById("review").value.trim();

    if (name && reviewText) {
        // Create a new review object
        const newReview = {
            name,
            text: reviewText,
        };

        // Retrieve existing reviews from localStorage
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        // Add new review to the list
        reviews.push(newReview);

        // Store updated reviews back to localStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Reset the form
        document.getElementById("review-form").reset();

        // Display updated reviews
        displayReviews();
    } else {
        alert("Please fill in both your name and review.");
    }
}

// Initialize page with existing reviews
window.onload = function () {
    displayReviews();

    // Attach form submit event listener
    const reviewForm = document.getElementById("review-form");
    reviewForm.addEventListener("submit", handleReviewSubmit);
};
sss