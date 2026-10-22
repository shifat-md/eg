# EgNisher — ছবির তালিকা ও AI প্রম্পট

ওয়েবসাইট ছবি ছাড়াও ঠিকভাবে চলে (ছবি না থাকলে "Image coming soon" প্লেসহোল্ডার দেখায়)। প্রতিটি ছবি জেনারেট করে নিচের **ঠিক ফাইলের নামে** `public/images/` ফোল্ডারে রাখুন। লোগো আলাদা: `public/images/logo.png` (আগে থেকেই বসানো আছে)।

## 1. Hero Visual
- কাজ: Home page hero section-এর ডান পাশে ব্যবহার হবে।
- ফাইলের নাম: egnisher-hero-web-development.webp
- সাইজ: 1200 × 900 px
- রেশিও: 4:3
- কোথায় রাখব: /public/images/egnisher-hero-web-development.webp
- English image prompt: "Modern abstract 3D web development workspace, purple #642CD7 and teal #14B8A6 accents, clean off-white background, floating browser UI cards, premium minimal agency style, soft shadows, no text, no logo, 4:3 composition"
- Alt text: "Abstract web development interface with purple and teal accents"
- কোথায় ব্যবহার হবে: Home page hero section (src/pages/Home.jsx)
- প্রয়োজনীয়তা: Essential

## 2. About Team Collaboration
- কাজ: About page-এ "Who we are" লেখার পাশে ব্যবহার হবে।
- ফাইলের নাম: egnisher-about-team-collaboration.webp
- সাইজ: 1200 × 800 px
- রেশিও: 3:2
- কোথায় রাখব: /public/images/egnisher-about-team-collaboration.webp
- English image prompt: "Abstract flat illustration of a small team collaborating on a website design, laptops and floating UI cards, faceless simple characters, purple #642CD7 and teal #14B8A6 accents, off-white background, clean modern style, no text, no logo, 3:2 composition"
- Alt text: "Abstract illustration of collaborative web development work"
- কোথায় ব্যবহার হবে: About page (src/pages/About.jsx)
- প্রয়োজনীয়তা: Optional

## 3. Social Share Card (Open Graph)
- কাজ: Facebook, LinkedIn, X ইত্যাদিতে লিংক শেয়ার করলে এই ছবি দেখাবে।
- ফাইলের নাম: egnisher-og-share-card.jpg
- সাইজ: 1200 × 630 px
- রেশিও: 1.91:1
- কোথায় রাখব: /public/images/egnisher-og-share-card.jpg
- English image prompt: "Minimal off-white banner with generous empty space on the left for a logo, abstract purple #642CD7 and teal #14B8A6 browser window shapes on the right, soft gradients, premium agency style, no text, 1.91:1 composition"
- Alt text: "EgNisher web development and digital solutions"
- কোথায় ব্যবহার হবে: প্রতিটি পেজের og:image মেটা ট্যাগ (src/components/Seo.jsx, src/data/site.js)
- প্রয়োজনীয়তা: Essential (সোশ্যাল শেয়ারিংয়ের জন্য)

---
# Gallery ছবি (Gallery পেজ ও Home-এর Concept gallery)
সবগুলো Optional। ছবি না থাকলে CSS দিয়ে তৈরি concept visual দেখায়। সব ছবি: 1200 × 900 px, রেশিও 4:3, ফোল্ডার: /public/images/

## 4. Business website
- ফাইলের নাম: egnisher-gallery-business-website.webp
- কোথায় রাখব: /public/images/egnisher-gallery-business-website.webp
- English image prompt: "Clean browser mockup of a modern business website homepage, purple #642CD7 and teal #14B8A6 accents, placeholder blocks instead of text, off-white background, soft shadows, no logo, 4:3 composition"
- Alt text: "Concept visual: a clear multi-page layout for a service business."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Websites)
- প্রয়োজনীয়তা: Optional

## 5. Hospitality homepage
- ফাইলের নাম: egnisher-gallery-hospitality-website.webp
- কোথায় রাখব: /public/images/egnisher-gallery-hospitality-website.webp
- English image prompt: "Browser mockup of a boutique hotel website with large image area and booking bar, calm purple and teal palette, abstract placeholders, no readable text, no real brand, 4:3 composition"
- Alt text: "Concept visual: an enquiry-focused homepage for a small hospitality brand."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Websites)
- প্রয়োজনীয়তা: Optional

## 6. Offer landing page
- ফাইলের নাম: egnisher-gallery-landing-offer.webp
- কোথায় রাখব: /public/images/egnisher-gallery-landing-offer.webp
- English image prompt: "Landing page mockup with a bold headline block, product illustration, three benefit tiles and one button, purple gradient accent, no readable text, 4:3 composition"
- Alt text: "Concept visual: one message and one clear call to action."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Landing Pages)
- প্রয়োজনীয়তা: Optional

## 7. Campaign landing page
- ফাইলের নাম: egnisher-gallery-campaign-landing.webp
- কোথায় রাখব: /public/images/egnisher-gallery-campaign-landing.webp
- English image prompt: "Campaign landing page mockup with hero, three steps and a short form, teal and purple accents, minimal, no readable text, 4:3 composition"
- Alt text: "Concept visual: a campaign page with a short enquiry form."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Landing Pages)
- প্রয়োজনীয়তা: Optional

## 8. Mobile navigation
- ফাইলের নাম: egnisher-gallery-mobile-navigation.webp
- কোথায় রাখব: /public/images/egnisher-gallery-mobile-navigation.webp
- English image prompt: "Smartphone mockup showing an open mobile menu with large tap targets, purple and teal accents, off-white background, no readable text, 4:3 composition"
- Alt text: "Concept visual: a tap-friendly menu on a phone."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Mobile)
- প্রয়োজনীয়তা: Optional

## 9. Mobile content cards
- ফাইলের নাম: egnisher-gallery-mobile-cards.webp
- কোথায় রাখব: /public/images/egnisher-gallery-mobile-cards.webp
- English image prompt: "Smartphone mockup with stacked rounded content cards and generous spacing, purple and teal accents, no readable text, 4:3 composition"
- Alt text: "Concept visual: readable cards and spacing on a small screen."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Mobile)
- প্রয়োজনীয়তা: Optional

## 10. Redesign concept
- ফাইলের নাম: egnisher-gallery-redesign-concept.webp
- কোথায় রাখব: /public/images/egnisher-gallery-redesign-concept.webp
- English image prompt: "Split before-and-after website mockup, left cluttered grey layout, right clean purple and teal layout, no readable text, 4:3 composition"
- Alt text: "Concept visual: simplifying structure and improving readability."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Redesign)
- প্রয়োজনীয়তা: Optional

## 11. Dashboard interface
- ফাইলের নাম: egnisher-gallery-dashboard-interface.webp
- কোথায় রাখব: /public/images/egnisher-gallery-dashboard-interface.webp
- English image prompt: "Clean web dashboard mockup with sidebar, stat cards and a chart, purple and teal accents, placeholder content, no readable text, 4:3 composition"
- Alt text: "Concept visual: a simple data dashboard interface built with React."
- কোথায় ব্যবহার হবে: Gallery পেজ (ক্যাটাগরি: Web Apps)
- প্রয়োজনীয়তা: Optional
