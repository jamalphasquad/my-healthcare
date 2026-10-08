"""Add a photo to the site.

Usage: python tools/add-image.py path/to/photo.jpg image-name

Writes assets/img/<name>-{480,960,1600}.webp (capped at the original width)
and a 1200x630 social image <name>-og.jpg, then records the size in
tools/build/imgmeta.json so the build can reference it as img('<name>', alt).
Requires Pillow (pip install pillow).
"""
import json
import os
import sys

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'assets', 'img')
META = os.path.join(HERE, 'build', 'imgmeta.json')


def main(src, name):
    im = Image.open(src).convert('RGB')
    w, h = im.size
    widths = sorted(set(min(t, w) for t in (480, 960, 1600)))
    for tw in widths:
        im.resize((tw, round(h * tw / w)), Image.LANCZOS).save(
            os.path.join(OUT, f'{name}-{tw}.webp'), 'WEBP', quality=76, method=6)
    ratio = 1200 / 630
    if w / h > ratio:
        nw = round(h * ratio)
        box = ((w - nw) // 2, 0, (w - nw) // 2 + nw, h)
    else:
        nh = round(w / ratio)
        box = (0, (h - nh) // 2, w, (h - nh) // 2 + nh)
    im.crop(box).resize((1200, 630), Image.LANCZOS).save(
        os.path.join(OUT, f'{name}-og.jpg'), 'JPEG', quality=80, optimize=True, progressive=True)

    meta = json.load(open(META, encoding='utf-8'))
    meta[name] = {'w': w, 'h': h, 'widths': widths}
    json.dump(meta, open(META, 'w', encoding='utf-8'), indent=1)
    print(f'added {name}: {widths} + og')


if __name__ == '__main__':
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
