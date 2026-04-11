export function loadContact() {
    const content = document.getElementById('content');

    const testimonials = [
        {
            name: 'Ariana Blake',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
            rating: '★★★★★',
            review: 'Tbh the truffle pasta was unbelievably smooth and the staff made the whole evening feel special😊.'
        },
        {
            name: 'Noah Carter',
            image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            rating: '★★★★☆',
            review: 'Loved the atmosphere, quick service, and the way every plate felt fresh instead of rushed.'
        },
        {
            name: 'Sana Mirza',
            image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
            rating: '★★★★★',
            review: 'Beautiful presentation, warm vibe, and desserts yeah, honestly stole the show for our table, thankyou ♥️.'
        }
    ];

    const contactSection = document.createElement('section');
    contactSection.classList.add('contact-section');

    const authCard = document.createElement('div');
    authCard.classList.add('auth-card');

    const authTitle = document.createElement('h1');
    authTitle.classList.add('contact-title');
    authTitle.innerText = 'Stay Connected With The Lićious';

    const authText = document.createElement('p');
    authText.classList.add('contact-subtitle');
    authText.innerText = 'Create an account, log in, or leave us a quick note so we can keep your next visit even better.';

    const authForm = document.createElement('form');
    authForm.classList.add('auth-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.placeholder = 'Full Name';
    nameInput.required = true;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Email Address';
    emailInput.required = true;

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Password';
    passwordInput.required = true;

    const mobileInput = document.createElement('input');
    mobileInput.type = 'tel';
    mobileInput.name = 'mobile';
    mobileInput.placeholder = 'Mobile Number (Optional)';

    const actionRow = document.createElement('div');
    actionRow.classList.add('auth-actions');

    const signupBtn = document.createElement('button');
    signupBtn.type = 'button';
    signupBtn.classList.add('contact-btn', 'primary-btn');
    signupBtn.innerText = 'Sign Up';

    const loginBtn = document.createElement('button');
    loginBtn.type = 'button';
    loginBtn.classList.add('contact-btn', 'secondary-btn');
    loginBtn.innerText = 'Log In';

    const forgotLink = document.createElement('a');
    forgotLink.href = '#';
    forgotLink.classList.add('forgot-link');
    forgotLink.innerText = 'Forgot Password?';

    actionRow.append(signupBtn, loginBtn);
    authForm.append(nameInput, emailInput, passwordInput, mobileInput, actionRow, forgotLink);
    authCard.append(authTitle, authText, authForm);

    const reviewsSection = document.createElement('div');
    reviewsSection.classList.add('reviews-section');

    const reviewHeading = document.createElement('h2');
    reviewHeading.classList.add('review-heading');
    reviewHeading.innerText = 'What Guests Are Saying';

    const reviewGrid = document.createElement('div');
    reviewGrid.classList.add('review-grid');

    testimonials.forEach((item) => {
        const reviewCard = document.createElement('article');
        reviewCard.classList.add('review-card');

        const reviewerImage = document.createElement('img');
        reviewerImage.classList.add('reviewer-image');
        reviewerImage.src = item.image;
        reviewerImage.alt = item.name;

        const reviewerName = document.createElement('h3');
        reviewerName.classList.add('reviewer-name');
        reviewerName.innerText = item.name;

        const reviewerRating = document.createElement('p');
        reviewerRating.classList.add('review-stars');
        reviewerRating.innerText = item.rating;

        const reviewerText = document.createElement('p');
        reviewerText.classList.add('review-copy');
        reviewerText.innerText = item.review;

        reviewCard.append(reviewerImage, reviewerName, reviewerRating, reviewerText);
        reviewGrid.append(reviewCard);
    });

    const reviewDrop = document.createElement('div');
    reviewDrop.classList.add('review-drop');

    const reviewDropTitle = document.createElement('h2');
    reviewDropTitle.classList.add('review-heading');
    reviewDropTitle.innerText = 'Drop Your Review';

    const reviewForm = document.createElement('form');
    reviewForm.classList.add('review-form');

    const reviewEmail = document.createElement('input');
    reviewEmail.type = 'email';
    reviewEmail.name = 'review-email';
    reviewEmail.placeholder = 'Your Email';
    reviewEmail.required = true;

    const reviewTextarea = document.createElement('textarea');
    reviewTextarea.name = 'review-message';
    reviewTextarea.placeholder = 'Tell us what you liked about the restaurant';
    reviewTextarea.rows = 5;

    const reviewSubmit = document.createElement('button');
    reviewSubmit.type = 'button';
    reviewSubmit.classList.add('contact-btn', 'primary-btn');
    reviewSubmit.innerText = 'Submit Review';

    reviewForm.append(reviewEmail, reviewTextarea, reviewSubmit);
    reviewDrop.append(reviewDropTitle, reviewForm);
    reviewsSection.append(reviewHeading, reviewGrid, reviewDrop);

    contactSection.append(authCard, reviewsSection);
    content.append(contactSection);
}
