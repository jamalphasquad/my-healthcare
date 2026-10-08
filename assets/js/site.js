/* MalaysiaHealthcare.my — progressive enhancement. Every page works without JS. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Mobile navigation ---------- */
  var toggle = $('.nav__toggle'), links = $('#nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) { links.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- Custom dropdowns ----------
     Enhances <select data-dropdown> into an accessible select-only combobox.
     The native select stays in the DOM (and in the form) as the source of truth. */
  var ddUid = 0, openDd = null;
  function enhanceSelect(sel) {
    var id = 'dd' + (++ddUid), labelId = sel.getAttribute('aria-labelledby');
    var wrap = document.createElement('div'); wrap.className = 'dd';
    sel.parentNode.insertBefore(wrap, sel); wrap.appendChild(sel);
    sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');

    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'dd__btn'; btn.id = id + '-btn';
    btn.setAttribute('role', 'combobox');
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', id + '-list');
    if (labelId) btn.setAttribute('aria-labelledby', labelId + ' ' + btn.id);
    btn.innerHTML = '<span class="dd__value"></span><svg class="dd__chev" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var valueEl = btn.firstChild;

    var list = document.createElement('ul');
    list.className = 'dd__list'; list.id = id + '-list';
    list.setAttribute('role', 'listbox'); list.tabIndex = -1;
    if (labelId) list.setAttribute('aria-labelledby', labelId);
    var opts = Array.prototype.map.call(sel.options, function (o, i) {
      var li = document.createElement('li');
      li.className = 'dd__opt'; li.id = id + '-o' + i;
      li.setAttribute('role', 'option'); li.textContent = o.textContent;
      list.appendChild(li); return li;
    });
    wrap.appendChild(btn); wrap.appendChild(list);

    var active = sel.selectedIndex, typed = '', typedAt = 0;
    function sync() {
      var i = sel.selectedIndex;
      valueEl.textContent = sel.options[i] ? sel.options[i].textContent : '';
      opts.forEach(function (li, j) { li.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
    }
    function setActive(i) {
      active = Math.max(0, Math.min(opts.length - 1, i));
      opts.forEach(function (li, j) { li.classList.toggle('is-active', j === active); });
      btn.setAttribute('aria-activedescendant', opts[active].id);
      var li = opts[active];
      if (li.offsetTop < list.scrollTop) list.scrollTop = li.offsetTop - 6;
      else if (li.offsetTop + li.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = li.offsetTop + li.offsetHeight - list.clientHeight + 6;
    }
    function open() {
      if (openDd && openDd !== api) openDd.close();
      wrap.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true');
      openDd = api; setActive(sel.selectedIndex);
    }
    function close() {
      wrap.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false');
      btn.removeAttribute('aria-activedescendant');
      if (openDd === api) openDd = null;
    }
    function choose(i) {
      if (sel.selectedIndex !== i) {
        sel.selectedIndex = i; sync();
        sel.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
    function typeahead(ch) {
      var now = Date.now(); typed = (now - typedAt > 700 ? '' : typed) + ch.toLowerCase(); typedAt = now;
      // a repeated single letter cycles through matches; a longer prefix refines the current match
      var q = /^(.)\1+$/.test(typed) ? typed[0] : typed;
      var start = wrap.classList.contains('is-open') ? active : sel.selectedIndex, offset = q.length > 1 ? 0 : 1;
      for (var k = 0; k < opts.length; k++) {
        var j = (start + offset + k) % opts.length;
        if (opts[j].textContent.toLowerCase().indexOf(q) === 0) return j;
      }
      return -1;
    }
    var api = { close: close, wrap: wrap };

    btn.addEventListener('click', function () { wrap.classList.contains('is-open') ? close() : open(); });
    btn.addEventListener('keydown', function (e) {
      var isOpen = wrap.classList.contains('is-open'), k = e.key;
      if (!isOpen) {
        if (k === 'ArrowDown' || k === 'ArrowUp' || k === 'Enter' || k === ' ') { e.preventDefault(); open(); }
        else if (k.length === 1 && /\S/.test(k)) { var t = typeahead(k); if (t > -1) choose(t); }
        return;
      }
      if (k === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
      else if (k === 'ArrowUp') { e.preventDefault(); e.altKey ? (choose(active), close()) : setActive(active - 1); }
      else if (k === 'Home' || k === 'PageUp') { e.preventDefault(); setActive(0); }
      else if (k === 'End' || k === 'PageDown') { e.preventDefault(); setActive(opts.length - 1); }
      else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(active); close(); }
      else if (k === 'Escape') { e.preventDefault(); close(); }
      else if (k === 'Tab') { choose(active); close(); }
      else if (k.length === 1 && /\S/.test(k)) { var j = typeahead(k); if (j > -1) setActive(j); }
    });
    list.addEventListener('mousedown', function (e) { e.preventDefault(); }); // keep focus on the button
    list.addEventListener('click', function (e) {
      var li = e.target.closest('.dd__opt'); if (!li) return;
      choose(opts.indexOf(li)); close(); btn.focus();
    });
    list.addEventListener('mousemove', function (e) {
      var li = e.target.closest('.dd__opt'); if (li && opts.indexOf(li) !== active) setActive(opts.indexOf(li));
    });
    sel.addEventListener('change', sync);
    sel._sync = sync;
    sync();
  }
  $$('select[data-dropdown]').forEach(enhanceSelect);
  document.addEventListener('click', function (e) { if (openDd && !openDd.wrap.contains(e.target)) openDd.close(); });

  /* ---------- Malaysia time (GMT+8) & opening hours ---------- */
  function myNow() {
    var d = new Date(), utc = d.getTime() + d.getTimezoneOffset() * 60000;
    var m = new Date(utc + 8 * 3600000);
    return { day: m.getDay(), mins: m.getHours() * 60 + m.getMinutes() };
  }
  function fmt(mins) {
    if (mins === 1440) mins = 0;
    var h = Math.floor(mins / 60), m = mins % 60, ap = h < 12 ? 'am' : 'pm', x = h % 12 || 12;
    return x + (m ? ':' + (m < 10 ? '0' : '') + m : '') + ap;
  }
  function parseHours(el) {
    try { return JSON.parse(el.getAttribute('data-hours')); } catch (e) { return null; }
  }
  function hoursState(h) {
    var n = myNow(), today = h[n.day] || [];
    var allDay = today.length === 1 && today[0][0] === 0 && today[0][1] >= 1440;
    var open = today.some(function (r) { return n.mins >= r[0] && n.mins < r[1]; });
    var text = !today.length ? 'Closed today' : allDay ? 'Open 24 hours today'
      : 'Today ' + today.map(function (r) { return fmt(r[0]) + ' – ' + fmt(r[1]); }).join(', ');
    return { open: open, allDay: allDay, text: text, day: n.day };
  }
  function paintStatus(card, st) {
    var s = $('.status', card);
    if (s) {
      s.textContent = st.allDay ? 'Open 24 hours' : st.open ? 'Open now' : 'Closed now';
      s.classList.toggle('is-open', st.open);
      s.classList.toggle('is-closed', !st.open);
    }
    var t = $('.js-today', card);
    if (t) t.textContent = st.text;
  }

  /* ---------- Clinic directory filters ---------- */
  var dir = $('[data-directory]');
  if (dir) {
    var cards = $$('.clinic', dir);
    var state = { area: 'all', service: 'all', openNow: false };
    cards.forEach(function (c) { var h = parseHours(c); if (h) { c._st = hoursState(h); paintStatus(c, c._st); } });

    var openCount = cards.filter(function (c) { return c._st && c._st.open; }).length;
    $$('.js-open-count').forEach(function (el) { el.textContent = openCount + (openCount === 1 ? ' clinic open now' : ' clinics open now'); });

    var areaSel = $('#finder-area'), svcSel = $('#finder-service');
    function apply() {
      var shown = 0;
      cards.forEach(function (c) {
        var okA = state.area === 'all' || c.getAttribute('data-area') === state.area;
        var okS = state.service === 'all' || (c.getAttribute('data-services') || '').split('|').indexOf(state.service) > -1;
        var okO = !state.openNow || (c._st && c._st.open);
        var vis = okA && okS && okO;
        c.hidden = !vis; if (vis) shown++;
      });
      $$('[data-filter-area]', dir).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter-area') === state.area ? 'true' : 'false'); });
      $$('[data-filter-service]', dir).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter-service') === state.service ? 'true' : 'false'); });
      var areaLabel = state.area === 'all' ? 'the Klang Valley' : (($('[data-filter-area="' + state.area + '"]', dir) || {}).textContent || state.area);
      var svcLabel = state.service === 'all' ? '' : ' · ' + (($('[data-filter-service="' + state.service + '"]', dir) || {}).textContent || state.service);
      var rt = $('.result-text', dir);
      if (rt) rt.textContent = shown + (shown === 1 ? ' clinic' : ' clinics') + ' in ' + areaLabel + svcLabel + (state.openNow ? ' · open now' : '');
      var empty = $('.empty', dir); if (empty) empty.hidden = shown !== 0;
      if (areaSel) { areaSel.value = state.area; if (areaSel._sync) areaSel._sync(); }
      if (svcSel) { svcSel.value = state.service; if (svcSel._sync) svcSel._sync(); }
    }
    dir.addEventListener('click', function (e) {
      var a = e.target.closest('[data-filter-area]'), s = e.target.closest('[data-filter-service]'), r = e.target.closest('[data-reset]');
      if (a) state.area = a.getAttribute('data-filter-area');
      if (s) state.service = s.getAttribute('data-filter-service');
      if (r) state = { area: 'all', service: 'all', openNow: false };
      if (a || s || r) { var on = $('#open-now'); if (on) on.checked = state.openNow; apply(); }
    });
    var on = $('#open-now');
    if (on) on.addEventListener('change', function () { state.openNow = on.checked; apply(); });

    var finder = $('#finder');
    if (finder) finder.addEventListener('submit', function (e) {
      e.preventDefault();
      state.area = areaSel.value; state.service = svcSel.value; apply();
      dir.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $$('[data-preset-service]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        state.area = 'all'; state.service = b.getAttribute('data-preset-service'); apply();
        dir.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    // Deep links like /#clinics?area=kelana-jaya are not used; area links go to clinic pages.
    apply();
  }

  /* ---------- Single clinic page: today's hours ---------- */
  var profile = $('[data-clinic-profile]');
  if (profile) {
    var h = parseHours(profile);
    if (h) {
      var st = hoursState(h);
      paintStatus(profile, st);
      var row = $('.hours tr[data-day="' + st.day + '"]');
      if (row) row.classList.add('is-today');
    }
  }
  $$('.mini-clinics a[data-hours]').forEach(function (a) {
    var h = parseHours(a); if (!h) return;
    var st = hoursState(h), el = $('.h', a);
    if (el) el.textContent = (st.open ? 'Open now · ' : 'Closed now · ') + st.text.replace('Today ', '');
  });

  /* ---------- Blog search & topics ---------- */
  var blog = $('[data-blog]');
  if (blog) {
    var posts = $$('.post', blog), q = $('#article-search'), cat = 'all';
    var featured = $('[data-featured]'), heading = $('#latest-h'), count = $('.js-count');
    function filter() {
      var term = (q && q.value || '').trim().toLowerCase(), n = 0;
      posts.forEach(function (p) {
        var okC = cat === 'all' || p.getAttribute('data-cat') === cat;
        var okQ = !term || p.textContent.toLowerCase().indexOf(term) > -1;
        // the featured article sits above the grid; only list it when filtering
        var dup = p.hasAttribute('data-is-featured') && cat === 'all' && !term;
        p.hidden = !(okC && okQ) || dup; if (!p.hidden) n++;
      });
      $$('[data-cat-filter]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-cat-filter') === cat ? 'true' : 'false'); });
      if (featured) featured.hidden = cat !== 'all' || !!term;
      if (heading) heading.textContent = cat !== 'all' ? (($('[data-cat-filter="' + cat + '"]') || {}).textContent || 'Articles') : term ? 'Search results' : 'Latest articles';
      if (count) count.textContent = n + (n === 1 ? ' article' : ' articles');
      var empty = $('.empty', blog); if (empty) empty.hidden = n !== 0;
    }
    if (q) q.addEventListener('input', filter);
    document.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cat-filter]'), r = e.target.closest('[data-blog-reset]');
      if (b) { cat = b.getAttribute('data-cat-filter'); filter(); }
      if (r) { cat = 'all'; if (q) q.value = ''; filter(); }
    });
    var m = location.hash.match(/^#topic-(.+)$/);
    if (m && $('[data-cat-filter="' + m[1] + '"]')) cat = m[1];
    filter();
  }

  /* Home: article topic chips */
  var homePosts = $('[data-home-posts]');
  if (homePosts) {
    var hp = $$('.post', homePosts);
    $$('[data-home-cat]').forEach(function (b) {
      b.addEventListener('click', function () {
        var c = b.getAttribute('data-home-cat');
        hp.forEach(function (p) { p.hidden = !(c === 'all' || p.getAttribute('data-cat') === c); });
        $$('[data-home-cat]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      });
    });
  }

  /* ---------- Article: reading progress, active TOC, copy link ---------- */
  var bar = $('.progress'), toc = $$('.toc nav a');
  if (bar || toc.length) {
    var ids = toc.map(function (a) { return a.getAttribute('href').slice(1); });
    var ticking = false;
    var onScroll = function () {
      ticking = false;
      var d = document.documentElement, max = d.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (max > 0 ? Math.min(100, window.scrollY / max * 100) : 0).toFixed(1) + '%';
      var active = ids[0];
      ids.forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 160) active = id; });
      toc.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + active); });
    };
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();
  }
  $$('[data-copy-link]').forEach(function (b) {
    b.addEventListener('click', function () {
      var url = b.getAttribute('data-copy-link') || location.href, label = b.textContent;
      var done = function () { b.textContent = 'Link copied'; setTimeout(function () { b.textContent = label; }, 2000); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, done); else done();
    });
  });

  /* ---------- Newsletter ----------
     Set data-endpoint on the form to a form/newsletter service URL (e.g. Formspree, Buttondown)
     to start collecting sign-ups. Until then the form explains that sign-ups open soon. */
  $$('.js-newsletter').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = $('.nl__msg', f), ep = f.getAttribute('data-endpoint');
      var show = function (t) { if (msg) { msg.textContent = t; msg.hidden = false; } };
      if (!ep) { show('Our newsletter launches soon — please check back. Terima kasih!'); return; }
      fetch(ep, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw 0; f.reset(); show('Terima kasih — you’re on the list.'); })
        .catch(function () { show('Sorry, something went wrong. Please try again later.'); });
    });
  });
})();
