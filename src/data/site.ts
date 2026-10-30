import type { Localized } from "../i18n/LanguageContext";

const L = (en: string, km: string): Localized => ({ en, km });

export const telegram = {
  url: "https://t.me/+85569271887",
  display: "069 271 887",
};

export const nav = [
  { id: "work", label: L("Work", "ស្នាដៃ") },
  { id: "services", label: L("Services", "សេវាកម្ម") },
  { id: "studio", label: L("Studio", "អំពីយើង") },
  { id: "pricing", label: L("Pricing", "តម្លៃ") },
  { id: "faq", label: L("FAQ", "សំណួរ") },
  { id: "contact", label: L("Contact", "ទំនាក់ទំនង") },
];

export const hero = {
  eyebrow: L("Independent software studio · Cambodia", "ស្ទូឌីយោសូហ្វវែរឯករាជ្យ · កម្ពុជា"),
  titleLead: L("Digital craft for", "ភាពច្នៃប្រឌិតឌីជីថលសម្រាប់"),
  titleAccent: L("ambitious businesses.", "អាជីវកម្មដែលមានមហិច្ឆតា។"),
  description: L(
    "We design and build refined websites, SaaS platforms, and mobile apps for Cambodian businesses. Khmer soul. Global standards. Direct collaboration with the engineer who writes the code.",
    "យើងរចនា និងបង្កើតគេហទំព័រ វេទិកា SaaS និងកម្មវិធីទូរស័ព្ទដ៏ប្រណិត សម្រាប់អាជីវកម្មកម្ពុជា។ ព្រលឹងខ្មែរ។ ស្តង់ដារសកល។ ធ្វើការផ្ទាល់ជាមួយអ្នកអភិវឌ្ឍន៍ដែលសរសេរកូដ។",
  ),
  primaryCta: L("Start a project", "ចាប់ផ្តើមគម្រោង"),
  secondaryCta: L("Explore selected work", "មើលស្នាដៃ"),
  availability: L("Available for select projects — Q4 2026", "ទទួលគម្រោងមួយចំនួន — ត្រីមាសទី៤ ២០២៦"),
  cardEyebrow: L("Featured platform", "វេទិកាពិសេស"),
  cardMeta: L("E-commerce SaaS · 2026", "SaaS ពាណិជ្ជកម្ម · ២០២៦"),
  cardLive: L("Live", "ដំណើរការ"),
  cardNote: L("Fifteen shipped products. One standard of craft.", "ផលិតផល ១៥ ដែលបានបញ្ចប់។ ស្តង់ដារតែមួយនៃភាពប្រណិត។"),
  khqr: L("KHQR verified", "KHQR ផ្ទៀងផ្ទាត់"),
  secureBilling: L("Secure billing", "ការទូទាត់មានសុវត្ថិភាព"),
  productsShipped: L("Products shipped", "ផលិតផលបានបញ្ចប់"),
  builtFor: L("Built for", "សម្រាប់"),
  builtForValue: L("Cambodia", "កម្ពុជា"),
  languagePair: L("Khmer + English", "ខ្មែរ + អង់គ្លេស"),
  scroll: L("Scroll to discover", "រំកិលដើម្បីមើល"),
};

export const stats = [
  { value: "15", label: L("Products shipped", "ផលិតផលបានបញ្ចប់") },
  { value: "03", label: L("Play Store apps", "កម្មវិធីលើ Play Store") },
  { value: "05", label: L("Technology stacks", "បច្ចេកវិទ្យា") },
  { value: "03", label: L("Platforms", "វេទិកា") },
];

export const marquee = [
  "React",
  "TypeScript",
  "Vue.js",
  "Flutter",
  "Kotlin",
  "Laravel",
  "Supabase",
  "Spring Boot",
  "AWS",
  "Gemini AI",
  "KHQR",
  "Tailwind CSS",
];

export const workSection = {
  kicker: L("Selected work", "ស្នាដៃជ្រើសរើស"),
  title: L("Products, not promises.", "ផលិតផលពិត មិនใช่ការសន្យា។"),
  description: L(
    "Fifteen complete applications across commerce, hospitality, education, agriculture, finance, and mobile. Every project below shipped — built end to end, from database schema to the final pixel.",
    "កម្មវិធីពេញលេញចំនួន ១៥ ក្នុងវិស័យពាណិជ្ជកម្ម បដិសណ្ឋារកិច្ច អប់រំ កសិកម្ម ហិរញ្ញវត្ថុ និងទូរស័ព្ទ។ គម្រោងទាំងអស់ខាងក្រោមបានបញ្ចប់ និងដំណើរការ — ពីការរចនាទិន្នន័យដល់ភីកសែលចុងក្រោយ។",
  ),
  filtersLabel: L("Filter by discipline", "ត្រងតាមប្រភេទ"),
  viewCase: L("View case study", "មើលករណីសិក្សា"),
  viewLive: L("View live", "មើលផ្ទាល់"),
  allProjects: L("All 15 projects", "គម្រោងទាំង ១៥"),
  stack: L("Stack", "បច្ចេកវិទ្យា"),
  features: L("What it does", "មុខងារសំខាន់"),
  close: L("Close", "បិទ"),
  status: L("Status", "ស្ថានភាព"),
  discipline: L("Discipline", "ប្រភេទ"),
  year: L("Year", "ឆ្នាំ"),
  similar: L("Start a similar project", "ចាប់ផ្តើមគម្រោងស្រដៀង"),
  showing: L("Showing", "កំពុងបង្ហាញ"),
  of: L("of", "ក្នុងចំណោម"),
  projectsLabel: L("projects", "គម្រោង"),
};

export const servicesSection = {
  kicker: L("What we build", "អ្វីដែលយើងបង្កើត"),
  title: L("Considered digital products.", "ផលិតផលឌីជីថលដែលបានគិតគូរ។"),
  description: L(
    "From a single-page presence to a multi-tenant platform, every engagement is scoped with the same care: clear pricing, a direct line to the developer, and a finish worth keeping.",
    "ចាប់ពីគេហទំព័រមួយទំព័រ ដល់វេទិកាពហុអ្នកជួល គ្រប់គម្រោងត្រូវបានកំណត់ដោយការយកចិត្តទុកដាក់ដូចគ្នា៖ តម្លៃច្បាស់លាស់ ទំនាក់ទំនងផ្ទាល់ជាមួយអ្នកអភិវឌ្ឍន៍ និងគុណភាពដែលគួររក្សា។",
  ),
  startingAt: L("from", "ចាប់ពី"),
  discuss: L("Discuss this service", "ពិភាក្សាសេវានេះ"),
  aside: L(
    "Ways to work together, from a single page to a full platform.",
    "វិធីធ្វើការជាមួយគ្នា ចាប់ពីទំព័រតែមួយ ដល់វេទិកាពេញលេញ។",
  ),
};

export const services = [
  {
    no: "01",
    icon: "LayoutTemplate",
    title: L("Starter business websites", "គេហទំព័រអាជីវកម្មចាប់ផ្តើម"),
    description: L(
      "A clean, fast single-page presence for local shops, clinics, and service providers ready to be found on Google.",
      "គេហទំព័រមួយទំព័រដ៏ស្អាត និងលឿន សម្រាប់ហាងក្នុងស្រុក គ្លីនិក និងអ្នកផ្តល់សេវា ដែលចង់ឱ្យគេរកឃើញលើ Google។",
    ),
    price: "$150",
    unit: L("one-time", "ម្តង"),
    delivery: L("3–5 business days", "៣–៥ ថ្ងៃធ្វើការ"),
    monthly: null,
    bullets: [
      L("Mobile-first responsive layout", "ប្លង់ឆ្លើយតបតាមទូរស័ព្ទជាមុន"),
      L("Google Maps and contact links", "Google Maps និងតំណទំនាក់ទំនង"),
      L("Telegram & WhatsApp click-to-chat", "ចុចជជែកតាម Telegram និង WhatsApp"),
      L("Basic on-page SEO", "SEO មូលដ្ឋានលើទំព័រ"),
    ],
  },
  {
    no: "02",
    icon: "UtensilsCrossed",
    title: L("Hospitality websites", "គេហទំព័រសណ្ឋាគារ និងភោជនីយដ្ឋាន"),
    description: L(
      "Visual-first sites for hotels, resorts, cafés, and restaurants with room showcases, interactive menus, and booking inquiries.",
      "គេហទំព័រផ្តោតលើរូបភាព សម្រាប់សណ្ឋាគារ រីសត កាហ្វេ និងភោជនីយដ្ឋាន ជាមួយការបង្ហាញបន្ទប់ ម៉ឺនុយអន្តរកម្ម និងការសាកសួរកក់។",
    ),
    price: "$300",
    unit: L("one-time", "ម្តង"),
    delivery: L("7–10 business days", "៧–១០ ថ្ងៃធ្វើការ"),
    monthly: null,
    bullets: [
      L("Interactive menu with categories", "ម៉ឺនុយអន្តរកម្មតាមប្រភេទ"),
      L("Room gallery and rate calculator", "វិចិត្រសាលបន្ទប់ និងការគណនាតម្លៃ"),
      L("Bilingual Khmer and English", "ពីរភាសា ខ្មែរ និងអង់គ្លេស"),
      L("Direct reservation forms", "ទម្រង់សាកសួរកក់ផ្ទាល់"),
    ],
  },
  {
    no: "03",
    icon: "ShoppingBag",
    title: L("E-commerce storefronts", "ហាងអនឡាញ"),
    description: L(
      "Product catalogue stores with a considered shopping experience, cart flow, and local mobile payment readiness.",
      "ហាងបង្ហាញផលិតផល ជាមួយបទពិសោធន៍ទិញទំនិញដែលបានគិតគូរ កន្ត្រកទិញ និងការត្រៀមទូទាត់តាមទូរស័ព្ទ។",
    ),
    price: "$300",
    unit: L("one-time", "ម្តង"),
    delivery: L("7–12 business days", "៧–១២ ថ្ងៃធ្វើការ"),
    monthly: null,
    bullets: [
      L("Responsive product grid and filters", "បញ្ជីផលិតផល និងតម្រងឆ្លើយតប"),
      L("Client-side cart and checkout drawer", "កន្ត្រក និងផ្ទាំងទូទាត់"),
      L("Telegram / WhatsApp order dispatch", "បញ្ជូនការបញ្ជាទិញតាម Telegram / WhatsApp"),
      L("Bakong-ready payment experience", "បទពិសោធន៍ទូទាត់ត្រៀម Bakong"),
    ],
  },
  {
    no: "04",
    icon: "PanelsTopLeft",
    title: L("Custom web applications", "កម្មវិធីវេបតាមតម្រូវការ"),
    description: L(
      "Operations platforms, admin dashboards, school systems, and inventory tools built around the way your team actually works.",
      "វេទិកាប្រតិបត្តិការ ផ្ទាំងគ្រប់គ្រង ប្រព័ន្ធសាលារៀន និងឧបករណ៍ស្តុក ដែលបង្កើតតាមរបៀបដែលក្រុមរបស់អ្នកធ្វើការពិតប្រាកដ។",
    ),
    price: "$600",
    unit: L("starting", "ចាប់ពី"),
    delivery: L("Scope-based timeline", "តាមទំហំការងារ"),
    monthly: L("+ required monthly care", "+ ថែទាំប្រចាំខែចាំបាច់"),
    bullets: [
      L("Role-based security and authentication", "សុវត្ថិភាព និងការផ្ទៀងផ្ទាត់តាមតួនាទី"),
      L("Database schema and CRUD workflows", "ការរចនាទិន្នន័យ និងលំហូរ CRUD"),
      L("Real-time charts and alerts", "ក្រាហ្វិក និងការជូនដំណឹងពេលវេលាពិត"),
      L("Exportable reports and CSV", "របាយការណ៍ និង CSV នាំចេញ"),
    ],
  },
  {
    no: "05",
    icon: "Smartphone",
    title: L("Mobile applications", "កម្មវិធីទូរស័ព្ទ"),
    description: L(
      "Cross-platform iOS and Android apps with the polish and reliability of a product built for daily use — not a demo.",
      "កម្មវិធី iOS និង Android ឆ្លងវេទិកា ជាមួយភាពប្រណិត និងភាពជឿជាក់នៃផលិតផលសម្រាប់ប្រើប្រចាំថ្ងៃ។",
    ),
    price: "$600",
    unit: L("starting", "ចាប់ពី"),
    delivery: L("Scope-based timeline", "តាមទំហំការងារ"),
    monthly: L("+ required monthly care", "+ ថែទាំប្រចាំខែចាំបាច់"),
    bullets: [
      L("iOS and Android from one codebase", "iOS និង Android ពីកូដតែមួយ"),
      L("Push notifications and offline storage", "ការជូនដំណឹង និងការផ្ទុកក្រៅបណ្តាញ"),
      L("Maps, routes, and camera flows", "ផែនទី ផ្លូវ និងមុខងារកាមេរ៉ា"),
      L("Play Store / App Store guidance", "ការណែនាំ Play Store / App Store"),
    ],
  },
  {
    no: "06",
    icon: "ShieldCheck",
    title: L("Care & maintenance", "ថែទាំ និងគាំទ្រ"),
    description: L(
      "Monthly technical care, uptime monitoring, health checks, and content updates so the product keeps feeling new.",
      "ការថែទាំបច្ចេកទេសប្រចាំខែ ការត្រួតពិនិត្យដំណើរការ និងការអាប់ដេតខ្លឹមសារ ដើម្បីឱ្យផលិតផលនៅតែល្អ។",
    ),
    price: "$10",
    unit: L("/ month", "/ ខែ"),
    delivery: L("Monthly care plan", "គម្រោងថែទាំប្រចាំខែ"),
    monthly: null,
    bullets: [
      L("Automated uptime monitoring", "ការត្រួតពិនិត្យដំណើរការស្វ័យប្រវត្តិ"),
      L("Security patches and SSL checks", "ការជួសជុលសុវត្ថិភាព និងពិនិត្យ SSL"),
      L("Content and menu updates", "ការអាប់ដេតខ្លឹមសារ និងម៉ឺនុយ"),
      L("Direct developer support", "ការគាំទ្រផ្ទាល់ពីអ្នកអភិវឌ្ឍន៍"),
    ],
  },
];

export const studio = {
  kicker: L("The studio", "ស្ទូឌីយោ"),
  title: L("Small by design. Serious by habit.", "តូចដោយចេតនា។ ធ្ងន់ធ្ងរដោយទម្លាប់។"),
  lead: L(
    "Zakury Technologies is an independent software studio led by Seth Sochetra, a full-stack developer and educator from Battambang.",
    "Zakury Technologies គឺជាស្ទូឌីយោសូហ្វវែរឯករាជ្យ ដឹកនាំដោយ សេត សុជេត្រា អ្នកអភិវឌ្ឍន៍ Full-Stack និងជាគ្រូបង្រៀនមកពីខេត្តបាត់ដំបង។",
  ),
  body1: L(
    "We do not outsource the work and we do not hide behind account managers. You work directly with the person designing your interface and writing every line of production code.",
    "យើងមិនបញ្ជូនការងារទៅខាងក្រៅ ហើយមិនលាក់ខ្លួននៅពីក្រោយអ្នកគ្រប់គ្រងគម្រោង។ អ្នកធ្វើការផ្ទាល់ជាមួយអ្នករចនាប្លង់ និងអ្នកសរសេរកូដទាំងអស់។",
  ),
  body2: L(
    "The work is grounded in real Cambodian products — shops, restaurants, schools, farms, and banks. We care about slow connections, Khmer typography, and the details that make software feel effortless.",
    "ការងាររបស់យើងផ្អែកលើផលិតផលកម្ពុជាពិត — ហាង ភោជនីយដ្ឋាន សាលារៀន កសិកម្ម និងធនាគារ។ យើងខ្វល់ពីអ៊ីនធឺណិតយឺត អក្សរខ្មែរ និងព័ត៌មានលម្អិតដែលធ្វើឱ្យកម្មវិធីមានភាពរលូន។",
  ),
  quote: L(
    "“Build it completely, or do not call it finished.”",
    "«បង្កើតឱ្យពេញលេញ ឬកុំហៅវាថាបានបញ្ចប់។»",
  ),
  quoteBy: L("Seth Sochetra, Founder & Engineer", "សេត សុជេត្រា ស្ថាបនិក និងវិស្វករ"),
  cta: L("Work with us directly", "ធ្វើការជាមួយយើងផ្ទាល់"),
  valuesKicker: L("What you can expect", "អ្វីដែលអ្នកអាចរំពឹង"),
  est: L("Est. Cambodia", "បង្កើតនៅកម្ពុជា"),
  metrics: [
    { value: "0%", label: L("Middlemen", "ឈ្មោះកណ្តាល") },
    { value: "100%", label: L("Direct developer", "អ្នកអភិវឌ្ឍន៍ផ្ទាល់") },
    { value: "<1.2s", label: L("4G load target", "គោលដៅផ្ទុក 4G") },
  ],
  values: [
    {
      icon: "Gem",
      title: L("Transparent pricing", "តម្លៃច្បាស់លាស់"),
      description: L(
        "Fixed, itemised quotes in USD. No surprise invoices or unpredictable agency hours.",
        "សម្រង់តម្លៃជាដុល្លារ ច្បាស់លាស់ និងមិនប្រែប្រួល។ គ្មានវិក្កយបត្រភ្ញាក់ផ្អើល។",
      ),
    },
    {
      icon: "Fingerprint",
      title: L("One accountable maker", "អ្នកទទួលខុសត្រូវម្នាក់"),
      description: L(
        "The developer you meet is the developer who ships. No handoffs, no lost context.",
        "អ្នកអភិវឌ្ឍន៍ដែលអ្នកជួប គឺជាអ្នកបញ្ចប់ការងារ។ គ្មានការបញ្ជូនការងារ។",
      ),
    },
    {
      icon: "Gauge",
      title: L("Fast on Cambodian networks", "លឿនលើបណ្តាញកម្ពុជា"),
      description: L(
        "Lightweight builds tuned for real 4G connections — not just a fast office Wi-Fi.",
        "ការសាងសង់ស្រាល សម្រួលសម្រាប់ 4G ពិត មិនមែនត្រឹម Wi-Fi ការិយាល័យ។",
      ),
    },
    {
      icon: "HeartHandshake",
      title: L("Care after launch", "ការថែទាំក្រោយចេញផ្សាយ"),
      description: L(
        "We stay reachable after handover, with care plans that keep the product healthy.",
        "យើងនៅទំនាក់ទំនងបានក្រោយប្រគល់ការងារ ជាមួយគម្រោងថែទាំដើម្បីរក្សាផលិតផលឱ្យល្អ។",
      ),
    },
  ],
};

export const processSection = {
  kicker: L("How we work", "របៀបដែលយើងធ្វើការ"),
  title: L("A calm, transparent process.", "ដំណើរការស្ងប់ស្ងាត់ និងច្បាស់លាស់។"),
  description: L(
    "Four clear stages, one point of contact, and no mystery between the first conversation and launch day.",
    "ដំណាក់កាលច្បាស់លាស់ចំនួនបួន ទំនាក់ទំនងតែមួយ និងគ្មានអ្វីអាថ៌កំបាំងពីការសន្ទនាដំបូងដល់ថ្ងៃចេញផ្សាយ។",
  ),
  steps: [
    {
      no: "01",
      title: L("Listen & scope", "ស្តាប់ និងកំណត់វិសាលភាព"),
      description: L(
        "A direct conversation about the business, the audience, and the outcome. You receive a fixed scope and price.",
        "ការសន្ទនាផ្ទាល់អំពីអាជីវកម្ម អតិថិជន និងលទ្ធផលដែលចង់បាន។ អ្នកទទួលបានវិសាលភាព និងតម្លៃច្បាស់លាស់។",
      ),
    },
    {
      no: "02",
      title: L("Design the system", "រចនាប្រព័ន្ធ"),
      description: L(
        "Typography, layout, flow, and data structure are decided together before code becomes expensive to change.",
        "អក្សរ ប្លង់ លំហូរ និងរចនាសម្ព័ន្ធទិន្នន័យ ត្រូវបានសម្រេចរួមគ្នា មុនពេលកូដពិបាកកែ។",
      ),
    },
    {
      no: "03",
      title: L("Build in the open", "បង្កើតដោយតម្លាភាព"),
      description: L(
        "Regular previews on real devices. You see progress as it happens, not a surprise reveal at the end.",
        "មើលជាមុនជាប្រចាំលើឧបករណ៍ពិត។ អ្នកឃើញការរីកចម្រើនជាបន្តបន្ទាប់ មិនមែនរង់ចាំដល់ចុងក្រោយ។",
      ),
    },
    {
      no: "04",
      title: L("Launch & care", "ចេញផ្សាយ និងថែទាំ"),
      description: L(
        "Deployment, handover, and documentation. Optional monthly care keeps the product secure and current.",
        "ការដំណើរការ ការប្រគល់ការងារ និងឯកសារ។ គម្រោងថែទាំប្រចាំខែជាជម្រើស រក្សាផលិតផលឱ្យមានសុវត្ថិភាព។",
      ),
    },
  ],
};

export const pricingSection = {
  kicker: L("Investment", "ការវិនិយោគ"),
  title: L("One-time builds. Honest monthly care.", "សាងសង់ម្តង។ ថែទាំប្រចាំខែស្មោះត្រង់។"),
  description: L(
    "Static websites are a one-time build with optional care. Backend platforms and mobile apps include a required monthly plan for hosting, database, backups, monitoring, and security. Every scope is agreed in writing.",
    "គេហទំព័រស្ថិតិជាការសាងសង់ម្តង ជាមួយការថែទាំស្រេចចិត្ត។ វេទិកាមាន backend និងកម្មវិធីទូរស័ព្ទ រួមមានគម្រោងថែទាំប្រចាំខែចាំបាច់ សម្រាប់ hosting ទិន្នន័យ ការបម្រុងទុក ការត្រួតពិនិត្យ និងសុវត្ថិភាព។ គ្រប់វិសាលភាពព្រមព្រៀងជាលាយលក្ខណ៍អក្សរ។",
  ),
  popular: L("Most chosen", "ពេញនិយមបំផុត"),
  choose: L("Choose plan", "ជ្រើសកញ្ចប់"),
  request: L("Request a quote", "ស្នើសុំតម្លៃ"),
  note: L(
    "Static sites are one-time. Backend apps also carry a required monthly care plan.",
    "គេហទំព័រស្ថិតិជាតម្លៃម្តង។ កម្មវិធី backend ក៏មានគម្រោងថែទាំប្រចាំខែចាំបាច់ផងដែរ។",
  ),
  staticLabel: L("Static website · one-time", "គេហទំព័រស្ថិតិ · ម្តង"),
  backendLabel: L("Backend app · build + monthly", "កម្មវិធី backend · សាងសង់ + ប្រចាំខែ"),
  requiredCare: L("Required care from $25 / month", "ថែទាំចាំបាច់ចាប់ពី $25 / ខែ"),
  perMonth: L("/ month", "/ ខែ"),
  maintenanceKicker: L("Ongoing care", "ការថែទាំបន្ត"),
  maintenanceTitle: L("Required for backend. Optional for static.", "ចាំបាច់សម្រាប់ backend។ ស្រេចចិត្តសម្រាប់ស្ថិតិ។"),
  maintenanceDesc: L(
    "Backend products need monthly care for hosting, database, backups, monitoring, and security patches. Static websites can add a care plan at any time. Domain and hosting fees are paid to third-party providers.",
    "ផលិតផល backend ត្រូវការការថែទាំប្រចាំខែ សម្រាប់ hosting ទិន្នន័យ ការបម្រុងទុក ការត្រួតពិនិត្យ និងការជួសជុលសុវត្ថិភាព។ គេហទំព័រស្ថិតិអាចបន្ថែមគម្រោងថែទាំបានគ្រប់ពេល។ ថ្លៃដូមេន និង hosting បង់ទៅអ្នកផ្តល់សេវាខាងក្រៅ។",
  ),
  plans: [
    {
      name: L("Starter", "ចាប់ផ្តើម"),
      model: "static",
      description: L("For small businesses that need a credible presence, fast.", "សម្រាប់អាជីវកម្មតូចដែលត្រូវការវត្តមានគួរឱ្យទុកចិត្ត យ៉ាងឆាប់រហ័ស។"),
      price: "$150",
      billing: L("one-time", "ម្តង"),
      delivery: L("3–5 business days", "៣–៥ ថ្ងៃធ្វើការ"),
      features: [
        L("One-page responsive website", "គេហទំព័រមួយទំព័រ ឆ្លើយតប"),
        L("Business introduction and services", "ការណែនាំអាជីវកម្ម និងសេវាកម្ម"),
        L("Contact details and social links", "ព័ត៌មានទំនាក់ទំនង និងតំណសង្គម"),
        L("Google Maps and basic SEO", "Google Maps និង SEO មូលដ្ឋាន"),
        L("One revision round", "ការកែមួយជុំ"),
      ],
    },
    {
      name: L("Business", "អាជីវកម្ម"),
      model: "static",
      description: L("The flagship package for established businesses seeking credibility.", "កញ្ចប់សំខាន់សម្រាប់អាជីវកម្មដែលមានស្រាប់ ដែលចង់បានភាពជឿជាក់។"),
      price: "$300",
      billing: L("one-time", "ម្តង"),
      delivery: L("7–10 business days", "៧–១០ ថ្ងៃធ្វើការ"),
      features: [
        L("Up to five agreed pages", "រហូតដល់ ៥ ទំព័រ"),
        L("Custom visual design", "ការរចនាម៉ាកផ្ទាល់ខ្លួន"),
        L("Working inquiry form", "ទម្រង់សាកសួរដំណើរការ"),
        L("Gallery, menu, or services", "វិចិត្រសាល ម៉ឺនុយ ឬសេវាកម្ម"),
        L("Two revision rounds", "ការកែពីរជុំ"),
      ],
      featured: true,
    },
    {
      name: L("Premium", "ពិសេស"),
      model: "static",
      description: L("For hotels, resorts, and brands needing an elevated design.", "សម្រាប់សណ្ឋាគារ រីសត និងម៉ាកដែលត្រូវការការរចនាខ្ពស់។"),
      price: "$400",
      billing: L("starting", "ចាប់ពី"),
      delivery: L("10–15 business days", "១០–១៥ ថ្ងៃធ្វើការ"),
      features: [
        L("Custom multi-page website", "គេហទំព័រច្រើនទំព័រ"),
        L("Extensive art direction", "ការដឹកនាំសិល្បៈលម្អិត"),
        L("Bilingual Khmer and English", "ពីរភាសា ខ្មែរ និងអង់គ្លេស"),
        L("Booking or quotation form", "ទម្រង់កក់ ឬស្នើសុំតម្លៃ"),
        L("Three revision rounds", "ការកែបីជុំ"),
      ],
    },
    {
      name: L("Custom", "តាមតម្រូវការ"),
      model: "backend",
      description: L("For dashboards, portals, SaaS, or mobile app functionality.", "សម្រាប់ផ្ទាំងគ្រប់គ្រង វេទិកា SaaS ឬកម្មវិធីទូរស័ព្ទ។"),
      price: "$600",
      billing: L("starting", "ចាប់ពី"),
      delivery: L("Scope-based timeline", "តាមទំហំការងារ"),
      features: [
        L("Tailored business architecture", "ស្ថាបត្យកម្មតាមអាជីវកម្ម"),
        L("Secure authentication", "ការផ្ទៀងផ្ទាត់ប្រកបដោយសុវត្ថិភាព"),
        L("Database and persistence", "ទិន្នន័យ និងការរក្សាទុក"),
        L("Web or mobile delivery", "វេប ឬទូរស័ព្ទ"),
        L("Milestone-based delivery", "ការប្រគល់តាមដំណាក់កាល"),
      ],
    },
  ],
  maintenance: [
    {
      name: L("Basic care", "ថែទាំមូលដ្ឋាន"),
      badge: L("Optional add-on", "បន្ថែមស្រេចចិត្ត"),
      price: "$10",
      features: [
        L("Uptime monitoring alerts", "ការជូនដំណឹងត្រួតពិនិត្យដំណើរការ"),
        L("Basic technical health check", "ការពិនិត្យបច្ចេកទេសមូលដ្ឋាន"),
        L("Limited email support", "ការគាំទ្រតាមអ៊ីមែលមានកំណត់"),
        L("One small update monthly", "ការអាប់ដេតតូចមួយក្នុងមួយខែ"),
      ],
    },
    {
      name: L("Business care", "ថែទាំអាជីវកម្ម"),
      badge: L("Required for backend apps", "ចាំបាច់សម្រាប់កម្មវិធី backend"),
      price: "$25",
      featured: true,
      features: [
        L("Everything in Basic care", "អ្វីៗទាំងអស់ក្នុងថែទាំមូលដ្ឋាន"),
        L("Up to 1 hour of updates monthly", "ការអាប់ដេតរហូតដល់ ១ ម៉ោងក្នុងមួយខែ"),
        L("More frequent checks", "ការត្រួតពិនិត្យញឹកញាប់ជាង"),
        L("Priority response hours", "ការឆ្លើយតបអាទិភាព"),
      ],
    },
  ],
};

export const faqSection = {
  kicker: L("Questions", "សំណួរ"),
  title: L("The details, without the fog.", "ព័ត៌មានលម្អិត ដោយគ្មានភាពស្រពេចស្រពិល។"),
  description: L(
    "What business owners usually ask before starting a project with us.",
    "អ្វីដែលម្ចាស់អាជីវកម្មតែងសួរ មុនចាប់ផ្តើមគម្រោងជាមួយយើង។",
  ),
  asideTitle: L("Still deciding?", "នៅសង្ស័យឬ?"),
  asideBody: L(
    "Send a short note and we will reply with an honest recommendation — even if the answer is that you do not need us yet.",
    "ផ្ញើសារខ្លីៗមកយើង ហើយយើងនឹងឆ្លើយតបដោយការណែនាំស្មោះត្រង់ — ទោះបីជាចម្លើយគឺថាអ្នកមិនទាន់ត្រូវការយើងក៏ដោយ។",
  ),
  faqs: [
    {
      q: L(
        "Why do I need a website if I already have a Facebook page?",
        "ហេតុអ្វីខ្ញុំត្រូវការគេហទំព័រ បើខ្ញុំមានទំព័រ Facebook រួចហើយ?",
      ),
      a: L(
        "Facebook is excellent for social updates, but a website gives your business permanent credibility and a home you control. It organises menus, prices, rooms, and services so customers do not have to scroll through months of posts — and it appears in Google searches from visitors who have never heard of your page.",
        "Facebook ល្អសម្រាប់ការអាប់ដេតសង្គម ប៉ុន្តែគេហទំព័រផ្តល់ភាពជឿជាក់អចិន្ត្រៃយ៍ និងជាផ្ទះដែលអ្នកគ្រប់គ្រង។ វារៀបចំម៉ឺនុយ តម្លៃ បន្ទប់ និងសេវាកម្ម ដើម្បីឱ្យអតិថិជនមិនត្រូវរំកិលរកអតីតកាល ហើយវាបង្ហាញលើ Google សម្រាប់អ្នកដែលមិនធ្លាប់ស្គាល់ទំព័ររបស់អ្នក។",
      ),
    },
    {
      q: L("How long does a project take?", "គម្រោងប្រើរយៈពេលប៉ុន្មាន?"),
      a: L(
        "Starter websites take 3–5 business days after content is received. Business websites take 7–10 days. Premium and custom applications take 10–20 days depending on the agreed scope. You receive a written timeline before we begin.",
        "គេហទំព័រចាប់ផ្តើមប្រើ ៣–៥ ថ្ងៃធ្វើការ ក្រោយទទួលខ្លឹមសារ។ គេហទំព័រអាជីវកម្ម ៧–១០ ថ្ងៃ។ កញ្ចប់ពិសេស និងកម្មវិធីតាមតម្រូវការ ១០–២០ ថ្ងៃ អាស្រ័យលើវិសាលភាព។ អ្នកទទួលកាលវិភាគជាលាយលក្ខណ៍អក្សរ មុនចាប់ផ្តើម។",
      ),
    },
    {
      q: L("Can the site support Khmer and English?", "គេហទំព័រគាំទ្រខ្មែរ និងអង់គ្លេសបានទេ?"),
      a: L(
        "Yes. Bilingual layouts are designed with typography that stays legible in both Khmer and English. Every project can include a language switch, and our own website is built the same way.",
        "បាទ/ចាស។ ប្លង់ពីរភាសាត្រូវបានរចនាដោយអក្សរដែលអានបានច្បាស់ទាំងខ្មែរ និងអង់គ្លេស។ គ្រប់គម្រោងអាចបញ្ចូលការប្តូរភាសា ហើយគេហទំព័រនេះក៏បង្កើតដូចគ្នា។",
      ),
    },
    {
      q: L("Who owns the code and the domain?", "អ្នកណាជាម្ចាស់កូដ និងដូមេន?"),
      a: L(
        "You own 100% of the website, content, and code once the final invoice is settled. Domains and hosting are registered under your own account, so you keep full legal ownership.",
        "អ្នកជាម្ចាស់ ១០០% នៃគេហទំព័រ ខ្លឹមសារ និងកូដ ក្រោយបង់វិក្កយបត្រចុងក្រោយ។ ដូមេន និង hosting ចុះបញ្ជីក្រោមគណនីរបស់អ្នក ដើម្បីរក្សាកម្មសិទ្ធិពេញលេញ។",
      ),
    },
    {
      q: L("Is hosting included in the price?", "តើ hosting រួមក្នុងតម្លៃទេ?"),
      a: L(
        "Domain registration (around $12/year for a .com) and cloud hosting are separate third-party costs paid directly to the provider. We help you set everything up under your own accounts.",
        "ការចុះបញ្ជីដូមេន (ប្រហែល ១២ ដុល្លារ/ឆ្នាំសម្រាប់ .com) និង cloud hosting ជាការចំណាយខាងក្រៅ បង់ផ្ទាល់ទៅអ្នកផ្តល់សេវា។ យើងជួយរៀបចំអ្វីៗក្រោមគណនីរបស់អ្នក។",
      ),
    },
    {
      q: L("What happens when prices or menus change?", "ចុះបើតម្លៃ ឬម៉ឺនុយផ្លាស់ប្តូរ?"),
      a: L(
        "Our care plans include regular content updates, or you can request an ad-hoc update at a flat agreed rate. You will never be locked out of your own website.",
        "គម្រោងថែទាំរួមមានការអាប់ដេតខ្លឹមសារជាប្រចាំ ឬអ្នកអាចស្នើសុំការអាប់ដេតម្តងមួយៗក្នុងតម្លៃព្រមព្រៀង។ អ្នកនឹងមិនត្រូវបានចាក់សោពីគេហទំព័ររបស់អ្នកឡើយ។",
      ),
    },
  ],
};

export const contactSection = {
  kicker: L("Start a conversation", "ចាប់ផ្តើមការសន្ទនា"),
  title: L("Tell us what you are building.", "ប្រាប់យើងពីអ្វីដែលអ្នកកំពុងបង្កើត។"),
  description: L(
    "Share a few details and continue the conversation on Telegram. You will receive a clear recommendation, timeline, and fixed quote — no sales calls, no obligation.",
    "ចែករំលែកព័ត៌មានបន្តិចបន្តួច ហើយបន្តការសន្ទនានៅលើ Telegram។ អ្នកនឹងទទួលបានការណែនាំច្បាស់លាស់ កាលវិភាគ និងសម្រង់តម្លៃ — គ្មានការលក់ដោយទូរស័ព្ទ គ្មានកាតព្វកិច្ច។",
  ),
  trust: [
    L("Fast Telegram reply", "ឆ្លើយតបលឿនតាម Telegram"),
    L("Direct developer", "អ្នកអភិវឌ្ឍន៍ផ្ទាល់"),
    L("Fixed, itemised quote", "សម្រង់តម្លៃច្បាស់លាស់"),
  ],
  form: {
    name: L("Full name", "ឈ្មោះពេញ"),
    namePlaceholder: L("e.g. Sokha Chan", "ឧ. សុខា ចាន់"),
    business: L("Business or project", "អាជីវកម្ម ឬគម្រោង"),
    businessPlaceholder: L("e.g. Phnom Penh Coffee Roasters", "ឧ. ហាងកាហ្វេភ្នំពេញ"),
    contact: L("Telegram or phone", "Telegram ឬទូរស័ព្ទ"),
    contactPlaceholder: L("@username / 012 345 678", "@ឈ្មោះ / ០១២ ៣៤៥ ៦៧៨"),
    type: L("What do you need?", "អ្នកត្រូវការអ្វី?"),
    typeOptions: [
      L("Business website", "គេហទំព័រអាជីវកម្ម"),
      L("E-commerce", "ហាងអនឡាញ"),
      L("Custom web app", "កម្មវិធីវេបតាមតម្រូវការ"),
      L("Mobile app", "កម្មវិធីទូរស័ព្ទ"),
      L("Care & maintenance", "ថែទាំ និងគាំទ្រ"),
      L("Not sure yet", "មិនទាន់ច្បាស់"),
    ],
    budget: L("Approximate budget", "ថវិកាប្រហែល"),
    budgetOptions: [
      L("$150 – $300", "$១៥០ – $៣០០"),
      L("$300 – $600", "$៣០០ – $៦០០"),
      L("$600 – $1,500", "$៦០០ – $១,៥០០"),
      L("$1,500+", "$១,៥០០+"),
      L("Let's discuss", "ពិភាក្សាគ្នា"),
    ],
    message: L("Project details", "ព័ត៌មានគម្រោង"),
    messagePlaceholder: L(
      "A few sentences about your business, goals, and timeline.",
      "ពីរបីប្រយោគអំពីអាជីវកម្ម គោលដៅ និងកាលវិភាគរបស់អ្នក។",
    ),
    submit: L("Send inquiry", "ផ្ញើសាកសួរ"),
    sending: L("Preparing your inquiry…", "កំពុងរៀបចំសាកសួរ…"),
    successTitle: L("Inquiry copied. See you on Telegram.", "សាកសួរត្រូវបានចម្លង។ ជួបគ្នានៅ Telegram។"),
    successBody: L(
      "We copied your details and opened Telegram. Paste the message into our chat and send it — we usually reply within the hour.",
      "យើងបានចម្លងព័ត៌មានរបស់អ្នក និងបើក Telegram។ សូមបិទភ្ជាប់សារនៅក្នុងការជជែកជាមួយយើង ហើយផ្ញើ — ជាធម្មតាយើងឆ្លើយតបក្នុងរយៈពេលមួយម៉ោង។",
    ),
    copy: L("Copy inquiry", "ចម្លងសាកសួរ"),
    copied: L("Copied", "បានចម្លង"),
    reset: L("Send another inquiry", "ផ្ញើសាកសួរមួយទៀត"),
    required: L("Required", "ត្រូវបំពេញ"),
    invalid: L("Please complete this field.", "សូមបំពេញចន្លោះនេះ។"),
    contactError: L(
      "Please enter a valid Telegram username or phone number.",
      "សូមបញ្ចូលឈ្មោះ Telegram ឬលេខទូរស័ព្ទត្រឹមត្រូវ។",
    ),
    openTelegram: L("Open Telegram", "បើក Telegram"),
  },
  channelsTitle: L("Prefer a direct line?", "ចង់ទាក់ទងផ្ទាល់?"),
  channels: [
    {
      icon: "Send",
      label: L("Telegram", "Telegram"),
      value: telegram.display,
      href: telegram.url,
      note: L("Fastest reply", "ឆ្លើយតបលឿនបំផុត"),
    },
    {
      icon: "Phone",
      label: L("Phone", "ទូរស័ព្ទ"),
      value: "069 271 887",
      href: "tel:+85569271887",
      note: L("Khmer and English", "ខ្មែរ និងអង់គ្លេស"),
    },
    {
      icon: "MapPin",
      label: L("Studio", "ស្ទូឌីយោ"),
      value: L("Battambang, Cambodia", "បាត់ដំបង កម្ពុជា"),
      href: "https://maps.google.com/?q=Battambang,Cambodia",
      note: L("In-person by appointment", "ជួបផ្ទាល់តាមការណាត់"),
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/mrchetra007" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/seth-sochetra-7a45b6402/" },
  ],
};

export const footer = {
  blurb: L(
    "An independent software studio in Cambodia, building refined websites, platforms, and mobile apps with Khmer soul and global standards.",
    "ស្ទូឌីយោសូហ្វវែរឯករាជ្យនៅកម្ពុជា បង្កើតគេហទំព័រ វេទិកា និងកម្មវិធីទូរស័ព្ទដ៏ប្រណិត ជាមួយព្រលឹងខ្មែរ និងស្តង់ដារសកល។",
  ),
  columns: [
    {
      title: L("Studio", "ស្ទូឌីយោ"),
      links: [
        { label: L("Selected work", "ស្នាដៃ"), href: "#work" },
        { label: L("Services", "សេវាកម្ម"), href: "#services" },
        { label: L("About", "អំពីយើង"), href: "#studio" },
        { label: L("Pricing", "តម្លៃ"), href: "#pricing" },
      ],
    },
    {
      title: L("Services", "សេវាកម្ម"),
      links: [
        { label: L("Business websites", "គេហទំព័រអាជីវកម្ម"), href: "#services" },
        { label: L("E-commerce", "ហាងអនឡាញ"), href: "#services" },
        { label: L("Web applications", "កម្មវិធីវេប"), href: "#services" },
        { label: L("Mobile apps", "កម្មវិធីទូរស័ព្ទ"), href: "#services" },
      ],
    },
    {
      title: L("Connect", "ទំនាក់ទំនង"),
      links: [
        { label: L("Telegram", "Telegram"), href: telegram.url },
        { label: L("GitHub", "GitHub"), href: "https://github.com/mrchetra007" },
        { label: L("LinkedIn", "LinkedIn"), href: "https://www.linkedin.com/in/seth-sochetra-7a45b6402/" },
        { label: L("Start a project", "ចាប់ផ្តើមគម្រោង"), href: "#contact" },
      ],
    },
  ],
  rights: L("All rights reserved.", "រក្សាសិទ្ធិគ្រប់យ៉ាង។"),
  location: L("Battambang · Phnom Penh · Cambodia", "បាត់ដំបង · ភ្នំពេញ · កម្ពុជា"),
  crafted: L("Designed and built in Cambodia.", "រចនា និងបង្កើតនៅកម្ពុជា។"),
};

export const ui = {
  language: L("ខ្មែរ", "English"),
  menu: L("Menu", "ម៉ឺនុយ"),
  close: L("Close", "បិទ"),
  backToTop: L("Back to top", "ត្រឡប់ឡើងលើ"),
  error: L("Something went wrong. Please try again.", "មានបញ្ហា។ សូមព្យាយាមម្តងទៀត។"),
  getInTouch: L("Get in touch", "ទាក់ទងយើង"),
  startProject: L("Start a project", "ចាប់ផ្តើមគម្រោង"),
  response: L("Replies within 24 hours", "ឆ្លើយតបក្នុង ២៤ ម៉ោង"),
};
