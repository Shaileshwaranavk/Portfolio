import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useState } from "react";
import portrait from "@/assets/comic-developer-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A V K Shaileshwaran | Software Engineer" },
      { name: "description", content: "Explore the comic-book portfolio of A V K Shaileshwaran, a Software Engineer building AI-driven, AWS/FHIR healthcare systems and agentic automation." },
      { property: "og:title", content: "A V K Shaileshwaran | Software Engineer" },
      { property: "og:description", content: "A comic-book journey through Shaileshwaran's projects, skills, and engineering experience — from Python roots to AWS, FHIR, and AI agents." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { number: "01", title: "Personalized Voice Assistant", tag: "Python", description: "Performs everyday tasks like sending emails, playing music, and searching the web—with room for custom commands.", href: "https://github.com/Shaileshwaranavk/Voice_Assistant", tone: "paper" },
  { number: "02", title: "Image Classification", tag: "CIFAR-10", description: "A desktop app that classifies uploaded images into ten categories using a pre-trained model.", href: "https://github.com/Shaileshwaranavk/Image_Classification", tone: "bubble" },
  { number: "03", title: "Ad Hoc Expertise Platform", tag: "Recommendations", description: "Connects people with specialists and recommends experts around each user's needs.", href: "https://github.com/Shaileshwaranavk/Job_Horizon", tone: "paper" },
  { number: "04", title: "Corona Virus Tracker", tag: "Data", description: "Scrapes live global statistics and exports country reports as HTML, JSON, or Excel.", href: "https://github.com/Shaileshwaranavk/Corona_Virus_Tracker_App", tone: "sun" },
  { number: "05", title: "Quiz Application", tag: "Django · MySQL", description: "Unique question sets, automatic scoring, and a live leaderboard in one full-stack quiz experience.", href: "https://github.com/Shaileshwaranavk/Quizziz", tone: "flame" },
] as const;

const experience = [
  {
    company: "Clustrex Data Private Limited",
    duration: "11 MONTHS",
    roles: [
      { dates: "JUL 2026 — PRESENT", role: "Software Engineer", copy: "Building full-stack, agentic AI automation and AWS/FHIR healthcare interoperability systems — from backend APIs to AI agents that automate operational workflows." },
      { dates: "NOV 2025 — JUL 2026", role: "Software Development Intern", copy: "Ramped up on cloud-integrated healthcare workflows and full-stack delivery with Python, Django, React.js, and MySQL ahead of converting to a full-time engineering role." },
    ],
  },
  {
    company: "Emayam Technologies",
    duration: "2 MONTHS",
    roles: [
      { dates: "APR — MAY 2025", role: "Python Backend Developer", copy: "Delivered backend projects by developing robust APIs and integrating MySQL databases, and strengthened API testing and debugging with Postman." },
    ],
  },
  {
    company: "Shiash Info Solutions",
    duration: "4 MONTHS",
    roles: [
      { dates: "AUG — NOV 2024", role: "Full Stack Developer Intern", copy: "Designed responsive web interfaces with HTML, CSS, and Django, and automated business workflows by connecting frontend and backend modules." },
    ],
  },
] as const;

const skills = ["Python", "Django", "React.js", "AWS", "FHIR", "AI Agents", "MySQL", "JavaScript"];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <nav className="sticky top-0 z-50 border-b-4 border-ink bg-sun/95 backdrop-blur-sm" aria-label="Main navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
            <span className="grid size-10 place-items-center rounded-md border-2 border-ink bg-ink font-display text-xl text-sun">AVK</span>
            <span className="font-display text-2xl">Origin Story</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold uppercase md:flex">
            <a className="hover:text-flame" href="#about">Bio</a>
            <a className="hover:text-flame" href="#skills">Skills</a>
            <a className="hover:text-flame" href="#experience">Journey</a>
            <a className="hover:text-flame" href="#projects">Projects</a>
            <a className="hover:text-flame" href="#contact">Contact</a>
          </div>
          <div className="flex items-center gap-2">
            <a href="/resume.pdf" download className="hidden items-center gap-2 rounded-md border-2 border-ink bg-ink px-4 py-2 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5 sm:inline-flex"><Download size={16} /> CV</a>
            <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-md border-2 border-ink bg-paper md:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
        {menuOpen && <div className="grid border-t-2 border-ink bg-paper px-4 py-4 text-sm font-bold uppercase md:hidden">{["about", "skills", "experience", "projects", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="border-b border-ink/20 py-3">{item}</a>)}</div>}
      </nav>

      <section id="top" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="comic-shadow panel-pop ink-lines relative overflow-hidden rounded-lg border-4 border-ink bg-bubble p-6 sm:p-10 lg:col-span-7">
            <div className="absolute -right-12 -top-10 rotate-12 font-display text-8xl text-ink/10 sm:text-9xl">BOOM!</div>
            <span className="relative inline-block -rotate-2 rounded-sm border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase">Software Engineer · AWS & FHIR</span>
            <p className="relative mt-7 font-display text-2xl text-sun">Hi, I'm</p>
            <h1 className="relative mt-1 max-w-3xl break-words font-display text-5xl leading-[0.9] text-cream [text-shadow:4px_4px_0_var(--ink)] sm:text-7xl lg:text-8xl">A V K<br />Shaileshwaran</h1>
            <p className="relative mt-6 max-w-xl text-base font-semibold leading-relaxed text-cream sm:text-lg">A Software Engineer at Clustrex Data building AI-driven healthcare systems on AWS and FHIR — full-stack across Python, Django, React.js, and MySQL, with a habit of proving new ideas through fast, working prototypes.</p>
            <div className="relative mt-7 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-sun px-5 py-3 font-bold transition-transform hover:-translate-y-1">Read the story <ArrowDownRight size={18} /></a>
              <a href="mailto:avkshaileshwaran@gmail.com" className="inline-flex items-center gap-2 rounded-md border-2 border-cream px-5 py-3 font-bold text-cream transition-colors hover:bg-cream hover:text-ink">Get in touch <Mail size={18} /></a>
            </div>
          </div>

          <div className="grid gap-5 lg:col-span-5">
            <div className="comic-shadow-sm panel-pop grid grid-cols-[7rem_1fr] gap-4 rounded-lg border-4 border-ink bg-paper p-4 sm:grid-cols-[9rem_1fr]">
              <img src={portrait} alt="Comic portrait of A V K Shaileshwaran" width={1024} height={1024} className="aspect-square w-full self-center rounded-md border-2 border-ink object-cover" />
              <div className="self-center">
                <p className="font-display text-3xl text-flame">Issue #01</p>
                <p className="mt-1 text-sm font-bold uppercase">The Python Origin</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">Currently building agentic AI and FHIR healthcare systems as a Software Engineer at Clustrex Data.</p>
              </div>
            </div>
            <div className="comic-shadow-sm panel-pop rounded-lg border-4 border-ink bg-flame p-6 text-cream">
              <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-xs font-bold uppercase">Status report</p><span className="rounded-sm border-2 border-cream px-2 py-1 text-xs font-bold whitespace-nowrap">SOFTWARE DEVELOPER</span></div>
              <p className="mt-5 font-display text-4xl leading-none sm:text-5xl">Building. Learning.<br />Leveling up.</p>
              <p className="mt-4 text-sm text-cream/80">Backend development · REST APIs · Software design · DevOps</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-12">
          <article className="comic-shadow-sm panel-pop rounded-lg border-4 border-ink bg-paper p-6 lg:col-span-5">
            <p className="text-xs font-bold uppercase text-flame">Character sheet · 01</p>
            <h2 className="mt-2 font-display text-5xl">Get to know me</h2>
            <p className="mt-4 leading-relaxed text-ink/75">Software Engineer building full-stack, agentic AI, and AWS/FHIR healthcare systems — validating ideas fast through working prototypes. Published author on AI-driven cancer risk assessment, and former Student Chairman of the Descience Open Source Club.</p>
          </article>
          <article id="skills" className="comic-shadow-sm panel-pop scroll-mt-24 rounded-lg border-4 border-ink bg-sun p-6 lg:col-span-4">
            <p className="text-xs font-bold uppercase">Power inventory · 08</p>
            <h2 className="mt-2 font-display text-5xl">The toolkit</h2>
            <div className="mt-5 flex flex-wrap gap-2">{skills.map((skill, index) => <span key={skill} className={`rounded-md border-2 border-ink px-3 py-2 text-sm font-bold ${index % 3 === 0 ? "bg-ink text-cream" : "bg-paper"}`}>{skill}</span>)}</div>
          </article>
          <article className="comic-shadow-sm panel-pop rounded-lg border-4 border-ink bg-paper p-6 lg:col-span-3">
            <p className="text-xs font-bold uppercase text-flame">The crew</p>
            <h2 className="mt-2 font-display text-5xl">Find me</h2>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <SocialLink href="https://github.com/Shaileshwaranavk" label="GitHub" icon={<Github size={18} />} />
              <SocialLink href="https://www.linkedin.com/in/shaileshwaranavk/" label="LinkedIn" icon={<Linkedin size={18} />} />
              <SocialLink href="https://www.instagram.com/avks._/" label="Instagram" icon={<Instagram size={18} />} />
              <SocialLink href="https://x.com/AVKShailesh" label="X" icon={<X size={18} />} />
            </div>
            <a href="/resume.pdf" download className="mt-2 flex items-center justify-center gap-2 rounded-md border-2 border-ink bg-ink px-3 py-2 text-sm font-bold text-cream"><Download size={17} /> Download CV</a>
          </article>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 border-b-4 border-ink pb-3"><p className="text-xs font-bold uppercase text-flame">Career arc</p><h2 className="font-display text-6xl sm:text-7xl">The Journey So Far</h2></div>
        <div className="space-y-5">{experience.map((item, index) => <ExperienceCard key={item.company} item={item} index={index} />)}</div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between border-b-4 border-ink pb-3">
          <div><p className="text-xs font-bold uppercase text-flame">Quest log</p><h2 className="font-display text-6xl sm:text-7xl">The Chapters</h2></div>
          <span className="hidden font-bold uppercase sm:block">05 projects · all playable</span>
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} wide={index < 2} />)}
        </div>
      </section>

      <footer id="contact" className="mt-10 scroll-mt-24 border-t-4 border-ink bg-bubble text-cream">
        <div className="ink-lines mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase text-sun">To be continued...</p>
          <h2 className="mx-auto mt-2 max-w-4xl font-display text-6xl leading-none sm:text-8xl">Let's build the next chapter</h2>
          <p className="mx-auto mt-5 max-w-xl text-cream/80">Have an opportunity, a problem to solve, or an idea worth shipping? My inbox is open.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="mailto:avkshaileshwaran@gmail.com" className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-sun px-5 py-3 font-bold text-ink transition-transform hover:-translate-y-1"><Mail size={19} /> Start a conversation</a>
            <a href="tel:+919025278164" className="inline-flex items-center gap-2 rounded-md border-2 border-cream px-5 py-3 font-bold transition-colors hover:bg-cream hover:text-ink"><Phone size={19} /> Call me</a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t-2 border-cream/30 pt-5 text-xs font-bold uppercase text-cream/70"><span>AVK · Issue 01</span><span>Designed to be explored · Built to keep growing</span></div>
        </div>
      </footer>
    </main>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-md border-2 border-ink px-3 py-2 text-sm font-bold transition-colors hover:bg-sun">{icon}{label}</a>;
}

function ExperienceCard({ item, index }: { item: (typeof experience)[number]; index: number }) {
  const tones = ["bg-bubble text-cream", "bg-sun text-ink", "bg-paper text-ink"] as const;
  return (
    <article className={`comic-shadow-sm panel-pop rounded-lg border-4 border-ink p-6 ${tones[index % 3]}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-current/20 pb-4">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-5xl">0{index + 1}</span>
          <h3 className="text-xl font-bold">{item.company}</h3>
        </div>
        <span className="text-xs font-bold uppercase opacity-70">{item.duration}</span>
      </div>
      <div className="mt-5 space-y-5">
        {item.roles.map((role) => (
          <div key={role.role} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <p className="text-xs font-bold uppercase opacity-70">{role.dates}</p>
            <div>
              <p className="font-bold">{role.role}</p>
              <p className="mt-1 text-sm leading-relaxed opacity-80">{role.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function ProjectCard({ project, wide }: { project: (typeof projects)[number]; wide: boolean }) {
  const tones = { paper: "bg-paper text-ink", bubble: "bg-bubble text-cream", sun: "bg-sun text-ink", flame: "bg-flame text-cream" } as const;
  return <article className={`comic-shadow-sm panel-pop flex min-h-64 flex-col rounded-lg border-4 border-ink p-6 ${wide ? "lg:col-span-6" : "lg:col-span-4"} ${tones[project.tone]}`}>
    <div className="flex items-start justify-between"><span className="font-display text-4xl">CH. {project.number}</span><span className="rounded-sm border-2 border-current px-2 py-1 text-[10px] font-bold uppercase">{project.tag}</span></div>
    <h3 className="mt-6 max-w-md text-2xl font-bold">{project.title}</h3>
    <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-75">{project.description}</p>
    <a href={project.href} target="_blank" rel="noreferrer" className="mt-auto flex items-center gap-2 self-start border-b-2 border-current pt-5 text-sm font-bold uppercase">View on GitHub <ArrowUpRight size={17} /></a>
  </article>;
}