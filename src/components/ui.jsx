import {useEffect,useRef,useState} from 'react';import {Link} from 'react-router-dom'
export const Head=({title,text,children})=><div className="section-head"><h2 className="h2">{title}</h2>{text&&<p className="lead">{text}</p>}{children}</div>
export const PageTitle=({title,text})=><section className="page-title"><div className="sec page-title__inner"><h1 className="page-title__heading">{title}</h1>{text&&<p className="lead page-title__lead">{text}</p>}</div></section>
export const Marquee=({items})=><div className="marquee" aria-label="Business categories">
<ul className="track">{[...items,...items].map((t,i)=><li key={i} aria-hidden={i>=items.length} className="marquee__item"><span>{t}</span><span aria-hidden className="marquee__dot">●</span></li>)}</ul></div>
export const ServiceCard=({s})=><article className="card card--column"><h3 className="card__title card__title--spaced">{s.title}</h3><p className="card__excerpt card__excerpt--lg">{s.short}</p><Link to={`/services/${s.slug}`} className="text-link">Learn more about {s.title}</Link></article>
export function Carousel({label,children}){const r=useRef(null);const go=d=>r.current.scrollBy({left:d*320,behavior:'smooth'})
return <div><div className="carousel__controls">{[['Previous',-1,'←'],['Next',1,'→']].map(([l,d,s])=><button key={l} type="button" aria-label={`${l} ${label}`} onClick={()=>go(d)} className="carousel__btn">{s}</button>)}</div>
<div ref={r} tabIndex={0} role="region" aria-label={label} onKeyDown={e=>{if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)}} className="carousel__track">{children.map((c,i)=><div key={i} className="carousel__slide">{c}</div>)}</div></div>}
export function Accordion({items}){const [o,setO]=useState(0)
return <div className="accordion">{items.map(([q,a],i)=><div key={q} className="accordion__item"><h3><button type="button" aria-expanded={o===i} aria-controls={`faq-${i}`} onClick={()=>setO(o===i?-1:i)} className="accordion__btn">{q}<span aria-hidden className="accordion__icon">{o===i?'−':'+'}</span></button></h3><div id={`faq-${i}`} hidden={o!==i}><p className="accordion__answer">{a}</p></div></div>)}</div>}
export const ProjectCard=({p})=><article className="card card--column project-card"><div className="project-card__media" aria-hidden="true"><div className="project-card__window"><div className="project-card__hero"/><div className="project-card__line project-card__line--a"/><div className="project-card__line project-card__line--b"/></div></div>
<span className="tag project-card__tag">{p.kind}</span><h3 className="card__title">{p.title}</h3><p className="card__excerpt">{p.summary}</p><Link to={`/portfolio/${p.slug}`} className="text-link">View {p.title} concept</Link></article>
export const PostCard=({p})=><article className="card card--column"><div aria-hidden="true" className="post-card__media"><Icon n={ICONS[p.category]||'layout'} s={36}/></div><div className="post-card__tags"><span className="tag">{p.category}</span><span className="tag tag--warn">{p.status}</span></div><h3 className="card__title card__title--spaced">{p.title}</h3><p className="card__excerpt">{p.excerpt}</p><p className="post-card__meta">{p.author} · {p.readMin} min read</p><Link to={`/blog/${p.slug}`} className="text-link">Read article</Link></article>
export const TeamCard=({m})=><article className="card team-card"><svg viewBox="0 0 80 80" role="img" aria-label={`Avatar placeholder for ${m.name}`} className="team-card__avatar"><circle cx="40" cy="40" r="40" fill="#F3EEFF"/><circle cx="40" cy="31" r="13" fill="#B996FF"/><path d="M14 68c3-14 14-21 26-21s23 7 26 21a40 40 0 0 1-52 0z" fill="#642CD7" opacity=".85"/></svg>
<h3 className="card__name">{m.name}</h3>{/* EDIT role text in src/data/team.js */}<p className="team-card__role">{m.role}</p>
{/* TODO: replace '#' with the real GitHub URL in src/data/team.js */}<a href={m.github} className="text-link team-card__link" aria-label={`GitHub profile of ${m.name} (link to be added)`}>GitHub</a></article>
export const CTA=()=><section className="cta"><div className="sec cta__inner"><h2 className="cta__title">Let’s Build Something Better</h2><p className="cta__text">Have a website idea or an existing website that needs improvement? Let’s discuss how EgNisher can help.</p><Link to="/contact" className="btn btn-light">Contact Us</Link></div></section>
const PATHS={layout:'M3 4h18v16H3zM3 9h18M9 9v11',phone:'M7 2h10v20H7zM11 18h2',bolt:'M13 2L4 14h7l-1 8 9-12h-7z',shield:'M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z',chat:'M4 4h16v12H8l-4 4z',code:'M8 7l-5 5 5 5M16 7l5 5-5 5',check:'M5 12l5 5 9-10',users:'M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0zM4 21c0-4 4-6 8-6s8 2 8 6',mail:'M3 5h18v14H3zM3 6l9 7 9-7',pin:'M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'}
const ICONS={'Web Design':'layout',Redesign:'layout','Landing Pages':'bolt',Mobile:'phone',Usability:'check',Planning:'chat',Content:'chat',Development:'code'}
export const Icon=({n,s=24})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[n]||PATHS.layout}/></svg>
export const Feature=({icon,title,text})=><div className="card"><span className="feature__icon"><Icon n={icon}/></span><h3 className="card__title card__title--tight">{title}</h3><p className="muted">{text}</p></div>
export function Reveal({children,className=''}){const r=useRef(null);const [on,setOn]=useState(false)
useEffect(()=>{const el=r.current
if(!el||!('IntersectionObserver' in window)){setOn(true);return}
const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect()}},{threshold:0.1})
io.observe(el)
return()=>{io.disconnect()}},[])
return <div ref={r} className={`reveal ${on?'in':''} ${className}`}>{children}</div>}
export const Section=({bg=false,id,children})=><section id={id} className={bg?'section--white':''}><Reveal className="sec">{children}</Reveal></section>
export function Counter({to,label}){const r=useRef(null);const [n,setN]=useState(0)
useEffect(()=>{const el=r.current
if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window)){setN(to);return}
let raf=0
const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now()
const tick=t=>{const p=Math.min(1,(t-t0)/1200);setN(Math.round(to*p));if(p<1)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick)})
io.observe(el)
return()=>{io.disconnect();cancelAnimationFrame(raf)}},[to])
return <div ref={r} className="counter"><p className="counter__value"><span aria-hidden="true">{n}</span><span className="visually-hidden">{to}</span></p><p className="counter__label">{label}</p></div>}
