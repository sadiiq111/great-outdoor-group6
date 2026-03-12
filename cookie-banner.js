(function() {
  if (localStorage.getItem('cookieConsent')) return;
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <span style="flex:1;min-width:200px;">🍪 We use cookies to enhance your experience and remember your saved trails. <a href="privacy.html" style="color:#86efac;text-decoration:underline;">Privacy Policy</a></span>
      <div style="display:flex;gap:8px;flex-shrink:0;">
        <button id="cookie-accept" style="background:#2d5016;color:white;border:none;padding:8px 20px;border-radius:20px;cursor:pointer;font-weight:600;font-size:14px;">Accept</button>
        <button id="cookie-decline" style="background:transparent;color:white;border:1.5px solid rgba(255,255,255,0.4);padding:8px 16px;border-radius:20px;cursor:pointer;font-size:14px;">Decline</button>
      </div>
    </div>`;
  banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#1a3009;color:white;padding:16px 24px;z-index:9999;box-shadow:0 -2px 12px rgba(0,0,0,0.2);font-size:14px;line-height:1.5;';
  document.body.appendChild(banner);
  document.getElementById('cookie-accept').addEventListener('click', function() {
    banner.remove(); localStorage.setItem('cookieConsent', 'accepted');
  });
  document.getElementById('cookie-decline').addEventListener('click', function() {
    banner.remove(); localStorage.setItem('cookieConsent', 'declined');
  });
})();
