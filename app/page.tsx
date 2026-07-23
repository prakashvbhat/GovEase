'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight, Bell, Bot, Building2, CheckCircle2, ChevronDown, Clock, FileCheck2,
  FileScan, Globe2, Languages, LockKeyhole, MapPin, MessageCircle, Mic2, PenLine,
  Phone, Play, SearchCheck, ShieldCheck, Sparkles, Star, UploadCloud, Users, WalletCards, Zap,
} from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const problems = [
  ['₹50–₹2000 agent fees', WalletCards], ['Confusing forms', FileScan], ['Multiple office visits', Building2],
  ['Language barriers', Languages], ['Missing documents', FileCheck2], ['Incorrect applications', PenLine],
  ['Long waiting times', Clock], ['No application tracking', SearchCheck],
];
const flow = ['Choose Service', 'Understand Requirements', 'Scan Form', 'AI Auto Fill', 'Submit', 'Track Status'];
const features = [
  ['AI Form Scanner', FileScan], ['OCR', SearchCheck], ['Automatic Form Filling', PenLine], ['Voice Assistant', Mic2],
  ['Regional Languages', Languages], ['Document Checklist', FileCheck2], ['Eligibility Checker', CheckCircle2],
  ['Nearest Office Finder', MapPin], ['Government Scheme Finder', Sparkles], ['SMS Tracking', Phone],
  ['WhatsApp Updates', MessageCircle], ['Renewal Reminders', Bell], ['Human Expert Support', Users],
  ['Application History', Clock], ['Secure Document Vault', LockKeyhole], ['Application Status Tracking', Zap],
];
const languages = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam', 'Marathi', 'Bengali', 'Gujarati', 'Punjabi'];
const tracking = ['SMS Updates', 'WhatsApp Notifications', 'Email Notifications', 'Application Progress', 'Pending', 'Approved', 'Rejected', 'Completed'];
const security = ['AES Encryption', 'Secure Cloud Storage', 'Privacy First', 'DPDP Ready', 'No Data Selling', 'Delete Documents Anytime'];
const roadmap = ['AI Form Filling', 'OCR', 'Voice Assistant', 'Application Tracking', 'Government Scheme Finder', 'DigiLocker Integration', 'CSC Partnerships'];
const faqs = [
  ['Is GovEase an official government website?', 'No. GovEase is an independent AI assistant that helps users understand and complete government service workflows.'],
  ['Can AI fill handwritten forms?', 'GovEase is designed to read printed and handwritten forms, detect fields, and highlight low-confidence areas before submission.'],
  ['How secure is my data?', 'Documents are protected with encryption-first workflows, privacy controls, and the ability to delete documents anytime.'],
  ['Which languages are supported?', 'GovEase supports English and major Indian languages including Hindi, Kannada, Tamil, Telugu, Malayalam, Marathi, Bengali, Gujarati, and Punjabi.'],
  ['Can I track my application?', 'Yes. Application tracking can send SMS, WhatsApp, and email updates as your status changes.'],
  ['Is GovEase free?', 'A free plan covers guidance, document checklists, and AI demos. Pro features add OCR, voice, and tracking.'],
];

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28"><motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={stagger}><motion.p variants={fadeUp} className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-teal-300">{eyebrow}</motion.p><motion.h2 variants={fadeUp} className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">{title}</motion.h2>{children}</motion.div></section>;
}

function GlowCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} whileHover={{ y: -8, scale: 1.01 }} className={`glass rounded-3xl p-6 transition ${className}`}>{children}</motion.div>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050713] text-white">
      <div className="pointer-events-none fixed inset-0 grid-mask opacity-35" />
      <div className="pointer-events-none fixed -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none fixed right-0 top-28 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/20 blur-3xl" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="flex items-center gap-3 font-semibold" href="#top"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-blue-500 text-ink"><Bot size={22} /></span>GovEase</a>
        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex"><a href="#features">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></nav>
        <a href="#demo" className="rounded-full border border-white/[0.15] px-4 py-2 text-sm text-white/[0.85] hover:bg-white/10">Try Demo</a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-28 lg:pt-20">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.15] bg-white/[0.08] px-4 py-2 text-sm text-white/75"><Sparkles size={16} className="text-teal-300" /> Built for citizens, banks, CSCs, and public-service teams</motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl lg:text-8xl">Government Services, Simplified with AI</motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.68]">GovEase is an AI-powered assistant that helps citizens understand, fill, and submit government forms without paying agents.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4"><a className="group relative overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-ink shadow-glow" href="#demo">Try Demo <ArrowRight className="ml-2 inline transition group-hover:translate-x-1" size={18} /></a><a className="rounded-full border border-white/[0.15] bg-white/[0.08] px-6 py-3 font-semibold text-white hover:bg-white/[0.14]" href="#video"><Play className="mr-2 inline" size={18} />Watch Demo</a></motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative">
          <div className="absolute -left-10 top-10 h-24 w-24 rounded-3xl bg-teal-300/20 blur-xl float-slow" /><div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/25 blur-2xl float-delay" />
          <div className="glass pulse-glow relative rounded-[2rem] p-5">
            <div className="mb-5 flex items-center justify-between"><span className="flex items-center gap-2 text-sm text-white/70"><Bot className="text-teal-300" size={18} />GovEase AI</span><span className="rounded-full bg-emerald-400/[0.15] px-3 py-1 text-xs text-emerald-200">Online</span></div>
            {['I need an income certificate.', 'Sure — I can check eligibility, documents, fee, office, and fill the form.'].map((m, i) => <div key={m} className={`mb-4 max-w-[88%] rounded-2xl p-4 text-sm ${i ? 'bg-teal-300/[0.12] text-teal-50' : 'ml-auto bg-white text-ink'}`}>{m}</div>)}
            <div className="rounded-2xl border border-white/10 bg-black/25 p-4"><div className="typing text-sm text-teal-200">Scanning form fields...</div><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-teal-300 to-blue-400" /></div></div>
          </div>
        </motion.div>
      </section>

      <Section eyebrow="The problem" title="Government Paperwork is Broken"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{problems.map(([p, Icon]) => <GlowCard key={p}><Icon className="mb-5 text-rose-300" /><h3 className="font-semibold">{p}</h3></GlowCard>)}</div></Section>

      <Section eyebrow="The solution" title="Meet GovEase AI"><motion.p variants={fadeUp} className="mt-5 max-w-3xl text-lg text-white/[0.65]">GovEase guides users from start to finish: choose a service, understand requirements, scan the form, auto-fill it, submit correctly, and track progress.</motion.p><div className="mt-10 grid gap-4 md:grid-cols-6">{flow.map((item, i) => <GlowCard key={item} className="relative text-center"><div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-blue-500 text-ink font-black">{i + 1}</div><p className="font-semibold">{item}</p>{i < flow.length - 1 && <ChevronDown className="mx-auto mt-4 text-teal-300 md:hidden" />}</GlowCard>)}</div></Section>

      <Section id="demo" eyebrow="Live AI demo" title="Ask once. Get a complete application plan."><div className="mt-10 grid gap-8 lg:grid-cols-2"><GlowCard><div className="mb-5 rounded-2xl bg-white p-4 text-ink">I want a PAN Card.</div><div className="space-y-4 rounded-2xl bg-teal-300/10 p-5 text-white/[0.85]"><p className="typing max-w-max text-teal-200">✅ You are eligible.</p><div><b>Documents Required</b><ul className="mt-2 list-inside list-disc text-white/70"><li>Aadhaar Card</li><li>Address Proof</li><li>Passport Size Photo</li></ul></div><p><b>Application Fee</b><br />₹107 estimated</p><p><b>Where to Apply</b><br />Nearest Bank or Online</p><p><b>Estimated Time</b><br />7–15 Days</p><button className="rounded-full bg-white px-5 py-3 font-semibold text-ink">Ready to Fill Form</button></div></GlowCard><PhoneMockup /></div></Section>

      <Section eyebrow="OCR form scanner" title="Photo to submission-ready in minutes"><div className="mt-10 grid gap-5 lg:grid-cols-5">{['Take Photo', 'AI Reads Form', 'Detect Fields', 'Auto Fill', 'Ready to Submit'].map((s, i) => <GlowCard key={s}><UploadCloud className="mb-6 text-teal-300" /><p className="text-sm text-white/[0.45]">Step {i + 1}</p><h3 className="mt-1 font-semibold">{s}</h3><div className="relative mt-5 h-20 overflow-hidden rounded-2xl bg-white/[0.05]"><span className="scan-line absolute left-0 right-0 top-0 h-1 bg-teal-300" /></div></GlowCard>)}</div></Section>

      <Section id="features" eyebrow="Features" title="A full operating system for citizen services"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([f, Icon]) => <GlowCard key={f}><Icon className="mb-5 text-teal-300" /><h3 className="font-semibold">{f}</h3></GlowCard>)}</div></Section>

      <Section eyebrow="Voice support" title="Citizens can simply speak"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">{languages.map(l => <GlowCard key={l} className="text-center"><Globe2 className="mx-auto mb-3 text-blue-300" /><p>{l}</p></GlowCard>)}<GlowCard className="text-center lg:col-span-2"><Mic2 className="mx-auto mb-3 text-teal-300" /><p>More languages coming soon.</p></GlowCard></div></Section>

      <Section eyebrow="Eligibility checker" title="From profile to eligible schemes instantly"><div className="mt-10 grid gap-8 lg:grid-cols-2"><GlowCard><div className="grid gap-4 sm:grid-cols-2">{['Age', 'State', 'Occupation', 'Income', 'Category'].map(x => <label key={x} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm text-white/60">{x}<div className="mt-3 h-10 rounded-xl bg-black/25" /></label>)}</div></GlowCard><GlowCard><h3 className="mb-5 text-xl font-semibold">AI instantly shows</h3>{['Eligible Schemes', 'Required Documents', 'Where to Apply', 'Processing Time'].map(x => <p key={x} className="mb-3 rounded-2xl bg-emerald-400/10 p-4 text-emerald-100"><CheckCircle2 className="mr-2 inline" size={18} />{x}</p>)}</GlowCard></div></Section>

      <Section eyebrow="Office finder" title="Find the right place with directions"><div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_.8fr]"><GlowCard><div className="relative h-80 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950"><div className="absolute inset-8 rounded-[2rem] border border-teal-300/20" /><MapPin className="absolute left-1/2 top-1/2 text-rose-300 drop-shadow-[0_0_24px_rgba(251,113,133,.8)]" size={46} /><div className="absolute bottom-5 left-5 rounded-2xl bg-black/50 p-4 text-sm">Directions ready • 2.4 km away</div></div></GlowCard><div className="grid gap-4">{['Nearest CSC Center', 'Government Office', 'Bank', 'Post Office', 'Taluk Office', 'District Office'].map(x => <GlowCard key={x}><MapPin className="mr-3 inline text-teal-300" />{x}</GlowCard>)}</div></div></Section>

      <Section eyebrow="Application tracking" title="Every update, across every channel"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{tracking.map(x => <GlowCard key={x}><Bell className="mb-5 text-blue-300" /><h3 className="font-semibold">{x}</h3></GlowCard>)}</div></Section>

      <Section eyebrow="Why GovEase" title="A modern alternative to the old agent-driven process"><div className="mt-10 overflow-hidden rounded-3xl border border-white/[0.12]"><div className="grid bg-white/[0.05] text-sm font-semibold sm:grid-cols-2"><div className="p-5 text-rose-200">Traditional</div><div className="p-5 text-teal-200">GovEase</div></div>{[['Pay Agent', 'AI Guidance'], ['Long Queues', 'Step-by-step'], ['No Tracking', 'Status Tracking'], ['Language Problems', 'Regional Languages'], ['Multiple Visits', 'Single Platform']].map(r => <div key={r[0]} className="grid border-t border-white/10 text-white/70 sm:grid-cols-2"><div className="p-5">{r[0]}</div><div className="p-5">{r[1]}</div></div>)}</div></Section>

      <Section eyebrow="Statistics" title="Built for national-scale service access"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[['10M+', 'Potential Users'], ['500+', 'Government Services'], ['25+', 'Languages'], ['24/7', 'AI Assistant'], ['99%', 'Accuracy Goal']].map(([n,l]) => <GlowCard key={n} className="counter-pop text-center"><div className="text-4xl font-semibold text-teal-200">{n}</div><p className="mt-2 text-white/60">{l}</p></GlowCard>)}</div></Section>

      <Section eyebrow="Security" title="Privacy-first document intelligence"><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{security.map(s => <GlowCard key={s}><ShieldCheck className="mb-5 text-emerald-300" /><h3 className="font-semibold">{s}</h3></GlowCard>)}</div></Section>

      <Section eyebrow="Roadmap" title="A focused path to nationwide utility"><div className="mt-10 grid gap-4 lg:grid-cols-7">{roadmap.map((r,i) => <GlowCard key={r}><p className="text-sm text-teal-300">Phase {i + 1}</p><h3 className="mt-2 font-semibold">{r}</h3></GlowCard>)}</div></Section>

      <Section eyebrow="Testimonials" title="Designed to save time, money, and stress"><div className="mt-10 grid gap-5 lg:grid-cols-3">{['I completed my PAN application in 5 minutes.', 'I saved ₹500 by not using an agent.', 'My parents could finally understand government forms.'].map(t => <GlowCard key={t}><div className="mb-5 flex text-amber-300">{Array.from({length:5}).map((_,i)=><Star key={i} fill="currentColor" size={18}/>)}</div><p className="text-xl text-white/[0.82]">“{t}”</p></GlowCard>)}</div></Section>

      <Section id="pricing" eyebrow="Pricing" title="Start free, scale with support"><div className="mt-10 grid gap-5 lg:grid-cols-3">{[['Free', 'Government guidance, Document checklist, AI Demo'], ['Pro', 'Unlimited AI Assistance, OCR, Status Tracking, Voice Support'], ['Business', 'Banks, CSC Centers, Government Partners']].map((p,i)=><GlowCard key={p[0]} className={i===1?'ring-2 ring-teal-300/40':''}><h3 className="text-2xl font-semibold">{p[0]}</h3><p className="mt-4 text-white/[0.62]">{p[1]}</p><button className="mt-8 rounded-full bg-white px-5 py-3 font-semibold text-ink">Choose {p[0]}</button></GlowCard>)}</div></Section>

      <Section id="faq" eyebrow="FAQ" title="Questions citizens and partners ask"><div className="mt-10 grid gap-4 lg:grid-cols-2">{faqs.map(([q,a]) => <GlowCard key={q}><h3 className="font-semibold">{q}</h3><p className="mt-3 text-white/[0.62]">{a}</p></GlowCard>)}</div></Section>

      <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8"><div className="glass overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-14"><p className="loading-dots mb-4 text-teal-300">AI assistant loading</p><h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">Ready to Simplify Government Services?</h2><a href="#top" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-semibold text-ink">Try GovEase</a></div></section>

      <footer className="relative mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 px-5 py-10 text-sm text-white/[0.55] sm:px-8 md:flex-row md:items-center md:justify-between"><p>© 2026 GovEase. AI assistance for public-service workflows.</p><div className="flex flex-wrap gap-5"><a>About</a><a>Privacy Policy</a><a>Terms</a><a>Contact</a><a>Careers</a><a>GitHub</a><a>LinkedIn</a><a>Twitter</a></div></footer>
    </main>
  );
}

function PhoneMockup() {
  return <GlowCard className="mx-auto w-full max-w-sm rounded-[3rem] border-white/20 p-3"><div className="rounded-[2.4rem] border border-white/10 bg-[#070a18] p-5"><div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-white/20" /><h3 className="text-2xl font-semibold">Hello 👋</h3><p className="mt-2 text-white/60">How can I help today?</p><div className="mt-6 grid gap-3">{['PAN Card','Aadhaar','Passport','Driving Licence','Income Certificate','Scholarship','Pension'].map(x => <button key={x} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-left text-sm hover:bg-white/[0.12]">○ {x}</button>)}</div></div></GlowCard>;
}
