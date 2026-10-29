// Fotoğraf yerine vektör fincanlar. İstersen <img src="/img/turk.jpg"> ile değiştir.
const shapes = {
  turk: { body: "M62 78 h76 q-4 46 -38 46 q-34 0 -38 -46z", foam: 22, handle: false },
  espresso: { body: "M58 76 h84 q-2 48 -42 48 q-40 0 -42 -48z", foam: 18, handle: true },
  filtre: { body: "M54 56 h92 q0 72 -46 72 q-46 0 -46 -72z", foam: 0, handle: true },
};

export default function Cup({ type }) {
  const s = shapes[type];
  return (
    <svg viewBox="0 0 200 160" className="cup" role="img" aria-label={`${type} fincanı`}>
      <defs>
        <linearGradient id={`g-${type}`} x1="0" x2="1">
          <stop offset="0" stopColor="#F6F0E4" />
          <stop offset="1" stopColor="#D9CDB4" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="136" rx="72" ry="9" fill="#2B1A12" opacity=".25" />
      <ellipse cx="100" cy="130" rx="64" ry="8" fill="#8A5E40" />
      {s.handle && (
        <path d="M146 80 q34 4 -4 36" fill="none" stroke="#F6F0E4" strokeWidth="9" strokeLinecap="round" />
      )}
      <path d={s.body} fill={`url(#g-${type})`} />
      <ellipse cx="100" cy={type === "filtre" ? 56 : 77} rx={type === "filtre" ? 46 : 40} ry="7" fill="#3B2317" />
      {s.foam > 0 && (
        <ellipse cx="100" cy="77" rx={s.foam + 8} ry="4" fill="#B98A5E" opacity=".8" />
      )}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          className="steam"
          style={{ "--d": `${i * 0.6}s` }}
          d={`M${84 + i * 16} 44 q-8 -10 0 -20 q8 -10 0 -20`}
          fill="none"
          stroke="#6B7242"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}