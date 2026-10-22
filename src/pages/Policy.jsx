import Seo from '../components/Seo.jsx'; import { PageTitle } from '../components/ui.jsx'; import { POLICY_NOTE } from '../data/policies.js'
// Review and customize this policy with legal advice before publishing.
export default function Policy({ slug, doc }) {
    return <><Seo title={doc.title} description={doc.desc} path={`/${slug}`} /><PageTitle title={doc.title} />
        <article className="sec sec--narrow"><p className="notice notice--warn notice--spaced"><strong>Editable starter template.</strong> {POLICY_NOTE}</p>{doc.sections.map(([h, t]) => <section key={h} className="article__section"><h2 className="article__heading">{h}</h2><p className="muted">{t}</p></section>)}</article></>
}
