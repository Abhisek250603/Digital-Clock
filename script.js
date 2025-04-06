const $ = (selector) => document.querySelector(selector);

const hour = $('.hour');
const dots = document.querySelectorAll('.dot');
const min = $('.min');
const sec = document.querySelector('.sec');
const week = $('.week');

// Create AM/PM element
let ampm = document.createElement('div');
ampm.className = 'ampm';
document.querySelector('.time').appendChild(ampm);

let showDot = true;

function update() {
  showDot = !showDot;
  const now = new Date();

  let hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const isAM = hrs < 12;

  const ampmText = isAM ? "AM" : "PM";
  hrs = hrs % 12 || 12;

  hour.textContent = String(hrs).padStart(2, '0');
  min.textContent = String(mins).padStart(2, '0');
  sec.textContent = String(secs).padStart(2, '0');
  ampm.textContent = ampmText;

  dots.forEach(dot => {
    dot.classList.toggle('invisible', showDot);
  });

  Array.from(week.children).forEach((ele) => ele.classList.remove('active'));
  const dayIndex = (now.getDay() + 6) % 7;
  week.children[dayIndex].classList.add('active');
}

setInterval(update, 500);
update();
