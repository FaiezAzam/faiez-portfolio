export default function Experience() {
  return (
    <section id="experience">
  <h2>{"Experience"}</h2>
  <div className="job-card">
    <div className="job-header">
      <div><div className="job-title">{"Senior Software Engineer"}</div><div className="job-company">{"Droidor"}</div></div>
      <div className="job-date">{"Sep 2023 – May 2026"}</div>
    </div>
    <div className="job-context">{"Client: NeonScreens (USA) — SaaS platform for digital signage, music & WiFi management"}</div>
    <ul className="bullets">
      <li>{"Primary technical point of contact for the CEO, CTO, and Project Managers — owning requirement gathering, sprint planning, feature roadmap decisions, and production issue resolution."}</li>
    </ul>
    <div className="project-block">
      <div className="project-name">{"🔵 Neon Billing"}</div>
      <div className="project-tech">{"Node.js · TypeScript · Express.js · TypeORM · PostgreSQL · Stripe API"}</div>
      <ul className="bullets">
        <li>{"End-to-end Stripe payment integration — checkout flows, webhook handling with idempotency & retry logic, and full subscription lifecycle management."}</li>
        <li>{"Designed PostgreSQL schema and ERD covering subscriptions, orders, products, pricing, and company entities."}</li>
        <li>{"Built RBAC and tenant-level data isolation for multi-tenant billing operations."}</li>
      </ul>
    </div>
    <div className="project-block">
      <div className="project-name">{"🟢 Neon Orders / Kiosk"}</div>
      <div className="project-tech">{"Node.js · TypeScript · Express.js · TypeORM · PostgreSQL · OpenAI API"}</div>
      <ul className="bullets">
        <li>{"Built entire backend from scratch — PostgreSQL schema, migrations, REST API layer with JWT authentication and RBAC."}</li>
        <li>{"Integrated OpenAI API to automate multi-language menu item translation."}</li>
        <li>{"Asynchronous order processing workflows; reporting APIs optimised for high-volume data."}</li>
      </ul>
    </div>
    <div className="project-block">
      <div className="project-name">{"🟠 Pawspect (UAE)"}</div>
      <div className="project-tech">{"Node.js · TypeScript · Express.js · TypeORM · PostgreSQL"}</div>
      <ul className="bullets">
        <li>{"Multi-tenant admin portal APIs for onboarding clinics, pet keepers, and veterinary staff."}</li>
        <li>{"Financial assistance module for pet medical funding requests."}</li>
      </ul>
    </div>
    <div className="project-block">
      <div className="project-name">{"🟡 Tabra Trading (UAE)"}</div>
      <div className="project-tech">{"Node.js · TypeScript · Express.js · TypeORM · PostgreSQL"}</div>
      <ul className="bullets">
        <li>{"Sale-purchase module, stock return & exchange with approval workflows, and filterable reporting."}</li>
      </ul>
    </div>
  </div>
  <div className="job-card">
    <div className="job-header">
      <div><div className="job-title">{"Backend Software Engineer (Laravel)"}</div><div className="job-company">{"iSoft Technologies"}</div></div>
      <div className="job-date">{"Oct 2021 – Aug 2023"}</div>
    </div>
    <ul className="bullets">
      <li><strong>{"Easy Identity"}</strong>{" — Multi-tenant SaaS with React.js frontend, AWS SNS/EC2/S3, LDAP directory sync."}</li>
      <li><strong>{"Med Entry"}</strong>{" — Online MCAT learning portal with progress tracking and comprehensive test coverage."}</li>
      <li><strong>{"Five-A-Side"}</strong>{" — Mobile app backend for football event management with push notifications."}</li>
    </ul>
  </div>
  <div className="job-card">
    <div className="job-header">
      <div><div className="job-title">{"Laravel Developer"}</div><div className="job-company">{"Swift Solutions"}</div></div>
      <div className="job-date">{"Nov 2020 – May 2021"}</div>
    </div>
    <ul className="bullets">
      <li><strong>{"ColdXpress"}</strong>{" — ERP for cold-chain logistics; audit trail, invoicing, and admin portal."}</li>
      <li><strong>{"Ebeetro Electronics"}</strong>{" — E-commerce platform with shopping cart and admin panel."}</li>
    </ul>
  </div>
  <div className="job-card">
    <div className="job-header">
      <div><div className="job-title">{"Full-Stack Developer"}</div><div className="job-company">{"Finja Pvt. Ltd."}</div></div>
      <div className="job-date">{"Sep 2019 – Mar 2020"}</div>
    </div>
    <ul className="bullets">
      <li><strong>{"Finja Business"}</strong>{" — SaaS HR & payroll platform; email notifications and activity log module."}</li>
    </ul>
  </div>
</section>
  );
}
