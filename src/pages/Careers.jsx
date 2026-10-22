import { Link } from 'react-router-dom'; import Seo from '../components/Seo.jsx'; import { PageTitle } from '../components/ui.jsx'; import { SITE } from '../data/site.js'
export default function Careers() {
    return <><Seo title="Careers" description="Careers at EgNisher. There are no open positions listed yet." path="/careers" /><PageTitle title="Careers" text="We are a small, growing team." />
        <section className="sec sec--narrow"><h2 className="h2">No open positions right now</h2><p className="careers__text">We have not listed any roles yet. If you would like to collaborate with us in the future, send a short introduction to {SITE.email}.</p><div className="btn-row btn-row--nowrap"><a className="btn btn-p" href={`mailto:${SITE.email}?subject=Introduction`}>Email us</a><Link to="/about" className="btn btn-o">About the team</Link></div></section></>
}
