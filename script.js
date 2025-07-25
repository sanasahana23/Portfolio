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


//certificates
const certificates = [
  {
    image: "assets/certificates/ai-fluency-nm.jpg",
    title: "Ai Fluency Training",
    issuer: "Naan Mudhalvan &Microsoft",
    year: "2023",
    category:"course",
    subcategory: "nm"
  },
  {
    image: "assets/certificates/certificate (.py & R).jpg",
    title: "Data visualizatiom using .Py & R",
    issuer: "Chettinad Tech",
    year: "2023",
    category: "course",
    subcategory: "pl"
  },
  {
    image: "assets/certificates/certificate (symposium M.kumarasamy clg).jpg",
    title: "Technical Symposium",
    issuer: "M.Kumarasamy College of Engineering",
    year: "2023",
    category: "s&h",
    subcategory: "null"
  },
  {
    image: "assets/certificates/CodeAlpha-inten.jpg",
    title: "Data Analytics Intern",
    issuer: "Codealpha",
    year: "2025",
    category: "internship",
    subcategory: "null"
  },
  {
    image: "assets/certificates/Coursera (excel).jpg",
    title: "Getting Strated with MS Excel",
    issuer: "Coursera Project Network",
    year: "2025",
    category: "course",
    subcategory: "data"
  },
  {
    image: "assets/certificates/Data Analytics 1(Coursera).jpg",
    title: "Foundation of Data Science",
    issuer: "Google",
    year: "2025",
    category: "course",
    subcategory: "data"
  },
  {
    image: "assets/certificates/Data Manipulation with Lists and Dictionaries in Studio (v2021.10)_Sahana _en-US_diploma.jpg",
    title: "Data Manipulation ",
    issuer: "UI path-Naan Mudhalvan",
    year: "2024",
    category: "course",
    subcategory: "nm"
  },
  {
    image: "assets/certificates/dbms-sql-5days.jpg",
    title: "DBMS & MYSQL Zero to Hero",
    issuer: "Lets Upgrade & NSDC",
    year: "2023",
    category: "course",
    subcategory: "pl"
  },
  {
    image: "assets/certificates/foundation-course-IR4.0.jpg",
    title: "Foundation Course IR4.0",
    issuer: "TechSaksham[Microsoft,Edunet,SAP]",
    year: "2025",
    category: "course",
    subcategory: "other"
  },
  {
    image: "assets/certificates/getting-started-with-AI-bage.png",
    title: "Getting Started With Ai Bage",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "bages",
    subcategory: "null"
  },
  {
    image: "assets/certificates/gwr-bage.jpg",
    title: "Guinness World Record Bage",
    issuer: "Microsoft",
    year: "2025",
    category: "bages",
    subcategory: "null"
  },
  {
    image: "assets/certificates/gwr-ms-bage.jpg",
    title: "Microsoft AI Skillfest Bage",
    issuer: "Microsoft",
    year: "2025",
    category: "bages",
    subcategory: "null"
  },
  {
    image: "assets/certificates/html,css-5days.jpg",
    title: "HTML & CSS Zero to Hero",
    issuer: "Lets Upgrade & NSDC",
    year: "2023",
    category: "course",
    subcategory: "webdev"
  },
  {
    image: "assets/certificates/html-sololeran.jpg",
    title: " Introduction to HTML",
    issuer: "Sololearn",
    year: "2023",
    category: "course",
    subcategory: "webdev"
  },
  {
    image: "assets/certificates/IBM course (AI).jpg",
    title: "Introduction to AI",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "course",
    subcategory: "aiml"
  },
  {
    image: "assets/certificates/IBM course (LLM).jpg",
    title: "Large Language Model Basics",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "course",
    subcategory: "aiml"
  },
  {
    image: "assets/certificates/IBM course (Prompt eng).jpg",
    title: "Mastering the Art of Prompting",
    issuer: "Other",
    year: "2025",
    category: "course",
    subcategory: "aiml"
  },
  {
    image: "assets/certificates/IBMDesign2025.jpg",
    title: "Getting Started with AI",
    issuer: "IBM SkillsBuild",
    year: "2025",
    category: "course",
    subcategory: "aiml"
  },
  {
    image: "assets/certificates/ms-ai-skillfest.jpg",
    title: "Microsoft Ai Skillfest",
    issuer: "Microsoft",
    year: "2025",
    category: "extra",
    subcategory: "null"
  },
  {
    image: "assets/certificates/Naan Mudhalvan Robotic Process Automation Foundation Course for Engineering Students_Sahana _en-US_dip.jpg",
    title: "RPA Foundation Course",
    issuer: "UI path-Naan Mudhalvan ",
    year: "2025",
    category: "course",
    subcategory: "nm"
  },
  {
    image: "assets/certificates/nptel(BIA).jpg",
    title: "Business Intelligence & Analytics",
    issuer: "IIT Madras-NPTEL",
    year: "2025",
    category: "course",
    subcategory: "nptel"
  },
  {
    image: "assets/certificates/nptel(PSOSM).jpg",
    title: "Privacy and Security in OSM",
    issuer: "IIT Hyderabad-NPTEL",
    year: "2025",
    category: "course",
    subcategory: "nptel"
  },
  {
    image: "assets/certificates/online-hacker-workshop.jpg",
    title: "How To Become Hacker",
    issuer: "HackingFlix",
    year: "2024",
    category: "workshop",
    subcategory: "null"
  },
  {
    image: "assets/certificates/powerBi-webinar.jpg.jpg",
    title: "AutomatedTesting-PowerBI",
    issuer: "Akshaya College of Eng&Tech",
    year: "2023",
    category: "workshop",
    subcategory: "nul"
  },
  {
    image: "assets/certificates/prompt-eng-chatgpt-GL.jpg",
    title: "Prompt Eng Chatgpt",
    issuer: "Great Learning Academy",
    year: "2024",
    category: "course",
    subcategory: "aiml"
  },
  {
    image: "assets/certificates/psg- Participation Certificate-2023.jpg",
    title: "iTech Hackfest-National Level",
    issuer: "PSG & SAP",
    year: "2023",
    category: "s&h",
    subcategory: "null"
  },
  {
    image: "assets/certificates/py packages-GL.jpg",
    title: "Packages in Python",
    issuer: "Great Learning Academy",
    year: "2023",
    category: "course",
    subcategory: "pl"
  },
  {
    image: "assets/certificates/py-sololearn.jpg",
    title: "Introduction to Python",
    issuer: "Sololearn",
    year: "2023",
    category: "course",
    subcategory: "pl"
  },
  {
    image: "assets/certificates/RBIcertificate.jpg",
    title: "RBI@90 Nationwide Quiz",
    issuer: "Reserve Bank of India",
    year: "2024",
    category: "extra",
    subcategory: "null"
  },
  {
    image: "assets/certificates/Sahana M-ELT.jpg",
    title: "Energy Literacy Training",
    issuer: "Energy Swaraj Foundation",
    year: "2024",
    category: "extra",
    subcategory: "null"
  },
  {
    image: "assets/certificates/Tableau-workshop.jpg",
    title: "NETFLIX Dashboard - Tableau",
    issuer: "Connect And Code",
    year: "2025",
    category: "workshop",
    subcategory: "null"
  },
  {
    image: "assets/certificates/TNSCST-PIC-Online Essay Competition.jpg",
    title: "OnlineEssayCompetition-IP&SDG",
    issuer: "Patents Information Centre, TNSCST",
    year: "2024",
    category: "extra",
    subcategory: "null"
  },
  {
    image: "assets/certificates/uiux.jpg",
    title: "UI/UX for Beginners",
    issuer: "Great Learning Academy",
    year: "2023",
    category: "course",
    subcategory: "webdev"
  },
  {
    image: "assets/certificates/Version Control Systems Integration in Studio (v2021.10)_NM.jpg",
    title: "V-ControlSystems Integration",
    issuer: "UI path-Naan Mudhalvan",
    year: "2024",
    category: "course",
    subcategory: "nm"
  },
  {
    image: "assets/certificates/WWT Participation Certificate_Sahana M.jpg",
    title: "WWT All India Hackathon",
    issuer: "Shooting Stars foundation& WWT",
    year: "2025",
    category: "s&h",
    subcategory: "null"
  }
];




