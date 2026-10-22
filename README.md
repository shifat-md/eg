# EgNisher Website (React + Vanilla CSS)

EgNisher-এর মাল্টি-পেজ ওয়েবসাইট। প্রযুক্তি: React, JavaScript, Vanilla CSS (`src/index.css`), React Router, react-helmet-async (SEO মেটা)।

## ১. যা লাগবে
- Node.js ২০ বা নতুন (প্রস্তাবিত)
- npm

## ২. টার্মিনাল কমান্ড (শুরু থেকে শেষ)
```bash
npm install
npm run dev        # ডেভেলপমেন্ট: http://localhost:5173
```
প্রোডাকশন বিল্ড:
```bash
npm run build
npm run preview
```
সব রুট ঠিক আছে কিনা পরীক্ষা: `npm run check`

## ৩. লোগো
লোগো আগে থেকেই `public/images/logo.png` ফাইলে বসানো আছে। বদলাতে চাইলে একই নামে ফাইল রিপ্লেস করুন (ছবির অনুপাত বদলাবেন না)।

## ৪. ছবি জেনারেট করা ও যোগ করা
1. `image-prompts.md` খুলুন।
2. প্রতিটি ইংরেজি প্রম্পট দিয়ে আপনার পছন্দের AI টুলে ছবি বানান।
3. ডাউনলোড করা ফাইলের নাম ঠিক সেই নামে রাখুন, যা `image-prompts.md`-তে লেখা।
4. ফাইলটি `public/images/` ফোল্ডারে রাখুন।

ছবি না থাকলে সাইট ভাঙে না, "Image coming soon" দেখায়।

## ৫. কনটেন্ট এডিট করা
| কী বদলাবেন | ফাইল |
|---|---|
| টিম সদস্য (নাম, রোল, GitHub লিংক) | `src/data/team.js` |
| সার্ভিস | `src/data/services.js` |
| পোর্টফোলিও (এখন সব Concept/Sample) | `src/data/projects.js` |
| ব্লগ আর্টিকেল (সব Draft) | `src/data/posts.js` |
| ইমেইল, সোশ্যাল লিংক, ডোমেইন/canonical URL | `src/data/site.js` |
| FAQ | `src/data/faqs.js` |
| পলিসি পেজ (স্টার্টার টেমপ্লেট) | `src/data/policies.js` |
| প্রসেসের ধাপ, "Businesses we serve" তালিকা | `src/data/site.js` |

ডোমেইন বদলালে `src/data/site.js`-এ `url` ঠিক করুন। `npm run build` চালালে `sitemap.xml` ও `robots.txt` সেই ডোমেইনে নিজে থেকে তৈরি হয়।

**গুরুত্বপূর্ণ:** পলিসি পেজগুলো শুধু এডিটযোগ্য স্টার্টার টেমপ্লেট। প্রকাশের আগে আইনি পরামর্শ নিয়ে পরিবর্তন করুন। ব্লগ পোস্ট রিভিউয়ের পর `status` বদলে `'Published'` করুন।

## ৬. ডিপ্লয়
সব রুট (যেমন `/about`) রিফ্রেশে কাজ করার জন্য হোস্টে "সব রিকোয়েস্ট index.html-এ পাঠানো" নিয়ম লাগে।
- **Vercel:** GitHub রিপো ইমপোর্ট করুন। `vercel.json` আগে থেকেই আছে। Build: `npm run build`, Output: `dist`।
- **Netlify:** রিপো ইমপোর্ট করুন। `public/_redirects` আগে থেকেই আছে। Build: `npm run build`, Publish: `dist`।
- **GitHub Pages:** এটি সবচেয়ে ঝামেলার, কারণ রিফ্রেশে রুট ভাঙে। সহজ করতে `src/main.jsx`-এ `BrowserRouter`-এর বদলে `HashRouter` ব্যবহার করুন এবং `vite.config.js`-এ `base: '/আপনার-রিপো-নাম/'` দিন (হ্যাশ রাউটারে canonical/sitemap URL ঠিক থাকবে না, তাই Vercel বা Netlify সুপারিশ করা হয়)।

## ৭. কনট্যাক্ট ফর্ম
- শুধু React ফ্রন্টএন্ড দিয়ে নিরাপদে ইমেইল পাঠানো **সম্ভব নয়**। ইমেইল পাঠাতে সিক্রেট কী লাগে, যা ব্রাউজারের কোডে রাখা যায় না।
- `contact.egnisher@gmail.com`-এ আসল সাবমিশন পেতে ব্যাকএন্ড/সার্ভারলেস ফাংশন বা ইমেইল সার্ভিস লাগবে, যেমন Formspree, EmailJS, Netlify Forms, Resend (সার্ভারলেস ফাংশনসহ) বা Supabase Edge Functions। **প্রাইভেট API কী কখনো ফ্রন্টএন্ড কোডে রাখবেন না।**
- **সুপারিশকৃত পথ (সবচেয়ে সহজ): Formspree।**
  1. formspree.io-তে অ্যাকাউন্ট খুলে নতুন ফর্ম বানান এবং ইমেইল হিসেবে `contact.egnisher@gmail.com` দিন।
  2. পাওয়া endpoint URL (`https://formspree.io/f/...`) `src/config/contactConfig.js`-এ `endpoint`-এ বসান।
  3. `enabled: true` করুন।
  4. ফর্ম পরীক্ষা করুন এবং আপনার প্ল্যানের সীমা Formspree-র সাইটে দেখে নিন।
- এখন (`enabled: false`) "Send Message" চাপলে ভিজিটরের ইমেইল অ্যাপ খোলে। সাইট কোথাও দাবি করে না যে মেসেজ অটো পাঠানো হয়েছে। "Email Us Directly" বাটনও `mailto:` দিয়ে কাজ করে।
- ফর্মে ক্লায়েন্ট-সাইড ভ্যালিডেশন, লোডিং/সাকসেস/এরর অবস্থা এবং honeypot স্প্যাম ফিল্ড আছে।

## ফোল্ডার কাঠামো
`src/components` (Layout, Seo, UI কম্পোনেন্ট, ContactForm), `src/pages` (সব পেজ), `src/data` (সব কনটেন্ট), `src/config/contactConfig.js`, `scripts/` (sitemap জেনারেটর, রুট চেক), `public/` (ছবি, robots.txt, sitemap.xml)।
