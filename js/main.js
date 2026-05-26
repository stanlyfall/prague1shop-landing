(function () {
  const cfg = window.SITE_CONFIG || {};
  const url = cfg.TELEGRAM_GROUP_URL || 'https://t.me/+PK0EMK2E8v5hOWM0';

  const cta = document.getElementById('tg-cta');
  if (cta) cta.href = url;

  const handle = document.getElementById('tg-handle');
  if (handle && cfg.telegramHandle) handle.textContent = cfg.telegramHandle;

  const promo = document.getElementById('promo-code');
  if (promo && cfg.promoCode) promo.textContent = cfg.promoCode;

  if (cfg.siteTitle) document.title = cfg.siteTitle;

  const desc = document.querySelector('meta[name="description"]');
  if (desc && cfg.siteDescription) desc.setAttribute('content', cfg.siteDescription);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && cfg.siteTitle) ogTitle.setAttribute('content', cfg.siteTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && cfg.siteDescription) ogDesc.setAttribute('content', cfg.siteDescription);

})();
