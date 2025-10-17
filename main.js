// AI Conference London 2025 - Ultimate Conversion Optimized JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCountdown();
    initializeAnimations();
    initializeLiquidMetal();
    initializeForm();
    initializeSocialProof();
    initializeExitIntent();
    initializeUrgencyMechanisms();
    initializeNotificationSystem();
    initializeAttendeeCounter();
});

// Global Variables
let currentStepIndex = 1;
const totalSteps = 4;
let registrationCount = 487;
let exitIntentShown = false;

// Enhanced Countdown Timer with Urgency
function initializeCountdown() {
    const eventDate = new Date('2025-10-26T16:00:00').getTime();
    const flashSaleEnd = new Date().getTime() + (2 * 60 * 60 * 1000) + (47 * 60 * 1000); // 2 hours 47 minutes from now
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;
        const flashDistance = flashSaleEnd - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        }
        
        // Update flash sale countdown
        if (flashDistance > 0) {
            const flashHours = Math.floor((flashDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const flashMinutes = Math.floor((flashDistance % (1000 * 60 * 60)) / (1000 * 60));
            
            const urgencyElements = document.querySelectorAll('.urgency-text');
            urgencyElements.forEach(el => {
                if (el.textContent.includes('hours') || el.textContent.includes('minutes')) {
                    el.textContent = `${flashHours} hours ${flashMinutes} minutes`;
                }
            });
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

// Enhanced Animations with Conversion Focus
function initializeAnimations() {
    // Split text for animation
    Splitting();
    
    // Animate hero title with stagger effect
    anime({
        targets: '.hero-title .char',
        translateY: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1400,
        delay: anime.stagger(30, {start: 500})
    });
    
    // Animate urgency elements
    anime({
        targets: '.urgency-text',
        scale: [1, 1.05, 1],
        duration: 2000,
        loop: true,
        easing: 'easeInOutSine'
    });
    
    // Animate cards on scroll with conversion timing
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: 200,
                    complete: function() {
                        // Trigger social proof when cards are visible
                        if (entry.target.classList.contains('card-hover')) {
                            showSocialProofBanner();
                        }
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe all cards and key elements
    document.querySelectorAll('.card-hover, .speaker-card, .testimonial-card, .action-card').forEach(card => {
        observer.observe(card);
    });
    
    // Animate countdown digits with urgency
    anime({
        targets: '.countdown-digit',
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1000,
        delay: anime.stagger(200, {start: 500})
    });
}

// Enhanced Liquid Metal Background Effect
function initializeLiquidMetal() {
    const canvas = document.getElementById('liquidMetal');
    const app = new PIXI.Application({
        view: canvas,
        width: window.innerWidth,
        height: window.innerHeight,
        transparent: true,
        antialias: true
    });
    
    // Create liquid metal effect with conversion colors
    const graphics = new PIXI.Graphics();
    app.stage.addChild(graphics);
    
    let time = 0;
    
    function animate() {
        time += 0.01;
        
        graphics.clear();
        graphics.beginFill(0xd4af37, 0.1);
        
        // Create flowing liquid shapes with conversion-focused movement
        for (let i = 0; i < 8; i++) {
            const x = Math.sin(time + i) * 120 + window.innerWidth / 2 + Math.sin(time * 0.5 + i) * 50;
            const y = Math.cos(time + i * 0.7) * 60 + window.innerHeight / 2 + Math.cos(time * 0.3 + i) * 30;
            const radius = 40 + Math.sin(time + i * 2) * 25;
            
            graphics.drawCircle(x, y, radius);
        }
        
        graphics.endFill();
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
    });
}

// Enhanced Form Management with Conversion Optimization
let formData = {};

function initializeForm() {
    // Add form validation with real-time feedback
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
        input.addEventListener('input', updateFormData);
        
        // Add conversion-focused placeholders
        if (input.type === 'email') {
            input.addEventListener('focus', function() {
                if (!this.value) {
                    showNotification('💡 Pro tip: Use your work email for faster verification', 'info');
                }
            });
        }
    });
    
    // Add industry-specific insights
    const industrySelect = form.querySelector('select[name="industry"]');
    if (industrySelect) {
        industrySelect.addEventListener('change', showIndustryInsight);
    }
}

function updateFormData(e) {
    const field = e.target;
    formData[field.name] = field.value;
    
    // Show progressive completion encouragement
    const completedFields = Object.keys(formData).filter(key => formData[key]).length;
    const totalFields = document.querySelectorAll('input[required], select[required]').length;
    const completionRate = Math.round((completedFields / totalFields) * 100);
    
    if (completionRate > 50 && completionRate < 100) {
        showNotification(`🎯 ${completionRate}% complete! You're almost there!`, 'success');
    }
}

function showIndustryInsight(e) {
    const industry = e.target.value;
    const insightElement = document.getElementById('industryInsight');
    
    const insights = {
        'technology': 'Get cutting-edge AI development strategies and tech stack recommendations',
        'finance': 'Learn AI-powered risk management and algorithmic trading insights',
        'healthcare': 'Discover AI applications in patient care and medical diagnostics',
        'manufacturing': 'Master AI-driven automation and predictive maintenance',
        'retail': 'Explore AI in customer experience and inventory optimization',
        'consulting': 'Build AI service offerings and client transformation frameworks',
        'education': 'Implement AI in learning personalization and administration',
        'other': 'Get versatile AI strategies applicable across industries'
    };
    
    if (insights[industry]) {
        insightElement.textContent = insights[industry];
        
        // Animate the insight update
        anime({
            targets: insightElement,
            scale: [1, 1.05, 1],
            duration: 500,
            easing: 'easeInOutQuad'
        });
    }
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    // Clear previous errors
    clearFieldError(e);
    
    // Validate based on field type
    let isValid = true;
    let errorMessage = '';
    
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'This field is required to secure your ticket';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
    } else if (field.name === 'fullName' && value && value.length < 2) {
        isValid = false;
        errorMessage = 'Please enter your full name';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
        // Add urgency to error messages
        setTimeout(() => {
            showNotification('⚠️ Complete this field to claim your free ticket!', 'error');
        }, 1000);
    } else {
        // Show success feedback
        field.classList.add('border-green-500');
        setTimeout(() => {
            showNotification('✅ Looking good! Keep going!', 'success');
        }, 500);
    }
    
    return isValid;
}

function clearFieldError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    field.classList.remove('border-red-500', 'border-green-500');
}

function showFieldError(field, message) {
    field.classList.add('border-red-500');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form validation for single-step form
function validateForm() {
    const form = document.getElementById('registrationForm');
    const requiredFields = form.querySelectorAll('input[required], select[required]');
    
    let isValid = true;
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function completeRegistration() {
    // Generate registration ID
    const registrationId = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('registrationId').textContent = registrationId;
    
    // Simulate form submission
    const finalFormData = new FormData(document.getElementById('registrationForm'));
    const registrationData = {};
    
    for (let [key, value] of finalFormData.entries()) {
        registrationData[key] = value;
    }
    
    registrationData.registrationId = registrationId;
    registrationData.timestamp = new Date().toISOString();
    
    // Store registration data
    localStorage.setItem('aiConferenceRegistration', JSON.stringify(registrationData));
    
    // Update attendee counter
    registrationCount++;
    updateAttendeeCounter();
    
    // Show success notification
    showNotification('🎉 Registration successful! Welcome to the AI revolution!', 'success');
    
    // Trigger celebration animation
    anime({
        targets: '#successIcon',
        scale: [0, 1.2, 1],
        rotate: [0, 360],
        easing: 'easeOutElastic(1, .8)',
        duration: 2000
    });
    
    // Redirect to confirmation page after delay
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 3000);
}

// Social Proof System
function initializeSocialProof() {
    // Show initial social proof
    setTimeout(() => {
        showSocialProofBanner();
    }, 5000);
    
    // Rotate social proof messages
    setInterval(rotateSocialProof, 8000);
}

function showSocialProofBanner() {
    const banner = document.getElementById('socialProofBanner');
    banner.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        banner.classList.remove('show');
    }, 5000);
}

function rotateSocialProof() {
    const messages = [
        '🎉 Sarah from London just registered! Only 47 seats remaining',
        '💼 Mark from Microsoft secured his spot! 46 seats left',
        '🚀 Jennifer from StartupHub joined! 45 seats remaining',
        '💡 Ahmed from FinanceCorp registered! 44 seats left',
        '🎯 Lisa from TechInnovate signed up! 43 seats remaining'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('socialProofText').textContent = randomMessage;
    
    showSocialProofBanner();
}

// Exit Intent Prevention
function initializeExitIntent() {
    let exitIntentTriggered = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentTriggered && !exitIntentShown) {
            exitIntentTriggered = true;
            showExitIntentModal();
        }
    });
    
    // Mobile exit intent (back button)
    window.addEventListener('beforeunload', function(e) {
        if (!exitIntentShown) {
            e.preventDefault();
            e.returnValue = '';
            showExitIntentModal();
        }
    });
}

function showExitIntentModal() {
    const modal = document.getElementById('exitIntentModal');
    modal.classList.add('show');
    exitIntentShown = true;
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('div'),
        scale: [0.8, 1],
        opacity: [0, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 800
    });
}

function closeExitModal() {
    const modal = document.getElementById('exitIntentModal');
    modal.classList.remove('show');
}

// Urgency Mechanisms
function initializeUrgencyMechanisms() {
    // Update remaining seats
    setInterval(updateRemainingSeats, 30000); // Every 30 seconds
    
    // Flash urgency indicators
    setInterval(flashUrgencyIndicators, 5000);
}

function updateRemainingSeats() {
    const seatElements = document.querySelectorAll('.urgency-indicator');
    const currentSeats = parseInt(seatElements[0].textContent);
    
    if (currentSeats > 5) {
        const newSeats = currentSeats - Math.floor(Math.random() * 3) - 1;
        seatElements.forEach(el => {
            el.textContent = Math.max(newSeats, 5);
        });
        
        // Show notification about seat reduction
        showNotification(`⚠️ Hurry! Only ${Math.max(newSeats, 5)} seats remaining!`, 'error');
    }
}

function flashUrgencyIndicators() {
    const indicators = document.querySelectorAll('.urgency-indicator, .urgency-text');
    
    anime({
        targets: indicators,
        scale: [1, 1.1, 1],
        duration: 1000,
        easing: 'easeInOutSine'
    });
}

// Notification System
function initializeNotificationSystem() {
    // Show periodic notifications
    setTimeout(() => {
        showRandomNotification();
    }, 10000);
    
    setInterval(showRandomNotification, 25000);
}

function showRandomNotification() {
    const notifications = [
        '🎊 New registration from Manchester!',
        '💼 Senior executive from Fortune 500 just joined',
        '🚀 Startup founder from London secured their spot',
        '💡 AI researcher from Cambridge registered',
        '🎯 Marketing director from Bristol signed up'
    ];
    
    const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
    showNotification(randomNotification, 'success');
}

// Attendee Counter
function initializeAttendeeCounter() {
    updateAttendeeCounter();
    
    // Increment counter periodically
    setInterval(() => {
        registrationCount += Math.floor(Math.random() * 3) + 1;
        updateAttendeeCounter();
    }, 45000); // Every 45 seconds
}

function updateAttendeeCounter() {
    const counterElement = document.getElementById('attendeeCounter');
    if (counterElement) {
        // Animate counter update
        anime({
            targets: { count: parseInt(counterElement.textContent) || 0 },
            count: registrationCount,
            duration: 1000,
            easing: 'easeOutExpo',
            update: function(anim) {
                counterElement.textContent = Math.floor(anim.animatables[0].target.count);
            }
        });
    }
}

// Enhanced Navigation Functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function scrollToRegistration() {
    document.getElementById('registration').scrollIntoView({
        behavior: 'smooth'
    });
    
    // Add conversion tracking
    setTimeout(() => {
        showNotification('🎯 Great choice! Complete your registration in 30 seconds', 'info');
    }, 1000);
}

function scrollToSpeakers() {
    const speakersSection = document.querySelectorAll('section')[3];
    speakersSection.scrollIntoView({
        behavior: 'smooth'
    });
}

// Enhanced Calendar Integration
function addToCalendar() {
            const eventDetails = {
        title: 'AI Conference London 2025 - FREE Access',
        start: '2025-10-26T16:00:00',
        end: '2025-10-26T18:00:00',
        description: 'Exclusive free AI conference featuring Dr. Stephen Akintayo and industry leaders. Registration ID: #AI2025-' + (Math.floor(Math.random() * 9000) + 1000),
        location: 'London, UK'
    };
    
    // Create multiple calendar options
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start.replace(/[-:]/g, '').replace('.000', '')}Z/${eventDetails.end.replace(/[-:]/g, '').replace('.000', '')}Z&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&startdt=${eventDetails.start}&enddt=${eventDetails.end}&body=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    
    // Show calendar options with urgency
    if (confirm('📅 Add to Google Calendar? (Recommended)')) {
        window.open(googleCalendarUrl, '_blank');
        showNotification('📅 Event added to your calendar!', 'success');
    } else if (confirm('📅 Add to Outlook Calendar?')) {
        window.open(outlookCalendarUrl, '_blank');
        showNotification('📅 Event added to your calendar!', 'success');
    }
}

// Enhanced Social Sharing
function shareEvent() {
    const shareData = {
        title: 'AI Conference London 2025 - FREE Tickets Available!',
        text: '🚀 Join me at London\'s most exclusive AI conference! FREE tickets available for a limited time. Only 13 seats left!',
        url: 'https://aiconferenceworldwide.com'
    };
    
    if (navigator.share) {
        navigator.share(shareData).then(() => {
            showNotification('🙏 Thank you for sharing! Your network will appreciate it.', 'success');
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(shareData.url)}`;
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`;
        
        if (confirm('🐦 Share on Twitter?')) {
            window.open(twitterUrl, '_blank');
            showNotification('🐦 Posted to Twitter! Thank you for sharing.', 'success');
        } else if (confirm('💼 Share on LinkedIn?')) {
            window.open(linkedInUrl, '_blank');
            showNotification('💼 Posted to LinkedIn! Your network will love this.', 'success');
        }
    }
}

// Enhanced Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 max-w-sm ${
        type === 'success' ? 'bg-green-600' : 
        type === 'error' ? 'bg-red-600' : 
        'bg-blue-600'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500
    });
    
    // Remove after 4 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            easing: 'easeInExpo',
            duration: 500,
            complete: () => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }
        });
    }, 4000);
}

// Additional Conversion Features
function showMoreTestimonials() {
    showNotification('📚 Check your email! We\'ll send you our complete testimonial collection.', 'info');
    
    // Simulate collecting more testimonials
    setTimeout(() => {
        showNotification('✅ Success stories sent! Check your inbox.', 'success');
    }, 2000);
}

// Form submission handler with conversion tracking
document.addEventListener('submit', function(e) {
    if (e.target.id === 'registrationForm') {
        // Validate form before submission
        if (!validateForm()) {
            e.preventDefault();
            showNotification('⚠️ Please complete all required fields', 'error');
            return;
        }
        
        // Allow the form to submit normally to MailingBoss
        showNotification('🚀 Submitting your registration...', 'info');
        
        // Track the submission
        setTimeout(() => {
            showNotification('✅ Registration submitted successfully! Check your email for confirmation.', 'success');
        }, 1000);
    }
});

// Add smooth scrolling for all internal links with conversion tracking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Track engagement
            setTimeout(() => {
                showNotification('🎯 Great! You\'re exploring the conference details', 'info');
            }, 1000);
        }
    });
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add conversion-focused event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage++;
        if (timeOnPage === 30) {
            showNotification('⏰ Still deciding? Remember, free tickets are limited!', 'info');
        }
    }, 1000);
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', function() {
        const scrollDepth = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            
            if (maxScrollDepth > 75 && !exitIntentShown) {
                showNotification('🎯 You\'ve seen all the benefits! Ready to register?', 'info');
            }
        }
    });
});