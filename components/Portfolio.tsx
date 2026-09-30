import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="portfolio-section" id="portfolio">
  <div className="portfolio-inner">
    <h2>{"Portfolio"}</h2>
    <div className="portfolio-grid">
      <div className="portfolio-card">
        <div className="screenshot-wrap"><Image src="/images/neon-kiosk-orders.jpg" alt="Neon Kiosk Orders" width={900} height={1523} sizes="(max-width: 600px) 100vw, 500px" /></div>
        <div className="card-body">
          <div className="card-tag">{"Restaurant Tech · Kiosk · USA"}</div>
          <div className="card-title">{"Neon Orders / Kiosk"}</div>
          <div className="card-desc">{"In-restaurant food ordering kiosk system built end-to-end. Customers browse menus, place orders, and track delivery on-site. Includes multi-language support via OpenAI API."}</div>
          <div className="card-tech">
            <span className="tech-pill">{"Node.js"}</span><span className="tech-pill">{"TypeScript"}</span><span className="tech-pill">{"OpenAI API"}</span><span className="tech-pill">{"PostgreSQL"}</span><span className="tech-pill">{"JWT / RBAC"}</span>
          </div>
          <a href="https://kiosk.dev.neonscreens.com/home" target="_blank" className="visit-btn" rel="noopener noreferrer">{"🔗 Visit Website"}</a>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="screenshot-wrap">
          <Image src="/images/neon-billing-portal.jpg" alt="Neon Billing Portal" width={900} height={471} sizes="(max-width: 600px) 100vw, 500px" />
        </div>
        <div className="card-body">
          <div className="card-tag">{"SaaS · Billing · USA"}</div>
          <div className="card-title">{"Neon Billing"}</div>
          <div className="card-desc">{"Stripe-powered subscription billing platform for NeonScreens. Manages orders, subscriptions, and automated tenant provisioning with full webhook integration."}</div>
          <div className="card-tech">
            <span className="tech-pill">{"Node.js"}</span>
            <span className="tech-pill">{"TypeScript"}</span>
            <span className="tech-pill">{"Stripe API"}</span>
            <span className="tech-pill">{"PostgreSQL"}</span>
            <span className="tech-pill">{"TypeORM"}</span>
          </div>
          <a href="https://portal.neonscreens.com/" target="_blank" className="visit-btn" rel="noopener noreferrer">{"🔗 Visit Website"}</a>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="screenshot-wrap">
          <Image src="/images/pawspect.jpg" alt="Pawspect" width={900} height={400} sizes="(max-width: 600px) 100vw, 500px" />
        </div>
        <div className="card-body">
          <div className="card-tag">{"Pet Wellness · UAE"}</div>
          <div className="card-title">{"Pawspect"}</div>
          <div className="card-desc">{"Modern veterinary clinic and pet wellness ecosystem in the UAE. Backend covers multi-tenant clinic onboarding, pet keeper management, and community funding features."}</div>
          <div className="card-tech">
            <span className="tech-pill">{"Node.js"}</span>
            <span className="tech-pill">{"TypeScript"}</span>
            <span className="tech-pill">{"PostgreSQL"}</span>
            <span className="tech-pill">{"JWT / RBAC"}</span>
            <span className="tech-pill">{"TypeORM"}</span>
          </div>
          <a href="https://pawspact.com/" target="_blank" className="visit-btn" rel="noopener noreferrer">{"🔗 Visit Website"}</a>
        </div>
      </div>

      <div className="portfolio-card">
        <div className="screenshot-wrap">
          <Image src="/images/tabra-trading.jpg" alt="Tabra Trading" width={900} height={395} sizes="(max-width: 600px) 100vw, 500px" />
        </div>
        <div className="card-body">
          <div className="card-tag">{"Automotive Safety · UAE"}</div>
          <div className="card-title">{"Tabra Trading"}</div>
          <div className="card-desc">{"UAE-based automotive safety company supplying speed limiters and fleet safety systems. Backend covers sale-purchase, stock management, returns, exchanges, and financial reporting."}</div>
          <div className="card-tech">
            <span className="tech-pill">{"Node.js"}</span>
            <span className="tech-pill">{"TypeScript"}</span>
            <span className="tech-pill">{"PostgreSQL"}</span>
            <span className="tech-pill">{"TypeORM"}</span>
            <span className="tech-pill">{"REST APIs"}</span>
          </div>
          <a href="https://tabratrading.com/" target="_blank" className="visit-btn" rel="noopener noreferrer">{"🔗 Visit Website"}</a>
        </div>
      </div>

    </div>
  </div>
</div>
  );
}
