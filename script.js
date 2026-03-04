// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Animated Counter Function
function animateCounter(element, target, duration = 2000, suffix = '%', prefix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    const isDecimal = target % 1 !== 0;
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = prefix + (isDecimal ? target.toFixed(1) + (suffix === '%' ? '%' : 't') : target + suffix);
            clearInterval(timer);
        } else {
            element.textContent = prefix + (isDecimal ? start.toFixed(1) + (suffix === '%' ? '%' : 't') : Math.floor(start) + suffix);
        }
    }, 16);
}

// Intersection Observer for Animated Counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const target = parseFloat(entry.target.getAttribute('data-target')) || parseFloat(entry.target.getAttribute('data-count'));
            const prefix = entry.target.getAttribute('data-prefix') || '';
            const suffix = entry.target.getAttribute('data-suffix') || '';
            animateCounter(entry.target, target, 2000, suffix, prefix);
        }
    });
}, { threshold: 0.5 });

// Observe hero stats
document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    counterObserver.observe(el);
});

// Observe case study results
document.querySelectorAll('.result-number[data-count]').forEach(el => {
    counterObserver.observe(el);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Demo Form Handling
const demoForm = document.getElementById('demoForm');

if (demoForm) {
    demoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable submit button to prevent double submission
        const submitBtn = demoForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
        
        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            industry: document.getElementById('industry').value,
            location: document.getElementById('location').value,
            timestamp: new Date().toISOString()
        };

        // Track form submission with analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submission', {
                'event_category': 'Waitlist',
                'event_label': 'Join Waitlist Form'
            });
        }

        try {
            // Google Sheets Integration
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyw_ZPM1PyOa-9xyff7gf0ZG4heAwwwW6q5IW1BljTHBSiEie2-nUprLnVMEq8ZXFa3Fw/exec';
            
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Show success message
            showFormMessage('success', 'Thank you for joining! We\'ll be in touch soon.');
            
            // Reset form
            demoForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showFormMessage('error', 'Something went wrong. Please try again or email us at hello@voltsave.ai');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

// Show form feedback message
function showFormMessage(type, message) {
    // Remove any existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    
    // Insert after form
    demoForm.insertAdjacentElement('afterend', messageDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.add('aos-init');
    scrollObserver.observe(el);
});

// Also observe feature cards and benefit items without data-aos
document.querySelectorAll('.feature-card:not([data-aos]), .benefit-item:not([data-aos])').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    observer.observe(el);
});

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': button.textContent.trim()
            });
        }
    });
});

// Scroll to Top on Page Load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll(`.nav-links a[href="#${sectionId}"]`).forEach(link => {
                link.style.color = 'var(--primary-color)';
            });
        } else {
            document.querySelectorAll(`.nav-links a[href="#${sectionId}"]`).forEach(link => {
                link.style.color = '';
            });
        }
    });
});
