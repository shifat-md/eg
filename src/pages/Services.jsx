import { Link, Navigate, useParams } from 'react-router-dom'; import Seo from '../components/Seo.jsx'; import { PageTitle, ServiceCard, CTA, Section, Accordion, Icon } from '../components/ui.jsx'; import { SERVICES } from '../data/services.js'; import { STEPS } from '../data/site.js'; import { INDUSTRY_CARDS } from '../data/content.js'; import { FAQS } from '../data/faqs.js'
export default function Services() {
    return <><Seo title="Services" description="Website design, responsive development, landing pages, redesigns, frontend and full-stack web solutions from EgNisher." path="/services" />
        <PageTitle title="Our Services" text="Practical web development services for growing businesses." /><Section><div className="cards-3">{SERVICES.map(s => <div key={s.slug} className="service-item"><ServiceCard s={s} /><ul className="service-item__features">{s.features.slice(0, 3).map(f => <li key={f} className="service-item__feature"><span className="check-icon"><Icon n="check" s={16} /></span>{f}</li>)}</ul></div>)}</div></Section>
        <Section bg><h2 className="h2">How an engagement works</h2><ol className="cards-4 cards--offset">{STEPS.map(([t, d], i) => <li key={t} className="card"><span className="step-label">Step {i + 1}</span><h3 className="card__title">{t}</h3><p className="muted">{d}</p></li>)}</ol></Section>
        <Section><h2 className="h2">Who we build for</h2><p className="lead lead--spaced">These are the kinds of businesses we focus on. They are target industries, not a client list.</p><div className="cards-3">{INDUSTRY_CARDS.map(([t, d]) => <div key={t} className="card"><h3 className="card__label">{t}</h3><p className="muted">{d}</p></div>)}</div></Section>
        <Section bg><h2 className="h2">Timelines and pricing</h2><p className="lead">Every project is different. After a short discovery conversation we agree scope, timeline and cost in writing before any work begins. We do not publish fixed prices or promise results such as rankings or leads.</p>{/* TODO: add real pricing or packages here when decided. */}</Section>
        <Section><h2 className="h2">Common questions</h2><Accordion items={FAQS.slice(0, 4)} /></Section><CTA /></>
}
export function ServiceDetail() {
    const { slug } = useParams(); const s = SERVICES.find(x => x.slug === slug); if (!s) return <Navigate to="/404" replace />
    return <><Seo title={s.title} description={s.short} path={`/services/${s.slug}`} /><PageTitle title={s.title} text={s.short} />
        <article className="sec sec--narrow"><p className="service-detail__intro">{s.long}</p><h2 className="h2">What’s included</h2><ul className="bullet-list bullet-list--end bullet-list--spaced">{s.features.map(f => <li key={f}>{f}</li>)}</ul>
            <div className="btn-row"><Link to="/contact" className="btn btn-p">Discuss this service</Link><Link to="/services" className="btn btn-o">Back to Services</Link></div></article></>
}
