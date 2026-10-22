import {Helmet} from 'react-helmet-async';import {SITE} from '../data/site.js'
export default function Seo({title,description,path='/'}){
const t=title?`${title} | ${SITE.name}`:`${SITE.name} | Web Development & Digital Solutions`;const url=SITE.url+path
return <Helmet><title>{t}</title><meta name="description" content={description}/><link rel="canonical" href={url}/>
<meta property="og:title" content={t}/><meta property="og:description" content={description}/><meta property="og:url" content={url}/><meta property="og:type" content="website"/>
<meta property="og:image" content={SITE.url+SITE.ogImage}/><meta name="twitter:card" content="summary_large_image"/></Helmet>}
