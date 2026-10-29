
import { useEffect, useState } from "react";

import Intro from "./components/Intro.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("in")
        ),
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ready]);

  return (
    <>
      <Intro onDone={() => setReady(true)} />

      <header className="nav">
        <a href="#top" className="logo" aria-label="Yâren ana sayfa">
          Yâren<b>.</b>
        </a>

        <nav>
          <a href="#top" className="active">
            Ana Sayfa
          </a>
          <a href="#kahveler">Kahveler</a>
          <a href="#hikaye">Hikâyemiz</a>
          <a href="#iletisim">İletişim</a>
        </nav>
      </header>

      <main>
        <section id="top" className="hero">
          {[...Array(7)].map((_, i) => (
            <i key={i} className="drop" style={{ "--i": i }} />
          ))}

          <div className={`hero-content ${ready ? "show" : ""}`}>
            <p className="eyebrow">Bir fincan molası</p>

            <h1>
              Her fincanda
              <br />
              ortak bir <em>hikâye.</em>
            </h1>

            <p className="lead">
              Kahvenin kokusunda, sohbetin sıcaklığında ve paylaşılan güzel
              anlarda buluşalım.
            </p>

            <a className="btn" href="#kahveler">
              Kahveleri Keşfet <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="hand" aria-hidden="true">
            Kahve insanları birleştirir.
          </p>
        </section>

        <div className="wood-strip" aria-hidden="true" />

        <Products />

        <section id="hikaye" className="story reveal">
          <p className="eyebrow">Hikâyemiz</p>

          <blockquote>
            “Bir fincan kahvenin kırk yıllık hatırı vardır.” Biz o hatırı
            bugünün demleme kültürüyle buluşturuyoruz.
          </blockquote>

          <p>
            Cezvede yavaş yavaş pişen köpük, espressonun yoğun krema
            tabakası, filtrenin sakin akışı: üç ayrı yol, tek bir sofra.
          </p>
        </section>

        <Contact />
      </main>

      <footer>
        <a href="#top" className="logo">
          Yâren<b>.</b>
        </a>

        <small>
          © {new Date().getFullYear()} Yâren · Kahve · İnsan · Hikâye
        </small>
      </footer>
    </>
  );
}
