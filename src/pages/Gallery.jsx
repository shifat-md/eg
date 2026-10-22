import { useState } from 'react'; import Seo from '../components/Seo.jsx'; import Img from '../components/Img.jsx'; import Mock from '../components/Mock.jsx'; import { PageTitle, CTA, Section } from '../components/ui.jsx'; import { GALLERY, GALLERY_CATS } from '../data/content.js'
export default function Gallery() {
    const [cat, setCat] = useState('All'); const items = GALLERY.filter(g => cat === 'All' || g.cat === cat)
    return <><Seo title="Gallery" description="Concept visuals from EgNisher showing website, landing page, mobile and dashboard designs." path="/gallery" />
        <PageTitle title="Gallery" text="Concept visuals that show the kind of interfaces we design. These are not client work." />
        <Section><div className="filter-bar" role="group" aria-label="Filter gallery by category">{GALLERY_CATS.map(c => <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={`filter-btn ${cat === c ? 'is-active' : ''}`}>{c}</button>)}</div>
            <div className="cards-3 cards--roomy">{items.map(g => <figure key={g.file} className="card gallery-card zoom-group"><div className="gallery-card__frame"><Img file={g.file} alt={g.caption} fallback={<Mock v={g.v} />} className="img-box--zoom" /></div><figcaption className="gallery-card__caption"><span className="tag gallery-card__tag">{g.cat}</span><p className="gallery-card__title">{g.title}</p><p className="gallery-card__text">{g.caption}</p></figcaption></figure>)}</div></Section><CTA /></>
}
