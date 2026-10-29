
export default function Hero() {
  return (
    <section id="anasayfa" className="hero">
      <div
        className="hero-image"
        role="img"
        aria-label="Yâren kahve sunumu"
      />

      <div className="hero-content">
        <p className="eyebrow">BİR FİNCAN MOLASI</p>

        <h1>
          Her fincanda
          <br />
          ortak bir <em>hikâye.</em>
        </h1>

        <p className="hero-description">
          Kahvenin kokusunda, sohbetin sıcaklığında
          ve paylaşılan güzel anlarda buluşalım.
        </p>

        <a href="#kahveler" className="button button-light">
          Kahveleri Keşfet <span aria-hidden="true">↗</span>
        </a>

        <div className="hero-note">
          <span className="hero-note-line" />
          Özenle seçildi, sevgiyle hazırlandı.
        </div>
      </div>

      <div className="hero-side-label">
        COFFEE · PEOPLE · STORIES
      </div>
    </section>
  );
}
