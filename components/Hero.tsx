import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero">
  <Image className="hero-photo" src="/images/m-faiez-azam.png" alt="M. Faiez Azam" width={800} height={800} sizes="180px" priority />
  <div className="hero-text">
    <h1>{"M. Faiez Azam"}</h1>
    <div className="subtitle">{"Senior Backend Engineer · Node.js & TypeScript"}</div>
    <p>{"5+ years building production-grade backend systems across multi-tenant SaaS, fintech, restaurant tech, and automotive domains. Stripe integrations, OpenAI APIs, PostgreSQL schema design, JWT/RBAC authentication, and end-to-end backend ownership."}</p>
    <div className="hero-links">
      <a href="mailto:faiez123.azam@gmail.com" className="btn btn-light">{"✉ Email Me"}</a>
      <a href="https://www.linkedin.com/in/muhammad-faiez-azam-26a35aa3/" target="_blank" className="btn btn-outline" rel="noopener noreferrer">{"💼 LinkedIn"}</a>
    </div>
  </div>
</div>
  );
}
