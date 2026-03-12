// auth-nav.js — shared across all pages
// Reads session, swaps "Login" link → "Hi, Name + Logout" when logged in

(function () {
  function getUser() {
    const raw = sessionStorage.getItem('goCurrentUser') || localStorage.getItem('goCurrentUser');
    try { return raw ? JSON.parse(raw) : null; } catch { return null; }
  }

  function logout() {
    sessionStorage.removeItem('goCurrentUser');
    localStorage.removeItem('goCurrentUser');
    const inPages = window.location.pathname.includes('/pages/');
    window.location.href = inPages ? 'login.html' : 'pages/login.html';
  }

  const user = getUser();
  const loginLink = document.querySelector('a.nav-login');

  if (user && loginLink) {
    // Replace the Login link with "Hi, Name  [Logout]"
    const wrapper = document.createElement('span');
    wrapper.className = 'nav-user';

    const greeting = document.createElement('span');
    greeting.className = 'nav-user-name';
    greeting.textContent = 'Hi, ' + user.name.split(' ')[0];

    const btn = document.createElement('button');
    btn.className = 'nav-logout';
    btn.textContent = 'Log Out';
    btn.addEventListener('click', logout);

    wrapper.appendChild(greeting);
    wrapper.appendChild(btn);
    loginLink.replaceWith(wrapper);
  }
})();
