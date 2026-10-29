import { useEffect, useState } from "react";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function Field({ name, label, form, errors, change, onBlur, as: Tag = "input", ...rest }) {
  return (
    <label className="field" htmlFor={name}>
      <span>{label}</span>
      <Tag
        id={name}
        name={name}
        value={form[name]}
        onChange={change(name)}
        onBlur={onBlur(name)}
        aria-invalid={!!errors[name]}
        {...rest}
      />
      {errors[name] && <em role="alert">{errors[name]}</em>}
    </label>
  );
}

function validate({ name, email, message }) {
  const e = {};
  if (!name.trim()) e.name = "Lütfen adınızı yazın.";
  if (!email.trim()) e.email = "E-posta alanı boş bırakılamaz.";
  else if (!emailRe.test(email.trim())) e.email = "Geçerli bir e-posta girin (ör. ad@site.com).";
  if (!message.trim()) e.message = "Mesajınızı yazın.";
  return e;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return undefined;

    const timer = setTimeout(() => setSent(false), 6000);
    return () => clearTimeout(timer);
  }, [sent]);

  const change = (k) => (ev) => {
    setForm({ ...form, [k]: ev.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
    setSent(false);
  };

  const blur = (k) => () => {
    const validation = validate(form);
    setErrors((current) => ({ ...current, [k]: validation[k] }));
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true); // Sunucu yok: başarı mesajı gösterilir.
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="iletisim" className="contact wood">
      <div className="contact-box reveal">
        <p className="eyebrow">İletişim</p>
        <h2>Bir fincan sohbet?</h2>
        <form onSubmit={submit} noValidate>
          <Field name="name" label="Ad" type="text" autoComplete="name" form={form} errors={errors} change={change} onBlur={blur} />
          <Field name="email" label="E-posta" type="email" inputMode="email" autoComplete="email" form={form} errors={errors} change={change} onBlur={blur} />
          <Field name="message" label="Mesaj" as="textarea" rows="4" form={form} errors={errors} change={change} onBlur={blur} />
          <button className="btn" type="submit">Gönder</button>
          {sent && (
            <p className="success" role="status">
              ☕ Teşekkürler! Mesajınız bize ulaştı, kahveniz soğumadan döneceğiz.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}