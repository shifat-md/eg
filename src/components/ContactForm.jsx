import { useState } from 'react'; import { CONTACT_CONFIG as C } from '../config/contactConfig.js'; import { SERVICES } from '../data/services.js'
export default function ContactForm() {
    const [st, setSt] = useState('idle'); const [errs, setErrs] = useState({}); const [msg, setMsg] = useState('')
    async function submit(e) {
        e.preventDefault(); const f = new FormData(e.target); if (f.get('company_website')) return // honeypot: bots fill it
        const v = Object.fromEntries(f); const er = {}
        if (!v.name?.trim()) er.name = 'Please enter your full name.'
        if (!/^\S+@\S+\.\S+$/.test(v.email?.trim() || '')) er.email = 'Please enter a valid email address.'
        if (!v.details?.trim() || v.details.trim().length < 10) er.details = 'Please describe your project (at least 10 characters).'
        setErrs(er); if (Object.keys(er).length) { setSt('invalid'); return }
        setSt('loading')
        if (C.enabled && C.endpoint) {
            try {
                const r = await fetch(C.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: v.name, email: v.email, business: v.business, service: v.service, details: v.details }) })
                if (!r.ok) throw new Error(); setSt('success'); setMsg('Thank you. Your message was sent and we will reply by email.'); e.target.reset()
            } catch { setSt('error'); setMsg(`Something went wrong. Please try again or email ${C.fallbackEmail} directly.`) } return
        }
        // Form is not connected to an email service yet: open the visitor's email app instead.
        const body = `Name: ${v.name}\nEmail: ${v.email}\nBusiness: ${v.business}\nService: ${v.service}\n\n${v.details}`
        window.location.href = `mailto:${C.fallbackEmail}?subject=${encodeURIComponent('Website enquiry from ' + v.name)}&body=${encodeURIComponent(body)}`
        setSt('success'); setMsg('Our contact form is not connected to email yet, so your email app should have opened with your message ready to send. If it did not, write to ' + C.fallbackEmail + '.')
    }
    const F = ({ id, label, err, children }) => <div className="form-field"><label htmlFor={id} className="form-field__label">{label}</label>{children}{err && <p id={`${id}-err`} className="form-field__error">{err}</p>}</div>
    const p = (id) => ({ id, name: id, 'aria-invalid': !!errs[id], 'aria-describedby': errs[id] ? `${id}-err` : undefined, className: 'field' })
    return <form onSubmit={submit} noValidate className="contact-form" aria-label="Contact form">
        <F id="name" label="Full Name" err={errs.name}><input {...p('name')} autoComplete="name" required /></F>
        <F id="email" label="Email Address" err={errs.email}><input {...p('email')} type="email" autoComplete="email" required /></F>
        <F id="business" label="Business Name"><input {...p('business')} autoComplete="organization" /></F>
        <F id="service" label="Service Interested In"><select {...p('service')}>{[...SERVICES.map(s => s.title), 'Not sure yet'].map(s => <option key={s}>{s}</option>)}</select></F>
        <F id="details" label="Project Details" err={errs.details}><textarea {...p('details')} rows="5" required /></F>
        <div className="honeypot" aria-hidden="true"><label>Leave this field empty<input name="company_website" tabIndex="-1" autoComplete="off" /></label></div>
        <div role="status" aria-live="polite">{st === 'invalid' && <p className="notice notice--error">Please fix the highlighted fields.</p>}{st === 'error' && <p className="notice notice--error">{msg}</p>}{st === 'success' && <p className="notice notice--success">{msg}</p>}</div>
        <div className="btn-row"><button className="btn btn-p" disabled={st === 'loading'}>{st === 'loading' ? 'Sending…' : 'Send Message'}</button><a className="btn btn-o" href={`mailto:${C.fallbackEmail}`}>Email Us Directly</a></div></form>
}
