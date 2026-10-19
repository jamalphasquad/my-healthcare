/* HealthcareDirectory.my — progressive enhancement. Every page works without JS. */
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
      var areaLabel = state.area === 'all' ? 'Kuala Lumpur' : (($('[data-filter-area="' + state.area + '"]', dir) || {}).textContent || state.area);
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
    // Area links with several clinics point to /clinics/#area-<slug>
    var hashArea = location.hash.match(/^#area-(.+)$/);
    if (hashArea && $('[data-filter-area="' + hashArea[1] + '"]', dir)) state.area = hashArea[1];
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

  /* ---------- Site search ----------
     A small client-side search over /assets/search-index.json (generated by the build),
     loaded the first time someone focuses a search box. */
  var Search = (function () {
    var docs = null, loading = null;
    var STOP = ' a an and are at for how i in is it my of on or the to what when where which with ';
    var FIELDS = [['t', 12], ['k', 7], ['h', 5], ['d', 4], ['b', 1]];
    function norm(s) {
      return ' ' + String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
    }
    function load() {
      if (!loading) loading = fetch('/assets/search-index.json?v=4').then(function (r) { return r.json(); }).then(function (list) {
        docs = list.map(function (d) {
          return { d: d, t: norm(d.title), k: norm(d.keywords + ' ' + d.cat + ' ' + d.type), h: norm(d.headings), dd: norm(d.desc), b: norm(d.body) };
        });
        return docs;
      });
      return loading;
    }
    function tokens(q) {
      var all = norm(q).trim().split(' ').filter(Boolean);
      var useful = all.filter(function (t) { return STOP.indexOf(' ' + t + ' ') < 0; });
      return (useful.length ? useful : all).sort(function (a, b) { return b.length - a.length; });
    }
    function score(x, toks, phrase) {
      var total = 0;
      for (var i = 0; i < toks.length; i++) {
        var tok = toks[i], hit = 0;
        for (var j = 0; j < FIELDS.length; j++) {
          var f = x[FIELDS[j][0] === 'd' ? 'dd' : FIELDS[j][0]], w = FIELDS[j][1], v = 0;
          if (f.indexOf(' ' + tok + ' ') > -1) v = w * 1.5;          // whole word
          else if (f.indexOf(' ' + tok) > -1) v = w;                 // word starts with it
          else if (tok.length > 3 && f.indexOf(tok) > -1) v = w / 2; // inside a word
          if (v && FIELDS[j][0] === 'b') v *= 1 + Math.min(f.split(' ' + tok).length - 1, 5) * 0.2;
          hit += v;
        }
        if (!hit) return 0; // every word must match somewhere
        total += hit;
      }
      if (toks.length > 1) { if (x.t.indexOf(phrase) > -1) total += 25; else if (x.b.indexOf(phrase) > -1) total += 6; }
      return total;
    }
    function run(q) {
      var toks = tokens(q); if (!toks.length || !docs) return { toks: toks, results: [] };
      var phrase = norm(q).trim();
      var BOOST = { Clinic: 1.25, Page: 0.6 }; // real clinics first, utility pages last
      var results = docs.map(function (x) { return { x: x, s: score(x, toks, phrase) * (BOOST[x.d.type] || 1) }; })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; })
        .map(function (r) { return r.x.d; });
      return { toks: toks, results: results };
    }
    function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function hl(str, toks) {
      if (!toks.length) return esc(str);
      var re = new RegExp('(^|[^a-z0-9])(' + toks.join('|') + ')', 'gi'), out = '', last = 0, m;
      while ((m = re.exec(str))) {
        var s = m.index + m[1].length;
        out += esc(str.slice(last, s)) + '<mark>' + esc(m[2]) + '</mark>';
        last = s + m[2].length;
      }
      return out + esc(str.slice(last));
    }
    function snippet(d, toks, len) {
      var src = d.body || '', at = -1;
      for (var i = 0; i < toks.length && at < 0; i++) {
        var m = new RegExp('(^|[^a-z0-9])' + toks[i], 'i').exec(src);
        if (m) at = m.index + m[1].length;
      }
      if (at < 0 || (d.desc && new RegExp('(^|[^a-z0-9])' + toks[toks.length - 1], 'i').test(d.desc))) return hl(d.desc || src.slice(0, len), toks);
      var start = Math.max(0, at - 60); if (start) start = src.indexOf(' ', start) + 1;
      var end = Math.min(src.length, start + len); if (end < src.length) end = src.lastIndexOf(' ', end);
      return (start ? '… ' : '') + hl(src.slice(start, end), toks) + (end < src.length ? ' …' : '');
    }
    function label(d) { return d.type + (d.cat ? ' · ' + d.cat : ''); }
    return { load: load, run: run, hl: hl, snippet: snippet, label: label, esc: esc };
  })();

  var SUGGEST = ['Dengue', 'Haze', 'Blood pressure', 'Breast screening', 'Mental health', 'Find a clinic'];

  function attachSearch(form) {
    var input = $('.hs__input', form), panel = $('.hs__panel', form), list = $('.hs__list', form);
    var inline = form.classList.contains('hs--modal'), limit = inline ? 8 : 6;
    var extra = document.createElement('div'), all = document.createElement('a');
    all.className = 'hs__all'; all.hidden = true;
    panel.insertBefore(extra, list); panel.appendChild(all);
    var opts = [], active = -1, timer;

    function setOpen(v) {
      if (!inline) panel.hidden = !v;
      input.setAttribute('aria-expanded', v ? 'true' : 'false');
      if (!v) setActive(-1);
    }
    function setActive(i) {
      var targets = opts.concat(all.hidden ? [] : [all]);
      active = i < -1 ? targets.length - 1 : i >= targets.length ? -1 : i;
      targets.forEach(function (el, j) { el.classList.toggle('is-active', j === active); });
      if (active > -1) {
        var el = targets[active];
        if (!el.id) el.id = input.id + '-all';
        input.setAttribute('aria-activedescendant', el.id);
        el.scrollIntoView({ block: 'nearest' });
      } else input.removeAttribute('aria-activedescendant');
    }
    function chips(words) {
      return '<div class="hs__chips">' + words.map(function (w) { return '<button type="button" data-q="' + Search.esc(w) + '">' + Search.esc(w) + '</button>'; }).join('') + '</div>';
    }
    function render() {
      var q = input.value.trim();
      opts = []; active = -1; input.removeAttribute('aria-activedescendant');
      if (!q) {
        list.innerHTML = ''; all.hidden = true;
        extra.innerHTML = '<p class="hs__hint">Popular searches</p>' + chips(SUGGEST);
        return;
      }
      Search.load().then(function () {
        if (input.value.trim() !== q) return; // a newer query is on its way
        var r = Search.run(q), top = r.results.slice(0, limit);
        extra.innerHTML = top.length ? '' :
          '<p class="hs__empty">No results for “' + Search.esc(q) + '”. Try one of these:</p>' + chips(SUGGEST.slice(0, 4));
        list.innerHTML = top.map(function (d, i) {
          return '<li class="sr" role="option" aria-selected="false" id="' + input.id + '-o' + i + '"><a href="' + d.url + '" tabindex="-1">' +
            '<span class="sr__type">' + Search.esc(Search.label(d)) + '</span>' +
            '<span class="sr__title">' + Search.hl(d.title, r.toks) + '</span>' +
            '<span class="sr__snip">' + Search.snippet(d, r.toks, 150) + '</span></a></li>';
        }).join('');
        opts = $$('.sr', list);
        all.hidden = !r.results.length;
        all.href = '/search/?q=' + encodeURIComponent(q);
        all.textContent = r.results.length > top.length ? 'See all ' + r.results.length + ' results for “' + q + '” →' : 'Open the search page →';
      }, function () {
        extra.innerHTML = '<p class="hs__empty">Search is unavailable right now. Please try again.</p>';
      });
    }

    input.addEventListener('focus', function () { Search.load(); render(); setOpen(true); });
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 80); setOpen(true); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active === -1 ? -2 : active - 1); }
      else if (e.key === 'Enter') {
        var targets = opts.concat(all.hidden ? [] : [all]);
        if (active > -1 && targets[active]) { e.preventDefault(); location.href = (targets[active].querySelector('a') || targets[active]).href; }
        else if (!input.value.trim()) e.preventDefault();
      } else if (e.key === 'Escape' && !inline) {
        if (input.value) { input.value = ''; render(); } else { setOpen(false); input.blur(); }
      }
    });
    panel.addEventListener('mousedown', function (e) { if (e.target.closest('button')) e.preventDefault(); });
    panel.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-q]');
      if (chip) { input.value = chip.getAttribute('data-q'); render(); input.focus(); }
    });
    if (!inline) {
      document.addEventListener('click', function (e) { if (!form.contains(e.target)) setOpen(false); });
      form.addEventListener('focusout', function (e) { if (!form.contains(e.relatedTarget)) setOpen(false); });
    }
    return { input: input, render: render };
  }

  var headerSearch = $('form[data-search="hs"]'), modalForm = $('form[data-search="ms"]');
  if (headerSearch) attachSearch(headerSearch);
  var modalSearch = modalForm && attachSearch(modalForm);

  /* Search popup (shown via the search icon on smaller screens) */
  var modal = $('#search-modal'), searchBtn = $('.search-btn'), lastFocus = null;
  function openModal() {
    if (!modal) return;
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('is-locked');
    if (searchBtn) searchBtn.setAttribute('aria-expanded', 'true');
    modalSearch.input.focus(); // synchronous, so mobile keyboards open
    modalSearch.render();
  }
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (searchBtn) searchBtn.setAttribute('aria-expanded', 'false');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (modal) {
    if (searchBtn) searchBtn.addEventListener('click', openModal);
    modal.addEventListener('click', function (e) { if (e.target.closest('[data-search-close]')) closeModal(); });
    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
      if (e.key !== 'Tab') return; // keep focus inside the popup
      var f = $$('input, button, a[href]', $('.smodal__box', modal)).filter(function (el) { return el.tabIndex !== -1 && el.offsetParent !== null; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1080 && headerSearch) closeModal(); });
  }

  /* Keyboard shortcut: "/" or Ctrl/Cmd+K focuses search */
  document.addEventListener('keydown', function (e) {
    var t = e.target, typing = t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);
    var isK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
    if (!(isK || (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey))) return;
    var pill = headerSearch && $('.hs__input', headerSearch), page = $('#sp-q');
    if (page) { e.preventDefault(); page.focus(); page.select(); }
    else if (pill && pill.offsetParent !== null) { e.preventDefault(); pill.focus(); pill.select(); }
    else if (modal) { e.preventDefault(); openModal(); }
  });

  /* Full results page: /search/?q=… */
  var sp = $('[data-search-page]');
  if (sp) {
    var spInput = $('#sp-q'), spStatus = $('[data-sp-status]'), spList = $('[data-sp-results]'), spFilters = $('[data-sp-filters]');
    var spGroup = 'all', spTimer;
    var GROUPS = [['all', 'All'], ['articles', 'Articles'], ['clinics', 'Clinics'], ['pages', 'Pages']];
    var groupOf = function (d) { return d.type === 'Clinic' ? 'clinics' : d.type === 'Page' ? 'pages' : 'articles'; };
    function spRun() {
      var q = spInput.value.trim();
      history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
      document.title = (q ? 'Search: ' + q : 'Search') + ' | HealthcareDirectory.my';
      if (!q) { spList.innerHTML = ''; spFilters.hidden = true; spStatus.textContent = 'Type to search clinics, health articles and guides.'; return; }
      Search.load().then(function () {
        if (spInput.value.trim() !== q) return;
        var r = Search.run(q), counts = { all: r.results.length, articles: 0, clinics: 0, pages: 0 };
        r.results.forEach(function (d) { counts[groupOf(d)]++; });
        if (spGroup !== 'all' && !counts[spGroup]) spGroup = 'all';
        spFilters.hidden = !r.results.length;
        spFilters.innerHTML = GROUPS.filter(function (g) { return g[0] === 'all' || counts[g[0]]; }).map(function (g) {
          return '<button type="button" class="chip" data-group="' + g[0] + '" aria-pressed="' + (spGroup === g[0]) + '">' + g[1] + ' (' + counts[g[0]] + ')</button>';
        }).join('');
        var shown = r.results.filter(function (d) { return spGroup === 'all' || groupOf(d) === spGroup; });
        spStatus.innerHTML = r.results.length
          ? r.results.length + (r.results.length === 1 ? ' result' : ' results') + ' for “' + Search.esc(q) + '”'
          : 'No results for “' + Search.esc(q) + '”. Try a different word, or browse <a href="/clinics/">all clinics</a> and <a href="/articles/">all articles</a>.';
        spList.innerHTML = shown.map(function (d) {
          return '<li class="sr"><a href="' + d.url + '"><span class="sr__type">' + Search.esc(Search.label(d)) + '</span>' +
            '<span class="sr__title">' + Search.hl(d.title, r.toks) + '</span>' +
            '<span class="sr__snip">' + Search.snippet(d, r.toks, 240) + '</span>' +
            '<span class="sr__url">' + location.host + d.url + '</span></a></li>';
        }).join('');
      }, function () { spStatus.textContent = 'Search is unavailable right now. Please try again.'; });
    }
    spInput.value = new URLSearchParams(location.search).get('q') || '';
    spInput.addEventListener('input', function () { clearTimeout(spTimer); spTimer = setTimeout(spRun, 120); });
    spInput.form.addEventListener('submit', function (e) { e.preventDefault(); spRun(); });
    spFilters.addEventListener('click', function (e) {
      var b = e.target.closest('[data-group]'); if (b) { spGroup = b.getAttribute('data-group'); spRun(); }
    });
    if (spInput.value) spRun(); else spInput.focus();
  }
})();
