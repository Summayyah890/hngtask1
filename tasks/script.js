const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

function updateCurrentTime() {
  const now = new Date();
  const utcTime = now.toUTCString();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  currentTimeUTC.textContent = utcTime;
  currentDay.textContent = day;
}

updateCurrentTime();