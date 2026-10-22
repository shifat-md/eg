import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Img from '../components/Img.jsx';
import Mock from '../components/Mock.jsx';
import { PageTitle, TeamCard, CTA, Section, Feature } from '../components/ui.jsx';
import { TEAM } from '../data/team.js'; import { VALUES, FEATURES } from '../data/content.js';
import { STEPS } from '../data/site.js'

export default function About() {
    return
    <>
        <Seo title="About" description="EgNisher is a collaborative web development and digital solutions agency created by a team of learners and builders." path="/about" />
        <PageTitle title="About EgNisher" text="A collaborative web development and digital solutions agency based in Bangladesh, serving clients worldwide." />
        <Section><div className="split split--center"><div><h2 className="h2">Who we are</h2><p className="intro-text">EgNisher is a collaborative web development and digital solutions agency created by a team of learners and builders.</p><p className="intro-text">The team members studied at Creative IT Institute and are developing their skills through real agency projects and practical collaboration.</p><p className="muted">We are early in our journey, so we keep our claims modest and our work transparent. Our portfolio shows concept projects until real case studies are ready.</p></div>
            <Img file="egnisher-about-team-collaboration.webp" ratio="3/2" alt="Abstract illustration of collaborative web development work" fallback={<Mock v="app" />} /></div></Section>
        <Section bg><div className="pair"><div className="card"><h2 className="card__heading">Our mission</h2><p className="muted">To help growing businesses present themselves clearly online with websites that are fast, accessible and easy to use.</p></div><div className="card"><h2 className="card__heading">Our vision</h2><p className="muted">To grow into a trusted web studio known for honest communication, careful craft and long-lasting client relationships.</p></div></div>{/* Mission and vision are draft statements: edit them to match your goals. */}</Section>
        <Section><h2 className="h2">Our values</h2><p className="lead lead--spaced">The principles that guide how we work.</p><div className="cards-3">{VALUES.map(([t, d]) => <div key={t} className="card"><h3 className="card__title card__title--tight">{t}</h3><p className="muted">{d}</p></div>)}</div></Section>
        <Section bg><h2 className="h2">Why choose us</h2><p className="lead lead--spaced">What you can expect when you work with EgNisher.</p><div className="cards-3">{FEATURES.map(([i, t, d]) => <Feature key={t} icon={i} title={t} text={d} />)}</div></Section>
        <Section><h2 className="h2">How we collaborate</h2><ol className="cards-4 cards--offset">{STEPS.map(([t, d], i) => <li key={t} className="card"><span className="step-label">Step {i + 1}</span><h3 className="card__title">{t}</h3><p className="muted">{d}</p></li>)}</ol><Link to="/process" className="btn btn-o btn--spaced">Read the full process</Link></Section>
        <Section bg><h2 className="h2">Our team</h2><p className="lead lead--spaced">Five builders working together. Roles and links are editable in src/data/team.js.</p><div className="cards-5">{TEAM.map(m => <TeamCard key={m.name} m={m} />)}</div></Section><CTA />
    </>
}
