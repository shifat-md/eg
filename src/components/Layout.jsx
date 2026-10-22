import {useEffect,useState} from 'react';import {Link,NavLink,Outlet,useLocation} from 'react-router-dom';import {NAV,SITE} from '../data/site.js';import {SERVICES} from '../data/services.js';import {POLICIES} from '../data/policies.js'
function Brand({light}){return <Link to="/" aria-label="EgNisher home" className="brand"><img src="/images/logo.png" alt="" width="40" height="40" className="brand__logo"/><span className={`brand__name ${light?'brand__name--light':''}`}>EgNisher</span></Link>}
function Navbar(){const [open,setOpen]=useState(false);const {pathname}=useLocation();useEffect(()=>{setOpen(false)},[pathname])
const cls=({isActive})=>`nav-link ${isActive?'is-active':''}`
return <header className="glass site-header"><nav aria-label="Main" className="site-nav"><Brand/>
<div className="site-nav__links">{NAV.map(([l,h])=><NavLink key={l} to={h} end={h==='/'} className={cls}>{l}</NavLink>)}</div>
<Link to="/contact" className="btn btn-p btn--sm site-nav__cta">Contact Us</Link>
<button type="button" className="site-nav__toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></nav>
{open&&<div id="mobile-menu" className="mobile-menu">{NAV.map(([l,h])=><NavLink key={l} to={h} end={h==='/'} className={cls}>{l}</NavLink>)}<Link to="/contact" className="btn btn-p">Contact Us</Link></div>}</header>}
function Footer(){const L=({to,children})=><li><Link to={to} className="footer-link footer-link--block">{children}</Link></li>
return <footer className="site-footer"><div className="site-footer__grid">
<div><Brand light/><p className="site-footer__about">A collaborative web development and digital solutions agency based in Bangladesh, serving clients worldwide.</p><a href={`mailto:${SITE.email}`} className="footer-link site-footer__email">{SITE.email}</a>
<ul className="site-footer__social">{SITE.social.map(([n,u])=><li key={n}><a href={u} aria-label={`EgNisher on ${n}`} className="footer-link">{n}</a></li>)}</ul></div>
<nav aria-label="Quick links"><h2 className="site-footer__heading">Quick Links</h2><ul>{[['/','Home'],['/about','About'],['/portfolio','Portfolio'],['/gallery','Gallery'],['/blog','Blog'],['/process','Process'],['/faq','FAQ'],['/careers','Careers'],['/contact','Contact']].map(([t,n])=><L key={t} to={t}>{n}</L>)}</ul></nav>
<nav aria-label="Services"><h2 className="site-footer__heading">Services</h2><ul>{SERVICES.map(s=><L key={s.slug} to={`/services/${s.slug}`}>{s.title}</L>)}</ul></nav>
<nav aria-label="Policies"><h2 className="site-footer__heading">Policies</h2><ul>{Object.entries(POLICIES).map(([k,p])=><L key={k} to={`/${k}`}>{p.title}</L>)}</ul></nav></div>
<p className="site-footer__copy">© 2026 EgNisher. Web Development &amp; Digital Solutions.</p></footer>}
export default function Layout(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname])
return <><a href="#main" className="skip-link">Skip to content</a><Navbar/><main id="main"><Outlet/></main><Footer/></>}
