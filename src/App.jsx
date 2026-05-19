import { useState } from "react";
import avatar from "./assets/lukes-tech-avatar.png";

function cx(...classes) { return classes.filter(Boolean).join(" "); }

function Icon({ name, className = "h-6 w-6" }) {
  const p = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    search:    <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
    wrench:    <svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-3-3 2.6-2.6z"/></svg>,
    newspaper: <svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V5.5A1.5 1.5 0 0 1 3 4h16a2 2 0 0 1 2 2v11a2.5 2.5 0 0 1-2.5 2.5H4z"/><path d="M6 8h8"/><path d="M6 12h8"/><path d="M6 16h5"/><path d="M17 8h1"/><path d="M17 12h1"/></svg>,
    bot:       <svg {...p}><path d="M12 7V4"/><rect x="5" y="7" width="14" height="12" rx="3"/><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M9 16h6"/></svg>,
    sparkles:  <svg {...p}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z"/><path d="M5 15l.7 1.8L7.5 17.5l-1.8.7L5 20l-.7-1.8-1.8-.7 1.8-.7L5 15z"/></svg>,
    mail:      <svg {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
    rocket:    <svg {...p}><path d="M4.5 16.5c-1.5 1.3-2 3-2 5 2 0 3.7-.5 5-2"/><path d="M9 15 4 10l5-1 6-6c2.5-.7 4.5-.5 6 1-1.5 1.5-1.7 3.5-1 6l-6 6-1 5-5-5"/><circle cx="15" cy="9" r="1.5"/></svg>,
    click:     <svg {...p}><path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 11.5V10a1.5 1.5 0 0 1 3 0v2"/><path d="M14 12v-1a1.5 1.5 0 0 1 3 0v2"/><path d="M17 13a1.5 1.5 0 0 1 3 0v3c0 4-2.5 6-6.5 6H12c-2.7 0-4.5-1.2-5.8-3.3L3.8 15a1.6 1.6 0 0 1 2.6-1.8L8 15"/></svg>,
    lightbulb: <svg {...p}><path d="M9 18h6"/><path d="M10 22h4"/><path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2z"/></svg>,
    menu:      <svg {...p}><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>,
    x:         <svg {...p}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
    chevron:   <svg {...p}><path d="m9 18 6-6-6-6"/></svg>,
  };
  return icons[name] || icons.sparkles;
}

const tips = [
  { title: "iSAMS Data Drops",      tag: "Admin Saver",  time: "Save 45 mins",     difficulty: "Easy",       copy: "Build one reusable Excel sheet and stop typing the same student data into iSAMS every single term.",                              icon: "newspaper", category: "iSAMS",          href: "/newsletter-1.html" },
  { title: "Who Teaches This Kid?", tag: "iSAMS Tip",    time: "Save 10 mins",     difficulty: "Easy",       copy: "Five clicks to see every teacher a student has this year — all in one place, no detective work needed.",                         icon: "search",    category: "iSAMS",          href: "/newsletter-2.html" },
  { title: "Quick Class Lists",     tag: "Admin Saver",  time: "Save 20 mins",     difficulty: "Easy",       copy: "Teaching Group Quick View gives you an instant class snapshot — then export to a clean Excel, PDF or Word in seconds.",          icon: "newspaper", category: "iSAMS",          href: "/newsletter-4.html" },
  { title: "Windows + V Clipboard", tag: "Bonus Tip",    time: "Save 5 mins",      difficulty: "Tiny Trick", copy: "Open clipboard history and symbols in seconds — find the pound sign, divide symbol and more without digging through menus.",      icon: "click",     category: "Shortcuts",      href: "/newsletter-1.html" },
  { title: "Alt + Tab App Switch",  tag: "Bonus Tip",    time: "Instant",          difficulty: "Tiny Trick", copy: "Hold Alt and tap Tab to flick between all your open apps like a tech ninja. Release to full-screen the one you need.",           icon: "click",     category: "Shortcuts",      href: "/newsletter-2.html" },
  { title: "Ctrl + K Hyperlinks",  tag: "Bonus Tip",    time: "Save 2 mins",      difficulty: "Tiny Trick", copy: "Highlight any text, press Ctrl + K, paste a URL — done. Works in Word, Outlook, Teams, OneNote, Google Docs and PowerPoint.", icon: "click",     category: "Shortcuts",      href: "/newsletter-3.html" },
  { title: "Print Screen → Snip",  tag: "Bonus Tip",    time: "Instant",          difficulty: "Tiny Trick", copy: "Press the Print Screen key to open Snipping Tool instantly. Drag to capture anything, then paste it straight into your work.",   icon: "click",     category: "Shortcuts",      href: "/newsletter-5.html" },
  { title: "Ctrl + Shift + T",     tag: "Tab Saver",    time: "Instant",          difficulty: "Tiny Trick", copy: "Accidentally closed a tab? Press Ctrl + Shift + T to bring it straight back. Keep pressing to recover older closed tabs too.",  icon: "click",     category: "Shortcuts",      href: "/newsletter-7.html" },
  { title: "Future-You Reminder",   tag: "AI Corner",    time: "Save your sanity", difficulty: "Medium",     copy: "Give ChatGPT your task list and ask it to predict what Future-You will forget, then have it build you a reminder schedule.",     icon: "bot",       category: "AI",             href: "/newsletter-1.html" },
  { title: "Personalise ChatGPT",  tag: "AI Corner",    time: "Set it once",      difficulty: "Medium",     copy: "Set custom instructions so ChatGPT always writes in British English, challenges your thinking, and skips the corporate waffle.", icon: "bot",       category: "AI",             href: "/newsletter-3.html" },
  { title: "SMART Default Font",   tag: "SMART Tip",    time: "Set it once",      difficulty: "Easy",       copy: "Set your preferred font once in SMART Notebook and it sticks — no more changing it from Arial every time you open a new file.", icon: "wrench",    category: "SMART Notebook", href: "/newsletter-3.html" },
  { title: "Seesaw Focus Mode Fix",tag: "Seesaw Tip",   time: "2 minutes",        difficulty: "Easy",       copy: "Tools vanishing in Seesaw? Edit Activity → first slide → Focus Mode → untick both options → Apply to all slides. Problem solved.", icon: "wrench",  category: "Seesaw",         href: "/newsletter-6.html" },
  { title: "Present PPT in Teams", tag: "Teams Tip",    time: "Cleaner lessons",  difficulty: "Easy",       copy: "Skip screen sharing entirely. Present your PowerPoint directly inside Teams for a lag-free, professional-looking lesson.",        icon: "rocket",    category: "Teams",          href: "/newsletter-6.html" },
];

const newsletters = [
  { issue: "#1", title: "Data Drops!",           series: "Using iSAMS #1",   date: "November 2025",  subtitle: "Build one reusable Excel sheet and never manually enter iSAMS data again.",                             color: "yellow",  tags: ["iSAMS","Excel","Admin"],         href: "/newsletter-1.html" },
  { issue: "#2", title: "Who Teaches This Kid?", series: "Using iSAMS #2",   date: "December 2025",  subtitle: "Five clicks to see every teacher a student has — plus Microsoft Copilot turns emails into reminders.",  color: "cyan",    tags: ["iSAMS","Copilot","Shortcuts"],   href: "/newsletter-2.html" },
  { issue: "#3", title: "Getting SMART",         series: "Getting SMART #1", date: "January 2026",   subtitle: "Set your SMART Notebook default font once, master disappearing boxes, and personalise ChatGPT.",        color: "fuchsia", tags: ["SMART Notebook","AI","Shortcuts"],href: "/newsletter-3.html" },
  { issue: "#4", title: "Quick Class Lists",     series: "Using iSAMS #3",   date: "February 2026",  subtitle: "Teaching Group Quick View for instant class snapshots, plus Canva Magic Write for lesson planning.",     color: "yellow",  tags: ["iSAMS","Admin","Canva AI"],      href: "/newsletter-4.html" },
  { issue: "#5", title: "Data Drops 2",          series: "Using iSAMS #4",   date: "March 2026",     subtitle: "Clean, prepare and re-upload your Excel data drop back into iSAMS properly — plus Seesaw AI.",          color: "cyan",    tags: ["iSAMS","Seesaw AI","Shortcuts"], href: "/newsletter-5.html" },
  { issue: "#6", title: "Seesaw: Remote Ready",  series: "Using Seesaw #1",  date: "April 2026",     subtitle: "Fix vanishing Seesaw tools and present PowerPoint cleanly in Teams — remote learning sorted.",          color: "fuchsia", tags: ["Seesaw","Teams","AI"],           href: "/newsletter-6.html" },
  { issue: "#7", title: "Nearpod: Go Live",      series: "Using Nearpod #1", date: "May 2026",       subtitle: "Use Nearpod for live, interactive lessons where you control the pace from the front.",                  color: "yellow",  tags: ["Nearpod","AI","Shortcuts"],      href: "/newsletter-7.html" },
];

const categories = ["All", "iSAMS", "Shortcuts", "AI", "SMART Notebook", "Seesaw", "Teams", "Apps"];

const nlColors = {
  yellow:  { bg: "bg-yellow-300/20",  border: "border-yellow-200/30",  text: "text-yellow-200",  badge: "bg-yellow-300 text-purple-950" },
  cyan:    { bg: "bg-cyan-300/20",    border: "border-cyan-200/30",    text: "text-cyan-200",    badge: "bg-cyan-300 text-purple-950"   },
  fuchsia: { bg: "bg-fuchsia-400/20", border: "border-fuchsia-300/30", text: "text-fuchsia-200", badge: "bg-fuchsia-400 text-purple-950"},
};

function scrollTo(id) { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filtered = tips.filter(t => {
    const catOk = activeCat === "All" || t.category === activeCat;
    const q = search.toLowerCase();
    const searchOk = !q || t.title.toLowerCase().includes(q) || t.copy.toLowerCase().includes(q) || t.tag.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  return (
    <div className="min-h-screen overflow-hidden bg-[#24003f] text-white">
      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes scaleIn  { from { opacity:0; transform:scale(0.92) rotate(-4deg); } to { opacity:1; transform:scale(1) rotate(0); } }
        @keyframes slideDown{ from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        .anim-scale-in   { animation: scaleIn   0.7s cubic-bezier(.22,1,.36,1) 0.25s both; }
        .anim-fade-in    { animation: fadeIn    0.5s ease both; }
        .anim-up-0       { animation: fadeInUp  0.6s ease 0s   both; }
        .anim-up-1       { animation: fadeInUp  0.6s ease 0.1s both; }
        .anim-up-2       { animation: fadeInUp  0.6s ease 0.2s both; }
        .anim-up-3       { animation: fadeInUp  0.6s ease 0.3s both; }
        .anim-up-4       { animation: fadeInUp  0.6s ease 0.4s both; }
        .anim-hero-card  { animation: fadeInUp  0.7s ease 0.2s both; }
        .anim-slide-down { animation: slideDown 0.2s ease both; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[35%] h-[34rem] w-[34rem] rounded-full bg-violet-700 blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(#ffffff22 1px,transparent 1px),linear-gradient(90deg,#ffffff22 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

      {/* Header */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-end justify-center overflow-hidden rounded-2xl border border-cyan-300/40 bg-white/10 shadow-lg shadow-cyan-500/20 backdrop-blur">
            <img src={avatar} alt="Luke" className="h-14 w-14 object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">Luke's</p>
            <h1 className="text-xl font-black leading-none tracking-tight">Tech Toolbox</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/75 md:flex">
          <button onClick={() => scrollTo("tips")} className="hover:text-cyan-200 transition">Tips</button>
          <button onClick={() => scrollTo("newsletters")} className="hover:text-cyan-200 transition">Newsletters</button>
          <button onClick={() => scrollTo("apps")} className="hover:text-cyan-200 transition">Apps</button>
          <button onClick={() => scrollTo("prompts")} className="hover:text-cyan-200 transition">Prompt Bank</button>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/contact.html" className="hidden md:inline-flex items-center justify-center rounded-full bg-yellow-300 px-5 py-2 font-black text-purple-950 text-sm hover:bg-yellow-200 transition">
            Submit a problem
          </a>
          <button onClick={() => setMobileOpen(v => !v)} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white backdrop-blur md:hidden">
            <Icon name={mobileOpen ? "x" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="anim-slide-down relative z-10 mx-4 mb-4 rounded-3xl border border-white/15 bg-purple-950/90 p-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-lg font-bold">
            {[["tips","Tips"],["newsletters","Newsletters"],["apps","Apps"],["prompts","Prompt Bank"]].map(([id, label]) => (
              <button key={id} onClick={() => { scrollTo(id); setMobileOpen(false); }} className="flex items-center gap-2 text-white/80 hover:text-cyan-200 transition text-left">
                <Icon name="chevron" className="h-4 w-4 text-cyan-300" />{label}
              </button>
            ))}
          </nav>
          <a href="/contact.html" className="mt-6 block w-full rounded-full bg-yellow-300 py-3 font-black text-purple-950 text-sm hover:bg-yellow-200 transition text-center">
            Submit a problem
          </a>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="anim-scale-in mb-8 flex w-fit items-end gap-4 rounded-[2rem] border border-cyan-300/30 bg-white/10 p-3 pr-5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.5rem] border-2 border-white/40 bg-purple-950 shadow-lg">
                <img src={avatar} alt="Luke" className="h-full w-full object-cover object-top" />
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/30" />
              </div>
              <div className="pb-2">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-yellow-200">Hosted by</p>
                <p className="text-2xl font-black leading-none text-white">Luke</p>
                <p className="mt-1 text-sm font-semibold text-cyan-100">your teacher tech sidekick</p>
              </div>
            </div>
            <div className="anim-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur">
              <Icon name="sparkles" className="h-4 w-4" />
              Teacher tech tips, AI tricks and classroom-ready tools
            </div>
            <h2 className="anim-up-1 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
              Luke's Tech Toolbox <span className="text-cyan-200">for Teachers</span>
            </h2>
            <p className="anim-up-2 mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A practical hub for busy teachers who want faster workflows, smarter AI prompts, better tech confidence and tools that actually save time.
            </p>
            <div className="anim-up-3 mt-8 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => scrollTo("tips")} className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-7 py-4 text-base font-black text-purple-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-200 transition">
                Explore the toolbox
              </button>
              <button onClick={() => scrollTo("newsletters")} className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-black text-white hover:bg-white/10 transition">
                View newsletters
              </button>
            </div>
            <div className="anim-up-4 mt-8 flex flex-wrap gap-2">
              {categories.filter(c => c !== "All").map(cat => (
                <span key={cat} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white/80">{cat}</span>
              ))}
            </div>
          </div>

          {/* Hero preview card — links to latest issue */}
          <div className="anim-hero-card relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-300/30 via-fuchsia-400/20 to-yellow-300/20 blur-2xl" />
            <a href="/newsletter-7.html" className="relative block overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl p-7 cursor-pointer">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200">Latest issue</p>
                  <h3 className="mt-1 text-2xl font-black uppercase text-white">Nearpod: Go Live</h3>
                  <p className="text-xs text-white/50 mt-1">Using Nearpod #1 · May 2026</p>
                </div>
                <div className="rounded-2xl bg-yellow-300 px-3 py-2 text-sm font-black text-purple-950">#7</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-purple-950/60 p-5">
                <div className="mb-4 h-28 rounded-2xl bg-white/80 p-4">
                  <div className="mb-3 h-4 w-2/3 rounded-full bg-purple-300" />
                  <div className="mb-2 h-3 w-full rounded-full bg-purple-200" />
                  <div className="mb-2 h-3 w-4/5 rounded-full bg-purple-200" />
                  <div className="mt-4 flex h-10 items-center justify-center rounded-xl bg-purple-100">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-950 text-white text-sm">▶</div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-yellow-200/25 bg-yellow-300/15 p-3">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">Bonus Tip</p>
                    <p className="mt-1 text-xs text-white/85">Ctrl + Shift + T — reopen that closed tab instantly.</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-200/25 bg-cyan-300/15 p-3">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">AI Corner</p>
                    <p className="mt-1 text-xs text-white/85">Wispr Flow: speak naturally, AI types it for you.</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs font-bold text-white/40">Read Issue #7 →</p>
            </a>
          </div>
        </section>

        {/* Tips */}
        <section id="tips" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">Start here</p>
              <h2 className="mt-2 text-4xl font-black">All tips &amp; tricks</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 backdrop-blur md:w-80 focus-within:border-cyan-300/50 transition">
              <Icon name="search" className="h-4 w-4 shrink-0 text-white/50" />
              <input type="text" placeholder="Search tips, tools and shortcuts" value={search} onChange={e => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none" />
            </div>
          </div>
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={cx("rounded-full border px-3 py-1 text-xs font-bold transition",
                  activeCat === cat ? "border-cyan-300 bg-cyan-300 text-purple-950" : "border-white/15 bg-white/10 text-white/80 hover:bg-white/15"
                )}>{cat}</button>
            ))}
          </div>
          {filtered.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map(tip => (
                <a key={tip.title} href={tip.href}
                  className="rounded-[2rem] border border-white/10 bg-white/10 text-white shadow-xl backdrop-blur cursor-pointer transition hover:-translate-y-1 hover:bg-white/15 p-6 block">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/20 text-cyan-100">
                      <Icon name={tip.icon} className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-purple-950">{tip.tag}</span>
                  </div>
                  <h3 className="text-xl font-black">{tip.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75 min-h-[4.5rem]">{tip.copy}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2 text-xs font-bold text-white/60">
                      <span className="rounded-full bg-white/10 px-3 py-1">{tip.time}</span>
                      <span className="rounded-full bg-white/10 px-3 py-1">{tip.difficulty}</span>
                    </div>
                    <span className="text-xs font-bold text-cyan-300">Read →</span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center text-white/60">
              <Icon name="search" className="mx-auto mb-4 h-10 w-10 opacity-40" />
              <p className="text-lg font-bold">No tips found</p>
              <p className="mt-1 text-sm">Try a different search or category.</p>
            </div>
          )}
        </section>

        {/* Newsletters */}
        <section id="newsletters" className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">Fresh from the inbox</p>
            <h2 className="mt-2 text-4xl font-black">All 7 issues</h2>
            <p className="mt-3 max-w-2xl text-white/70">Each issue drops one big tip, a bonus shortcut and an AI corner — all in a 3-minute read.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map(nl => {
              const c = nlColors[nl.color];
              return (
                <a key={nl.issue} href={nl.href}
                  className="flex flex-col rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur cursor-pointer transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="mb-4 flex items-start justify-between">
                    <div className={cx("rounded-2xl border p-3", c.bg, c.border)}>
                      <Icon name="newspaper" className={cx("h-6 w-6", c.text)} />
                    </div>
                    <div className="text-right">
                      <span className={cx("rounded-full px-3 py-1 text-xs font-black", c.badge)}>{nl.issue}</span>
                      <p className="mt-1 text-xs text-white/40">{nl.date}</p>
                    </div>
                  </div>
                  <p className="text-xs font-black uppercase tracking-wider text-white/50 mb-1">{nl.series}</p>
                  <h3 className="text-xl font-black text-white">{nl.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/70">{nl.subtitle}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {nl.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-xs font-bold text-white/55">{tag}</span>
                    ))}
                  </div>
                  <div className={cx("mt-5 flex items-center gap-1 text-sm font-bold", c.text)}>
                    Read issue <Icon name="chevron" className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Apps */}
        <section id="apps" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2.5rem] border border-white/10 bg-purple-950/50 p-6 shadow-2xl backdrop-blur md:p-10">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-200">Teacher apps</p>
                <h2 className="mt-2 text-4xl font-black">Tools built for real school problems</h2>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "ShuffleED",     desc: "Create balanced new classes using teacher filters and student data.",  status: "Coming soon" },
                { name: "SuperviseED",   desc: "Build fair break and lunch duty rotas around staff availability.",     status: "In progress" },
                { name: "Prompt Bank",   desc: "Copy-and-paste AI prompts for teachers who want instant wins.",        status: "Prototype" },
                { name: "Report Helper", desc: "Turn notes into polished, school-ready report comments.",              status: "Idea" },
              ].map(app => (
                <div key={app.name} className="rounded-3xl border border-white/10 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/20 text-fuchsia-100">
                    <Icon name="wrench" className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{app.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70 min-h-[5rem]">{app.desc}</p>
                  <span className="mt-4 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{app.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prompt Bank + Contact */}
        <section id="prompts" className="mx-auto grid max-w-7xl gap-5 px-6 py-8 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-7 text-white md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <Icon name="lightbulb" className="h-6 w-6 text-yellow-200" />
              <h2 className="text-3xl font-black">Copy-ready prompt bank</h2>
            </div>
            <p className="max-w-2xl text-white/75">Short, practical AI prompts for planning, emails, differentiation, marking support, admin and creative classroom tasks.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 font-mono text-sm text-cyan-100">
              Create a Year 3 lesson starter for [topic]. Make it interactive, visual, and suitable for a British curriculum classroom.
            </div>
          </div>
          <div className="rounded-[2rem] bg-yellow-300 p-7 text-purple-950">
            <Icon name="mail" className="mb-4 h-8 w-8" />
            <h2 className="text-3xl font-black">Got a tech problem?</h2>
            <p className="mt-3 text-sm font-semibold leading-6 text-purple-950/75">Send it in and it could become a future tip, guide or mini-tool.</p>
            <a href="/contact.html" className="mt-6 inline-flex items-center justify-center rounded-full bg-purple-950 px-5 py-2 text-sm font-black text-white hover:bg-purple-900 transition">
              Ask Luke
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/55">
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p>Luke's Tech Toolbox for Teachers</p>
            <div className="flex flex-wrap gap-4">
              {[["Tips","tips"],["Newsletters","newsletters"],["Apps","apps"],["Prompt Bank","prompts"]].map(([label, id]) => (
                <button key={id} onClick={() => scrollTo(id)} className="hover:text-cyan-200 transition">{label}</button>
              ))}
              <a href="/contact.html" className="hover:text-cyan-200 transition">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
