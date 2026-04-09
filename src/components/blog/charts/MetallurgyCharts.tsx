'use client';

const COLORS = {
  bar1: '#2563eb',
  bar2: '#7c3aed',
  bar3: '#059669',
  bar4: '#dc2626',
  bg: '#f8f5f0',
  text: '#0A1628',
  muted: '#0A1628cc',
  grid: '#0A162815',
  label: '#0A162899',
};

function ChartContainer({ children, caption, source }: { children: React.ReactNode; caption: string; source: string }) {
  return (
    <figure className="my-10 rounded-xl border border-[#0A162815] bg-white p-6 md:p-8">
      <div className="mb-4 text-lg font-semibold text-[#0A1628]">{caption}</div>
      {children}
      <figcaption className="mt-4 text-xs text-[#0A162880]">Source: {source}</figcaption>
    </figure>
  );
}

export function MarketGrowthChart() {
  const data = [
    { year: '2024', s1: 1.26, s2: 0.56 },
    { year: '2025', s1: 1.68, s2: 0.74 },
    { year: '2026', s1: 2.24, s2: 0.97 },
    { year: '2030', s1: 7.01, s2: 2.77 },
  ];

  const maxVal = 7.5;
  const barH = 18;
  const groupGap = 48;
  const leftPad = 48;
  const chartW = 520;
  const chartH = data.length * groupGap + 20;

  return (
    <ChartContainer
      caption="AI in Materials Science Market Growth ($B)"
      source="Research and Markets, 2026"
    >
      <svg viewBox={`0 0 ${leftPad + chartW + 20} ${chartH + 40}`} className="w-full h-auto" role="img" aria-label="Market growth chart showing Gen AI in Materials Science and AI in Materials Discovery from 2024 to 2030">
        {data.map((d, i) => {
          const y = i * groupGap + 20;
          const w1 = (d.s1 / maxVal) * chartW;
          const w2 = (d.s2 / maxVal) * chartW;
          return (
            <g key={d.year}>
              <text x={leftPad - 8} y={y + barH} textAnchor="end" fontSize="13" fill={COLORS.text} fontWeight="600">{d.year}</text>
              <rect x={leftPad} y={y} width={w1} height={barH} rx={4} fill={COLORS.bar1} opacity={0.9} />
              <text x={leftPad + w1 + 6} y={y + 13} fontSize="12" fill={COLORS.muted}>${d.s1}B</text>
              <rect x={leftPad} y={y + barH + 4} width={w2} height={barH} rx={4} fill={COLORS.bar2} opacity={0.9} />
              <text x={leftPad + w2 + 6} y={y + barH + 17} fontSize="12" fill={COLORS.muted}>${d.s2}B</text>
            </g>
          );
        })}
        {/* Legend */}
        <g transform={`translate(${leftPad}, ${chartH + 16})`}>
          <rect width={12} height={12} rx={2} fill={COLORS.bar1} opacity={0.9} />
          <text x={18} y={10} fontSize="11" fill={COLORS.muted}>Gen AI in Materials Science</text>
          <rect x={200} width={12} height={12} rx={2} fill={COLORS.bar2} opacity={0.9} />
          <text x={218} y={10} fontSize="11" fill={COLORS.muted}>AI in Materials Discovery</text>
        </g>
      </svg>
    </ChartContainer>
  );
}

export function SteelIndustryImpactChart() {
  const data = [
    { label: 'Tata Steel — Downtime', value: 20, color: COLORS.bar1 },
    { label: 'ArcelorMittal — Defects', value: 15, color: COLORS.bar2 },
    { label: 'SSAB — Energy Usage', value: 7, color: COLORS.bar3 },
  ];

  const maxVal = 25;
  const barH = 28;
  const gap = 52;
  const leftPad = 210;
  const chartW = 340;

  return (
    <ChartContainer
      caption="AI Impact on Steel Producers (% Reduction)"
      source="Steel-Technology.com, 2025"
    >
      <svg viewBox={`0 0 ${leftPad + chartW + 60} ${data.length * gap + 20}`} className="w-full h-auto" role="img" aria-label="Horizontal bar chart showing AI impact at major steel producers">
        {data.map((d, i) => {
          const y = i * gap + 10;
          const w = (d.value / maxVal) * chartW;
          return (
            <g key={d.label}>
              <text x={leftPad - 12} y={y + barH / 2 + 5} textAnchor="end" fontSize="13" fill={COLORS.text}>{d.label}</text>
              <rect x={leftPad} y={y} width={w} height={barH} rx={5} fill={d.color} opacity={0.85} />
              <text x={leftPad + w + 8} y={y + barH / 2 + 5} fontSize="14" fill={COLORS.text} fontWeight="600">{d.value}%</text>
            </g>
          );
        })}
      </svg>
    </ChartContainer>
  );
}

export function PerformanceComparisonChart() {
  const categories = [
    {
      label: 'Tensile Strength',
      aiVal: 1713,
      convVal: 1200,
      unit: 'MPa',
      max: 2000,
    },
    {
      label: 'Elongation',
      aiVal: 15.5,
      convVal: 8,
      unit: '%',
      max: 20,
    },
    {
      label: 'Corrosion Rate',
      aiVal: 0.105,
      convVal: 0.25,
      unit: 'mm/yr',
      max: 0.3,
      inverted: true,
    },
  ];

  const barH = 20;
  const gap = 64;
  const leftPad = 140;
  const chartW = 380;

  return (
    <ChartContainer
      caption="AI-Designed Steel vs. AISI 420 Stainless"
      source="Manufactur3D, 2026"
    >
      <svg viewBox={`0 0 ${leftPad + chartW + 80} ${categories.length * gap + 40}`} className="w-full h-auto" role="img" aria-label="Performance comparison between AI-designed steel and conventional AISI 420 stainless steel">
        {categories.map((cat, i) => {
          const y = i * gap + 10;
          const w1 = (cat.aiVal / cat.max) * chartW;
          const w2 = (cat.convVal / cat.max) * chartW;
          return (
            <g key={cat.label}>
              <text x={leftPad - 12} y={y + barH} textAnchor="end" fontSize="13" fill={COLORS.text} fontWeight="500">{cat.label}</text>
              <rect x={leftPad} y={y} width={w1} height={barH} rx={4} fill={cat.inverted ? COLORS.bar3 : COLORS.bar1} opacity={0.9} />
              <text x={leftPad + w1 + 6} y={y + 14} fontSize="12" fill={COLORS.muted}>{cat.aiVal} {cat.unit}</text>
              <rect x={leftPad} y={y + barH + 4} width={w2} height={barH} rx={4} fill="#94a3b8" opacity={0.7} />
              <text x={leftPad + w2 + 6} y={y + barH + 18} fontSize="12" fill={COLORS.label}>{cat.convVal} {cat.unit}</text>
            </g>
          );
        })}
        {/* Legend */}
        <g transform={`translate(${leftPad}, ${categories.length * gap + 16})`}>
          <rect width={12} height={12} rx={2} fill={COLORS.bar1} opacity={0.9} />
          <text x={18} y={10} fontSize="11" fill={COLORS.muted}>AI-Designed (South China/Purdue)</text>
          <rect x={220} width={12} height={12} rx={2} fill="#94a3b8" opacity={0.7} />
          <text x={238} y={10} fontSize="11" fill={COLORS.muted}>AISI 420 Stainless (Conventional)</text>
        </g>
      </svg>
    </ChartContainer>
  );
}

export function AIMethodsComparisonChart() {
  const methods = [
    { name: 'Generative AI', speed: 4, data: 4, interpret: 2, maturity: 3 },
    { name: 'LLMs', speed: 5, data: 2, interpret: 3, maturity: 2 },
    { name: 'Reinforcement Learning', speed: 3, data: 3, interpret: 2, maturity: 2 },
    { name: 'Explainable AI', speed: 3, data: 3, interpret: 5, maturity: 3 },
    { name: 'Neural Potentials', speed: 4, data: 4, interpret: 2, maturity: 2 },
  ];

  const dims = ['Speed', 'Data Req.', 'Interpret.', 'Maturity'];
  const dimColors = [COLORS.bar1, COLORS.bar2, COLORS.bar3, '#f59e0b'];
  const maxVal = 5;
  const cellW = 60;
  const cellH = 28;
  const leftPad = 170;
  const topPad = 30;

  return (
    <ChartContainer
      caption="AI Methods for Metallurgy — Comparative Assessment"
      source="Author analysis based on literature review"
    >
      <svg viewBox={`0 0 ${leftPad + dims.length * cellW + 20} ${topPad + methods.length * (cellH + 6) + 40}`} className="w-full h-auto" role="img" aria-label="Heat map comparing five AI methods across speed, data requirements, interpretability, and maturity">
        {/* Column headers */}
        {dims.map((dim, j) => (
          <text key={dim} x={leftPad + j * cellW + cellW / 2} y={topPad - 8} textAnchor="middle" fontSize="11" fill={COLORS.muted} fontWeight="500">{dim}</text>
        ))}
        {/* Rows */}
        {methods.map((m, i) => {
          const y = topPad + i * (cellH + 6);
          const scores = [m.speed, m.data, m.interpret, m.maturity];
          return (
            <g key={m.name}>
              <text x={leftPad - 10} y={y + cellH / 2 + 4} textAnchor="end" fontSize="12" fill={COLORS.text}>{m.name}</text>
              {scores.map((s, j) => {
                const opacity = 0.15 + (s / maxVal) * 0.7;
                return (
                  <g key={j}>
                    <rect x={leftPad + j * cellW + 2} y={y} width={cellW - 4} height={cellH} rx={4} fill={dimColors[j]} opacity={opacity} />
                    <text x={leftPad + j * cellW + cellW / 2} y={y + cellH / 2 + 4} textAnchor="middle" fontSize="12" fill={COLORS.text} fontWeight="600">
                      {['Low', 'Low', 'Med', 'Med', 'High', 'High'][s]}
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}
        {/* Scale note */}
        <text x={leftPad} y={topPad + methods.length * (cellH + 6) + 20} fontSize="10" fill={COLORS.label}>Scale: Low / Med / High relative rating</text>
      </svg>
    </ChartContainer>
  );
}
