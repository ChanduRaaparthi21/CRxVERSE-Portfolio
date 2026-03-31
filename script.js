// ── PRELOADER ──
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const status = document.getElementById('loader-status');
  
  const messages = ["Initializing...", "Rendering...", "Ready."];
  let i = 0;
  const statusInterval = setInterval(() => {
    if (status && i < messages.length) {
      status.innerText = messages[i];
      i++;
    }
  }, 300);

  setTimeout(() => {
    clearInterval(statusInterval);
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => preloader.style.visibility = 'hidden', 600);
    }
  }, 1500);
});

// ── FLOATING PARTICLES ──
const particleContainer = document.getElementById('particle-container');
if (particleContainer) {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'highlight-particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = 10 + Math.random() * 20 + 's';
    particleContainer.appendChild(particle);
  }
}

// ── CUSTOM CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');

document.addEventListener('mousemove', e => {
  if (cursor && ring) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    setTimeout(() => {
      ring.style.left = e.clientX + 'px';
      ring.style.top  = e.clientY + 'px';
    }, 60);
  }
});

// Cursor scale on interactive elements
document.querySelectorAll('a, button, .project-card, .service-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.transform   = 'translate(-50%,-50%) scale(1.5)';
    ring.style.opacity     = '1';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform   = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity     = '0.6';
  });
});

// ── NAVBAR SCROLL ──
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));

// ── PORTFOLIO FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ── MOBILE MENU ──
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu && navLinks) {
  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-active');
      navLinks.classList.remove('active');
    });
  });
}
