const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Charger préférence sauvegardée
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
  updateButton(savedTheme);
} else {
  // Respect préférence système
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    html.setAttribute('data-theme', 'dark');
    updateButton('dark');
  }
}

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const newTheme = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButton(newTheme);
});

function updateButton(theme) {
  toggle.setAttribute('aria-pressed', theme === 'dark');
  toggle.textContent = theme === 'dark'
    ? '☀️ Mode clair'
    : '🌙 Mode sombre';
}