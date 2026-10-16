import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    Download,
    Eye,
    ExternalLink,
    FileText,
    FolderGit2,
    GitCommit,
    Github,
    GraduationCap,
    Layers,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Moon,
    Send,
    Sun,
    X
} from 'lucide-react';
import { profile, projects, skillGroups, certificates, githubStats } from './data/portfolio';
import { useTheme } from './hooks/useTheme';
import { TechIcon } from './components/TechIcons';
import PortfolioAssistant from './components/PortfolioAssistant';

const nav = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Certificates', 'certificates'], ['Contact', 'contact']];
const icons = { 'Python': 'Py', 'C': 'C', 'C++': 'C++', 'JavaScript': 'JS', 'Java': 'J', 'React': '⚛', 'Redux': 'R', 'HTML5': '5', 'CSS3': '3', 'Tailwind CSS': 'Tw', 'Node.js': 'N', 'Express.js': 'Ex', 'MongoDB': 'M', 'PostgreSQL': 'Pg', 'Machine Learning': 'ML', 'Deep Learning': 'DL', 'CNN / RNN': 'NN', 'LSTM / Bi-LSTM': 'Bi', 'NLP / LLM': 'AI', 'RAG / Gen AI': '✳', 'NumPy': 'Np', 'Pandas': 'Pd', 'Matplotlib': 'Mt', 'scikit-learn': 'Sk', 'TensorFlow': 'Tf', 'Keras': 'K', 'PyTorch': 'Pt', 'Git & GitHub': '⌘', 'Google Colab': 'Co', 'VS Code': 'VS', 'Postman': 'Pm', 'Arduino': 'Ar', 'ESP32': 'Io' };
function SectionTitle({ eyebrow, title, description }) { return <div className="section-title"><div><span className="eyebrow"><i /> {eyebrow}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>; }
function Header({ theme, toggleTheme }) {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);

            const sectionIds = ['home', 'about', 'skills', 'projects', 'certificates', 'contact'];
            const scrollPos = window.scrollY + 140;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && scrollPos >= el.offsetTop) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <a className="brand" href="#home" aria-label="Bholu home" onClick={() => setActiveSection('home')}>
                <img src="/assets/favicon.png" alt="Bholu Logo" className="brand-logo" />
            </a>
            <nav className={menu ? 'nav-links open' : 'nav-links'}>
                {nav.map(([label, id]) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={activeSection === id ? 'active' : ''}
                        onClick={() => {
                            setActiveSection(id);
                            setMenu(false);
                        }}
                    >
                        {label}
                    </a>
                ))}
            </nav>
            <div className="header-actions">
                <button
                    className={`theme-toggle theme-${theme}`}
                    onClick={toggleTheme}
                    aria-label="Toggle color theme"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? <Moon size={15} className="theme-icon moon" /> : <Sun size={15} className="theme-icon sun" />}
                    <span className="theme-text">{theme === 'light' ? 'Evening' : 'Morning'}</span>
                </button>
                <a
                    className="button button-small button-red download-resume-btn"
                    href="/assets/Bholu_Shubhankar_Anokha_Resume.pdf"
                    download="Bholu_Shubhankar_Anokha_Resume.pdf"
                >
                    Download Resume
                </a>
                <button
                    className="menu-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setMenu(v => !v)}
                >
                    {menu ? <X /> : <Menu />}
                </button>
            </div>
        </header>
    );
}
function useTypewriter(words, typingSpeed = 75, deletingSpeed = 35, pauseDuration = 1800) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (!words || words.length === 0) return;

        const currentWord = words[index];

        if (!isDeleting && subIndex === currentWord.length) {
            const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && subIndex === 0) {
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setIndex(prev => (prev + 1) % words.length);
            }, 350);
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex(prev => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index, words, typingSpeed, deletingSpeed, pauseDuration]);

    return words[index] ? words[index].substring(0, subIndex) : '';
}

function Hero({ theme }) {
    const roles = useMemo(() => ['AI/ML/DL Engineer', 'Full-Stack Developer', 'Data Science | IoT'], []);
    const typedRole = useTypewriter(roles);

    return (
        <section id="home" className={`hero ${theme === 'dark' ? 'hero-dark' : 'hero-light'}`}>
            {/* Background layers for seamless Morning / Evening crossfade */}
            <div
                className="hero-bg hero-bg-morning"
                style={{ opacity: theme === 'light' ? 1 : 0 }}
                aria-hidden="true"
            />
            <div
                className="hero-bg hero-bg-evening"
                style={{ opacity: theme === 'dark' ? 1 : 0 }}
                aria-hidden="true"
            />

            {/* Shading overlays for crisp contrast in both themes */}
            <div
                className="hero-shade hero-shade-morning"
                style={{ opacity: theme === 'light' ? 1 : 0 }}
                aria-hidden="true"
            />
            <div
                className="hero-shade hero-shade-evening"
                style={{ opacity: theme === 'dark' ? 1 : 0 }}
                aria-hidden="true"
            />
            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hero-copy"
                >
                    <span className="hero-eyebrow">HELLO, I'M</span>
                    <h1 className="hero-title">
                        BHOLU<br />
                        SHUBHANKAR<br />
                        <span className="hero-surname">ANOKHA</span>
                    </h1>

                    <div className="hero-role-wrap" aria-label="AI/ML/DL Engineer · Full-Stack Developer · Data Science | IoT">
                        <p className="hero-role">
                            <span className="hero-role-text">{typedRole}</span>
                            <span className="typewriter-cursor" aria-hidden="true">|</span>
                        </p>
                    </div>

                    <p className="hero-intro">
                        I build intelligent systems and full-stack applications that solve real-world problems.
                    </p>

                    <div className="hero-buttons">
                        <a className="hero-btn-primary" href="#projects">
                            View My Projects <ArrowRight size={16} />
                        </a>
                        <a
                            className="hero-btn-secondary"
                            href="/assets/Bholu_Shubhankar_Anokha_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FileText size={16} /> View Resume
                        </a>
                    </div>

                    <div className="hero-social-row">
                        <a
                            href={profile.github || 'https://github.com'}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub profile"
                        >
                            <Github size={22} />
                        </a>
                        <a
                            href={profile.linkedin || 'https://linkedin.com'}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn profile"
                        >
                            <Linkedin size={22} />
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            aria-label="Send email"
                        >
                            <Mail size={22} />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="X profile"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </motion.div>

                {/* Right side floating vertical badge */}
                <div className="hero-side-badge" aria-hidden="true">
                    <span>IDEAS</span>
                    <span>CODE</span>
                    <span>AI</span>
                    <span>SOLVE</span>
                    <span>GROW</span>
                    <span className="hero-badge-bar" />
                </div>
            </div>

            <a className="scroll-cue" href="#about">
                <span>SCROLL TO EXPLORE</span>
                <ArrowDown size={14} />
            </a>
        </section>
    );
}

function About({ theme }) {
    return (
        <section id="about" className="about-section">
            <div className="about-wrap">
                <div className="about-eyebrow-row">
                    <span className="about-eyebrow-text">
                        ABOUT <span className="about-eyebrow-accent">ME</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                </div>

                <div className="about-showcase-inner">
                    <div className="about-showcase-visual">
                        <img
                            src="/assets/about-portrait.png"
                            alt="Bholu Shubhankar Anokha"
                            className="about-portrait-img"
                        />
                    </div>

                    <div className="about-showcase-copy">
                        <h2 className="about-showcase-title">
                            Turning Ideas into<br />
                            <span className="about-title-accent">Intelligent Solutions</span>
                        </h2>

                        <p className="about-showcase-intro">
                            I'm an AI Engineer and Full-Stack Developer passionate about building intelligent systems and impactful digital experiences. With a background in Artificial Intelligence and Data Science, I specialize in Machine Learning, Deep Learning, Generative AI, and modern web development. I enjoy transforming complex ideas into practical solutions through innovative projects and scalable applications. Driven by curiosity and continuous learning, my goal is to create technology that solves real-world problems and makes a meaningful difference.
                        </p>

                        <div className="about-stats-row">
                            <div className="about-stat-item">
                                <div className="about-stat-icon">
                                    <GraduationCap size={28} strokeWidth={1.8} />
                                </div>
                                <div className="about-stat-body">
                                    <h4>B.Tech</h4>
                                    <p>AI & Data Science</p>
                                    <small>(2022 - 2026)</small>
                                </div>
                            </div>

                            <div className="about-stat-item">
                                <div className="about-stat-icon">
                                    <FileText size={28} strokeWidth={1.8} />
                                </div>
                                <div className="about-stat-body">
                                    <h4>Diploma</h4>
                                    <p>Electrical Engineering</p>
                                    <small>(2019 - 2022)</small>
                                </div>
                            </div>

                            <div className="about-stat-item">
                                <div className="about-stat-icon">
                                    <BriefcaseBusiness size={28} strokeWidth={1.8} />
                                </div>
                                <div className="about-stat-body">
                                    <h4>Internship</h4>
                                    <p>Vibhum Software</p>
                                    <small>(Jul 2024 - Aug 2024)</small>
                                </div>
                            </div>

                            <div className="about-stat-item">
                                <div className="about-stat-icon">
                                    <MapPin size={28} strokeWidth={1.8} />
                                </div>
                                <div className="about-stat-body">
                                    <h4>Location</h4>
                                    <p>New Delhi, Delhi</p>
                                    <small>India</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Skills({ theme }) {
    const [active, setActive] = useState('All');
    const group = skillGroups.find(g => g.name === active) || skillGroups[0];

    const trackRef = useRef(null);
    const xPos = useRef(0);
    const dir = useRef(-1); // -1: right-to-left (scroll down), 1: left-to-right (scroll up)
    const isHovered = useRef(false);
    const lastScrollY = useRef(0);

    // Ensure one set has at least 16 items so half the track spans wider than any screen (> 3000px)
    const minSetLength = 16;
    const repeatCount = Math.max(1, Math.ceil(minSetLength / (group.skills.length || 1)));
    const singleSet = Array.from({ length: repeatCount }, () => group.skills).flat();
    const marqueeItems = [...singleSet, ...singleSet];

    // Scroll direction detection
    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = currentScrollY - lastScrollY.current;

            if (Math.abs(delta) > 1) {
                if (delta > 0) {
                    // Scrolling DOWN -> move right to left
                    dir.current = -1;
                } else {
                    // Scrolling UP -> move left to right (opposite)
                    dir.current = 1;
                }
                // Interactive inertia push
                xPos.current += dir.current * Math.min(Math.abs(delta) * 0.8, 25);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 60fps smooth loop
    useEffect(() => {
        let animationFrameId;
        const baseSpeed = 1.0;

        const animate = () => {
            if (trackRef.current) {
                const halfWidth = trackRef.current.scrollWidth / 2;
                if (halfWidth > 0) {
                    if (!isHovered.current) {
                        xPos.current += dir.current * baseSpeed;
                    }

                    // Seamless modulo loop
                    while (xPos.current <= -halfWidth) {
                        xPos.current += halfWidth;
                    }
                    while (xPos.current > 0) {
                        xPos.current -= halfWidth;
                    }

                    trackRef.current.style.transform = `translate3d(${xPos.current}px, 0, 0)`;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [active, group.skills]);

    return (
        <section id="skills" className="skills-section">
            <div className="about-wrap skills-wrap">
                <div className="about-eyebrow-row">
                    <span className="about-eyebrow-text">
                        SKILLS & <span className="about-eyebrow-accent">TECHNOLOGIES</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                </div>

                <div className="skill-filter-tabs" role="tablist" aria-label="Filter skills">
                    {skillGroups.map(g => (
                        <button
                            key={g.name}
                            role="tab"
                            aria-selected={active === g.name}
                            className={`skill-tab-btn ${active === g.name ? 'active' : ''}`}
                            onClick={() => {
                                setActive(g.name);
                            }}
                        >
                            {g.name}
                        </button>
                    ))}
                </div>

                <div 
                    className="skills-marquee-container" 
                    aria-label="Skills marquee"
                    onMouseEnter={() => { isHovered.current = true; }}
                    onMouseLeave={() => { isHovered.current = false; }}
                >
                    <div
                        ref={trackRef}
                        className="skills-marquee-track"
                    >
                        {marqueeItems.map((s, i) => (
                            <div key={`${s}-${i}`} className="skills-marquee-card">
                                <div className="skills-icon-wrap">
                                    <TechIcon name={s} size={64} />
                                </div>
                                <span className="skills-tech-name">{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Projects({ theme }) {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.filter(p => p.featured);

    return (
        <section id="projects" className="section projects-section">
            <div className="section-wrap">
                <div className="section-header-row">
                    <div>
                        <span className="section-eyebrow-accent">FEATURED PROJECTS</span>
                    </div>
                    <button
                        className="section-header-btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? 'Show Featured' : 'View All Projects'} <ArrowRight size={14} />
                    </button>
                </div>

                <div className="featured-projects-grid">
                    {displayedProjects.map((p, i) => (
                        <motion.article
                            layout
                            key={p.id}
                            className="featured-project-card"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                        >
                            <div className="project-thumb-wrap">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="project-thumb-img"
                                    loading="lazy"
                                />
                                <span className="project-category-badge">{p.category}</span>
                            </div>

                            <div className="featured-project-content">
                                <h3 className="project-title-heading">{p.title}</h3>
                                <p className="project-subtitle-heading">{p.subtitle}</p>
                                <p className="project-desc-text">{p.description}</p>

                                <div className="project-tags-row">
                                    {p.tags.map(t => (
                                        <span key={t} className="project-tag-pill">{t}</span>
                                    ))}
                                </div>

                                <div className="project-btns-row">
                                    <a
                                        href={p.demo || profile.github || 'https://github.com'}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-action-btn project-btn-live"
                                    >
                                        Live Demo <ArrowRight size={14} />
                                    </a>
                                    <a
                                        href={p.github || profile.github || 'https://github.com'}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-action-btn project-btn-github"
                                    >
                                        <Github size={15} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Resume({ theme }) {
    return (
        <section id="resume" className="section resume-section">
            <div className="section-wrap">
                <div className="resume-showcase-card">
                    <div className="resume-card-left">
                        <div className="resume-card-icon">
                            <FileText size={30} />
                        </div>
                        <div className="resume-card-info">
                            <span className="section-eyebrow-accent">MY RESUME</span>
                            <h2 className="resume-card-title">View or Download My Resume</h2>
                            <p className="resume-card-desc">
                                A detailed overview of my education, skills, projects and experience.
                            </p>
                        </div>
                    </div>

                    <div className="resume-card-actions">
                        <a
                            className="resume-action-btn resume-btn-view"
                            href="/assets/Bholu_Shubhankar_Anokha_Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Eye size={16} /> View Resume
                        </a>
                        <a
                            className="resume-action-btn resume-btn-download"
                            href="/assets/Bholu_Shubhankar_Anokha_Resume.pdf"
                            download="Bholu_Shubhankar_Anokha_Resume.pdf"
                        >
                            <Download size={16} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GithubActivity({ theme }) {
    const weeks = useMemo(() => {
        return Array.from({ length: 44 }, (_, w) =>
            Array.from({ length: 7 }, (_, d) => {
                const seed = (w * 13 + d * 7 + (w % 5) * 3) % 20;
                let level = 0;
                if (seed > 14) level = 4;
                else if (seed > 10) level = 3;
                else if (seed > 6) level = 2;
                else if (seed > 3) level = 1;
                return { id: `${w}-${d}`, level };
            })
        );
    }, []);

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <section className="section github-section">
            <div className="section-wrap">
                <div className="section-header-compact">
                    <span className="section-eyebrow-accent">GITHUB ACTIVITY</span>
                    <h2 className="section-main-heading">My Coding Journey</h2>
                </div>

                <div className="github-showcase-row">
                    <div className="github-stats-grid">
                        <div className="github-stat-card">
                            <div className="github-stat-icon"><Github size={18} /></div>
                            <div className="github-stat-text">
                                <span className="github-stat-val">200+</span>
                                <span className="github-stat-label">Contributions<br />in the last year</span>
                            </div>
                        </div>

                        <div className="github-stat-card">
                            <div className="github-stat-icon"><FolderGit2 size={18} /></div>
                            <div className="github-stat-text">
                                <span className="github-stat-val">15+</span>
                                <span className="github-stat-label">Repositories</span>
                            </div>
                        </div>

                        <div className="github-stat-card">
                            <div className="github-stat-icon"><Layers size={18} /></div>
                            <div className="github-stat-text">
                                <span className="github-stat-val">3+</span>
                                <span className="github-stat-label">Major Projects</span>
                            </div>
                        </div>

                        <div className="github-stat-card">
                            <div className="github-stat-icon"><GitCommit size={18} /></div>
                            <div className="github-stat-text">
                                <span className="github-stat-val">100+</span>
                                <span className="github-stat-label">Commits</span>
                            </div>
                        </div>
                    </div>

                    <div className="github-heatmap-card">
                        <div className="heatmap-months-header">
                            {months.map(m => <span key={m}>{m}</span>)}
                        </div>
                        <div className="heatmap-matrix-scroll">
                            <div className="heatmap-matrix">
                                {weeks.map((col, wIdx) => (
                                    <div key={wIdx} className="heatmap-column">
                                        {col.map(cell => (
                                            <span
                                                key={cell.id}
                                                className={`heatmap-cell heat-level-${cell.level}`}
                                                title={`Activity level ${cell.level}`}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="heatmap-footer-row">
                            <span className="heatmap-legend-label">Less</span>
                            <div className="heatmap-legend-cells">
                                {[0, 1, 2, 3, 4].map(lvl => (
                                    <span key={lvl} className={`heatmap-cell heat-level-${lvl}`} />
                                ))}
                            </div>
                            <span className="heatmap-legend-label">More</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Certificates({ theme }) {
    return (
        <section id="certificates" className="section certificates-section">
            <div className="section-wrap">
                <div className="section-header-row">
                    <div>
                        <span className="section-eyebrow-accent">CERTIFICATES & ACHIEVEMENTS</span>
                        <h2 className="section-main-heading">My Achievements</h2>
                    </div>
                    <a href="#contact" className="section-header-btn">
                        View All Certificates <ArrowRight size={14} />
                    </a>
                </div>

                <div className="certificates-cards-grid">
                    {certificates.map((c, i) => (
                        <motion.div
                            key={c.id}
                            className="certificate-item-card"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                        >
                            <div className="certificate-img-container">
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="certificate-thumb-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="certificate-meta-info">
                                <h4 className="certificate-title-text">{c.title}</h4>
                                <span className="certificate-issuer-text">{c.issuer}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact({ theme }) {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [feedback, setFeedback] = useState('');
    const update = e => setForm({ ...form, [e.target.name]: e.target.value });
    const submit = e => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setFeedback('Please complete every field.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            setFeedback('Please enter a valid email address.');
            return;
        }
        const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nReply email: ${form.email}\n\n${form.message}`);
        setFeedback('Your email app will open with this message prepared.');
        window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className={`section contact-section ${theme === 'dark' ? 'contact-dark' : 'contact-light'}`}>
            <div className="contact-scenic-bg" aria-hidden="true" />
            <div className="contact-scenic-shade" aria-hidden="true" />

            <div className="section-wrap contact-layout-wrap">
                <div className="contact-info-col">
                    <span className="section-eyebrow-accent">GET IN TOUCH</span>
                    <h2 className="contact-headline">
                        Let's build something<br />
                        <span className="contact-headline-accent">meaningful.</span>
                    </h2>
                    <p className="contact-subtext">
                        I'm always open to discussing new opportunities, interesting projects or ideas related to AI, full-stack development and technology.
                    </p>

                    <div className="contact-links-list">
                        <a href={`mailto:${profile.email}`} className="contact-link-row">
                            <span className="contact-link-icon"><Mail size={18} /></span>
                            <span className="contact-link-val">{profile.email}</span>
                        </a>

                        <a href={profile.linkedin || 'https://linkedin.com'} target="_blank" rel="noreferrer" className="contact-link-row">
                            <span className="contact-link-icon"><Linkedin size={18} /></span>
                            <span className="contact-link-val">linkedin.com/in/bholushubhankaranokha</span>
                        </a>

                        <a href={profile.github || 'https://github.com'} target="_blank" rel="noreferrer" className="contact-link-row">
                            <span className="contact-link-icon"><Github size={18} /></span>
                            <span className="contact-link-val">github.com/bholushubhankaranokha</span>
                        </a>
                    </div>
                </div>

                <div className="contact-form-col">
                    <form className="contact-glass-form" onSubmit={submit} noValidate>
                        <div className="form-group">
                            <input
                                name="name"
                                value={form.name}
                                onChange={update}
                                placeholder="Your Name"
                                autoComplete="name"
                                className="form-glass-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={update}
                                placeholder="Your Email"
                                autoComplete="email"
                                className="form-glass-input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={update}
                                placeholder="Your Message"
                                rows="4"
                                className="form-glass-textarea"
                            />
                        </div>
                        <button className="contact-submit-btn" type="submit">
                            Send Message <ArrowRight size={16} />
                        </button>
                        {feedback && <p className="form-feedback-text" role="status">{feedback}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="section-wrap footer-inner-wrap">
                <div className="footer-left-brand">
                    <a className="footer-brand-logo" href="#home">BS<span>.</span></a>
                    <div className="footer-brand-meta">
                        <span className="footer-brand-name">Bholu Shubhankar Anokha</span>
                        <span className="footer-brand-sub">AI Engineer | Full-Stack Developer</span>
                    </div>
                </div>

                <nav className="footer-center-nav" aria-label="Footer Navigation">
                    {nav.map(([l, id]) => (
                        <a href={`#${id}`} key={id}>{l}</a>
                    ))}
                </nav>

                <div className="footer-right-socials">
                    <a href={profile.github || 'https://github.com'} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={18} />
                    </a>
                    <a href={profile.linkedin || 'https://linkedin.com'} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href={`mailto:${profile.email}`} aria-label="Email">
                        <Mail size={18} />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default function App() {
    const [theme, toggleTheme] = useTheme();
    return (
        <div className="app-shell">
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero theme={theme} />
                <About theme={theme} />
                <Skills theme={theme} />
                <Projects theme={theme} />
                <Resume theme={theme} />
                <GithubActivity theme={theme} />
                <Certificates theme={theme} />
                <Contact theme={theme} />
            </main>
            <Footer />
            <PortfolioAssistant />
        </div>
    );
}
