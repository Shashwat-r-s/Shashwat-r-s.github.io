import { useEffect, useState, useRef } from 'react'

/* ─── DATA ──────────────────────────────────────────────── */
const ROLES = [
  'Data Analyst',
  'Business Intelligence Engineer',
  'ETL & Pipeline Developer',
  'ML & Predictive Analytics',
  'Strategy & Insights Consultant',
]

const SKILLS = [
  {
    title: 'Programming & Query',
    icon: '⟨/⟩',
    tags: ['Python', 'SQL', 'R', 'pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn'],
  },
  {
    title: 'Machine Learning',
    icon: '🧠',
    tags: ['Supervised Learning', 'Unsupervised Learning', 'Regression', 'Classification', 'Clustering', 'Time-Series', 'Predictive Analytics', 'Statistical Modelling'],
  },
  {
    title: 'Data Engineering & BI',
    icon: '⚙️',
    tags: ['ETL Pipelines', 'Ab Initio', 'Power BI', 'Tableau', 'QlikView', 'Data Wrangling', 'Business Intelligence'],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠',
    tags: ['Git / GitHub', 'Jupyter', 'VS Code', 'JIRA', 'Confluence', 'Google Colab', 'Excel (Advanced)'],
  },
  {
    title: 'Business & Strategy',
    icon: '📊',
    tags: ['Market Research', 'Competitor Analysis', 'Stakeholder Reporting', 'Strategic Insights', 'Cross-Functional Collaboration'],
  },
  {
    title: 'Methodologies',
    icon: '✦',
    tags: ['Agile', 'Six Sigma / DMAIC', 'PDCA', 'Lean / 5S', 'A/B Testing', 'Data Quality Assurance'],
  },
]

const EXPERIENCE = [
  {
    role: 'Assessment & AI Transition Assistant',
    company: 'University of Sydney — Educational Innovation (DVCE Portfolio), Sydney, AU',
    period: 'May 2025 – Present',
    points: [
      'Support Unit of Study Coordinators in reviewing and updating assessments within the Sydney Curriculum platform, ensuring AI policy alignment.',
      'Conduct data quality assurance across assessment records, unit outlines, and system data; identify anomalies and escalate risks.',
      'Contribute to university-wide AI events including the Teaching Symposium and AI Student Panels.',
      'Develop instructional videos on Canvas best practices, improving assessment clarity for hundreds of students.',
    ],
  },
  {
    role: 'Business Analyst & Strategy Consultant Intern',
    company: 'True Protein, Sydney, NSW',
    period: 'Nov 2025 – Jan 2026',
    points: [
      'Conducted market research and data analysis to support a Gen Z & Alpha market expansion strategy.',
      'Evaluated the protein RTD market to identify growth opportunities within grocery channels and new SKU development.',
      'Performed competitor benchmarking and consumer trend analysis to generate strategic insights for product and market strategy.',
      'Prepared strategic reports and presentations communicated to internal senior stakeholders.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Capgemini, Pune, MH, India',
    period: 'Dec 2021 – Aug 2023',
    points: [
      'Engineered and maintained a critical data integration pipeline using Ab Initio ETL tools, reducing unplanned downtime to just 35 minutes across two quarters.',
      'Wrote and optimised SQL queries to extract, validate, and reconcile data across source and target systems.',
      'Built and maintained QlikView dashboards translating raw pipeline data into visual insights for finance-industry clients.',
      'Collaborated with cross-functional teams to diagnose root causes of pipeline issues and deliver performance improvements on time.',
    ],
  },
  {
    role: 'Manufacturing & Engineering Intern',
    company: 'Bharat Forge Ltd | TATA Autocomp, Pune, MH, India',
    period: 'Jan 2019 – Dec 2021',
    points: [
      'Led a team of 3, implementing cost-effective process improvements and boosting productivity by 10%.',
      'Applied DMAIC and Six Sigma methodologies, achieving a 10% reduction in cycle time and increasing production efficiency by 30%.',
      'Cooperated on 5S, TPM, Kaizen, SMED, and Industry 4.0 projects, enhancing KPIs via value stream mapping.',
    ],
  },
]

const PROJECTS = [
  {
    num: '01',
    name: 'Ab Initio Plan Execution Monitoring System',
    desc: 'Designed a specialized real-time monitoring system for critical pipeline red flags across multiple departments. Engineered custom Ab Initio graphs to detect failure patterns before they cascade.',
    impact: '▲ Reduced unplanned downtime by 6h 15m · ↓ Technical errors by 96%',
    tags: ['Ab Initio', 'ETL', 'Data Engineering', 'SQL'],
  },
  {
    num: '02',
    name: 'Component Cost Breakdown & Analysis',
    desc: 'Selected loss-making parts and performed a detailed cost breakdown using the PDCA cycle to identify the most expensive process stages and implement targeted corrective actions.',
    impact: '▲ Turned loss-making components to profitability',
    tags: ['PDCA', 'Cost Analysis', 'Excel', 'Process Engineering'],
  },
  {
    num: '03',
    name: 'Overall Line Efficiency Improvement',
    desc: 'Led a team in identifying production bottlenecks using value stream mapping and workflow optimisation techniques. Implemented data-driven changes to eliminate waste.',
    impact: '▲ 46% increase in production efficiency',
    tags: ['Lean', 'VSM', 'Six Sigma', 'Team Leadership'],
  },
  {
    num: '04',
    name: 'Gen Z Market Expansion Strategy',
    desc: 'Analysed consumer behaviour, digital platform usage, and competitor positioning in the protein RTD market to support new SKU development and grocery channel entry strategy.',
    impact: '▲ Strategy adopted for new SKU pipeline',
    tags: ['Market Research', 'Python', 'Power BI', 'Data Analysis'],
  },
  {
    num: '05',
    name: 'BFL Excellence System Study',
    desc: 'In-depth analysis of Bharat Forge\'s manufacturing excellence framework covering change management, 5S, value stream mapping, standardised work, TPM, and Industry 4.0 integration.',
    impact: '▲ Key insights adopted in subsequent Kaizen events',
    tags: ['Industry 4.0', '5S', 'TPM', 'VSM / Maki-Gami'],
  },
  {
    num: '06',
    name: 'ML & Analytics Coursework Projects',
    desc: 'Hands-on ML projects from USYD MCom covering classification, clustering, time-series forecasting, and predictive modelling using scikit-learn, statsmodels, and Python.',
    impact: '▲ Distinction grades across all analytics units',
    tags: ['scikit-learn', 'Python', 'Time-Series', 'ML'],
  },
]

const EDUCATION = [
  {
    icon: '🎓',
    degree: 'Master of Commerce (Extension) — Data Analytics & Business Information Systems',
    institution: 'The University of Sydney Business School',
    period: 'Jul 2024 – Present',
    highlights: [
      'Distinction grades across core analytics units',
      'Machine Learning for Business · Data Science in Business',
      'Predictive Analytics · Financial Time Series & Forecasting',
      'Managing Data at Scale · Data Visualization',
    ],
  },
  {
    icon: '⚙️',
    degree: 'Bachelor of Engineering — Production Engineering',
    institution: 'Savitribai Phule Pune University',
    period: 'Jan 2017 – Dec 2021',
    highlights: [
      'First Class with Distinction',
      'Member, Production Engineering Club',
      'Workshops on innovative manufacturing processes',
      'Projects from Sponsorship Coordinator to Project Lead',
    ],
  },
]

/* ─── HOOKS ─────────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, charIdx + 1))
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause)
          } else {
            setCharIdx((c) => c + 1)
          }
        } else {
          setText(current.slice(0, charIdx - 1))
          if (charIdx - 1 === 0) {
            setDeleting(false)
            setWordIdx((i) => (i + 1) % words.length)
            setCharIdx(0)
          } else {
            setCharIdx((c) => c - 1)
          }
        }
      },
      deleting ? speed / 2 : speed
    )
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return text
}

/* ─── COMPONENTS ─────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo mono">
        <span>~/</span>shashwat
      </div>
      <ul className="nav-links">
        {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(id) }}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="https://github.com/Shashwat-r-s"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
      >
        GitHub ↗
      </a>
    </nav>
  )
}

function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="hero" id="hero">
      <div className="hero-noise" />
      <div className="hero-content">
        <div>
          <div className="hero-badge">
            Available for opportunities
          </div>
          <h1 className="hero-name">
            <span className="first">Shashwat</span>
            <span className="last">Sangewadikar</span>
          </h1>
          <p className="hero-role mono">
            {role}
            <span className="cursor" />
          </p>
          <p className="hero-description">
            Data-driven analyst &amp; engineer at the intersection of business strategy and technology.
            Currently completing a Master of Commerce (Data Analytics) at the University of Sydney.
            I turn messy data into decisions that matter.
          </p>
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Projects ↓
            </a>
            <a
              href="mailto:ssan0779@uni.sydney.edu.au"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">3+</div>
              <div className="stat-label">Years Industry Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">96%</div>
              <div className="stat-label">Error reduction in ETL system</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">46%</div>
              <div className="stat-label">Efficiency gain delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">DI</div>
              <div className="stat-label">Distinction grades, USYD MCom</div>
            </div>
          </div>
          <div className="hero-tech-strip">
            {['Python', 'SQL', 'R', 'Power BI', 'Ab Initio', 'scikit-learn', 'Tableau'].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="section-label">01 / ABOUT</p>
        <h2 className="section-title">Who I <span>am</span></h2>
        <div className="about-grid reveal">
          <div className="about-text">
            <p>
              I'm a <strong>Data Analyst and Business Intelligence Engineer</strong> bridging technical depth with strategic clarity. My background spans ETL engineering at Capgemini, market strategy consulting at True Protein, and ongoing academic excellence in Data Analytics at the University of Sydney.
            </p>
            <p>
              Before pivoting into data, I earned a <strong>Production Engineering degree</strong> and spent years on the factory floor — applying Six Sigma, Lean, and DMAIC to drive measurable efficiency gains. That engineering mindset shapes how I approach every data problem: systematic, evidence-based, and outcome-focused.
            </p>
            <p>
              Today I work at the intersection of <strong>machine learning, data pipelines, and business strategy</strong> — translating complex datasets into insights that senior stakeholders can act on.
            </p>
          </div>
          <div className="about-highlights">
            {[
              { icon: '🔬', title: 'Analytics-First Mindset', text: 'From statistical modelling to ML pipelines — data is the medium, but decisions are the goal.' },
              { icon: '⚙️', title: 'Engineering Foundation', text: 'Production Engineering background means I think in systems, processes, and root causes.' },
              { icon: '🌏', title: 'Cross-Industry Experience', text: 'Finance (Capgemini), FMCG (True Protein), Higher Education (USYD) — adaptable across domains.' },
              { icon: '📈', title: 'Impact-Oriented', text: '96% error reduction, 46% efficiency gain, Distinction grades — numbers tell my story.' },
            ].map((h) => (
              <div key={h.title} className="highlight-item">
                <span className="highlight-icon">{h.icon}</span>
                <div className="highlight-text">
                  <h4>{h.title}</h4>
                  <p>{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label">02 / SKILLS</p>
        <h2 className="section-title">Technical <span>Stack</span></h2>
        <div className="skills-categories">
          {SKILLS.map((cat, i) => (
            <div key={cat.title} className="skill-category reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="skill-cat-header">
                <span className="skill-cat-icon">{cat.icon}</span>
                <span className="skill-cat-title">{cat.title}</span>
              </div>
              <div className="skill-tags">
                {cat.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <p className="section-label">03 / EXPERIENCE</p>
        <h2 className="section-title">Work <span>History</span></h2>
        <div className="timeline">
          {EXPERIENCE.map((job, i) => (
            <div key={job.role} className="timeline-item reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="timeline-marker">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-role">{job.role}</span>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <p className="section-label">04 / PROJECTS</p>
        <h2 className="section-title">Selected <span>Work</span></h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.num} className="project-card reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="project-num mono">{p.num}</span>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-impact mono">{p.impact}</div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <p className="section-label">05 / EDUCATION</p>
        <h2 className="section-title">Academic <span>Background</span></h2>
        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <div key={edu.degree} className="edu-card reveal" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="edu-icon">{edu.icon}</div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-period mono">{edu.period}</p>
              <ul className="edu-highlights">
                {edu.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <p className="section-label">06 / CONTACT</p>
        <h2 className="section-title">Get In <span>Touch</span></h2>
        <div className="contact-wrapper reveal">
          <div>
            <div className="availability-badge">
              <span className="availability-dot" />
              Open to full-time & freelance roles
            </div>
            <p className="contact-text">
              I'm actively looking for data analyst, business intelligence, and analytics engineering roles in Sydney.
              I'm also open to freelance projects in data analysis, dashboarding, and market research.
              Let's build something with data.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:ssan0779@uni.sydney.edu.au" className="contact-link">
              <span className="contact-link-icon">✉️</span>
              <div className="contact-link-text">
                <span>Email</span>
                <span>ssan0779@uni.sydney.edu.au</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/srsangewadikar/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">🔗</span>
              <div className="contact-link-text">
                <span>LinkedIn</span>
                <span>linkedin.com/in/srsangewadikar</span>
              </div>
            </a>
            <a href="https://github.com/Shashwat-r-s" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">⌨️</span>
              <div className="contact-link-text">
                <span>GitHub</span>
                <span>github.com/Shashwat-r-s</span>
              </div>
            </a>
            <a href="tel:+61436939164" className="contact-link">
              <span className="contact-link-icon">📱</span>
              <div className="contact-link-text">
                <span>Phone</span>
                <span>+61 436 939 164</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed &amp; built by{' '}
        <a href="https://github.com/Shashwat-r-s" target="_blank" rel="noopener noreferrer">
          Shashwat Sangewadikar
        </a>{' '}
        · React + Vite · Deployed on GitHub Pages
      </p>
    </footer>
  )
}

/* ─── APP ────────────────────────────────────────────────── */
export default function App() {
  useScrollReveal()

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}
