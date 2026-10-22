import Seo from '../components/Seo.jsx'; import { PageTitle, CTA } from '../components/ui.jsx'; import { STEPS } from '../data/site.js'
export default function Process() {
    return <><Seo title="Our Process" description="How EgNisher works: Discover, Plan, Build and Improve." path="/process" /><PageTitle title="Our Process" text="A clear, collaborative process from first conversation to launch and beyond." />
        <section className="sec"><ol className="pair">{STEPS.map(([t, d], i) => <li key={t} className="card"><span className="step-label">Step {i + 1}</span><h2 className="card__heading">{t}</h2><p className="muted">{d}</p></li>)}</ol></section><CTA /></>
}
