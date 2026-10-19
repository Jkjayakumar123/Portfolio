import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check, ChevronRight, Code2, Cpu, ExternalLink, FileDown, GraduationCap, Mail, Menu, Microscope, Network, ShieldCheck, Sparkles, X } from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Jayakumar M',
  role: 'Python / AI-ML Engineer',
  email: 'jkjayakumar1304@gmail.com',
  phone: '+91 9585536116',
  linkedin: 'https://linkedin.com/in/jaya-kumar-m-52a156218',
  github: 'https://github.com/Jkjayakumar123',
};

const projects = [
  {
    number: '01', type: 'COMPUTER VISION', title: 'Skin Lesion Segmentation & Classification',
    description: 'A dermoscopic image-processing pipeline exploring hair removal, image inpainting, morphological operations, LAB-space K-Means segmentation, and ResNet50-based classification.',
    stack: ['Python', 'OpenCV', 'CNN', 'ResNet50', 'Image Processing'],
    icon: Microscope, tone: 'violet',
    repo: '', repoLabel: 'Add project repository',
  },
  {
    number: '02', type: 'HEALTHCARE ML', title: 'Heart Disease Detection',
    description: 'A machine-learning healthcare project focused on data preprocessing, feature engineering, and predictive modelling to explore heart-disease detection.',
    stack: ['Python', 'NumPy', 'Pandas', 'Machine Learning'],
    icon: BrainCircuit, tone: 'blue',
    repo: '', repoLabel: 'Add project repository',
  },
  {
    number: '03', type: 'JAVA APPLICATION', title: 'Email Client Application',
    description: 'A desktop email-client project built around a Swing interface and JavaMail API for email functionality and server connectivity.',
    stack: ['Java', 'Swing', 'JavaMail API'],
    icon: Network, tone: 'cyan',
    repo: '', repoLabel: 'Add project repository',
  },
];

const skills = [
  { title: 'AI & Machine Learning', icon: BrainCircuit, items: ['Artificial Intelligence & Machine Learning', 'Data Preprocessing & Feature Engineering', 'Deep Learning & Neural Networks', 'Computer Vision & Image Processing', 'Generative AI & Large Language Models (LLMs)', 'Model Evaluation & Optimization'] },
  { title: 'Computer Vision', icon: Microscope, items: ['OpenCV', 'Image preprocessing', 'Image segmentation', 'Morphological operations', 'Confusion matrix'] },
  { title: 'Programming', icon: Code2, items: ['Python', 'C#', 'Java', 'SQL', 'C / C++'] },
  { title: 'Libraries & Tools', icon: Cpu, items: ['NumPy', 'Pandas', 'scikit-learn', 'TensorFlow', 'PyTorch', 'Matplotlib', 'Git / GitHub'] },
];

const publications = [
  {
  title: 'Heart Disease Detection using Machine Learning Classification Techniques in E-Healthcare Systems',
  publisher: 'IJERT',
  year: '2025',
  link: 'https://www.ijert.org/heart-disease-detection-using-machine-learning-classification-techniques-in-e-healthcare-systems'
},
{
  title: 'Segmentation and Classification of Hairless Dermoscopic Skin Cancer Images using Deep Learning',
  publisher: 'IJERT',
  year: '2025',
  link: 'https://www.ijert.org/segmentation-and-classification-of-hairless-dermoscopic-skin-cancer-images-using-deep-learning'
}
];

const certifications = [
  'Awareness of ISO 13485:2016 Standard and Internal Audit Training based on ISO 19011:2026 Standard — Perfint Healthcare Pvt Ltd',
  'Awareness on Implementation of Corrective and Preventive Action — Perfint Healthcare Pvt Ltd',
  'Certification in Artificial Intelligence and Machine Learning (Tamil) — Vishlesan i-Hub, IIT Patna',
];

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{note && <p>{note}</p>}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['About', '#about'], ['Experience', '#experience'], ['Projects', '#projects'], ['Skills', '#skills'], ['Research', '#research']];
  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Jayakumar home"><span className="brand-mark">J<span>.</span></span><span className="brand-name">JAYAKUMAR<span> / PORTFOLIO</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/> OPEN TO THE NEXT CHALLENGE</div>
          <p className="hero-kicker">HELLO, I'M {profile.name.toUpperCase()}</p>
          <h1>Engineering ideas<br/>into <span className="gradient-text">intelligent</span><br/>solutions<span className="blue-period">.</span></h1>
          <p className="hero-description">Software engineer working across healthcare technology, Python, and machine learning — curious about the problems where code can make a real difference.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a><a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <FileDown size={17}/></a></div>
          <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16}/> GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={15}/> LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${profile.email}`}><Mail size={15}/> Email</a></div>
        </div>
        <div className="hero-art" aria-label="Abstract animated technology illustration">
          <div className="art-grid"/><div className="orbit orbit-outer"/><div className="orbit orbit-mid"/><div className="orbit orbit-inner"/>
          <div className="core-glow"/><div className="core"><BrainCircuit size={62} strokeWidth={1.1}/><span>LEARNING<br/>SYSTEMS</span></div>
          <div className="float-chip chip-python"><span className="chip-icon">Py</span><span><b>Python</b><small>Data · Models</small></span></div>
          <div className="float-chip chip-vision"><span className="chip-icon">◈</span><span><b>Computer vision</b><small>Images · Insight</small></span></div>
          <div className="float-chip chip-robot"><span className="chip-icon">⌘</span><span><b>Robotics</b><small>Software · Impact</small></span></div>
          <div className="orbit-node node-a"/><div className="orbit-node node-b"/><div className="orbit-node node-c"/><div className="art-caption"><span className="caption-line"/> BUILD / LEARN / ITERATE</div>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE <ArrowDownRight size={15}/></a>
      </section>

      <section className="metrics section-wrap" aria-label="Career highlights">
        <div className="metric"><strong>01<span>+</span></strong><span>YEAR IN SOFTWARE<br/>ENGINEERING</span></div>
        <div className="metric"><strong>03</strong><span>FEATURED<br/>PROJECTS</span></div>
        <div className="metric"><strong>02</strong><span>RESEARCH<br/>PUBLICATIONS</span></div>
        <div className="metric metric-note"><Sparkles size={18}/><span>Curiosity-led. Quality-minded.<br/>Always learning.</span></div>
      </section>

      <section className="section-wrap section-block" id="about">
<SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Curious by nature.<br />Engineer by <span className="accent-text">practice.</span></>} note="A little context behind the code."/>
        <div className="about-grid"><div className="about-main"><p className="lead">I'm a Junior Software Engineer at <span className="text-bright">Perfint Healthcare</span>, working on software for medical robotics.</p><p>My professional experience includes developing C#/.NET and WPF/XAML applications, implementing navigation workflows, debugging issues, and collaborating across teams to improve software behaviour in clinical-trial settings.</p><p>Alongside my day-to-day engineering work, I build on my interest in Python, machine learning, and computer vision through healthcare-focused projects and research publications.</p><div className="about-tags"><span>Healthcare technology</span><span>Applied ML</span><span>Continuous learning</span></div></div>
          <div className="about-aside"><div className="aside-icon"><GraduationCap size={22}/></div><span className="eyebrow">EDUCATION</span><h3>Madras Institute of Technology</h3><p>B.E. Electronics and Communication Engineering</p><div className="aside-bottom"><span>Anna University</span><strong>8.44 <small>/ 10 CGPA</small></strong></div><div className="aside-year">2021 — 2025</div></div></div>
      </section>

      <section className="section-wrap section-block" id="experience">
        <SectionHeading eyebrow="02 / EXPERIENCE" title="Building for real-world use." note="Engineering with reliability in mind." />
        <div className="experience-card"><div className="experience-rail"><div className="rail-dot"/><div className="rail-line"/></div><div className="experience-content"><div className="experience-top"><div><span className="eyebrow">JUNE 2025 — PRESENT</span><h3>Junior Software Engineer</h3><p className="company">Perfint Healthcare Pvt Ltd <span>·</span> Healthcare / Medical Robotics</p></div><div className="experience-icon"><BriefcaseBusiness size={21}/></div></div><p className="experience-intro">Contributing to software development for a medical robotic navigation device used in spine surgery.</p><ul className="work-list"><li>Develop software features and navigation workflows using C#, .NET, WPF, and XAML.</li><li>Debug, test, and integrate workflow changes across the product.</li><li>Investigate a navigation-accuracy issue observed during clinical trials and collaborate cross-functionally on improvements.</li><li>Use AI-assisted coding tools to streamline repetitive work and support code development.</li><li>Participate in internal audit activities and quality-system work involving ISO 13485:2016, CAPA, and risk controls.</li></ul><div className="tech-row"><span>C# / .NET</span><span>WPF / XAML</span><span>Debugging</span><span>Medical robotics</span><span>Quality systems</span></div></div></div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with a purpose." note="Healthcare, vision, and practical software." />
        <div className="projects-grid">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card ${project.tone}`} key={project.number}><div className="project-top"><span className="project-number">{project.number} / 03</span><span className="project-icon"><Icon size={22}/></span></div><span className="eyebrow project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><div className="project-footer">{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={15}/></a> : <span className="placeholder-link" title="Replace with your real repository URL">Repository link to be added <span className="placeholder-dot"/></span>}</div></article>})}</div>
        <p className="project-note"><span className="note-star">✳</span> Repository links are intentionally left as placeholders until the correct public GitHub URLs are provided.</p>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionHeading eyebrow="04 / TOOLKIT" title="Tools I work with." note="A growing toolkit, shaped by hands-on work." />
        <div className="skills-grid">{skills.map((group) => {const Icon = group.icon; return <div className="skill-card" key={group.title}><div className="skill-card-head"><div className="skill-icon"><Icon size={19}/></div><h3>{group.title}</h3></div><div className="skill-items">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>})}</div>
        <div className="additional-skills"><span className="eyebrow">ALSO FAMILIAR WITH</span><p>SQL Server · SSMS · MySQL · REST API concepts · Django · Git · Azure · Bugzilla · SVN · MVVM · ISO 13485:2016 · CAPA · Risk assessment</p></div>
      </section>

      <section className="section-wrap section-block" id="research">
        <div className="research-layout"><div className="research-column"><div className="subsection-title"><span className="subsection-mark"><Microscope size={17}/></span><h3>Publications</h3></div>{publications.map((paper, index) => { const paperLinks = ['https://www.ijert.org/heart-disease-detection-using-machine-learning-classification-techniques-in-e-healthcare-systems', 'https://www.ijert.org/segmentation-and-classification-of-hairless-dermoscopic-skin-cancer-images-using-deep-learning']; return <article className="publication" key={paper.title}><div className="publication-index">0{index + 1}</div><div><a href={paperLinks[index]} target="_blank" rel="noopener noreferrer" className="publication-title-link"><h4>{paper.title}</h4></a><p>{paper.journal}</p><div className="publication-meta"><span>{paper.date}</span><span>{paper.id}</span></div></div><a href={paperLinks[index]} target="_blank" rel="noopener noreferrer" className="pub-mark" aria-label={`Open ${paper.title}`}>↗</a></article>; })}<p className="small-note"></p></div>
          <div className="credentials-column"><div className="subsection-title"><span className="subsection-mark"><ShieldCheck size={17}/></span><h3>Certifications</h3></div><div className="credential-list">{certifications.map((item, i) => <div className="credential" key={item}><span className="credential-check"><Check size={13}/></span><div><p>{item}</p><span className="credential-label">CERTIFICATION {String(i + 1).padStart(2, '0')}</span></div></div>)}</div></div></div>
        <div className="awards-block"><div className="awards-heading"><Sparkles size={18}/><div><span className="eyebrow">RECOGNITION</span><h3>Awards & recognition</h3></div></div><div className="awards-list"><div className="award-item"><span className="award-star">✳</span><div><h4>Best Team of the Year 2025–2026</h4><p>Perfint Night of Town · June 2026</p></div><span className="award-label">AWARD 01</span></div><div className="award-item"><span className="award-star">✳</span><div><h4>Perfint Night of Town</h4><p>June 2026</p></div><span className="award-label">AWARD 02</span></div></div></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-orb"/><div className="section-wrap contact-inner"><span className="eyebrow">06 / LET'S CONNECT</span><h2>Have a good problem<br/>to solve? <span>Let's talk.</span></h2><p>I'm interested in Python and AI/ML opportunities where I can keep learning, contribute to useful products, and grow with a strong engineering team.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent('Opportunity to connect')}`}>Get in touch <ArrowUpRight size={17}/></a><a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download resume <FileDown size={17}/></a></div><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><ExternalLink size={15}/>LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16}/>GitHub</a></div></div></section>
    </main>
    <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">J<span>.</span></span></a><span>DESIGNED TO KEEP LEARNING.</span><span>© {new Date().getFullYear()} {profile.name}</span><a href="#home" className="back-top">BACK TO TOP <ChevronRight size={14}/></a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
