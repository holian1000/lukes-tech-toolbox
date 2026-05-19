import React from "react";
import { motion } from "framer-motion";
import avatar from "./assets/lukes-tech-avatar.png";

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ className = "", variant = "default", children, ...props }) {
  const baseClasses = "inline-flex items-center justify-center whitespace-nowrap transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 disabled:pointer-events-none disabled:opacity-50";
  const variantClasses =
    variant === "outline"
      ? "border border-white/25 bg-white/5 text-white hover:bg-white/10"
      : "bg-cyan-300 text-purple-950 hover:bg-cyan-200";

  return (
    <button type="button" className={joinClasses(baseClasses, variantClasses, className)} {...props}>
      {children}
    </button>
  );
}

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    search: (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    ),
    wrench: (
      <svg {...common}>
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-3-3 2.6-2.6z" />
      </svg>
    ),
    newspaper: (
      <svg {...common}>
        <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V5.5A1.5 1.5 0 0 1 3 4h16a2 2 0 0 1 2 2v11a2.5 2.5 0 0 1-2.5 2.5H4z" />
        <path d="M6 8h8" />
        <path d="M6 12h8" />
        <path d="M6 16h5" />
        <path d="M17 8h1" />
        <path d="M17 12h1" />
      </svg>
    ),
    bot: (
      <svg {...common}>
        <path d="M12 7V4" />
        <rect x="5" y="7" width="14" height="12" rx="3" />
        <path d="M9 12h.01" />
        <path d="M15 12h.01" />
        <path d="M9 16h6" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
        <path d="M5 15l.7 1.8L7.5 17.5l-1.8.7L5 20l-.7-1.8-1.8-.7 1.8-.7L5 15z" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    rocket: (
      <svg {...common}>
        <path d="M4.5 16.5c-1.5 1.3-2 3-2 5 2 0 3.7-.5 5-2" />
        <path d="M9 15 4 10l5-1 6-6c2.5-.7 4.5-.5 6 1-1.5 1.5-1.7 3.5-1 6l-6 6-1 5-5-5" />
        <circle cx="15" cy="9" r="1.5" />
      </svg>
    ),
    cpu: (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3" />
        <path d="M15 1v3" />
        <path d="M9 20v3" />
        <path d="M15 20v3" />
        <path d="M20 9h3" />
        <path d="M20 15h3" />
        <path d="M1 9h3" />
        <path d="M1 15h3" />
      </svg>
    ),
    click: (
      <svg {...common}>
        <path d="M8 13V4.5a1.5 1.5 0 0 1 3 0V12" />
        <path d="M11 11.5V10a1.5 1.5 0 0 1 3 0v2" />
        <path d="M14 12v-1a1.5 1.5 0 0 1 3 0v2" />
        <path d="M17 13a1.5 1.5 0 0 1 3 0v3c0 4-2.5 6-6.5 6H12c-2.7 0-4.5-1.2-5.8-3.3L3.8 15a1.6 1.6 0 0 1 2.6-1.8L8 15" />
      </svg>
    ),
    lightbulb: (
      <svg {...common}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2z" />
      </svg>
    ),
  };

  return icons[name] || icons.sparkles;
}

const tips = [
  {
    title: "iSAMS Data Drops",
    tag: "Admin Saver",
    time: "Save 45 mins",
    difficulty: "Easy",
    copy: "Build one reusable Excel sheet and stop typing the same data every term.",
    icon: "newspaper",
  },
  {
    title: "Windows + V Clipboard",
    tag: "Bonus Tip",
    time: "Save 5 mins",
    difficulty: "Tiny Trick",
    copy: "Open clipboard history and symbols in seconds. A small shortcut with big teacher energy.",
    icon: "click",
  },
  {
    title: "Future-You Reminder Prompt",
    tag: "AI Corner",
    time: "Save your sanity",
    difficulty: "Medium",
    copy: "Give AI your task list and ask it to predict what Future-You will forget.",
    icon: "bot",
  },
];

const apps = [
  { name: "ShuffleED", desc: "Create balanced new classes using teacher filters and student data.", status: "Coming soon" },
  { name: "SuperviseED", desc: "Build fair break and lunch duty rotas around staff availability.", status: "In progress" },
  { name: "Prompt Bank", desc: "Copy-and-paste AI prompts for teachers who want instant wins.", status: "Prototype" },
  { name: "Report Helper", desc: "Turn notes into polished, school-ready report comments.", status: "Idea" },
];

const categories = ["Teams", "Seesaw", "SMART Notebook", "iSAMS", "AI", "Shortcuts", "Workflows", "Apps"];

// Avatar image imported from src/assets/lukes-tech-avatar.png
const LUKE_AVATAR_SRC = avatar;

function validateContent() {
  return {
    hasThreeFeaturedTips: tips.length === 3,
    hasTeacherApps: apps.length >= 4,
    hasCoreCategories: categories.includes("AI") && categories.includes("iSAMS") && categories.includes("Apps"),
    allTipsHaveIcons: tips.every((tip) => Boolean(tip.icon)),
    hasAvatarImagePath: Boolean(LUKE_AVATAR_SRC),
  };
}

const contentChecks = validateContent();
console.assert(contentChecks.hasThreeFeaturedTips, "Expected exactly three featured tips on the homepage.");
console.assert(contentChecks.hasTeacherApps, "Expected at least four teacher app cards.");
console.assert(contentChecks.hasCoreCategories, "Expected the core category chips to be present.");
console.assert(contentChecks.allTipsHaveIcons, "Expected every featured tip to have an icon name.");
console.assert(contentChecks.hasAvatarImagePath, "Expected Luke\'s avatar image to be available.");

export default function LukesTechToolbox() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#24003f] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-fuchsia-500 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[35%] h-[34rem] w-[34rem] rounded-full bg-violet-700 blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-end justify-center overflow-hidden rounded-2xl border border-cyan-300/40 bg-white/10 shadow-lg shadow-cyan-500/20 backdrop-blur">
            <img
              src={LUKE_AVATAR_SRC}
              alt="Luke's Tech Toolbox avatar"
              className="h-14 w-14 object-cover object-top"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200">Luke's</p>
            <h1 className="text-xl font-black leading-none tracking-tight">Tech Toolbox</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-white/75 md:flex">
          <a href="#tips" className="hover:text-cyan-200">Tips</a>
          <a href="#newsletters" className="hover:text-cyan-200">Newsletters</a>
          <a href="#apps" className="hover:text-cyan-200">Apps</a>
          <a href="#prompts" className="hover:text-cyan-200">Prompt Bank</a>
        </nav>
        <Button className="rounded-full bg-yellow-300 px-5 font-black text-purple-950 hover:bg-yellow-200">Submit a problem</Button>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-8 flex w-fit items-end gap-4 rounded-[2rem] border border-cyan-300/30 bg-white/10 p-3 pr-5 shadow-2xl shadow-cyan-500/10 backdrop-blur"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-[1.5rem] border-2 border-white/40 bg-purple-950 shadow-lg">
                <img
                  src={LUKE_AVATAR_SRC}
                  alt="Luke's Tech Toolbox avatar"
                  className="h-full w-full object-cover object-top"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-white/30" />
              </div>
              <div className="pb-2">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-yellow-200">Hosted by</p>
                <p className="text-2xl font-black leading-none text-white">Luke</p>
                <p className="mt-1 text-sm font-semibold text-cyan-100">your teacher tech sidekick</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur"
            >
              <Icon name="sparkles" className="h-4 w-4" />
              Teacher tech tips, AI tricks and classroom-ready tools
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl"
            >
              Luke's Tech Toolbox <span className="text-cyan-200">for Teachers</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/78"
            >
              A practical hub for busy teachers who want faster workflows, smarter AI prompts, better tech confidence and tools that actually save time.
            </motion.p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-cyan-300 px-7 py-6 text-base font-black text-purple-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-200">
                Explore the toolbox
              </Button>
              <Button variant="outline" className="rounded-full border-white/25 bg-white/5 px-7 py-6 text-base font-black text-white hover:bg-white/10">
                View latest newsletter
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span key={cat} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white/80">{cat}</span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-300/30 via-fuchsia-400/20 to-yellow-300/20 blur-2xl" />
            <Card className="relative overflow-hidden rounded-[2.5rem] border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
              <CardContent className="p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-yellow-200">Latest issue</p>
                    <h3 className="mt-2 text-3xl font-black uppercase text-white">Data Drops!</h3>
                  </div>
                  <div className="rounded-2xl bg-yellow-300 px-3 py-2 text-sm font-black text-purple-950">#1</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-purple-950/60 p-5">
                  <div className="mb-4 h-36 rounded-2xl bg-white/80 p-4 text-purple-950">
                    <div className="mb-3 h-4 w-2/3 rounded-full bg-purple-300" />
                    <div className="mb-2 h-3 w-full rounded-full bg-purple-200" />
                    <div className="mb-2 h-3 w-5/6 rounded-full bg-purple-200" />
                    <div className="mt-5 flex h-16 items-center justify-center rounded-xl bg-purple-100">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-950 text-white">▶</div>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-yellow-200/25 bg-yellow-300/15 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">Bonus Tip</p>
                      <p className="mt-2 text-sm text-white/85">Windows + V for clipboard magic.</p>
                    </div>
                    <div className="rounded-2xl border border-cyan-200/25 bg-cyan-300/15 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">AI Corner</p>
                      <p className="mt-2 text-sm text-white/85">Let AI spot what you’ll forget.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="tips" className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-200">Start here</p>
              <h2 className="mt-2 text-4xl font-black">Featured teacher time-savers</h2>
            </div>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white/70 md:flex">
              <Icon name="search" className="h-4 w-4" />
              Search tips, tools and shortcuts
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {tips.map((tip) => (
              <Card key={tip.title} className="rounded-[2rem] border-white/10 bg-white/10 text-white shadow-xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                <CardContent className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/20 text-cyan-100">
                      <Icon name={tip.icon} className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-purple-950">{tip.tag}</span>
                  </div>
                  <h3 className="text-2xl font-black">{tip.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-white/75">{tip.copy}</p>
                  <div className="mt-5 flex gap-2 text-xs font-bold text-white/75">
                    <span className="rounded-full bg-white/10 px-3 py-1">{tip.time}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">{tip.difficulty}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="apps" className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2.5rem] border border-white/10 bg-purple-950/50 p-6 shadow-2xl backdrop-blur md:p-10">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-200">Teacher apps</p>
                <h2 className="mt-2 text-4xl font-black">Tools built for real school problems</h2>
              </div>
              <Button className="rounded-full bg-white px-5 font-black text-purple-950 hover:bg-cyan-100">
                <Icon name="rocket" className="mr-2 h-4 w-4" /> Launch app library
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {apps.map((app) => (
                <div key={app.name} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400/20 text-fuchsia-100">
                    <Icon name="wrench" className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{app.name}</h3>
                  <p className="mt-2 min-h-20 text-sm leading-6 text-white/70">{app.desc}</p>
                  <span className="mt-4 inline-flex rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">{app.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prompts" className="mx-auto grid max-w-7xl gap-5 px-6 py-8 md:grid-cols-3">
          <Card className="rounded-[2rem] border-white/10 bg-white/10 text-white md:col-span-2">
            <CardContent className="p-7">
              <div className="mb-4 flex items-center gap-3">
                <Icon name="lightbulb" className="h-6 w-6 text-yellow-200" />
                <h2 className="text-3xl font-black">Copy-ready prompt bank</h2>
              </div>
              <p className="max-w-2xl text-white/75">Short, practical AI prompts for planning, emails, differentiation, marking support, admin and creative classroom tasks.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5 font-mono text-sm text-cyan-100">
                Create a Year 3 lesson starter for [topic]. Make it interactive, visual, and suitable for a British curriculum classroom.
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border-white/10 bg-yellow-300 text-purple-950">
            <CardContent className="p-7">
              <Icon name="mail" className="mb-4 h-8 w-8" />
              <h2 className="text-3xl font-black">Got a tech problem?</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-purple-950/75">Send it in and it could become a future tip, guide or mini-tool.</p>
              <Button className="mt-6 rounded-full bg-purple-950 text-white hover:bg-purple-900">Ask Luke</Button>
            </CardContent>
          </Card>
        </section>

        <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/55">
          <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p>Luke's Tech Toolbox for Teachers</p>
            <div className="flex gap-4">
              <span>Newsletters</span>
              <span>Apps</span>
              <span>Downloads</span>
              <span>CPD</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
