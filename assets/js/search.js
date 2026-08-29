// Chronicle — client-side search over the Hugo JSON index (per language).
(() => {
  const script = document.currentScript;
  const indexUrl = script && script.dataset.indexUrl;
  const input = document.getElementById('search-input');
  const info = document.getElementById('search-info');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let index = null;
  let dict = {};
  try { dict = JSON.parse(script.dataset.strings || '{}'); } catch (e) { /* noop */ }

  // Language-aware base, e.g. "/zh/" when the index lives at "/zh/index.json"
  const base = (indexUrl || '/').replace(/index\.json.*$/, '');

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function load() {
    if (index) return Promise.resolve(index);
    return fetch(indexUrl)
      .then(r => r.json())
      .then(data => { index = Array.isArray(data) ? data : []; return index; });
  }

  function highlight(text, terms) {
    if (!text) return '';
    let html = esc(text);
    terms.forEach(t => {
      if (!t) return;
      const re = new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      html = html.replace(re, '<mark>$1</mark>');
    });
    return html;
  }

  function card(item, terms) {
    const meta = `<time datetime="${esc(item.date)}">${esc(item.displayDate)}</time>`;
    const tags = (item.tags || []).map(t => `<a href="${base}tags/${encodeURIComponent(t.toLowerCase())}/" class="tag">${esc(t)}</a>`).join(' ');
    const excerpt = (item.summary || '').slice(0, 280);
    if (item.type === 'notes') {
      // Notes have no title on baty.net — show a compact date-permalink card.
      return `<article class="post-card post-card--note">
        <div class="post-meta"><time datetime="${esc(item.date)}"><a href="${esc(item.url)}">${esc(item.displayDate)} #</a></time></div>
        <div class="post-body-wrap"><div class="post-body"><p>${highlight(excerpt, terms)}</p></div></div>
      </article>`;
    }
    return `<article class="post-card">
      <h2 class="post-title"><a href="${esc(item.url)}">${highlight(item.title, terms)}</a></h2>
      <div class="post-meta">${meta} ${tags}</div>
      <div class="post-body"><p>${highlight(excerpt, terms)}</p></div>
    </article>`;
  }

  function render(q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.innerHTML = '';
      info.textContent = '';
      return;
    }
    load().then(items => {
      const scored = [];
      items.forEach(item => {
        const title = (item.title || '').toLowerCase();
        const text = ((item.summary || '') + ' ' + (item.content || '')).toLowerCase();
        let score = 0;
        terms.forEach(t => {
          if (title.includes(t)) score += 5;
          const m = text.split(t).length - 1;
          score += Math.min(m, 5);
        });
        if (score > 0) scored.push({ item, score });
      });
      scored.sort((a, b) => b.item.date.localeCompare(a.item.date) || b.score - a.score);
      const top = scored.slice(0, 30).map(s => card(s.item, terms));
      results.innerHTML = top.join('');
      const count = scored.length;
      info.textContent = (dict.resultsFound || '%d results').replace('%d', count) + (count ? '' : ' — ' + (dict.noResults || ''));
    });
  }

  // Support ?q=... deep links
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('q');
  if (initial) { input.value = initial; render(initial); }

  let timer;
  input.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => render(input.value.trim()), 150);
  });
})();
