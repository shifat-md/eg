// Renders every route on the server to catch crashes, and checks one H1 + a title per route. Run: npm run check
import {createServer} from 'vite';import {readFileSync} from 'node:fs'
import React from 'react';import {renderToString} from 'react-dom/server';import {StaticRouter} from 'react-router-dom/server.js';
const s=await createServer({server:{middlewareMode:true},appType:'custom',logLevel:'error'})
const {HelmetProvider}=await s.ssrLoadModule('react-helmet-async')
const App=(await s.ssrLoadModule('/src/App.jsx')).default
const sm=readFileSync('public/sitemap.xml','utf8');const paths=[...sm.matchAll(/example\.com(\S*?)<\/loc>/g)].map(m=>m[1]||'/').concat(['/definitely-missing'])
let bad=0
for(const p of paths){const ctx={};const html=renderToString(React.createElement(HelmetProvider,{context:ctx},React.createElement(StaticRouter,{location:p},React.createElement(App))))
const h1=(html.match(/<h1[ >]/g)||[]).length;const t=ctx.helmet?.title?.toString()||'';if(h1!==1||!t){bad++;console.log('PROBLEM',p,'h1:',h1,'title:',!!t)}}
console.log(paths.length,'routes checked,',bad,'problems');await s.close();process.exit(bad?1:0)
