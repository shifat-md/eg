// Runs automatically before `npm run build`. Uses SITE.url from src/data/site.js.
import {writeFileSync} from 'node:fs';import {SITE} from '../src/data/site.js';import {SERVICES} from '../src/data/services.js';import {PROJECTS} from '../src/data/projects.js';import {POSTS} from '../src/data/posts.js';import {POLICIES} from '../src/data/policies.js'
const paths=['/','/about','/services','/portfolio','/gallery','/blog','/contact','/faq','/careers','/process',...Object.keys(POLICIES).map(k=>'/'+k),...SERVICES.map(s=>'/services/'+s.slug),...PROJECTS.map(p=>'/portfolio/'+p.slug),...POSTS.map(p=>'/blog/'+p.slug)]
writeFileSync('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map(p=>`  <url><loc>${SITE.url}${p}</loc></url>`).join('\n')}\n</urlset>\n`)
writeFileSync('public/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log('sitemap:',paths.length,'urls')
