import os, re, json, sys, html
from html.parser import HTMLParser
# usage: python tools/check.py [site-root]
ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
files = []
for d, _, fs in os.walk(ROOT):
    top = os.path.relpath(d, ROOT).split(os.sep)[0]
    if top in ('.git', '.claude', 'tools'): continue
    for f in fs:
        if f.endswith('.html'): files.append(os.path.join(d, f))
def exists(href, base):
    href = href.split('#')[0].split('?')[0]
    if not href: return True
    p = os.path.normpath(os.path.join(ROOT, href.lstrip('/')) if href.startswith('/') else os.path.join(os.path.dirname(base), href))
    return os.path.isfile(p) or os.path.isfile(os.path.join(p, 'index.html'))
ids_cache = {}
problems = 0
for f in sorted(files):
    s = open(f, encoding='utf-8').read()
    rel = os.path.relpath(f, ROOT).replace(os.sep, '/')
    out = []
    t = re.search(r'<title>(.*?)</title>', s).group(1)
    dsc = re.search(r'<meta name="description" content="(.*?)">', s).group(1)
    tl, dl = len(html.unescape(t)), len(html.unescape(dsc))
    if tl > 60 and 'noindex' not in s: out.append(f'title over 60')
    if not 110 <= dl <= 155 and 'noindex' not in s: out.append(f'desc {dl} chars')
    h1 = len(re.findall(r'<h1[ >]', s))
    if h1 != 1: out.append(f'h1 x{h1}')
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
        try: json.loads(m.group(1))
        except Exception as e: out.append('bad json-ld ' + str(e))
    for m in re.finditer(r'<img ([^>]+)>', s):
        a = m.group(1)
        for att in ('alt=', 'width=', 'height='):
            if att not in a: out.append('img missing ' + att)
        src = re.search(r'src="([^"]+)"', a).group(1)
        if not exists(src, f): out.append('missing img ' + src)
    for m in re.finditer(r'(?:href|src)="(/[^"]*)"', s):
        if not exists(m.group(1), f): out.append('broken ' + m.group(1))
    for m in re.finditer(r'href="#([^"]+)"', s):
        if f'id="{m.group(1)}"' not in s and m.group(1) != 'main': out.append('missing anchor #' + m.group(1))
    if 'rel="canonical"' not in s: out.append('no canonical')
    print(f'{rel:70} t{tl:3} d{dl:3} ' + ('OK' if not out else '; '.join(sorted(set(out)))))
    problems += bool(out)
print('pages', len(files), 'with problems', problems)
