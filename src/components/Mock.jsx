// CSS-made UI concept visual used when a real image file is not available yet.
// Each variant maps to a header gradient (.mock__hero--<variant> in index.css) and a number of grid cells.
const V={site:3,hotel:3,landing:2,redesign:4,mobile:2,app:4}
export default function Mock({v='site'}){const k=V[v]?v:'site';const n=V[k]
return <div aria-hidden="true" className="mock"><div className={`mock__window ${v==='mobile'?'mock__window--narrow':''}`}>
<div className="mock__dots"><i className="mock__dot mock__dot--light"/><i className="mock__dot mock__dot--teal"/><i className="mock__dot mock__dot--line"/></div>
<div className={`mock__hero mock__hero--${k}`}/><div className="mock__grid" style={{gridTemplateColumns:`repeat(${n},1fr)`}}>{Array.from({length:n}).map((_,i)=><div key={i} className="mock__cell"/>)}</div><div className="mock__line"/></div></div>}
