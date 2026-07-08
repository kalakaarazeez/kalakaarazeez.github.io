// ---------- Nav: scroll state + mobile toggle ----------
const nav = document.getElementById('site-nav');
const navLinks = document.getElementById('nav-links');
const navToggle = document.getElementById('nav-toggle');

window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---------- Hero animated node graph ----------
const canvas = document.getElementById('hero-graph');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas) {
const ctx = canvas.getContext('2d');
let W, H, nodes = [];
const LINK_DIST = 175;
const MOUSE = { x: -9999, y: -9999 };

function resize() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = window.innerHeight;
  const count = Math.max(50, Math.min(110, Math.floor((W * H) / 13000)));
  nodes = Array.from({ length: count }, (_, i) => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.28,
    vy: (Math.random() - 0.5) * 0.28,
    r: Math.random() * 1.6 + 1.3,
    hue: (i / count) * 300
  }));
}

function step() {
  ctx.clearRect(0, 0, W, H);

  for (const n of nodes) {
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;

    const dx = MOUSE.x - n.x, dy = MOUSE.y - n.y;
    const d = Math.hypot(dx, dy);
    if (d < 120) {
      n.x -= dx / d * 0.6;
      n.y -= dy / d * 0.6;
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < LINK_DIST) {
        const hue = (a.hue + b.hue) / 2;
        ctx.strokeStyle = `hsla(${hue}, 85%, 65%, ${0.28 * (1 - dist / LINK_DIST)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  for (const n of nodes) {
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${n.hue}, 90%, 75%, 0.95)`;
    ctx.fill();
  }

  if (!prefersReducedMotion) requestAnimationFrame(step);
}

window.addEventListener('resize', resize, { passive: true });
window.addEventListener('mousemove', (e) => {
  MOUSE.x = e.clientX;
  MOUSE.y = e.clientY;
}, { passive: true });
window.addEventListener('mouseleave', () => {
  MOUSE.x = -9999; MOUSE.y = -9999;
});

resize();
if (prefersReducedMotion) {
  step(); // draw one static frame
} else {
  requestAnimationFrame(step);
}
} // end if (canvas)
