export default function Contact() {
  return (
    <section id="contact">
  <h2>{"Contact"}</h2>
  <div className="contact-grid">
    <a className="contact-card" href="mailto:faiez123.azam@gmail.com">
      <span className="contact-icon">{"✉️"}</span>
      <div><div className="contact-label">{"Email"}</div><div className="contact-value">{"faiez123.azam@gmail.com"}</div></div>
    </a>
    <a className="contact-card" href="tel:+923324242124">
      <span className="contact-icon">{"📞"}</span>
      <div><div className="contact-label">{"Phone"}</div><div className="contact-value">{"+92 332 4242124"}</div></div>
    </a>
    <a className="contact-card" href="https://www.linkedin.com/in/muhammad-faiez-azam-26a35aa3/" target="_blank" rel="noopener noreferrer">
      <span className="contact-icon">{"💼"}</span>
      <div><div className="contact-label">{"LinkedIn"}</div><div className="contact-value">{"muhammad-faiez-azam"}</div></div>
    </a>
    <div className="contact-card">
      <span className="contact-icon">{"📍"}</span>
      <div><div className="contact-label">{"Location"}</div><div className="contact-value">{"Lahore, Pakistan"}</div></div>
    </div>
  </div>
</section>
  );
}
