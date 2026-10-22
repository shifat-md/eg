import { Link, Navigate, useParams } from 'react-router-dom'; import Seo from '../components/Seo.jsx'; import { PageTitle, ProjectCard, CTA } from '../components/ui.jsx'; import { PROJECTS } from '../data/projects.js'
export default function Portfolio() {
    return <><Seo title="Portfolio" description="Sample and concept website projects from EgNisher. Real case studies will be added as they are completed." path="/portfolio" />
        <PageTitle title="Portfolio" text="These are concept and sample projects, not real client work. We will add real case studies as they are completed." /><section className="sec cards-4">{PROJECTS.map(p => <ProjectCard key={p.slug} p={p} />)}</section><CTA /></>
}
export function ProjectDetail() {
    const { slug } = useParams(); const p = PROJECTS.find(x => x.slug === slug); if (!p) return <Navigate to="/404" replace />
    return <><Seo title={`${p.title} (${p.kind})`} description={p.summary} path={`/portfolio/${p.slug}`} /><PageTitle title={`${p.title}: ${p.kind}`} text={p.summary} />
        <article className="sec sec--narrow"><p className="notice notice--warn notice--spaced">This is a {p.kind.toLowerCase()} created to show our approach. It is not real client work and contains no real results.</p>
            <h2 className="h2">Goals</h2><ul className="bullet-list">{p.goals.map(g => <li key={g}>{g}</li>)}</ul><h2 className="h2">Planned sections</h2><ul className="bullet-list bullet-list--end">{p.sections.map(g => <li key={g}>{g}</li>)}</ul>
            <div className="btn-row"><Link to="/contact" className="btn btn-p">Start a similar project</Link><Link to="/portfolio" className="btn btn-o">Back to Portfolio</Link></div></article></>
}
