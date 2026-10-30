export default function Hero({ ready }) {
  return (
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
  );
}