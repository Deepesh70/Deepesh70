const fs = require('fs');
const path = require('path');

async function run() {
  const res = await fetch('https://github-contributions.vercel.app/api/v1/Deepesh70');
  const data = await res.json();
  const total2026 = data.years.find(y => y.year === '2026')?.total || 1568;

  const contribMap = new Map();
  for (const c of data.contributions) {
    contribMap.set(c.date, c);
  }

  // Use current date: 2026-11-11
  const today = new Date('2026-11-11T00:00:00Z');
  const dayOfWeek = today.getUTCDay(); // 3 = Wed
  const daysUntilSat = 6 - dayOfWeek;
  const gridEnd = new Date(today);
  gridEnd.setUTCDate(today.getUTCDate() + daysUntilSat);

  // 53 weeks = 53 * 7 = 371 days
  const gridStart = new Date(gridEnd);
  gridStart.setUTCDate(gridEnd.getUTCDate() - (53 * 7 - 1));

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthLabels = [];
  let lastMonth = -1;

  const colors = {
    0: '#161b22',
    1: '#0e4429',
    2: '#006d32',
    3: '#26a641',
    4: '#39d353'
  };

  const startX = 54;
  const startY = 88;
  const cellSize = 11;
  const cellGap = 3;
  const step = cellSize + cellGap; // 14

  let cellsSvg = '';

  let curr = new Date(gridStart);
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      const dateStr = curr.toISOString().slice(0, 10);
      const isFuture = curr > today;
      const entry = contribMap.get(dateStr);
      let intensity = 0;
      if (!isFuture && entry) {
        intensity = parseInt(entry.intensity || '0', 10);
        if (isNaN(intensity) || intensity < 0) intensity = 0;
        if (intensity > 4) intensity = 4;
      }

      if (d === 0) {
        const m = curr.getUTCMonth();
        if (m !== lastMonth && w < 51) {
          monthLabels.push({ x: startX + w * step, text: monthNames[m] });
          lastMonth = m;
        }
      }

      const x = startX + w * step;
      const y = startY + d * step;
      const fill = colors[intensity];
      const stroke = intensity === 0 ? ' stroke="#21262d" stroke-width="0.5"' : '';

      cellsSvg += `    <rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="2" fill="${fill}"${stroke}/>\n`;

      curr.setUTCDate(curr.getUTCDate() + 1);
    }
  }

  let monthsSvg = '';
  for (const ml of monthLabels) {
    monthsSvg += `    <text class="mono" x="${ml.x}" y="78" font-size="10" fill="#8b949e">${ml.text}</text>\n`;
  }

  const svg = `<svg width="850" height="205" viewBox="0 0 850 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deepesh Dangi Contribution Graph">
  <defs>
    <clipPath id="p_act"><rect width="850" height="205" rx="8"/></clipPath>
  </defs>
  <style>
    text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    .mono { font-family: ui-monospace, SFMono-Regular, Consolas, monospace; }
  </style>

  <g clip-path="url(#p_act)">
    <rect width="850" height="205" fill="#0d1117"/>
    <rect x="0" y="0" width="850" height="1" fill="#30363d"/>

    <!-- Title & Metric -->
    <text class="mono" x="24" y="28" font-size="10.5" font-weight="600" fill="#8b949e" letter-spacing="0.5">CONTRIBUTION ACTIVITY · REAL-TIME HISTORY</text>
    <text x="24" y="52" font-size="15" font-weight="600" fill="#f0f6fc">${total2026.toLocaleString()} contributions in 2026</text>

    <!-- Legend -->
    <g transform="translate(650, 42)">
      <text class="mono" x="0" y="10" font-size="10" fill="#8b949e">Less</text>
      <rect x="30" y="1" width="10" height="10" rx="2" fill="#161b22" stroke="#21262d" stroke-width="0.5"/>
      <rect x="44" y="1" width="10" height="10" rx="2" fill="#0e4429"/>
      <rect x="58" y="1" width="10" height="10" rx="2" fill="#006d32"/>
      <rect x="72" y="1" width="10" height="10" rx="2" fill="#26a641"/>
      <rect x="86" y="1" width="10" height="10" rx="2" fill="#39d353"/>
      <text class="mono" x="102" y="10" font-size="10" fill="#8b949e">More</text>
    </g>

    <!-- Month labels -->
${monthsSvg}
    <!-- Day labels -->
    <text class="mono" x="24" y="111" font-size="10" fill="#8b949e">Mon</text>
    <text class="mono" x="24" y="139" font-size="10" fill="#8b949e">Wed</text>
    <text class="mono" x="24" y="167" font-size="10" fill="#8b949e">Fri</text>

    <!-- Grid cells -->
${cellsSvg}  </g>
  <rect x="0.5" y="0.5" width="849" height="204" rx="7.5" fill="none" stroke="#30363d" stroke-width="1"/>
</svg>`;

  const outPath = path.join(__dirname, '..', 'assets', 'activity.svg');
  fs.writeFileSync(outPath, svg, 'utf8');
  console.log('Successfully generated', outPath, `(${svg.length} bytes)`);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
