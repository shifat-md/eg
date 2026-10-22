import { Routes, Route } from 'react-router-dom'; import Layout from './components/Layout.jsx'; import { POLICIES } from './data/policies.js'
import Home from './pages/Home.jsx'; import About from './pages/About.jsx'; import Services, { ServiceDetail } from './pages/Services.jsx'; import Portfolio, { ProjectDetail } from './pages/Portfolio.jsx'
import Blog, { Post } from './pages/Blog.jsx'; import Contact from './pages/Contact.jsx'; import Faq from './pages/Faq.jsx'; import Careers from './pages/Careers.jsx'; import Process from './pages/Process.jsx'; import Policy from './pages/Policy.jsx'; import Gallery from './pages/Gallery.jsx'; import NotFound from './pages/NotFound.jsx'
export default function App() {
    return <Routes><Route element={<Layout />}>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} /><Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} /><Route path="/portfolio/:slug" element={<ProjectDetail />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:slug" element={<Post />} />
        <Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} /><Route path="/faq" element={<Faq />} /><Route path="/careers" element={<Careers />} /><Route path="/process" element={<Process />} />
        {Object.entries(POLICIES).map(([k, d]) => <Route key={k} path={`/${k}`} element={<Policy slug={k} doc={d} />} />)}
        <Route path="*" element={<NotFound />} /></Route></Routes>
}
