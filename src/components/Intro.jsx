import { useEffect, useRef, useState } from "react";

// Koyu zemin, solda fincan; damlalar düşer, yüzeyde halkalar oluşur.
export default function Intro({ onDone }) {
  const [leave, setLeave] = useState(false);
  const [gone, setGone] = useState(false);
  const done = useRef(onDone);
  done.current = onDone;

  useEffect(() => {
    document.body.style.overflow = "hidden"; // intro sırasında kaydırma kapalı
    const auto = setTimeout(() => setLeave(true), 5400);
    return () => clearTimeout(auto);
  }, []);

  useEffect(() => {
    if (!leave) return;
    const t = setTimeout(() => {
      document.body.style.overflow = "";
      setGone(true);
      done.current();
    }, 1000);
    return () => clearTimeout(t);
  }, [leave]);

  if (gone) return null;

  return (
    <div className={`intro ${leave ? "leave" : ""}`}>
      <div className="intro-inner">
        <div className="intro-stage">
          <svg viewBox="0 0 440 420" role="img" aria-label="Fincana damlayan kahve">
            <defs>
              <linearGradient id="ic-body" x1="0" x2="1">
                <stop offset="0" stopColor="#d9b88c" />
                <stop offset=".45" stopColor="#a47a52" />
                <stop offset="1" stopColor="#3a2316" />
              </linearGradient>
              <linearGradient id="ic-rim" x1="0" x2="1">
                <stop offset="0" stopColor="#ecd2ab" />
                <stop offset=".6" stopColor="#a98258" />
                <stop offset="1" stopColor="#5a3a24" />
              </linearGradient>
              <radialGradient id="ic-coffee" cx=".5" cy=".5" r=".6">
                <stop offset="0" stopColor="#7a4420" />
                <stop offset="1" stopColor="#24120a" />
              </radialGradient>
              <radialGradient id="ic-drop" cx=".35" cy=".35" r=".8">
                <stop offset="0" stopColor="#f0b777" />
                <stop offset="1" stopColor="#8a4a1f" />
              </radialGradient>
            </defs>

            {/* zemin gölgesi */}
            <ellipse cx="200" cy="404" rx="130" ry="10" fill="#000" opacity=".45" />

            {/* kulp */}
            <path d="M345 270 C400 260 410 345 335 355" fill="none" stroke="#7d5638" strokeWidth="22" strokeLinecap="round" />
            <path d="M347 268 C395 262 402 336 338 346" fill="none" stroke="#b58e62" strokeWidth="5" strokeLinecap="round" opacity=".7" />

            {/* gövde */}
            <path d="M50 250 C50 340 110 400 200 400 C290 400 350 340 350 250Z" fill="url(#ic-body)" />
            {[[120,330],[160,362],[250,348],[300,312],[88,292],[210,378],[270,380],[320,285]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 2 ? 1.4 : 2} fill="#2a170d" opacity=".4" />
            ))}

            {/* ağız, iç ve kahve yüzeyi */}
            <ellipse cx="200" cy="250" rx="150" ry="34" fill="url(#ic-rim)" />
            <ellipse cx="200" cy="253" rx="136" ry="28" fill="#1b0e07" />
            <ellipse cx="200" cy="256" rx="130" ry="25" fill="url(#ic-coffee)" />

            {/* halkalar */}
            {[0, 0.12, 0.26].map((d, i) => (
              <ellipse key={i} className="i-ripple" cx="200" cy="256" rx="118" ry="22" style={{ animationDelay: `${d}s` }} />
            ))}

            {/* damla */}
            <g transform="translate(200 30)">
              <g className="i-drop">
                <path d="M0,-15 C5,-6 9,-1 9,5 A9,9 0 0 1 -9,5 C-9,-1 -5,-6 0,-15Z" fill="url(#ic-drop)" />
                <ellipse cx="-3" cy="3" rx="2" ry="3.4" fill="#fff" opacity=".45" />
              </g>
            </g>
          </svg>
        </div>

        <div className="intro-copy">
          <p className="intro-eyebrow">Bir fincan molası</p>
          <h2 className="intro-brand">Yâren<b>.</b></h2>
          <div className="intro-divider" aria-hidden="true"><i /><span>✦</span><i /></div>
          <p className="intro-slogan">Her fincanda ortak bir hikâye.</p>
          <button className="intro-skip" onClick={() => setLeave(true)} aria-label="Siteye geç">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 9l7 7 7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}