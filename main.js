// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open'));
});

// ===== CODE ANIMATION =====
const codeLines = [
  '<span class="code-comment">// BilTech IT O\'quv Markazi</span>',
  '<span class="code-keyword">const</span> <span class="code-var">student</span> = {',
  '  name: <span class="code-string">"Siz"</span>,',
  '  dream: <span class="code-string">"IT Mutaxassis"</span>,',
  '  level: <span class="code-string">"Boshlang\'ich"</span>',
  '};',
  '',
  '<span class="code-keyword">async function</span> <span class="code-func">learnAt</span>(center) {',
  '  <span class="code-keyword">const</span> skills = <span class="code-keyword">await</span> center.teach();',
  '  <span class="code-keyword">const</span> job = <span class="code-keyword">await</span> skills.applyFor();',
  '  <span class="code-keyword">return</span> <span class="code-string">"🚀 Muvaffaqiyat!"</span>;',
  '}',
  '',
  '<span class="code-func">learnAt</span>(<span class="code-string">"BilTech"</span>);',
];
const codeBody = document.getElementById('codeBody');
let lineIdx = 0, charIdx = 0, html = '';

function typeCode() {
  if (lineIdx >= codeLines.length) {
    codeBody.innerHTML = html + '<span class="code-cursor"></span>';
    return;
  }
  const line = codeLines[lineIdx];
  if (charIdx <= line.length) {
    const partial = line.substring(0, charIdx);
    codeBody.innerHTML = html + partial + '<span class="code-cursor"></span>';
    charIdx++;
    setTimeout(typeCode, charIdx % 5 === 0 ? 30 : 12);
  } else {
    html += line + '<br>';
    lineIdx++; charIdx = 0;
    setTimeout(typeCode, 60);
  }
}
setTimeout(typeCode, 800);

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(timer);
    }, 25);
  });
}
const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: 0.3 });
heroObserver.observe(document.querySelector('.hero-stats'));

// ===== RENDER COURSES =====
function renderCourses() {
  const grid = document.getElementById('coursesGrid');
  const select = document.getElementById('cf-course');
  const footer = document.getElementById('footerCourses');
  grid.innerHTML = BILTECH_DATA.courses.map(c => `
    <div class="course-card reveal">
      <div class="course-emoji">${c.emoji}</div>
      <span class="course-level level-${c.level}">${c.levelText}</span>
      <h3>${c.title}</h3>
      <p>${c.desc}</p>
      <div class="course-meta">
        <span>📅 ${c.duration}</span>
        <span>🎓 ${c.lessons}</span>
        <span>👥 ${c.students} talaba</span>
      </div>
      <div class="course-price">
        <div><div class="price">${c.price}</div><small style="color:var(--text2)">${c.priceNote}</small></div>
        <button class="enroll-btn" onclick="enrollCourse('${c.title}')">Yozilish →</button>
      </div>
    </div>
  `).join('');

  BILTECH_DATA.courses.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.title; opt.textContent = c.title;
    select.appendChild(opt);
  });

  footer.innerHTML = BILTECH_DATA.courses.map(c =>
    `<li><a href="#courses">${c.title}</a></li>`
  ).join('');
}

function enrollCourse(name) {
  document.getElementById('cf-course').value = name;
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// ===== RENDER TEACHERS =====
function renderTeachers() {
  document.getElementById('teachersGrid').innerHTML = BILTECH_DATA.teachers.map(t => `
    <div class="teacher-card reveal">
      <div class="teacher-avatar">${t.emoji}</div>
      <h3>${t.name}</h3>
      <div class="teacher-role">${t.role}</div>
      <div class="teacher-exp">${t.exp}</div>
      <div class="teacher-tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </div>
  `).join('');
}

// ===== TESTIMONIALS SLIDER =====
let currentSlide = 0;
function renderTestimonials() {
  const track = document.createElement('div');
  track.className = 'testimonials-track';
  track.id = 'testimonialsTrack';
  track.innerHTML = BILTECH_DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-inner">
        <div class="stars">${t.stars}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.emoji}</div>
          <div class="author-info">
            <strong>${t.name}</strong>
            <span>${t.job}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  document.getElementById('testimonialsSlider').appendChild(track);

  const dots = document.getElementById('sliderDots');
  BILTECH_DATA.testimonials.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'slider-dot' + (i === 0 ? ' active' : '');
    btn.onclick = () => goToSlide(i);
    dots.appendChild(btn);
  });

  setInterval(() => goToSlide((currentSlide + 1) % BILTECH_DATA.testimonials.length), 5000);
}

function goToSlide(n) {
  currentSlide = n;
  document.getElementById('testimonialsTrack').style.transform = `translateX(-${n * 100}%)`;
  document.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('active', i === n));
}

// ===== CONTACT FORM =====
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('cf-name').value;
  const phone = document.getElementById('cf-phone').value;
  const course = document.getElementById('cf-course').value;
  const message = document.getElementById('cf-message').value;

  // Save to localStorage
  const apps = JSON.parse(localStorage.getItem('biltech_apps') || '[]');
  apps.push({ id: Date.now(), name, phone, course, message, date: new Date().toLocaleString('uz-UZ'), status: 'Yangi' });
  localStorage.setItem('biltech_apps', JSON.stringify(apps));

  document.getElementById('formSuccess').style.display = 'block';
  e.target.reset();
  setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
}, { threshold: 0.1 });

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  renderTeachers();
  renderTestimonials();
  setTimeout(initReveal, 100);
});
