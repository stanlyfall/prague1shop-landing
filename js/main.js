(function () {
  const cfg = window.SITE_CONFIG || {};
  const url = cfg.TELEGRAM_GROUP_URL || 'https://t.me/+ioJEsd0DyixlOWJi';

  const cta = document.getElementById('tg-cta');
  if (cta) cta.href = url;

  const handle = document.getElementById('tg-handle');
  if (handle && cfg.telegramHandle) handle.textContent = cfg.telegramHandle;

  const promo = document.getElementById('promo-code');
  if (promo && cfg.promoCode) promo.textContent = cfg.promoCode;

  const title = document.getElementById('offer-title');
  if (title && cfg.offerTitle) {
    title.innerHTML = cfg.offerTitle.replace(/\n/g, '<br>');
  }

  const tagline = document.getElementById('offer-tagline');
  if (tagline && cfg.offerTagline) tagline.textContent = cfg.offerTagline;

  const perksList = document.getElementById('perks-list');
  if (perksList && Array.isArray(cfg.perks)) {
    perksList.innerHTML = cfg.perks
      .map((p) => {
        const m = p.match(/^(\S+)\s+(.+)$/);
        if (m) {
          return `<li><span class="perks__icon">${m[1]}</span> ${m[2]}</li>`;
        }
        return `<li>${p}</li>`;
      })
      .join('');
  }

  if (cfg.siteTitle) document.title = cfg.siteTitle;

  const desc = document.querySelector('meta[name="description"]');
  if (desc && cfg.siteDescription) desc.setAttribute('content', cfg.siteDescription);
})();
