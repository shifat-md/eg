import {useEffect,useState} from 'react';import Img from './Img.jsx';import Mock from './Mock.jsx'
const SLIDES=[['Concept visual: a clear, modern business website','site'],['Concept visual: a mobile-first layout','mobile'],['Concept visual: a focused landing page','landing']]
export default function HeroSlider(){const [i,setI]=useState(0);const [pause,setPause]=useState(false)
useEffect(()=>{if(pause||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
const t=window.setInterval(()=>setI(x=>(x+1)%SLIDES.length),5000)
return()=>{window.clearInterval(t)}},[pause])
return <div onMouseEnter={()=>setPause(true)} onMouseLeave={()=>setPause(false)} onFocus={()=>setPause(true)} onBlur={()=>setPause(false)} role="group" aria-roledescription="carousel" aria-label="Featured concept visuals">
<div className="hero-slider__frame">{SLIDES.map(([cap,v],n)=><div key={v} aria-hidden={n!==i} className={`hero-slider__slide ${n===i?'is-active':''}`}>
{n===0?<Img eager file="egnisher-hero-web-development.webp" ratio="4/3" alt="Abstract web development interface with purple and teal accents" fallback={<Mock v="site"/>} className="img-box--flush"/>:<Mock v={v}/>}</div>)}</div>
<div className="hero-slider__bar"><p className="hero-slider__caption" aria-live="polite">{SLIDES[i][0]}</p><div className="hero-slider__dots">{SLIDES.map((s,n)=><button key={n} type="button" aria-label={`Show slide ${n+1}: ${s[0]}`} aria-current={n===i} onClick={()=>setI(n)} className={`hero-slider__dot ${n===i?'is-active':''}`}/>)}</div></div></div>}
