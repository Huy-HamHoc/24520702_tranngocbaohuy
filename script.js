const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = toggleBtn.querySelector('.theme-icon');
const currentTheme = localStorage.getItem('theme') || 'light';

// Hàm cập nhật giao diện và thuộc tính tiếp cận (A11y State)
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleBtn.setAttribute('aria-pressed', 'true');
    themeIcon.textContent = '🌙';
  } else {
    document.documentElement.removeAttribute('data-theme');
    toggleBtn.setAttribute('aria-pressed', 'false');
    themeIcon.textContent = '☀️';
  }
}

// Khởi tạo trạng thái ban đầu
setTheme(currentTheme);

// Sự kiện click chuyển đổi trạng thái (State Toggle)
toggleBtn.addEventListener('click', () => {
  let isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  let nextTheme = isDark ? 'light' : 'dark';
  
  setTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});
