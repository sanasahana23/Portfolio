 // Typewriter effect
class TxtType {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;
    if (this.isDeleting) delta /= 2;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

window.onload = function () {
  const elements = document.getElementsByClassName('typewrite');
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-type');
    const period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  // Inject CSS for typing cursor
  const css = document.createElement("style");
  css.innerHTML = `.typewrite > .wrap { border-right: 0.08em solid #fff}`;
  document.body.appendChild(css);
};

// Particle.js config
particlesJS('particles-js', {
  particles: {
    number: { value: 60 },
    color: { value: "#00d4ff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000" }
    },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00d4ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      out_mode: "bounce"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
    }
  },
  retina_detect: true
});

 
// Reveal on scroll
const revealSection = document.querySelector('.about-section');
window.addEventListener('scroll', () => {
  const top = window.scrollY + window.innerHeight;
  if (top > revealSection.offsetTop + 100) {
    revealSection.classList.add('active');
  }
});


//

