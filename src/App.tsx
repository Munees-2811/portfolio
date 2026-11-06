import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Sparkles,
  Star,
  Trophy,
  X,
} from 'lucide-react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact']

const skillGroups: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C'],
  },
  {
    title: 'Frontend',
    icon: Layers3,
    items: ['HTML', 'CSS', 'React'],
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['FastAPI', 'REST APIs'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    items: ['Machine Learning', 'YOLO', 'Object Detection', 'Computer Vision'],
  },
  {
    title: 'Libraries',
    icon: Sparkles,
    items: ['OpenCV'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['Firebase', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: FileText,
    items: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Vercel', 'Netlify'],
  },
]

const projects = [
  {
    title: 'Tode – AI Video Annotation Tool',
    description:
      'Developed an AI-assisted annotation platform for creating datasets for computer vision applications.',
    features: [
      'YOLO-based automatic annotation',
      'Bounding box annotation',
      'Polygon segmentation',
      'Image classification',
      'Dataset export in YOLO, COCO, Pascal VOC, CSV and JSON formats',
    ],
    tech: ['Python', 'OpenCV', 'JavaScript', 'FastAPI', 'YOLO'],
    github: 'https://github.com/welldropp/tode',
    demo: null,
    accent: 'from-violet-500/25 via-violet-500/10 to-indigo-500/5',
  },
  {
    title: 'Assured Farm – Contract Farming & Marketplace',
    description:
      'A web platform connecting farmers and buyers through contract farming and agricultural marketplace features.',
    features: [
      'Farmer and buyer dashboards',
      'Contract management',
      'Product listings',
      'Authentication',
      'Responsive user interface',
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Firebase'],
    github: 'https://github.com/Munees-2811/Assured_farm_App',
    demo: 'https://assuredcontractfarming.netlify.app/',
    accent: 'from-emerald-500/20 via-cyan-500/10 to-sky-500/5',
  },
]

const certifications = [
  'Infosys Springboard Certifications',
  'CodeAlpha Python Development Internship Certificate',
  'NPTEL – Python Programming for Data Science',
]

const achievements = ['GDG Madurai Hackathon', 'MSME Hackathon', 'Smart India Hackathon (SIH) 2025']

const internshipProjects = ['Hangman Game', 'Stock Portfolio Tracker', 'Task Automation', 'Basic Chatbot']

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Munees-2811', icon: GitBranch },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muneeswaran-r-5828b1379', icon: Globe },
]

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitNote, setSubmitNote] = useState('')

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  const validateForm = () => {
    const nextErrors: Record<string, string> = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please use a valid email address.'
    if (!formData.subject.trim()) nextErrors.subject = 'Please enter a subject.'
    if (!formData.message.trim()) nextErrors.message = 'Please write a short message.'
    else if (formData.message.trim().length < 12) nextErrors.message = 'Message should be at least 12 characters long.'

    return nextErrors
  }

  const handleInputChange = (field: keyof typeof initialForm, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitNote('Please fix the highlighted fields and try again.')
      return
    }

    const emailBody = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      `Message: ${formData.message}`,
    ].join('\n')

    window.location.href = `mailto:munees7539@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    setSubmitNote('Your email app has been opened with the message details ready to send.')
    setFormData(initialForm)
  }

  return (
    <div className="min-h-screen bg-[#05070b] text-white selection:bg-violet-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.16),transparent_22%),radial-gradient(circle_at_80%_10%,_rgba(59,130,246,0.10),transparent_25%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.22em] text-white transition hover:text-violet-200">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/40 bg-gradient-to-br from-violet-500/25 to-sky-500/10 text-sm font-bold text-violet-100 shadow-[0_0_26px_rgba(167,139,250,0.15)]">
              M
            </span>
            <span className="hidden sm:inline">MUNEESWARAN</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative text-[0.7rem] font-medium uppercase tracking-[0.2em] text-slate-300 transition hover:text-white"
              >
                <span className="relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-violet-300 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                  {item}
                </span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="/Muneeswaran_R_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-violet-300/45 bg-gradient-to-r from-violet-500/16 via-violet-500/8 to-sky-500/10 px-4 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-violet-100 shadow-[0_10px_28px_rgba(139,92,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-200/60 hover:bg-violet-500/20"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#05070b]/95 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-300 transition hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="/Muneeswaran_R_Resume.pdf"
                download
                className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-violet-100"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-violet-100 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <Sparkles size={14} />
                Available for opportunities
              </div>

              <h1 className="max-w-xl font-display text-[2.9rem] font-medium leading-[0.88] tracking-[-0.06em] text-white sm:text-5xl lg:text-[5.1rem]">
                Hi, I&apos;m Muneeswaran R.
              </h1>

              <p className="mt-6 max-w-xl text-lg font-medium text-violet-200 sm:text-xl">
                AI &amp; Data Science Student | Python Developer | Web developer |
              </p>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                I am an enthusiastic Artificial Intelligence and Data Science student passionate about building practical software applications, AI-powered solutions and modern web experiences. I enjoy solving problems, learning new technologies and transforming ideas into real-world applications.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(255,255,255,0.1)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                >
                  View My Projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0e16]/95 p-5 shadow-[0_30px_80px_rgba(2,6,23,0.78)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_28%)]" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div>
                      <p className="text-[0.64rem] uppercase tracking-[0.24em] text-slate-400">Portfolio</p>
                      <p className="mt-1 text-sm font-medium text-white">AI &amp; Data Science</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-emerald-300">
                      Active
                    </span>
                  </div>

                  <div className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-4 sm:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.3rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/12 via-slate-900 to-slate-900 p-4">
                      <div className="mb-5 flex items-center justify-between text-slate-300">
                        <span className="text-sm font-medium">Focus</span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">
                          <BrainCircuit size={16} />
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Model</p>
                          <p className="mt-2 text-lg font-medium text-white">Computer Vision</p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Builds</p>
                          <p className="mt-2 text-lg font-medium text-white">AI + Web Apps</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Current Stack</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {['Python', 'React', 'FastAPI', 'YOLO'].map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-slate-900/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-slate-200">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-slate-950/70 p-3">
                        <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-slate-400">
                          <span>Project flow</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 via-indigo-400 to-sky-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Projects', value: '5+' },
                      { label: 'Skills', value: '15+' },
                      { label: 'Learning', value: '24/7' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                        <div className="text-xl font-semibold text-white">{item.value}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">About Me</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Building technology that makes an impact.</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 shadow-[0_20px_60px_rgba(2,6,23,0.25)]"
              >
                <p className="text-base leading-8 text-slate-300">
                  I am currently pursuing B.Tech in Artificial Intelligence and Data Science at Hindusthan Institute of Technology, Coimbatore.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  I have hands-on experience in Python, Java, JavaScript, React, computer vision and AI/ML technologies. I have developed projects involving AI video annotation, contract farming platforms and automation tools.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  My goal is to become a skilled software developer and build innovative technology solutions that solve real-world problems.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-slate-900/50 to-transparent p-7 shadow-[0_18px_60px_rgba(139,92,246,0.12)]"
              >
                <div className="space-y-4 text-sm text-slate-200">
                  {[
                    ['Degree', 'B.Tech AI & DS'],
                    ['College', 'Hindusthan Institute of Technology'],
                    ['CGPA', '8.50'],
                    ['Location', 'Coimbatore, India'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-slate-400">{label}</span>
                      <span className="font-medium text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Technical Skills</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Core technologies I build with.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map(({ title, icon: Icon, items }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="group rounded-[1.8rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_50px_rgba(2,6,23,0.18)] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-sm text-slate-200 transition group-hover:border-violet-400/30">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Featured Projects</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Selected work that blends AI, product thinking and engineering.</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {projects.map(({ title, description, features, tech, github, demo, accent }) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0d14] shadow-[0_26px_80px_rgba(2,6,23,0.35)]"
                >
                  <div className={`group-hover:scale-[1.02] relative h-60 overflow-hidden border-b border-white/10 bg-gradient-to-br ${accent} transition duration-500`}>
                    <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 25%), linear-gradient(135deg, rgba(15,23,42,0.5), rgba(15,23,42,0.15))' }} />
                    <div className="absolute left-6 top-6 rounded-xl border border-white/15 bg-slate-950/60 px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-slate-200">
                      {title.split('–')[0].trim()}
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 rounded-[1.3rem] border border-white/10 bg-slate-950/75 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between text-[0.58rem] uppercase tracking-[0.2em] text-slate-400">
                        <span>Build</span>
                        <span>{tech.length} tools</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tech.slice(0, 3).map((tool) => (
                          <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-slate-200">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-2xl font-medium tracking-[-0.05em] text-white">{title}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>

                    <ul className="mt-5 space-y-3 text-sm text-slate-300">
                      {features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-violet-300" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {tech.map((item) => (
                        <span key={item} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-violet-100">
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10"
                      >
                        <GitBranch size={16} />
                        GitHub
                      </a>

                      {demo ? (
                        <a
                          href={demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                        >
                          Live Demo
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-400"
                        >
                          Demo Unavailable
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Experience</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Internship experience and hands-on learning.</h2>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 shadow-[0_20px_60px_rgba(2,6,23,0.2)] sm:p-8">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-2xl font-medium text-white">Python Development Intern – CodeAlpha</p>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-violet-200">Duration: 1 Month</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.2em] text-violet-200">
                  <Briefcase size={14} />
                  Internship
                </div>
              </div>

              <p className="mt-6 text-base leading-8 text-slate-300">
                Completed hands-on Python development tasks and practical programming exercises.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-300">Projects completed</p>
                  <ul className="space-y-3 text-base text-slate-200">
                    {internshipProjects.map((project) => (
                      <li key={project} className="flex items-center gap-3">
                        <Star size={16} className="text-violet-300" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-300">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'File Handling', 'Automation', 'APIs'].map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Certifications</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Professional certifications and learning milestones.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_50px_rgba(2,6,23,0.15)] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                    <GraduationCap size={22} />
                  </div>
                  <p className="text-base font-medium leading-7 text-white">{certification}</p>
                  <p className="mt-3 text-sm text-slate-400">Certificate image or PDF can be added here later.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Achievements</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Hackathons and competitive participation.</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_18px_48px_rgba(2,6,23,0.25)]"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200">
                    <Trophy size={22} />
                  </div>
                  <p className="text-lg font-semibold text-white">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-violet-200">Contact</p>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">Let&apos;s Build Something Together!</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                I am interested in software development opportunities, internships, collaborative projects and learning new technologies.
              </p>

              <div className="mt-7 space-y-4 text-slate-200">
                <a href="mailto:munees7539@gmail.com" className="flex items-center gap-3 text-slate-200 transition hover:text-white">
                  <Mail size={18} className="text-violet-300" />
                  munees7539@gmail.com
                </a>
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin size={18} className="text-violet-300" />
                  Coimbatore, Tamil Nadu, India
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_18px_60px_rgba(2,6,23,0.18)] sm:p-7" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(event) => handleInputChange('name', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => handleInputChange('email', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(event) => handleInputChange('subject', event.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Project enquiry or internship opportunity"
                  />
                  {errors.subject && <p className="mt-2 text-sm text-rose-300">{errors.subject}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm text-slate-300" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => handleInputChange('message', event.target.value)}
                    className="min-h-[160px] w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition duration-200 placeholder:text-slate-500 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/20"
                    placeholder="Tell me a little about your project, idea or opportunity..."
                  />
                  {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
                >
                  <MessageSquareText size={16} />
                  Send Message
                </button>

                {submitNote && <p className="text-sm text-slate-300">{submitNote}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="font-semibold tracking-[0.08em] text-white">Muneeswaran R</p>
            <p className="mt-1">AI &amp; Data Science Student</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a href="https://github.com/Munees-2811" target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/muneeswaran-r-5828b1379" target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="mailto:munees7539@gmail.com" className="transition hover:text-white">
              Email
            </a>
          </div>

          <p>© {currentYear} Muneeswaran R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
