import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { PageTitle, PostCard, CTA } from '../components/ui.jsx';
import { POSTS } from '../data/posts.js'

export default function Blog() {
    return <>
        <Seo title="Blog" description="Draft articles from the EgNisher Team about websites, design, usability and planning for growing businesses." path="/blog" />
        <PageTitle title="Blog" text="Draft articles from the EgNisher Team. They will be marked as published after review." /><section className="sec cards-3">{POSTS.map(p => <PostCard key={p.slug} p={p} />)}</section><CTA /></>
}
export function Post() {
    const { slug } = useParams(); const p = POSTS.find(x => x.slug === slug); if (!p) return <Navigate to="/404" replace />
    const rel = POSTS.filter(x => x.slug !== p.slug && x.category === p.category).concat(POSTS.filter(x => x.slug !== p.slug && x.category !== p.category)).slice(0, 3)
    return <><Seo title={p.title} description={p.excerpt} path={`/blog/${p.slug}`} /><section className="sec sec--narrow"><Link to="/blog" className="btn btn-o btn--sm back-link">Back to Blog</Link>
        <article><header className="article-header"><div className="tag-row article-header__tags"><span className="tag">{p.category}</span><span className="tag tag--warn">{p.status}</span></div><h1 className="article-header__title">{p.title}</h1><p className="article-header__meta">By {p.author} · {p.readMin} min read</p></header>
            <p className="article__excerpt">{p.excerpt}</p>{p.sections.map(([h, t]) => <section key={h} className="article__section"><h2 className="article__heading">{h}</h2><p className="muted">{t}</p></section>)}</article></section>
        <section className="section--white"><div className="sec"><h2 className="h2">Related articles</h2><div className="cards-row-3">{rel.map(r => <PostCard key={r.slug} p={r} />)}</div></div></section></>
}
