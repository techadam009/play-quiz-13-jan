// Application State
const state = {
    currentPage: 'home',
    currentCategory: null,
    currentQuestionIndex: 0,
    selectedAnswer: null,
    score: 0,
    answers: [],
    quizCompleted: false
};

// Icon SVG paths
const icons = {
    brain: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>',
    microscope: '<path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>',
    film: '<rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>',
    globe: '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>',
    arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    trophy2: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>'
};

// Utility Functions
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function createIcon(iconName) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[iconName] || icons.brain}</svg>`;
}

// Router
function navigate(hash) {
    const route = hash.slice(1) || '/';
    const parts = route.split('/');
    const page = parts[1] || 'home';

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + route) {
            link.classList.add('active');
        }
    });

    // Reset quiz state when navigating away from quiz
    if (state.currentPage === 'quiz' && page !== 'quiz') {
        resetQuiz();
    }

    state.currentPage = page;

    if (page === 'home') {
        renderHome();
    } else if (page === 'quiz' && parts[2]) {
        state.currentCategory = quizCategories.find(cat => cat.id === parts[2]);
        renderQuiz();
    } else if (page === 'about') {
        renderAbout();
    } else if (page === 'contact') {
        renderContact();
    } else if (page === 'terms') {
        renderTerms();
    } else if (page === 'privacy') {
        renderPrivacy();
    } else {
        renderHome();
    }
}

// Reset Quiz State
function resetQuiz() {
    state.currentCategory = null;
    state.currentQuestionIndex = 0;
    state.selectedAnswer = null;
    state.score = 0;
    state.answers = [];
    state.quizCompleted = false;
}

// Page Renderers
function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div>
            <!-- Hero Section -->
            <section class="hero-section">
                <div class="hero-content">
                    <h1>Test Your Knowledge!</h1>
                    <p>Challenge yourself with our exciting quizzes across multiple categories</p>
                    <a href="#categories">
                        <button class="btn btn-secondary btn-lg">
                            Start Playing Now
                            ${createIcon('arrowRight')}
                        </button>
                    </a>
                </div>
            </section>

            <!-- Quiz Categories Section -->
            <section id="categories" class="categories-section">
                <div class="categories-container">
                    <div class="categories-header">
                        <h2>Choose Your Category</h2>
                        <p>Select a quiz category and start testing your knowledge</p>
                    </div>
                    <div class="categories-grid">
                        ${quizCategories.map(category => `
                            <div class="category-card">
                                <div class="category-icon">
                                    ${createIcon(category.icon)}
                                </div>
                                <h3>${category.name}</h3>
                                <p>${category.description}</p>
                                <a href="#/quiz/${category.id}">
                                    <button class="btn btn-primary btn-full">
                                        Play Now
                                        ${createIcon('arrowRight')}
                                    </button>
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="features-section">
                <div class="features-container">
                    <div class="feature-item">
                        <div class="feature-icon">
                            ${createIcon('brain')}
                        </div>
                        <h3>Multiple Categories</h3>
                        <p>Choose from various quiz categories to test your knowledge in different areas</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            ${createIcon('trophy')}
                        </div>
                        <h3>Track Your Score</h3>
                        <p>Get instant feedback and see how well you perform in each quiz</p>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon">
                            ${createIcon('globe')}
                        </div>
                        <h3>Learn & Improve</h3>
                        <p>Challenge yourself repeatedly to improve your knowledge and scores</p>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderQuiz() {
    const app = document.getElementById('app');

    if (!state.currentCategory) {
        app.innerHTML = `
            <div class="quiz-container" style="text-align: center;">
                <h1>Quiz not found</h1>
                <p style="margin: 1rem 0;">The quiz category you're looking for doesn't exist.</p>
                <a href="#/">
                    <button class="btn btn-primary">Return to Home</button>
                </a>
            </div>
        `;
        return;
    }

    if (state.quizCompleted) {
        renderQuizResults();
        return;
    }

    const questions = state.currentCategory.questions;
    const currentQuestion = questions[state.currentQuestionIndex];
    const totalQuestions = questions.length;
    const progress = ((state.currentQuestionIndex + 1) / totalQuestions) * 100;

    app.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-header">
                <h1>${state.currentCategory.name} Quiz</h1>
                <p>${state.currentCategory.description}</p>
            </div>

            <div class="quiz-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <p class="progress-text">Question ${state.currentQuestionIndex + 1} of ${totalQuestions}</p>
            </div>

            <div class="quiz-card">
                <div class="quiz-question">
                    <p class="question-number">Question ${state.currentQuestionIndex + 1}</p>
                    <h2 class="question-text">${currentQuestion.question}</h2>
                </div>

                <div class="quiz-options" id="quiz-options">
                    ${currentQuestion.options.map((option, index) => `
                        <button class="quiz-option" data-index="${index}">
                            ${option}
                        </button>
                    `).join('')}
                </div>

                <div class="quiz-navigation">
                    <button class="btn btn-primary" id="next-button" style="display: none;">
                        Next Question
                        ${createIcon('arrowRight')}
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add event listeners to options
    const optionButtons = document.querySelectorAll('.quiz-option');
    optionButtons.forEach(button => {
        button.addEventListener('click', handleAnswerSelect);
    });

    // Add event listener to next button
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', handleNextQuestion);
    }
}

function handleAnswerSelect(event) {
    const selectedIndex = parseInt(event.target.dataset.index);
    const currentQuestion = state.currentCategory.questions[state.currentQuestionIndex];
    
    // Disable all buttons
    const optionButtons = document.querySelectorAll('.quiz-option');
    optionButtons.forEach(button => {
        button.disabled = true;
    });

    // Mark correct and incorrect answers
    optionButtons.forEach((button, index) => {
        if (index === currentQuestion.correctAnswer) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('incorrect');
        }
    });

    // Update score
    if (selectedIndex === currentQuestion.correctAnswer) {
        state.score++;
    }

    state.answers.push({
        questionId: currentQuestion.id,
        selectedAnswer: selectedIndex,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: selectedIndex === currentQuestion.correctAnswer
    });

    // Show next button
    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'flex';
}

function handleNextQuestion() {
    const totalQuestions = state.currentCategory.questions.length;
    
    if (state.currentQuestionIndex < totalQuestions - 1) {
        state.currentQuestionIndex++;
        renderQuiz();
    } else {
        state.quizCompleted = true;
        renderQuizResults();
    }
}

function renderQuizResults() {
    const app = document.getElementById('app');
    const totalQuestions = state.currentCategory.questions.length;
    const percentage = Math.round((state.score / totalQuestions) * 100);
    
    let message = "";
    if (percentage >= 80) message = "Excellent! You're a master!";
    else if (percentage >= 60) message = "Good job! Keep it up!";
    else if (percentage >= 40) message = "Not bad! You can do better!";
    else message = "Keep practicing!";

    app.innerHTML = `
        <div class="results-container">
            <div class="results-card">
                <div class="results-icon">
                    ${createIcon('trophy2')}
                </div>
                <h1>Quiz Complete!</h1>
                <p class="results-score">${state.score} / ${totalQuestions}</p>
                <p class="results-message">${message}</p>
                <p style="color: var(--gray-600); margin-bottom: 2rem;">
                    You scored ${percentage}% in the ${state.currentCategory.name} quiz
                </p>
                <div class="results-actions">
                    <button class="btn btn-primary btn-full" onclick="restartQuiz()">
                        Restart Quiz
                    </button>
                    <a href="#/">
                        <button class="btn btn-secondary btn-full">
                            ${createIcon('home')}
                            Return to Home
                        </button>
                    </a>
                </div>
            </div>
        </div>
    `;
}

function restartQuiz() {
    state.currentQuestionIndex = 0;
    state.selectedAnswer = null;
    state.score = 0;
    state.answers = [];
    state.quizCompleted = false;
    renderQuiz();
}

function renderAbout() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-container" style="background-color: var(--gray-50);">
            <div class="page-header">
                <h1>About Us</h1>
                <p>Learn more about QuizMaster and our mission</p>
            </div>
            <div class="page-content">
                <h2>Welcome to QuizMaster!</h2>
                <p>QuizMaster is your ultimate destination for testing and improving your knowledge across various subjects. We believe that learning should be fun, engaging, and accessible to everyone.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to make learning enjoyable through interactive quizzes that challenge your knowledge and help you discover new facts. Whether you're a student, professional, or just someone who loves trivia, QuizMaster has something for everyone.</p>

                <h2>What We Offer</h2>
                <ul>
                    <li>Multiple quiz categories covering various topics</li>
                    <li>Carefully crafted questions to test your knowledge</li>
                    <li>Instant feedback on your performance</li>
                    <li>User-friendly interface for seamless experience</li>
                    <li>Mobile-responsive design to learn on the go</li>
                </ul>

                <h2>Why Choose QuizMaster?</h2>
                <p>We are committed to providing high-quality quizzes that are both educational and entertaining. Our platform is designed to help you learn while having fun. Challenge yourself, track your progress, and become a trivia master!</p>

                <h2>Get Started</h2>
                <p>Ready to test your knowledge? Head over to our homepage and choose a quiz category that interests you. Good luck, and have fun!</p>
            </div>
        </div>
    `;
}

function renderContact() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-container" style="background-color: var(--gray-50);">
            <div class="page-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you</p>
            </div>
            <div class="page-content">
                <h2>Get in Touch</h2>
                <p>Have a question, suggestion, or feedback? Fill out the form below and we'll get back to you as soon as possible.</p>

                <form class="contact-form" id="contact-form">
                    <div class="form-group">
                        <label class="form-label" for="name">Name</label>
                        <input type="text" id="name" name="name" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="email">Email</label>
                        <input type="email" id="email" name="email" class="form-input" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label" for="message">Message</label>
                        <textarea id="message" name="message" class="form-textarea" required></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-full">Send Message</button>
                </form>
            </div>
        </div>
    `;

    // Add form submit handler
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', handleContactSubmit);
}

function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !email || !message) {
        showToast('Please fill in all fields', 'error');
        return;
    }

    // Simulate form submission
    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
    
    // Reset form
    event.target.reset();
}

function renderTerms() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-container" style="background-color: var(--gray-50);">
            <div class="page-header">
                <h1>Terms & Conditions</h1>
                <p>Please read these terms carefully before using QuizMaster</p>
            </div>
            <div class="page-content">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using QuizMaster, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h2>2. Use License</h2>
                <p>Permission is granted to temporarily use QuizMaster for personal, non-commercial purposes. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul>
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose</li>
                    <li>Attempt to decompile or reverse engineer any software contained on QuizMaster</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2>3. Disclaimer</h2>
                <p>The materials on QuizMaster are provided on an 'as is' basis. QuizMaster makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

                <h2>4. Limitations</h2>
                <p>In no event shall QuizMaster or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use QuizMaster.</p>

                <h2>5. Accuracy of Materials</h2>
                <p>The materials appearing on QuizMaster could include technical, typographical, or photographic errors. QuizMaster does not warrant that any of the materials on its website are accurate, complete, or current.</p>

                <h2>6. Links</h2>
                <p>QuizMaster has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.</p>

                <h2>7. Modifications</h2>
                <p>QuizMaster may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

                <h2>8. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </div>
        </div>
    `;
}

function renderPrivacy() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="page-container" style="background-color: var(--gray-50);">
            <div class="page-header">
                <h1>Privacy Policy</h1>
                <p>Your privacy is important to us</p>
            </div>
            <div class="page-content">
                <h2>Introduction</h2>
                <p>QuizMaster ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.</p>

                <h2>Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul>
                    <li>Name and email address (when you contact us)</li>
                    <li>Quiz scores and progress (stored locally in your browser)</li>
                    <li>Usage data and analytics</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide and maintain our services</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our website and user experience</li>
                    <li>Monitor and analyze usage patterns</li>
                </ul>

                <h2>Data Storage</h2>
                <p>Your quiz progress and scores are stored locally in your browser using local storage. This data is not transmitted to our servers and remains on your device.</p>

                <h2>Cookies</h2>
                <p>We may use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                <h2>Third-Party Services</h2>
                <p>We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used. These third parties have access to your information only to perform these tasks on our behalf.</p>

                <h2>Data Security</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.</p>

                <h2>Children's Privacy</h2>
                <p>Our service is intended for general audiences and is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>

                <p style="margin-top: 2rem;"><strong>Last Updated:</strong> November 4, 2025</p>
            </div>
        </div>
    `;
}

// Initialize App
function init() {
    // Handle hash change
    window.addEventListener('hashchange', () => {
        navigate(window.location.hash);
    });

    // Initial navigation
    navigate(window.location.hash || '#/');
}

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
