const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const min = $('.min');
const sec = $('.sec');
const dots = document.querySelectorAll('.dot');
const week = $('.week');
const ampm = document.createElement('div');
ampm.className = 'ampm';
document.querySelector('.time').appendChild(ampm);

let showDot = true;

function animateChange(element, newValue) {
  if (element.textContent !== newValue) {
    element.textContent = newValue;
    element.classList.add('flip');
    setTimeout(() => element.classList.remove('flip'), 500);
  }
}

function update() {
  showDot = !showDot;
  const now = new Date();

  let hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const isAM = hrs < 12;

  const ampmText = isAM ? "AM" : "PM";
  hrs = hrs % 12 || 12;

  animateChange(hour, String(hrs).padStart(2, '0'));
  animateChange(min, String(mins).padStart(2, '0'));
  animateChange(sec, String(secs).padStart(2, '0'));
  animateChange(ampm, ampmText);

  dots.forEach(dot => {
    dot.classList.toggle('invisible', showDot);
  });

  Array.from(week.children).forEach(ele => ele.classList.remove('active'));
  const dayIndex = (now.getDay() + 6) % 7;
  week.children[dayIndex].classList.add('active');
}

setInterval(update, 500);
update();

// Toggle Theme
document.querySelector('.toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
