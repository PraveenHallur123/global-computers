/* Scroll Animation for .animate-on-scroll elements */
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const triggerBottom = window.innerHeight * 0.92;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

/* Testimonials Carousel */
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentTestimonial = 0;

function showTestimonial(idx) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === idx);
  });
}
function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}
function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', prevTestimonial);
  nextBtn.addEventListener('click', nextTestimonial);
  // Auto-advance every 6 seconds
  setInterval(nextTestimonial, 6000);
}

/* Contact Form (Demo only: prevent actual submission) */
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting Global Computers!\nWe will get back to you soon.');
    contactForm.reset();
  });
}
