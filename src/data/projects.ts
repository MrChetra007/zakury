import type { Localized } from "../i18n/LanguageContext";

const L = (en: string, km: string): Localized => ({ en, km });

export type ProjectCategory = "saas" | "web" | "mobile" | "systems";
export type ProjectStatus = "live" | "published" | "pilot" | "completed";

export type Project = {
  id: string;
  name: string;
  tagline: Localized;
  description: Localized;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  stack: string[];
  features: Localized[];
  link?: string;
  linkLabel?: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  image: string;
  accent: string;
  monogram: string;
  featured?: boolean;
};

export const categoryLabels: Record<ProjectCategory, Localized> = {
  saas: L("SaaS Platform", "វេទិកា SaaS"),
  web: L("Web Application", "កម្មវិធីវេប"),
  mobile: L("Mobile Application", "កម្មវិធីទូរស័ព្ទ"),
  systems: L("Systems & Desktop", "ប្រព័ន្ធ និងដេសខឹប"),
};

export const statusLabels: Record<ProjectStatus, Localized> = {
  live: L("Live", "កំពុងដំណើរការ"),
  published: L("Published", "បានផ្សព្វផ្សាយ"),
  pilot: L("Live pilot", "សាកល្បងផ្ទាល់"),
  completed: L("Completed", "បានបញ្ចប់"),
};

export const categoryFilters: Array<{
  id: ProjectCategory | "all";
  label: Localized;
}> = [
  { id: "all", label: L("All work", "ស្នាដៃទាំងអស់") },
  { id: "saas", label: L("SaaS", "SaaS") },
  { id: "web", label: L("Web apps", "កម្មវិធីវេប") },
  { id: "mobile", label: L("Mobile", "ទូរស័ព្ទ") },
  { id: "systems", label: L("Systems", "ប្រព័ន្ធ") },
];

export const projects: Project[] = [
  {
    id: "onlinephsar",
    name: "OnlinePhsar",
    tagline: L("A complete online shop for every Cambodian merchant.", "ហាងអនឡាញពេញលេញសម្រាប់អាជីវករកម្ពុជាគ្រប់រូប។"),
    description: L(
      "A multi-tenant e-commerce SaaS built for Cambodian merchants. Store owners launch a fully branded online shop in minutes, accept live KHQR payments, and manage every order from a real-time dashboard — fully bilingual in Khmer and English.",
      "SaaS ពាណិជ្ជកម្មអេឡិចត្រូនិចបែបពហុអ្នកជួល សម្រាប់អាជីវករកម្ពុជា។ ម្ចាស់ហាងអាចបើកហាងអនឡាញដែលមានម៉ាកផ្ទាល់ខ្លួនក្នុងរយៈពេលប៉ុន្មាននាទី ទទួលការទូទាត់ KHQR ផ្ទាល់ និងគ្រប់គ្រងការបញ្ជាទិញពីផ្ទាំងគ្រប់គ្រងពេលវេលាពិត។",
    ),
    category: "saas",
    status: "live",
    year: "2026",
    stack: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Zustand", "KHQR / Bakong"],
    features: [
      L("Live KHQR (Bakong) payments with automatic verification", "ការទូទាត់ KHQR (Bakong) ផ្ទាល់ជាមួយការផ្ទៀងផ្ទាត់ស្វ័យប្រវត្តិ"),
      L("Telegram & email order notifications with low-stock alerts", "ជូនដំណឹងការបញ្ជាទិញតាម Telegram និងអ៊ីមែល ព្រមទាំងការជូនដំណឹងស្តុកទាប"),
      L("Automated monthly billing and usage-based fees", "វិក្កយបត្រប្រចាំខែស្វ័យប្រវត្តិ និងថ្លៃសេវាតាមការប្រើប្រាស់"),
      L("Public order tracking, branded storefronts, and customer analytics", "ការតាមដានការបញ្ជាទិញ ហាងម៉ាកផ្ទាល់ខ្លួន និងវិភាគអតិថិជន"),
      L("Full bilingual Khmer and English experience", "បទពិសោធន៍ពីរភាសា ខ្មែរ និងអង់គ្លេសពេញលេញ"),
      L("Super admin dashboard for merchants, invoices, and subscriptions", "ផ្ទាំងអ្នកគ្រប់គ្រងសម្រាប់អាជីវករ វិក្កយបត្រ និងការជាវ"),
    ],
    link: "https://onlinephsar.vercel.app/",
    linkLabel: "onlinephsar.vercel.app",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    accent: "#C7A15C",
    monogram: "OP",
    featured: true,
  },
  {
    id: "qrserve",
    name: "QRServe",
    tagline: L("Scan. Order. Serve. Without the paperwork.", "ស្កេន។ កម្ម៉ង់។ បម្រើ។ ដោយគ្មានក្រដាស។"),
    description: L(
      "A full-stack SaaS QR ordering platform for restaurants. Guests scan a table code to browse the menu and place orders in real time while owners manage service from a live dashboard.",
      "វេទិកា SaaS សម្រាប់ការកម្ម៉ង់ដោយ QR នៅភោជនីយដ្ឋាន។ ភ្ញៀវស្កេនកូដតុ ដើម្បីមើលម៉ឺនុយ និងកម្ម៉ង់ភ្លាមៗ ខណៈម្ចាស់ហាងគ្រប់គ្រងសេវាពីផ្ទាំងគ្រប់គ្រងផ្ទាល់។",
    ),
    category: "saas",
    status: "live",
    year: "2025",
    stack: ["Vue.js 3", "Supabase", "PostgreSQL", "LemonSqueezy", "Vercel"],
    features: [
      L("QR-linked dynamic menus for every table", "ម៉ឺនុយឌីណាមិកតាម QR សម្រាប់រាល់តុ"),
      L("Real-time order management and kitchen visibility", "គ្រប់គ្រងការបញ្ជាទិញពេលវេលាពិត និងមើលឃើញផ្ទះបាយ"),
      L("Subscription billing with LemonSqueezy", "វិក្កយបត្រជាវជាមួយ LemonSqueezy"),
      L("Supabase Realtime subscriptions for instant updates", "Supabase Realtime សម្រាប់ការអាប់ដេតភ្លាមៗ"),
      L("Multi-restaurant architecture with scalable data design", "ស្ថាបត្យកម្មហាងច្រើន ជាមួយការរចនាទិន្នន័យដែលអាចពង្រីក"),
    ],
    link: "https://qrserve.vercel.app",
    linkLabel: "qrserve.vercel.app",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
    accent: "#A8794A",
    monogram: "QR",
    featured: true,
  },
  {
    id: "pawpass",
    name: "PawPass",
    tagline: L("A health passport for every pet.", "លិខិតឆ្លងដែនសុខភាពសម្រាប់សត្វចិញ្ចឹមគ្រប់រូប។"),
    description: L(
      "A pet health passport mobile application for medical records, vaccines, medications, weight history, and appointments — with PDF passport export, ID card generation, sharing, and subscription tiers.",
      "កម្មវិធីទូរស័ព្ទលិខិតឆ្លងដែនសុខភាពសត្វចិញ្ចឹម សម្រាប់កំណត់ត្រាវេជ្ជសាស្ត្រ វ៉ាក់សាំង ថ្នាំ ទម្ងន់ និងការណាត់ជួប — ជាមួយការនាំចេញ PDF កាតសម្គាល់ ការចែករំលែក និងកញ្ចប់ជាវ។",
    ),
    category: "mobile",
    status: "published",
    year: "2025",
    stack: ["Flutter", "Dart", "Supabase", "RevenueCat", "PostgreSQL"],
    features: [
      L("Pet profiles with photos, breed, microchip, and health summaries", "ប្រវត្តិសត្វចិញ្ចឹម រូបថត ពូជ ឈីប និងសេចក្តីសង្ខេបសុខភាព"),
      L("Vaccine & medication tracking with due-date reminders", "តាមដានវ៉ាក់សាំង និងថ្នាំ ជាមួយការរំលឹកកាលបរិច្ឆេទ"),
      L("Appointment calendar with notifications", "ប្រតិទិនណាត់ជួប ជាមួយការជូនដំណឹង"),
      L("PDF passport export and PNG ID card generation", "នាំចេញលិខិតឆ្លងដែន PDF និងបង្កើតកាតសម្គាល់ PNG"),
      L("Online passport sharing through unique token links", "ចែករំលែកលិខិតឆ្លងដែនតាមតំណពិសេស"),
      L("RevenueCat subscriptions across Free, Pro, and Premium", "ការជាវ RevenueCat សម្រាប់ Free, Pro និង Premium"),
    ],
    link: "https://play.google.com/store/apps/details?id=com.sozin.pawpass",
    linkLabel: "Google Play Store",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=80",
    accent: "#8C7355",
    monogram: "PP",
    featured: true,
  },
  {
    id: "freelanceflow",
    name: "FreelanceFlow",
    tagline: L("Run the business of being independent.", "គ្រប់គ្រងអាជីវកម្មឯករាជ្យរបស់អ្នក។"),
    description: L(
      "A complete client and business operations app for freelancers: clients, projects, payments, invoices, expenses, time tracking, and recurring billing with real-time sync and PDF generation.",
      "កម្មវិធីគ្រប់គ្រងអតិថិជន និងប្រតិបត្តិការអាជីវកម្មសម្រាប់អ្នកធ្វើការឯករាជ្យ៖ អតិថិជន គម្រោង ការទូទាត់ វិក្កយបត្រ ចំណាយ ការតាមដានពេលវេលា និងវិក្កយបត្រកើតឡើងវិញ។",
    ),
    category: "mobile",
    status: "published",
    year: "2025",
    stack: ["Flutter", "Dart", "Supabase", "Riverpod", "GoRouter"],
    features: [
      L("Revenue and expense dashboard with live timer", "ផ្ទាំងចំណូល និងចំណាយ ជាមួយកម្មវិធីកត់ម៉ោងផ្ទាល់"),
      L("Client and project management with milestones", "គ្រប់គ្រងអតិថិជន និងគម្រោង ជាមួយដំណាក់កាលសំខាន់"),
      L("Time tracking with billable hours and manual entry", "តាមដានពេលវេលា ម៉ោងគិតថ្លៃ និងការបញ្ចូលដោយដៃ"),
      L("Invoices with PDF export, tax, discount, and line items", "វិក្កយបត្រ PDF ពន្ធ ការបញ្ចុះតម្លៃ និងបញ្ជីទំនិញ"),
      L("Recurring invoice auto-generation and scheduled billing", "បង្កើតវិក្កយបត្រកើតឡើងវិញដោយស្វ័យប្រវត្តិ"),
      L("Expense tracking with receipt uploads and categories", "តាមដានចំណាយ ជាមួយការផ្ទុកបង្កាន់ដៃ និងប្រភេទ"),
    ],
    link: "https://get-freelanceflow.vercel.app/",
    linkLabel: "get-freelanceflow.vercel.app",
    secondaryLink: "https://play.google.com/store/apps/details?id=com.sozin.freelanceflow",
    secondaryLabel: "Play Store (Testing)",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    accent: "#7E6A52",
    monogram: "FF",
    featured: true,
  },
  {
    id: "ceres",
    name: "Ceres",
    tagline: L("Satellites for the rice field.", "ផ្កាយរណបសម្រាប់ស្រែរបស់អ្នក។"),
    description: L(
      "A satellite-based rice crop health platform for Cambodian co-ops and extension officers. Sentinel imagery becomes plain-language field alerts, delivered through Telegram in Khmer and English.",
      "វេទិកាត្រួតពិនិត្យសុខភាពស្រូវដោយផ្កាយរណប សម្រាប់សហគមន៍កសិកម្ម និងមន្ត្រីផ្សព្វផ្សាយកម្ពុជា។ រូបភាព Sentinel ក្លាយជាការជូនដំណឹងងាយយល់ តាម Telegram ជាភាសាខ្មែរ និងអង់គ្លេស។",
    ),
    category: "saas",
    status: "live",
    year: "2026",
    stack: ["Vue.js 3", "Supabase", "Google Earth Engine", "Leaflet", "Gemini AI", "Deno"],
    features: [
      L("NDVI, NDWI, LSWI, SAVI, EVI and radar RVI indices", "សន្ទស្សន៍ NDVI, NDWI, LSWI, SAVI, EVI និង RVI"),
      L("Growth-stage-aware stress detection with rainfall context", "ការរកឃើញភាពតានតឹងតាមដំណាក់កាលលូតលាស់ ជាមួយទិន្នន័យទឹកភ្លៀង"),
      L("AI Agronomist with Gemini-powered field explanations", "អ្នកជំនាញកសិកម្ម AI ជាមួយការពន្យល់ដោយ Gemini"),
      L("Automated Telegram alerts through scheduled edge workers", "ការជូនដំណឹង Telegram ស្វ័យប្រវត្តិ តាម edge worker"),
      L("Multi-area support with draw, save, and compare mode", "គាំទ្រតំបន់ច្រើន ជាមួយការគូរ រក្សាទុក និងប្រៀបធៀប"),
      L("Tiered pricing with ABA PayWay billing", "តម្លៃជាកញ្ចប់ ជាមួយការទូទាត់ ABA PayWay"),
    ],
    link: "https://get-ceres.vercel.app",
    linkLabel: "get-ceres.vercel.app",
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1400&q=80",
    accent: "#5F7355",
    monogram: "CE",
    featured: true,
  },
  {
    id: "school-management",
    name: "Primary School Management",
    tagline: L("Khmer-first school operations, built for real classrooms.", "ប្រតិបត្តិការសាលារៀនជាភាសាខ្មែរជាមុន សម្រាប់ថ្នាក់រៀនពិត។"),
    description: L(
      "A Khmer-first multi-tenant school management PWA piloted at a school in Battambang. Student records, attendance, scores, health, library, and budget inventory with role-based access and offline support.",
      "PWA គ្រប់គ្រងសាលារៀនពហុអ្នកជួលជាភាសាខ្មែរជាមុន ដែលបានសាកល្បងនៅសាលាមួយក្នុងខេត្តបាត់ដំបង។ គ្រប់គ្រងសិស្ស វត្តមាន ពិន្ទុ សុខភាព បណ្ណាល័យ និងថវិកា ជាមួយសិទ្ធិតាមតួនាទី និងដំណើរការក្រៅបណ្តាញ។",
    ),
    category: "saas",
    status: "pilot",
    year: "2026",
    stack: ["Vue.js 3", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    features: [
      L("Multi-tenant isolation through Supabase Row-Level Security", "ការបំបែកទិន្នន័យពហុអ្នកជួល តាម Supabase Row-Level Security"),
      L("Offline-first PWA for low-connectivity classrooms", "PWA ដំណើរការក្រៅបណ្តាញ សម្រាប់ថ្នាក់រៀនដែលអ៊ីនធឺណិតខ្សោយ"),
      L("Role-based access for directors, teachers, and staff", "សិទ្ធិតាមតួនាទី សម្រាប់នាយក គ្រូ និងបុគ្គលិក"),
      L("Records, attendance, scores, health, library, and budget", "កំណត់ត្រា វត្តមាន ពិន្ទុ សុខភាព បណ្ណាល័យ និងថវិកា"),
    ],
    link: "https://primary-school-management-upgrade.vercel.app/",
    linkLabel: "primary-school-management…",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    accent: "#7A6746",
    monogram: "PS",
    featured: true,
  },
  {
    id: "corebank",
    name: "CoreBank",
    tagline: L("A full core banking system, shipped solo.", "ប្រព័ន្ធធនាគារស្នូលពេញលេញ ដែលបានបង្កើតដោយខ្លួនឯង។"),
    description: L(
      "A full-stack core banking system: Vue 3 frontend, Spring Boot REST API, SQL Server database, deployed on AWS with S3, CloudFront, and EC2 — entirely within the free tier.",
      "ប្រព័ន្ធធនាគារស្នូលពេញលេញ៖ ផ្នែកមុខ Vue 3, Spring Boot REST API, ទិន្នន័យ SQL Server ដំណើរការលើ AWS ជាមួយ S3, CloudFront និង EC2 ក្នុងកញ្ចប់ឥតគិតថ្លៃ។",
    ),
    category: "web",
    status: "live",
    year: "2025",
    stack: ["Vue.js 3", "TypeScript", "Tailwind CSS", "Spring Boot", "Java", "SQL Server", "AWS"],
    features: [
      L("Accounts, cards, transfers, and loans with audit logging", "គណនី កាត ការផ្ទេរប្រាក់ និងកម្ជី ជាមួយកំណត់ហេតុ"),
      L("JWT authentication and role-based access control", "ការផ្ទៀងផ្ទាត់ JWT និងសិទ្ធិតាមតួនាទី"),
      L("Flyway-managed database migrations and versioning", "ការគ្រប់គ្រងការផ្លាស់ប្តូរទិន្នន័យ និងកំណែ ដោយ Flyway"),
      L("AWS deployment across S3, CloudFront, EC2, and SQL Server", "ដំណើរការលើ AWS S3, CloudFront, EC2 និង SQL Server"),
      L("Hands-on infrastructure security, CORS, and firewall setup", "ការកំណត់សុវត្ថិភាពហេដ្ឋារចនាសម្ព័ន្ធ CORS និង Firewall"),
    ],
    link: "https://d1cq2qr4r1hv8x.cloudfront.net",
    linkLabel: "Live demo",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=80",
    accent: "#6C7A89",
    monogram: "CB",
    featured: true,
  },
  {
    id: "inventory",
    name: "Inventory Management",
    tagline: L("Stock, orders, and revenue in one calm dashboard.", "ស្តុក ការបញ្ជាទិញ និងចំណូល ក្នុងផ្ទាំងតែមួយ។"),
    description: L(
      "A full-stack inventory application with server-side rendering through Inertia.js, a RESTful Laravel backend, and a Vue.js SPA frontend for complete record management.",
      "កម្មវិធីគ្រប់គ្រងស្តុកពេញលេញ ជាមួយ Inertia.js, Laravel REST API និង Vue.js សម្រាប់ការគ្រប់គ្រងទិន្នន័យទាំងស្រុង។",
    ),
    category: "web",
    status: "completed",
    year: "2025",
    stack: ["Vue.js 3", "Laravel", "Inertia.js", "MySQL"],
    features: [
      L("Server-side rendering with Inertia.js", "ការបង្ហាញពី server ជាមួយ Inertia.js"),
      L("Full CRUD with authentication", "CRUD ពេញលេញ ជាមួយការផ្ទៀងផ្ទាត់"),
      L("RESTful Laravel backend architecture", "ស្ថាបត្យកម្ម Backend Laravel RESTful"),
    ],
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    accent: "#8E7B58",
    monogram: "IN",
  },
  {
    id: "flora-ai",
    name: "Flora AI",
    tagline: L("Know every leaf.", "ស្គាល់រាល់ស្លឹកឈើ។"),
    description: L(
      "A Flutter app using Google Gemini to identify plant species from photos and generate personalised seven-day care plans, fully offline with local SQLite storage.",
      "កម្មវិធី Flutter ដែលប្រើ Google Gemini ដើម្បីស្គាល់ប្រភេទរុក្ខជាតិពីរូបថត និងបង្កើតផែនការថែទាំ ៧ ថ្ងៃ ដំណើរការក្រៅបណ្តាញជាមួយ SQLite។",
    ),
    category: "mobile",
    status: "completed",
    year: "2025",
    stack: ["Flutter", "Dart", "Gemini API", "SQLite"],
    features: [
      L("AI plant identification through Gemini", "ការស្គាល់រុក្ខជាតិដោយ AI តាម Gemini"),
      L("Personalised seven-day care plans", "ផែនការថែទាំ ៧ ថ្ងៃ ផ្ទាល់ខ្លួន"),
      L("Offline-capable local storage", "ការផ្ទុកក្នុងឧបករណ៍ ដំណើរការក្រៅបណ្តាញ"),
      L("Cross-platform on Android and iOS", "ដំណើរការលើ Android និង iOS"),
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80",
    accent: "#5F7355",
    monogram: "FA",
  },
  {
    id: "banksim",
    name: "BankSim",
    tagline: L("A native banking simulation with real accounts.", "ការក្លែងធ្វើធនាគារ native ជាមួយគណនីពិត។"),
    description: L(
      "A native Android banking simulation with real user accounts, peer-to-peer transfers, QR payments, and live balance updates through Firebase.",
      "ការក្លែងធ្វើធនាគារ Android native ជាមួយគណនីអ្នកប្រើពិត ការផ្ទេរប្រាក់រវាងគ្នា ការទូទាត់ QR និងសមតុល្យអាប់ដេតផ្ទាល់តាម Firebase។",
    ),
    category: "mobile",
    status: "completed",
    year: "2024",
    stack: ["Kotlin", "Firebase Auth", "Realtime DB", "Android Studio"],
    features: [
      L("Real accounts with unique bank numbers", "គណនីពិត ជាមួយលេខធនាគារពិសេស"),
      L("Peer-to-peer transfers and QR payments", "ការផ្ទេរប្រាក់ និងការទូទាត់ QR"),
      L("Real-time balance updates with Firebase", "សមតុល្យអាប់ដេតផ្ទាល់ជាមួយ Firebase"),
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    accent: "#6C7A89",
    monogram: "BS",
  },
  {
    id: "science-lab",
    name: "Science Lab",
    tagline: L("Physics you can feel.", "រូបវិទ្យាដែលអ្នកអាចមានអារម្មណ៍បាន។"),
    description: L(
      "A mobile education app that visualises physics concepts through real-time interactive simulations. Adjust velocity, angle, and frequency to observe results instantly.",
      "កម្មវិធីអប់រំលើទូរស័ព្ទ ដែលបង្ហាញគំនិតរូបវិទ្យាតាមការក្លែងធ្វើអន្តរកម្មពេលវេលាពិត។ កែប្រែល្បឿន មុំ និងប្រេកង់ ដើម្បីមើលលទ្ធផលភ្លាមៗ។",
    ),
    category: "mobile",
    status: "published",
    year: "2025",
    stack: ["Flutter", "Dart", "Custom Physics Engine"],
    features: [
      L("Projectile motion and wave behaviour simulations", "ការក្លែងធ្វើចលនាគ្រាប់ និងរលក"),
      L("Real-time physics calculations with a custom engine", "ការគណនារូបវិទ្យាផ្ទាល់ ជាមួយ engine ផ្ទាល់ខ្លួន"),
      L("Published and live on Google Play", "បានផ្សព្វផ្សាយ និងដំណើរការលើ Google Play"),
    ],
    link: "https://play.google.com/store/apps/details?id=com.sozin.wave",
    linkLabel: "Google Play Store",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=80",
    accent: "#7A6A8A",
    monogram: "SL",
  },
  {
    id: "flutter-chat",
    name: "Flutter Chat / E-Commerce",
    tagline: L("Real-time conversation, across platforms.", "ការសន្ទនាពេលវេលាពិត ឆ្លងវេទិកា។"),
    description: L(
      "A real-time cross-platform app with authentication and live messaging powered by Firestore, keeping multi-user data in sync across Android and iOS.",
      "កម្មវិធីឆ្លងវេទិកាពេលវេលាពិត ជាមួយការផ្ទៀងផ្ទាត់ និងសារផ្ទាល់ដោយ Firestore ធ្វើឱ្យទិន្នន័យសមស្របលើ Android និង iOS។",
    ),
    category: "mobile",
    status: "completed",
    year: "2024",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore"],
    features: [
      L("Real-time chat and data sync through Firestore", "ការជជែក និងធ្វើសមស្របទិន្នន័យផ្ទាល់តាម Firestore"),
      L("Firebase Auth for secure sign-in", "Firebase Auth សម្រាប់ការចូលប្រើប្រកបដោយសុវត្ថិភាព"),
      L("Cross-platform on Android and iOS", "ដំណើរការលើ Android និង iOS"),
    ],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
    accent: "#8A5A44",
    monogram: "FC",
  },
  {
    id: "todoapp",
    name: "ToDoApp",
    tagline: L("A small product, finished properly.", "ផលិតផលតូចមួយ ប៉ុន្តែបញ្ចប់យ៉ាងល្អ។"),
    description: L(
      "A full-stack to-do application with authentication, built with a C# .NET backend and a Vue.js frontend, deployed on GitHub Pages.",
      "កម្មវិធី to-do ពេញលេញ ជាមួយការផ្ទៀងផ្ទាត់ បង្កើតដោយ C# .NET backend និង Vue.js frontend ដំណើរការលើ GitHub Pages។",
    ),
    category: "web",
    status: "completed",
    year: "2024",
    stack: ["C#", ".NET", "Vue.js"],
    features: [
      L("Full-stack to-do list with authentication", "បញ្ជីការងារពេញលេញ ជាមួយការផ្ទៀងផ្ទាត់"),
      L("C# .NET backend with Vue.js frontend", "Backend C# .NET ជាមួយ Frontend Vue.js"),
      L("Live deployment on GitHub Pages", "ដំណើរការលើ GitHub Pages"),
    ],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80",
    accent: "#8E7B58",
    monogram: "TD",
  },
  {
    id: "ecommerce-crud",
    name: "E-Commerce CRUD System",
    tagline: L("A dependable desktop catalog manager.", "កម្មវិធីគ្រប់គ្រងទំនិញលើដេសខឹប ដែលអាចទុកចិត្តបាន។"),
    description: L(
      "A Windows desktop application for managing an e-commerce product catalogue with complete create, read, update, and delete functionality backed by SQL Server.",
      "កម្មវិធី Windows សម្រាប់គ្រប់គ្រងបញ្ជីផលិតផលពាណិជ្ជកម្មអេឡិចត្រូនិច ជាមួយមុខងារ CRUD ពេញលេញ និង SQL Server។",
    ),
    category: "systems",
    status: "completed",
    year: "2024",
    stack: ["C#", "SQL Server", "Windows Forms", ".NET"],
    features: [
      L("Full CRUD product catalogue management", "គ្រប់គ្រងបញ្ជីផលិតផល CRUD ពេញលេញ"),
      L("Validation, search, and filtering", "ការផ្ទៀងផ្ទាត់ ការស្វែងរក និងការត្រង"),
      L("Relational SQL Server database design", "ការរចនាទិន្នន័យ SQL Server"),
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    accent: "#6C7A89",
    monogram: "EC",
  },
  {
    id: "digital-clock",
    name: "Digital Clock App",
    tagline: L("Systems programming, down to the refresh rate.", "ការសរសេរកម្មវិធីប្រព័ន្ធ រហូតដល់អត្រាធ្វើឱ្យស្រស់។"),
    description: L(
      "A console-based digital clock demonstrating systems-level programming: time manipulation, real-time display rendering, and efficient console I/O.",
      "នាឡិកាឌីជីថលលើ console ដែលបង្ហាញការសរសេរកម្មវិធីកម្រិតប្រព័ន្ធ៖ ការគ្រប់គ្រងពេលវេលា ការបង្ហាញផ្ទាល់ និង console I/O ប្រកបដោយប្រសិទ្ធភាព។",
    ),
    category: "systems",
    status: "completed",
    year: "2024",
    stack: ["C++", "Standard Library"],
    features: [
      L("Real-time clock with efficient refresh", "នាឡិកាពេលវេលាពិត ជាមួយការធ្វើឱ្យស្រស់ប្រកបដោយប្រសិទ្ធភាព"),
      L("Systems-level time manipulation in C++", "ការគ្រប់គ្រងពេលវេលាកម្រិតប្រព័ន្ធ ក្នុង C++"),
      L("Optimised console I/O management", "ការគ្រប់គ្រង console I/O ដែលបានបង្កើនប្រសិទ្ធភាព"),
    ],
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1400&q=80",
    accent: "#8A5A44",
    monogram: "DC",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
