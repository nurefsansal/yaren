const items = [
  { type: "turk", name: "Türk Kahvesi", price: "₺85",
    text: "Bakır cezvede, közde yavaş pişen; yoğun köpüklü, lokumla servis edilen klasik.",
    image: "/turkish.png" },
  { type: "espresso", name: "Espresso", price: "₺70", 
    text: "Orta kavrulmuş çekirdekler, kadife kremalı, kısa ve karakterli bir çekim.",
    image: "/espresso.png" },
  { type: "filtre", name: "Filtre Kahve", price: "₺95", 
    text: "Elde demlenen, meyvemsi notalı, uzun uzun yudumlanan sakin bir fincan.",
    image: "/filtre.png" },
];

export default function Products() {
  return (
    <section id="kahveler" className="products">
      <p className="eyebrow reveal">Menü</p>
      <h2 className="reveal">Üç fincan, üç hikâye</h2>
      <div className="grid">
        {items.map((p, i) => (
          <article key={p.type} className="card reveal" style={{ "--delay": `${i * 120}ms` }}>
            <div className="card-art">
              <span className="tag">{p.tag}</span>
              <img className="cup-image" src={p.image} alt={p.name} />
            </div>
            <div className="card-body">
              <div className="row">
                <h3>{p.name}</h3>
                <span className="price">{p.price}</span>
              </div>
              <p>{p.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}