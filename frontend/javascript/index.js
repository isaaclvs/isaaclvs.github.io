import "$styles/index.css"
import "$styles/syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}"

console.info("Bridgetown is loaded!")

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply initial theme
  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️ Light';
  } else {
    body.removeAttribute('data-theme');
    themeToggle.innerHTML = '🌙 Dark';
  }
  
  // Theme toggle event listener
  themeToggle.addEventListener('click', function() {
    const isDark = body.hasAttribute('data-theme');
    
    if (isDark) {
      body.removeAttribute('data-theme');
      themeToggle.innerHTML = '🌙 Dark';
      localStorage.setItem('theme', 'light');
    } else {
      body.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '☀️ Light';
      localStorage.setItem('theme', 'dark');
    }
  });
});
