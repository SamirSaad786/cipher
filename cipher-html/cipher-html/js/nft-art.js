// ═══════════════════════════════════════════════════════════════
//  CIPHER://HTML — NFT Art Generator
//  Procedural SVG generation — each lesson gets a unique piece
// ═══════════════════════════════════════════════════════════════

// Seeded random number generator (Mulberry32)
function seededRNG(seed) {
  return function() {
    seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Hash a string to a number
function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Color palettes per tier
const TIER_PALETTES = {
  ghost: {
    primary:   ['#8880b8', '#6660a0', '#a898d0'],
    accent:    ['#00f0ff', '#00b8c0'],
    bg:        '#0a0916',
    glow:      'rgba(136,128,184,0.6)'
  },
  runner: {
    primary:   ['#00f0ff', '#00c8d8', '#40ffff'],
    accent:    ['#7b00ff', '#00ff9f'],
    bg:        '#030a10',
    glow:      'rgba(0,240,255,0.6)'
  },
  hacker: {
    primary:   ['#7b00ff', '#9b30ff', '#5500cc'],
    accent:    ['#ff003c', '#00f0ff'],
    bg:        '#08030f',
    glow:      'rgba(123,0,255,0.6)'
  },
  netrunner: {
    primary:   ['#ff003c', '#ff3060', '#cc0030'],
    accent:    ['#ffd700', '#7b00ff'],
    bg:        '#100208',
    glow:      'rgba(255,0,60,0.6)'
  }
};

// Art style generators
const ART_STYLES = [
  generateCircuitArt,
  generateGlitchArt,
  generateGeometricArt,
  generateWaveArt,
  generateHexArt,
  generateNeuralArt
];

// ─── MAIN EXPORT ──────────────────────────────────────────────
export function generateNFTArt(lessonId, tier = 'ghost', isForil = false) {
  const seed    = hashString(lessonId);
  const rng     = seededRNG(seed);
  const palette = TIER_PALETTES[tier] || TIER_PALETTES.ghost;
  const styleIdx= Math.floor(rng() * ART_STYLES.length);
  const genFn   = ART_STYLES[styleIdx];
  return genFn(rng, palette, isForil, 160, 120);
}

// Generate a larger version for display in unlock modal
export function generateNFTArtLarge(lessonId, tier = 'ghost') {
  const seed    = hashString(lessonId);
  const rng     = seededRNG(seed);
  const palette = TIER_PALETTES[tier] || TIER_PALETTES.ghost;
  const styleIdx= Math.floor(rng() * ART_STYLES.length);
  const genFn   = ART_STYLES[styleIdx];
  return genFn(rng, palette, false, 240, 180);
}

// ─── STYLE 1: CIRCUIT BOARD ────────────────────────────────────
function generateCircuitArt(rng, pal, foil, w, h) {
  const lines = [];
  const dots  = [];
  const count = Math.floor(rng() * 8) + 6;

  for (let i = 0; i < count; i++) {
    const x1 = Math.floor(rng() * w);
    const y1 = Math.floor(rng() * h);
    let x2 = x1, y2 = y1;
    const dir = Math.floor(rng() * 4);
    const len = Math.floor(rng() * 50) + 20;
    if (dir === 0) x2 += len;
    else if (dir === 1) x2 -= len;
    else if (dir === 2) y2 += len;
    else y2 -= len;
    const c = pal.primary[Math.floor(rng() * pal.primary.length)];
    lines.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="1.5" stroke-opacity="0.8"/>`);
    dots.push(`<circle cx="${x1}" cy="${y1}" r="${rng() > 0.5 ? 3 : 2}" fill="${c}" opacity="0.9"/>`);
    if (rng() > 0.6) {
      dots.push(`<circle cx="${x1}" cy="${y1}" r="5" fill="none" stroke="${c}" stroke-width="1" opacity="0.5"/>`);
    }
  }

  const accent = pal.accent[Math.floor(rng() * pal.accent.length)];
  const cx = Math.floor(rng() * (w - 40)) + 20;
  const cy = Math.floor(rng() * (h - 40)) + 20;

  return svg(w, h, pal.bg, `
    <defs>
      <filter id="glow_${Math.floor(rng()*9999)}">
        <feGaussianBlur stdDeviation="2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    ${lines.join('\n')}
    ${dots.join('\n')}
    <circle cx="${cx}" cy="${cy}" r="12" fill="${accent}" opacity="0.15"/>
    <circle cx="${cx}" cy="${cy}" r="6"  fill="${accent}" opacity="0.6"/>
    <circle cx="${cx}" cy="${cy}" r="2"  fill="#ffffff" opacity="0.9"/>
    ${foil ? foilOverlay(w, h) : ''}
  `);
}

// ─── STYLE 2: GLITCH ──────────────────────────────────────────
function generateGlitchArt(rng, pal, foil, w, h) {
  const rects = [];
  const sliceCount = Math.floor(rng() * 10) + 8;
  for (let i = 0; i < sliceCount; i++) {
    const sliceH = Math.floor(rng() * 12) + 2;
    const y      = Math.floor(rng() * h);
    const offset = (rng() - 0.5) * 30;
    const c      = rng() > 0.5 ? pal.primary[0] : pal.accent[0];
    const opacity= rng() * 0.6 + 0.2;
    rects.push(`<rect x="${offset}" y="${y}" width="${w}" height="${sliceH}" fill="${c}" opacity="${opacity.toFixed(2)}"/>`);
  }
  // Vertical bars
  const barCount = Math.floor(rng() * 4) + 2;
  for (let i = 0; i < barCount; i++) {
    const x = Math.floor(rng() * w);
    const barW = Math.floor(rng() * 6) + 1;
    const c = pal.accent[Math.floor(rng() * pal.accent.length)];
    rects.push(`<rect x="${x}" y="0" width="${barW}" height="${h}" fill="${c}" opacity="0.3"/>`);
  }
  // Center shape
  const cx = w / 2, cy = h / 2, size = Math.floor(rng() * 20) + 16;
  const c0 = pal.primary[0], c1 = pal.accent[0];
  return svg(w, h, pal.bg, `
    ${rects.join('\n')}
    <rect x="${cx - size}" y="${cy - size}" width="${size * 2}" height="${size * 2}"
      fill="none" stroke="${c0}" stroke-width="2" opacity="0.8"
      transform="rotate(${Math.floor(rng()*45)},${cx},${cy})"/>
    <rect x="${cx - size*0.6}" y="${cy - size*0.6}" width="${size*1.2}" height="${size*1.2}"
      fill="${c1}" opacity="0.15"
      transform="rotate(${Math.floor(rng()*45+22)},${cx},${cy})"/>
    <text x="${cx}" y="${cy + 5}" text-anchor="middle" font-family="monospace"
      font-size="10" fill="${c1}" opacity="0.7">ERR_0x${Math.floor(rng()*0xFFFF).toString(16).padStart(4,'0').toUpperCase()}</text>
    ${foil ? foilOverlay(w, h) : ''}
  `);
}

// ─── STYLE 3: GEOMETRIC ───────────────────────────────────────
function generateGeometricArt(rng, pal, foil, w, h) {
  const shapes = [];
  const n = Math.floor(rng() * 6) + 4;
  for (let i = 0; i < n; i++) {
    const cx  = rng() * w;
    const cy  = rng() * h;
    const r   = rng() * 40 + 10;
    const sides = Math.floor(rng() * 4) + 3;
    const rot = rng() * Math.PI * 2;
    const pts = [];
    for (let j = 0; j < sides; j++) {
      const a = rot + (j / sides) * Math.PI * 2;
      pts.push(`${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`);
    }
    const c = [...pal.primary, ...pal.accent][Math.floor(rng() * (pal.primary.length + pal.accent.length))];
    const filled = rng() > 0.6;
    shapes.push(`<polygon points="${pts.join(' ')}" fill="${filled ? c : 'none'}" stroke="${c}" stroke-width="1" opacity="${(rng()*0.5+0.3).toFixed(2)}"/>`);
  }
  // Central glow
  const gc = pal.primary[0];
  return svg(w, h, pal.bg, `
    <defs>
      <radialGradient id="rg${Math.floor(rng()*9999)}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${gc}" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="${gc}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect x="0" y="0" width="${w}" height="${h}" fill="url(#rg${Math.floor(rng()*9999)})"/>
    ${shapes.join('\n')}
    ${foil ? foilOverlay(w, h) : ''}
  `);
}

// ─── STYLE 4: WAVE / DATA STREAM ─────────────────────────────
function generateWaveArt(rng, pal, foil, w, h) {
  const waves = [];
  const wCount = Math.floor(rng() * 5) + 3;
  for (let wi = 0; wi < wCount; wi++) {
    const amp   = rng() * 18 + 5;
    const freq  = rng() * 0.05 + 0.02;
    const phase = rng() * Math.PI * 2;
    const yBase = (wi + 1) * (h / (wCount + 1));
    const pts   = [];
    for (let x = 0; x <= w; x += 4) {
      const y = yBase + Math.sin(x * freq + phase) * amp;
      pts.push(`${x},${y.toFixed(1)}`);
    }
    const c = [...pal.primary, ...pal.accent][wi % (pal.primary.length + pal.accent.length)];
    waves.push(`<polyline points="${pts.join(' ')}" fill="none" stroke="${c}" stroke-width="${(rng()*1.5+0.5).toFixed(1)}" opacity="${(rng()*0.5+0.3).toFixed(2)}"/>`);
    // Dots on wave
    if (rng() > 0.5) {
      const dotX = Math.floor(rng() * w);
      const dotY = yBase + Math.sin(dotX * freq + phase) * amp;
      waves.push(`<circle cx="${dotX}" cy="${dotY.toFixed(1)}" r="3" fill="${c}" opacity="0.9"/>`);
    }
  }
  return svg(w, h, pal.bg, `${waves.join('\n')}${foil ? foilOverlay(w, h) : ''}`);
}

// ─── STYLE 5: HEX GRID ────────────────────────────────────────
function generateHexArt(rng, pal, foil, w, h) {
  const hexes = [];
  const hexR  = 16;
  const hexW  = hexR * 2;
  const hexH  = Math.sqrt(3) * hexR;
  const cols  = Math.ceil(w / (hexW * 0.75)) + 1;
  const rows  = Math.ceil(h / hexH) + 1;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * hexW * 0.75;
      const cy = row * hexH + (col % 2 === 0 ? 0 : hexH / 2);
      if (rng() > 0.45) continue;
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 180) * (60 * i - 30);
        pts.push(`${(cx + hexR * Math.cos(a)).toFixed(1)},${(cy + hexR * Math.sin(a)).toFixed(1)}`);
      }
      const c = [...pal.primary, ...pal.accent][Math.floor(rng() * (pal.primary.length + pal.accent.length))];
      const filled = rng() > 0.7;
      hexes.push(`<polygon points="${pts.join(' ')}" fill="${filled ? c : 'none'}" stroke="${c}" stroke-width="0.8" opacity="${(rng()*0.6+0.2).toFixed(2)}"/>`);
    }
  }
  return svg(w, h, pal.bg, `${hexes.join('\n')}${foil ? foilOverlay(w, h) : ''}`);
}

// ─── STYLE 6: NEURAL NETWORK ─────────────────────────────────
function generateNeuralArt(rng, pal, foil, w, h) {
  const nodeCount = Math.floor(rng() * 10) + 8;
  const nodes     = [];
  const edges     = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({ x: rng() * (w - 20) + 10, y: rng() * (h - 20) + 10 });
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx   = nodes[i].x - nodes[j].x;
      const dy   = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 70 && rng() > 0.3) {
        const c = pal.primary[Math.floor(rng() * pal.primary.length)];
        edges.push(`<line x1="${nodes[i].x.toFixed(1)}" y1="${nodes[i].y.toFixed(1)}" x2="${nodes[j].x.toFixed(1)}" y2="${nodes[j].y.toFixed(1)}" stroke="${c}" stroke-width="0.8" opacity="${(0.15 + (1 - dist/70) * 0.5).toFixed(2)}"/>`);
      }
    }
  }

  const nodeSVG = nodes.map((n, i) => {
    const r = rng() > 0.8 ? 5 : 3;
    const c = [...pal.primary, ...pal.accent][Math.floor(rng() * (pal.primary.length + pal.accent.length))];
    return `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${r}" fill="${c}" opacity="0.9"/>
            ${r > 3 ? `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${r + 4}" fill="none" stroke="${c}" stroke-width="1" opacity="0.4"/>` : ''}`;
  }).join('\n');

  return svg(w, h, pal.bg, `${edges.join('\n')}${nodeSVG}${foil ? foilOverlay(w, h) : ''}`);
}

// ─── HELPERS ──────────────────────────────────────────────────
function svg(w, h, bg, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  ${content}
</svg>`;
}

function foilOverlay(w, h) {
  return `<defs>
    <linearGradient id="foil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#ffd700" stop-opacity="0.15"/>
      <stop offset="25%"  stop-color="#ff003c" stop-opacity="0.1"/>
      <stop offset="50%"  stop-color="#00f0ff" stop-opacity="0.15"/>
      <stop offset="75%"  stop-color="#7b00ff" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#ffd700" stop-opacity="0.15"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#foil)"/>`;
}
