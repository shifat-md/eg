import Seo from '../components/Seo.jsx'; import { PageTitle, Icon, Section } from '../components/ui.jsx'; import ContactForm from '../components/ContactForm.jsx'; import { SITE } from '../data/site.js'
export default function Contact() {
    return <>
        <Seo title="Contact" description="Contact EgNisher to discuss a new website or improve an existing one." path="/contact" />
        <PageTitle title="Contact Us" text="Tell us about your project and we will get back to you." />
        <Section>
            <div className="split">
                <div className="contact-info">
                    <div className="card contact-card">
                        <span className="contact-card__icon"><Icon n="mail" /></span>
                        <div>
                            <h2 className="card__name">Email</h2><a className="contact-card__link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
                        </div>
                    </div>
                    <div className="card contact-card">
                        <span className="contact-card__icon"><Icon n="pin" /></span>
                        <div>
                            <h2 className="card__name">Location</h2><p className="muted">{SITE.location}</p>
                        </div>
                    </div>
                    <div className="card">
                        <h2 className="card__label">Office hours</h2>
                        <p className="muted">[Add your office hours here, for example days and time zone.]</p>
                    </div>{/* TODO: add real office hours */}
                    <div className="card">
                        <h2 className="card__label">Support information</h2>
                        <p className="muted">For a new project, describe your goals, your current website (if any) and your preferred timeline. For existing projects, include the page or feature you are asking about.</p></div>
                    <div className="map-placeholder" role="img" aria-label="Map placeholder">Map placeholder: add an embedded map or address here

                    </div>
                    <ul className="social-pills">{SITE.social.map(([n, u]) => <li key={n}><a href={u} className="social-pill">{n}</a></li>)}</ul>
                </div>
                <div>
                    <h2 className="h2">Send a message</h2><p className="notice notice--info contact-notice">Until an email service is connected (see README), the form opens your email app instead of sending automatically.</p><ContactForm /></div>
            </div>
        </Section>
    </>
}
