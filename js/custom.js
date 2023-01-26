ScrollReveal({
	reset: true,
	distance: '6rem',
	delay: 300,
	duration: 2000
});

// for home section
ScrollReveal().reveal('.home-content h1, .section-title h2', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .section-title p', { origin: 'right', delay: 1000 });
ScrollReveal().reveal('.home-btn', { origin: 'bottom', delay: 1500 });

// for depertment section
ScrollReveal().reveal('#s-card-1', { origin: 'left' });
ScrollReveal().reveal('#s-card-2', { origin: 'bottom' });
ScrollReveal().reveal('#s-card-3', { origin: 'right' });

// for third section
ScrollReveal().reveal('.video-area', { origin: 'top' });
ScrollReveal().reveal('.content-description', { origin: 'left' });
ScrollReveal().reveal('.count div h3', { origin: 'bottom', interval: 300 });
ScrollReveal().reveal('.count div p', { origin: 'right', delay: 1000, interval: 300 });

// for fourth section
ScrollReveal().reveal('.blog-card', { origin: 'bottom', interval: 300 });
