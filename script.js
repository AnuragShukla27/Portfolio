/* =====================================================================
   ANURAG SHUKLA — PORTFOLIO  |  script.js
   Everything you may want to edit is in the first three blocks:
     1) CONTACT  — your email, phone and links
     2) SKILLS   — the six skills and their percentages
     3) MEDIA    — every image / video link used in the galleries
   ===================================================================== */
(function () {
  'use strict';

  window.__ready = true;

  /* ===================================================================
     1) CONTACT — fill these in. Leave '' to keep the placeholder text.
        Example: email: 'name@example.com', linkedin: 'https://linkedin.com/in/yourname'
     =================================================================== */
  const CONTACT = {
    email: '',
    phone: '',
    linkedin: '',
    behance: '',
    instagram: '',
    resume: ''
  };

  /* ===================================================================
     2) SKILLS — change the name or the percentage (0-100)
     =================================================================== */
  const SKILLS = [
    { name: 'Adobe Photoshop',     value: 90 },
    { name: 'Adobe Illustrator',   value: 100 },
    { name: 'Adobe After Effects', value: 80 },
    { name: 'Figma',               value: 90 },
    { name: 'Canva',               value: 100 },
    { name: 'CapCut',              value: 90 }
  ];

  /* ===================================================================
     3) MEDIA — demo links. Replace any `src` with your own image link
        or file path (e.g. 'images/post-1.jpg'). Videos: use an .mp4 link
        or file path (e.g. 'videos/reel-1.mp4') and a `poster` image.
     =================================================================== */
  const pic = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

  // Demo videos (sample MP4 files). The same clips are cropped to fit vertical frames.
  const SAMPLE = '/video/';
  const VID = {
    blazes:     SAMPLE + 'reel-01.mp4',
    escapes:    SAMPLE + 'ForBiggerEscapes.mp4',
    fun:        SAMPLE + 'ForBiggerFun.mp4',
    joyrides:   SAMPLE + 'ForBiggerJoyrides.mp4',
    meltdowns:  SAMPLE + 'ForBiggerMeltdowns.mp4',
    bunny:      SAMPLE + 'BigBuckBunny.mp4'
  };

  const LOGOS = [
    { name: 'NOVA', type: 'Brand Identity', image: 'images/logo-nova.png' },
    { name: 'ORBIT', type: 'Logo Mark', image: 'images/logo-orbit.png' },
    { name: 'PULSE', type: 'Brand Identity', image: 'images/logo-pulse.png' },
    { name: 'LUMEN', type: 'Logo Mark', image: 'images/logo-lumen.png' },
    { name: 'ATLAS', type: 'Brand Identity', image: 'images/logo-atlas.png' },
    { name: 'ZENITH', type: 'Logo Mark', image: 'images/logo-zenith.png' },
    { name: 'ECHO', type: 'Brand Identity', image: 'images/logo-echo.png' },
    { name: 'VERTEX', type: 'Logo Mark', image: 'images/logo-vertex.png' }
  ];

  const GALLERIES = {
    posts: {
      ratio: '1080 / 1350', size: '1080 × 1350',
      items: [
        { title: 'Social Post 01', src: pic('as-post-1', 1080, 1350) },
        { title: 'Social Post 02', src: pic('as-post-2', 1080, 1350) },
        { title: 'Social Post 03', src: pic('as-post-3', 1080, 1350) },
        { title: 'Social Post 04', src: pic('as-post-4', 1080, 1350) },
        { title: 'Social Post 05', src: pic('as-post-5', 1080, 1350) },
        { title: 'Social Post 06', src: pic('as-post-6', 1080, 1350) }
      ]
    },
    postMockups: {
      ratio: '1080 / 1350', size: '1080 × 1350',
      items: [
        { title: 'Poster Mockup 01', src: pic('as-pmock-1', 1080, 1350) },
        { title: 'Poster Mockup 02', src: pic('as-pmock-2', 1080, 1350) },
        { title: 'Poster Mockup 03', src: pic('as-pmock-3', 1080, 1350) }
      ]
    },
    brochures: {
      ratio: '210 / 297', size: 'A4 · 210 × 297 mm',
      items: [
        { title: 'Brochure 01', src: pic('as-brochure-1', 1240, 1754) },
        { title: 'Brochure 02', src: pic('as-brochure-2', 1240, 1754) },
        { title: 'Brochure 03', src: pic('as-brochure-3', 1240, 1754) }
      ]
    },
    banners: {
      ratio: '1920 / 1080', size: '1920 × 1080',
      items: [
        { title: 'Banner 01', src: pic('as-banner-1', 1920, 1080) },
        { title: 'Banner 02', src: pic('as-banner-2', 1920, 1080) }
      ]
    },
    bannerMockups: {
      ratio: '1920 / 1080', size: '1920 × 1080',
      items: [
        { title: 'Banner Mockup 01', src: pic('as-bmock-1', 1920, 1080) },
        { title: 'Banner Mockup 02', src: pic('as-bmock-2', 1920, 1080) }
      ]
    },
    reelsV: {
      ratio: '1080 / 1920', size: '1080 × 1920', video: true,
      items: [
        { title: 'Motion Reel 01', src: VID.blazes,    poster: pic('as-reel-1', 1080, 1920) },
        { title: 'Motion Reel 02', src: VID.escapes,   poster: pic('as-reel-2', 1080, 1920) },
        { title: 'Motion Reel 03', src: VID.fun,       poster: pic('as-reel-3', 1080, 1920) },
        { title: 'Motion Reel 04', src: VID.joyrides,  poster: pic('as-reel-4', 1080, 1920) },
        { title: 'Motion Reel 05', src: VID.meltdowns, poster: pic('as-reel-5', 1080, 1920) },
        { title: 'Motion Reel 06', src: VID.blazes,    poster: pic('as-reel-6', 1080, 1920) }
      ]
    },
    reelsH: {
      ratio: '1920 / 1080', size: '1920 × 1080', video: true,
      items: [
        { title: 'Landscape Video 01', src: VID.bunny, poster: pic('as-land-1', 1920, 1080) },
        { title: 'Landscape Video 02', src: VID.fun,   poster: pic('as-land-2', 1920, 1080) }
      ]
    },
    web: {
      ratio: '16 / 10', size: 'Website banner', frame: true,
      items: [
        { title: 'Website Design 01', src: pic('as-web-1', 1600, 1000) },
        { title: 'Website Design 02', src: pic('as-web-2', 1600, 1000) },
        { title: 'Website Design 03', src: pic('as-web-3', 1600, 1000) }
      ]
    }
  };

  /* ===================================================================
     Helpers
     =================================================================== */
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer  = window.matchMedia('(hover: hover) and (pointer: fine)');

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ===================================================================
     Build: skills
     =================================================================== */
  function buildSkills() {
    const grid = $('#skillsGrid');
    if (!grid) return;
    SKILLS.forEach((s, i) => {
      const card = el('div', 'card skill');
      card.setAttribute('data-reveal', '');
      card.style.setProperty('--i', i % 3);
      card.style.setProperty('--p', s.value);
      card.dataset.value = s.value;
      card.innerHTML =
        '<div class="ring" role="img" aria-label="' + s.name + ' ' + s.value + ' percent">' +
          '<span class="ring__val"><span><span data-count>' + s.value + '</span><small>%</small></span></span>' +
        '</div>' +
        '<h3>' + s.name + '</h3>';
      grid.appendChild(card);
    });
  }

  /* ===================================================================
     Build: logos
     =================================================================== */
  function buildLogos() {
    const grid = $('[data-gallery="logos"]');
    if (!grid) return;
    LOGOS.forEach((logo, i) => {
      const fig = el('figure', 'logo-card');
      fig.setAttribute('data-reveal', '');
      fig.style.setProperty('--i', i % 4);
      fig.innerHTML =
        '<div class="logo-card__box" data-tilt>' +
          '<img src="' + logo.image + '" alt="' + logo.name + ' logo" width="96" height="96">' +
          '<span class="logo-card__name">' + logo.name + '</span>' +
        '</div>' +
        '<figcaption><span>' + logo.type + '</span><span>0' + (i + 1) + '</span></figcaption>';
      grid.appendChild(fig);
    });
  }

  /* ===================================================================
     Build: image + video galleries
     =================================================================== */
  function buildGalleries() {
    Object.keys(GALLERIES).forEach((key) => {
      const host = $('[data-gallery="' + key + '"]');
      if (!host) return;
      const cfg = GALLERIES[key];

      cfg.items.forEach((item, i) => {
        const fig = el('figure', 'tile');
        fig.setAttribute('data-reveal', '');
        fig.style.setProperty('--i', i % 3);

        const btn = el('button', 'tile__btn' + (cfg.frame ? ' tile__btn--frame' : ''));
        btn.type = 'button';
        btn.setAttribute('data-tilt', '');
        btn.style.setProperty('--ratio', cfg.ratio);
        btn.setAttribute('aria-label', (cfg.video ? 'Play ' : 'View ') + item.title + ' larger');
        btn.dataset.kind = cfg.video ? 'video' : 'image';
        btn.dataset.src = item.src;
        btn.dataset.poster = item.poster || '';
        btn.dataset.title = item.title;

        if (cfg.frame) btn.appendChild(el('div', 'browser-bar', '<i></i><i></i><i></i>'));

        const img = new Image();
        img.alt = item.title;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = cfg.video ? item.poster : item.src;
        img.addEventListener('error', () => btn.classList.add('is-broken'));
        btn.appendChild(img);

        if (cfg.video) {
          const v = el('video', 'tile__video');
          v.muted = true;
          v.loop = true;
          v.playsInline = true;
          v.preload = 'none';
          v.setAttribute('muted', '');
          v.setAttribute('playsinline', '');
          v.setAttribute('aria-hidden', 'true');
          v.tabIndex = -1;
          v.dataset.src = item.src;
          v.addEventListener('playing', () => v.classList.add('is-playing'));
          v.addEventListener('pause',   () => v.classList.remove('is-playing'));
          v.addEventListener('error',   () => v.remove());
          btn.appendChild(v);
          btn.appendChild(el('span', 'tile__play'));
        }

        fig.appendChild(btn);
        fig.appendChild(el('figcaption', '', '<b>' + item.title + '</b><span>' + cfg.size + '</span>'));
        host.appendChild(fig);
      });
    });
  }

  /* ===================================================================
     Scroll reveal + skill count-up
     =================================================================== */
  // Animates one skill: the ring and the number both go from 0 up to the skill value
  // (e.g. 80 -> the ring turns from 0% to 80% while the number counts 0 ... 80).
  function countUp(card) {
    const num = $('[data-count]', card);
    const ring = $('.ring', card);
    const target = Number(card.dataset.value) || 0;

    const paint = (v) => {
      if (num) num.textContent = Math.round(v);
      if (ring) ring.style.setProperty('--p', String(v));
    };

    if (reduceMotion.matches) { paint(target); return; }

    const start = performance.now();
    const duration = 1800;
    (function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      paint(target * eased);
      if (t < 1) requestAnimationFrame(tick);
    })(start);
  }

  function initReveal() {
    const items = $$('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((n) => {
        n.classList.add('is-in');
        if (n.classList.contains('skill')) countUp(n);
      });
      return;
    }
    // Skills start at 0 so the count-up is visible.
    $$('.skill [data-count]').forEach((n) => { n.textContent = '0'; });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        if (e.target.classList.contains('skill')) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    items.forEach((n) => io.observe(n));
  }

  /* ===================================================================
     Video previews: load + play only while visible (muted, looping)
     =================================================================== */
  function initVideoPreviews() {
    const videos = $$('.tile__video');
    if (!videos.length || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target;
        if (e.isIntersecting && !reduceMotion.matches) {
          if (!v.getAttribute('src')) { v.src = v.dataset.src; v.preload = 'metadata'; }
          const p = v.play();
          if (p && p.catch) p.catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { threshold: 0.4 });
    videos.forEach((v) => io.observe(v));
  }

  /* ===================================================================
     3D tilt on hover (desktop only)
     =================================================================== */
  function initTilt() {
    if (!finePointer.matches || reduceMotion.matches) return;
    $$('[data-tilt]').forEach((node) => {
      node.addEventListener('pointermove', (e) => {
        const r = node.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        node.style.transform =
          'perspective(900px) rotateX(' + (-py * 9).toFixed(2) + 'deg) rotateY(' + (px * 9).toFixed(2) + 'deg) scale(1.02)';
      });
      node.addEventListener('pointerleave', () => { node.style.transform = ''; });
    });
  }

  /* ===================================================================
     Hero background: animated green "AI network" (nodes + glowing links)
     =================================================================== */
  function initHeroNetwork() {
    const hero = $('.hero');
    const canvas = $('#heroNet');
    if (!hero || !canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const RGB = '198, 244, 50';                         // the site's lime/green accent
    let w = 0, h = 0, dpr = 1, nodes = [], pulses = [], running = false, raf = 0;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      const r = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(34, Math.min(95, Math.round((w * h) / 15000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: 1.2 + Math.random() * 1.8
      }));
      pulses = [];
    }

    function frame(animate) {
      ctx.clearRect(0, 0, w, h);
      const maxD = Math.max(110, Math.min(170, w / 7));
      const links = [];

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (animate) {
          a.x += a.vx; a.y += a.vy;
          if (a.x < 0 || a.x > w) a.vx *= -1;
          if (a.y < 0 || a.y > h) a.vy *= -1;
        }
        for (let k = i + 1; k < nodes.length; k++) {
          const b = nodes[k];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < maxD) {
            links.push([a, b]);
            ctx.strokeStyle = 'rgba(' + RGB + ',' + ((1 - d / maxD) * 0.5).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // link to the mouse pointer
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 190) {
          ctx.strokeStyle = 'rgba(' + RGB + ',' + ((1 - md / 190) * 0.6).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }

      // nodes
      ctx.fillStyle = 'rgba(' + RGB + ',.8)';
      nodes.forEach((n) => { ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill(); });

      // light pulses travelling along links (data-flow feel)
      if (animate) {
        if (links.length && pulses.length < 14 && Math.random() < 0.08) {
          const l = links[(Math.random() * links.length) | 0];
          pulses.push({ a: l[0], b: l[1], t: 0, s: 0.012 + Math.random() * 0.012 });
        }
        pulses = pulses.filter((p) => (p.t += p.s) < 1);
      }
      pulses.forEach((p) => {
        const x = p.a.x + (p.b.x - p.a.x) * p.t, y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.shadowColor = 'rgba(' + RGB + ',1)'; ctx.shadowBlur = 12;
        ctx.fillStyle = 'rgba(' + RGB + ',1)';
        ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.2832); ctx.fill();
        ctx.shadowBlur = 0;
      });
    }

    function loop() { if (!running) return; frame(true); raf = requestAnimationFrame(loop); }
    function start() { if (!running) { running = true; raf = requestAnimationFrame(loop); } }
    function stop() { running = false; cancelAnimationFrame(raf); }

    resize();
    if (reduceMotion.matches) { frame(false); }          // static picture for reduced-motion users
    else if ('IntersectionObserver' in window) {
      new IntersectionObserver((en) => (en[0].isIntersecting ? start() : stop()), { threshold: 0 }).observe(hero);
    } else { start(); }

    let t;
    window.addEventListener('resize', () => {
      clearTimeout(t);
      t = setTimeout(() => { resize(); if (reduceMotion.matches) frame(false); }, 150);
    });
    if (finePointer.matches && !reduceMotion.matches) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
      });
      hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    }
  }

  /* ===================================================================
     Popups: menu + lightbox
     =================================================================== */
  function openDialog(dlg) {
    if (typeof dlg.showModal !== 'function') return;
    dlg.showModal();
    document.documentElement.classList.add('dialog-open');
  }

  function initDialogs() {
    const menu = $('#menu');
    const lightbox = $('#lightbox');
    const lbMedia = $('#lbMedia');
    const lbCaption = $('#lbCaption');

    [menu, lightbox].forEach((dlg) => {
      dlg.addEventListener('click', (e) => {
        // click on the dark backdrop (the dialog element itself) or any [data-close]
        if (e.target === dlg || e.target.closest('[data-close]')) dlg.close();
      });
      dlg.addEventListener('close', () => {
        document.documentElement.classList.remove('dialog-open');
        if (dlg === lightbox) lbMedia.replaceChildren();
      });
    });

    // Menu
    $('#menuBtn').addEventListener('click', () => openDialog(menu));
    $$('.menu__list a').forEach((a) => a.addEventListener('click', () => menu.close()));

    // Lightbox
    function showLightbox(kind, src, title, poster) {
      lbMedia.replaceChildren();
      lbCaption.textContent = title;
      let media;
      if (kind === 'video') {
        media = document.createElement('video');
        media.controls = true;
        media.autoplay = true;
        media.playsInline = true;
        if (poster) media.poster = poster;
        media.src = src;
        media.addEventListener('error', () => {
          lbMedia.replaceChildren(el('p', 'lightbox__msg', 'This video could not be loaded.'));
        });
      } else {
        media = new Image();
        media.alt = title;
        media.src = src;
        media.addEventListener('error', () => {
          lbMedia.replaceChildren(el('p', 'lightbox__msg', 'This image could not be loaded.'));
        });
      }
      lbMedia.appendChild(media);
      openDialog(lightbox);
    }

    // Gallery tiles
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.tile__btn');
      if (!btn) return;
      showLightbox(btn.dataset.kind, btn.dataset.src, btn.dataset.title, btn.dataset.poster);
    });

    // Hero portrait
    const portrait = $('#portrait');
    if (portrait) {
      portrait.addEventListener('click', () => {
        const img = $('img', portrait);
        showLightbox('image', img.currentSrc || img.src, 'Anurag Shukla — Graphic/UI Designer');
      });
    }
  }

  /* ===================================================================
     Contact links (reads the CONTACT object at the top)
     =================================================================== */
  function initContact() {
    $$('[data-contact]').forEach((a) => {
      const type = a.dataset.contact;
      const value = (CONTACT[type] || '').trim();
      const text = $('[data-contact-text]', a);

      if (!value) {
        a.classList.add('is-placeholder');
        a.setAttribute('aria-disabled', 'true');
        a.title = 'Add your ' + type + ' in script.js (CONTACT)';
        a.addEventListener('click', (e) => e.preventDefault());
        return;
      }

      if (type === 'email') a.href = 'mailto:' + value;
      else if (type === 'phone') a.href = 'tel:' + value.replace(/\s+/g, '');
      else { a.href = value; a.target = '_blank'; a.rel = 'noopener noreferrer'; }

      if (text) text.textContent = (type === 'email' || type === 'phone') ? value : (a.dataset.filled || value);
    });
  }

  /* ===================================================================
     Init
     =================================================================== */
  function init() {
    buildSkills();
    buildLogos();
    buildGalleries();
    initReveal();
    initVideoPreviews();
    initTilt();
    initHeroNetwork();
    initDialogs();
    initContact();

    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();