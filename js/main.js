(function () {
  const cfg = window.SITE_CONFIG || {};
  const url = cfg.TELEGRAM_GROUP_URL || 'https://t.me/+PK0EMK2E8v5hOWM0';

  const cta = document.getElementById('tg-cta');
  if (cta) cta.href = url;

  const handle = document.getElementById('tg-handle');
  if (handle && cfg.telegramHandle) handle.textContent = cfg.telegramHandle;

  const title = document.getElementById('offer-title');
  if (title && cfg.offerTitle) title.textContent = cfg.offerTitle;

  const tagline = document.getElementById('offer-tagline');
  if (tagline && cfg.offerTagline) tagline.textContent = cfg.offerTagline;

  const perksList = document.getElementById('perks-list');
  if (perksList && Array.isArray(cfg.perks)) {
    const handleHtml = cfg.telegramHandle
      ? `<li>☘️ <span id="tg-handle">${cfg.telegramHandle}</span></li>`
      : '';
    perksList.innerHTML =
      cfg.perks.map((p) => `<li>${p}</li>`).join('') + handleHtml;
  }

  if (cfg.siteTitle) document.title = cfg.siteTitle;

  const desc = document.querySelector('meta[name="description"]');
  if (desc && cfg.siteDescription) desc.setAttribute('content', cfg.siteDescription);
})();
