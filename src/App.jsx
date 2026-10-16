import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BriefcaseBusiness,
    CheckCircle,
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
    Loader2,
    Mail,
    MapPin,
    Menu,
    Moon,
    Send,
    Sun,
    X
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { profile, projects, skillGroups, certificates, emailjsConfig } from './data/portfolio';
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
                                    <TechIcon name={s} size={78} />
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
    const displayedProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="projects-section">
            <div className="about-wrap projects-wrap">
                <div className="about-eyebrow-row projects-eyebrow-row">
                    <span className="about-eyebrow-text">
                        FEATURED <span className="about-eyebrow-accent">PROJECTS</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                    <a
                        href="https://github.com/bholushubhankaranokha?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="projects-header-btn"
                    >
                        View All Projects <ArrowRight size={14} />
                    </a>
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
        <section id="resume" className="resume-section">
            <div className="about-wrap resume-wrap">
                <div className="about-eyebrow-row resume-eyebrow-row">
                    <span className="about-eyebrow-text">
                        MY <span className="about-eyebrow-accent">RESUME</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                </div>

                <div className="resume-showcase-card">
                    <div className="resume-card-left">
                        <div className="resume-card-icon">
                            <FileText size={40} />
                        </div>
                        <div className="resume-card-info">
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
    return (
        <section id="github" className="github-section">
            <div className="about-wrap github-wrap">
                <div className="about-eyebrow-row github-eyebrow-row">
                    <span className="about-eyebrow-text">
                        GITHUB <span className="about-eyebrow-accent">ACTIVITY</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                    <a
                        href="https://github.com/bholushubhankaranokha"
                        target="_blank"
                        rel="noreferrer"
                        className="projects-header-btn"
                    >
                        GitHub Profile <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Contribution Snake Showcase Card */}
                <div className="github-snake-card">
                    <div className="github-snake-header">
                        <div className="github-snake-header-left">
                            <div className="github-snake-badge-icon">
                                <Github size={20} />
                            </div>
                            <div>
                                <h3 className="github-snake-title">Contribution Snake</h3>
                                <p className="github-snake-desc">Interactive commit trail slithering across the year's contribution matrix</p>
                            </div>
                        </div>
                        <div className="github-live-indicator">
                            <span className="github-pulse-dot" />
                            <span>LIVE CONTRIBUTIONS</span>
                        </div>
                    </div>

                    <div className="github-snake-viewport">
                        <img
                            key={`snake-${theme}`}
                            src={theme === 'dark' ? '/assets/github-contribution-grid-snake-dark.svg' : '/assets/github-contribution-grid-snake.svg'}
                            alt="GitHub Contribution Snake"
                            className="github-snake-svg"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* GitHub Stats Row (Hero Theme) */}
                <div className="github-stats-cards-grid">
                    {/* Card 1: Main Stats */}
                    <a
                        href="https://github.com/bholushubhankaranokha"
                        target="_blank"
                        rel="noreferrer"
                        className="github-stat-card-box"
                        title="View GitHub Profile Stats"
                    >
                        <img
                            key={`stats-${theme}`}
                            src={theme === 'dark' ? '/assets/github-stats-dark.svg' : '/assets/github-stats-light.svg'}
                            alt="Bholu Shubhankar Anokha's GitHub Stats"
                            className="github-stat-widget-img"
                            loading="lazy"
                        />
                    </a>

                    {/* Card 2: Most Used Languages */}
                    <a
                        href="https://github.com/bholushubhankaranokha?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="github-stat-card-box"
                        title="View Most Used Languages"
                    >
                        <img
                            key={`langs-${theme}`}
                            src={theme === 'dark' ? '/assets/github-top-langs-dark.svg' : '/assets/github-top-langs-light.svg'}
                            alt="Most Used Languages"
                            className="github-stat-widget-img"
                            loading="lazy"
                        />
                    </a>

                    {/* Card 3: Streak Stats */}
                    <a
                        href="https://github.com/bholushubhankaranokha"
                        target="_blank"
                        rel="noreferrer"
                        className="github-stat-card-box"
                        title="View GitHub Streak"
                    >
                        <img
                            key={`streak-${theme}`}
                            src={theme === 'dark' ? '/assets/github-streak-dark.svg' : '/assets/github-streak-light.svg'}
                            alt="GitHub Streak"
                            className="github-stat-widget-img"
                            loading="lazy"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

function Certificates({ theme }) {
    return (
        <section id="certificates" className="certificates-section">
            <div className="about-wrap certificates-wrap">
                <div className="about-eyebrow-row certificates-eyebrow-row">
                    <span className="about-eyebrow-text">
                        CERTIFICATES &amp; <span className="about-eyebrow-accent">ACHIEVEMENTS</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                </div>

                <div className="certificates-cards-grid">
                    {certificates.map((c, i) => (
                        <motion.div
                            key={c.id}
                            className="certificate-item-card"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                        >
                            <a
                                href={c.image}
                                target="_blank"
                                rel="noreferrer"
                                className="certificate-img-container"
                                title={`View ${c.title} Certificate`}
                            >
                                <img
                                    src={c.image}
                                    alt={c.title}
                                    className="certificate-thumb-img"
                                    loading="lazy"
                                />
                            </a>

                            <div className="certificate-meta-info">
                                <span className="certificate-issuer-badge">{c.issuer}</span>
                                <h4 className="certificate-title-text">{c.title}</h4>

                                <div className="certificate-actions-row">
                                    <a
                                        href={c.image}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="certificate-view-btn"
                                        title={`Open ${c.title} Certificate in new window`}
                                    >
                                        <Eye size={15} /> View Certificate
                                    </a>
                                </div>
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
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
    const [feedback, setFeedback] = useState('');

    const update = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (feedback) {
            setFeedback('');
            setStatus('idle');
        }
    };

    const submit = async e => {
        e.preventDefault();
        const name = form.name.trim();
        const email = form.email.trim();
        const message = form.message.trim();

        if (!name || !email || !message) {
            setStatus('error');
            setFeedback('Please complete every field before sending.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setStatus('error');
            setFeedback('Please enter a valid email address.');
            return;
        }

        const serviceId = emailjsConfig.serviceId || import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = emailjsConfig.templateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = emailjsConfig.publicKey || import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus('error');
            setFeedback('EmailJS keys are not yet configured. Please set them in your .env file to send directly.');
            return;
        }

        setStatus('sending');
        setFeedback('');

        try {
            const now = new Date();
            const formattedTime = now.toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
            });
            const currentYear = now.getFullYear().toString();

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: name,
                    email: email,
                    message: message,
                    time: formattedTime,
                    year: currentYear,
                    from_name: name,
                    from_email: email,
                    reply_to: email,
                    user_email: email,
                    to_name: profile.name,
                },
                publicKey
            );
            setStatus('success');
            setFeedback("Thank you! Your message has been sent successfully. I'll get back to you soon.");
            setForm({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS send error:', err);
            setStatus('error');
            const errorMsg = err?.text || err?.message || 'Failed to send message via EmailJS.';
            setFeedback(`${errorMsg} Please check your EmailJS dashboard or contact me directly.`);
        }
    };

    return (
        <section id="contact" className={`contact-section ${theme === 'dark' ? 'contact-dark' : 'contact-light'}`}>
            {/* Background layers for seamless Morning / Evening crossfade (flipped) */}
            <div
                className="contact-bg contact-bg-morning"
                style={{ opacity: theme === 'light' ? 1 : 0 }}
                aria-hidden="true"
            />
            <div
                className="contact-bg contact-bg-evening"
                style={{ opacity: theme === 'dark' ? 1 : 0 }}
                aria-hidden="true"
            />

            {/* Shading overlays tuned so background artwork remains richly visible just like Hero */}
            <div
                className="contact-shade contact-shade-morning"
                style={{ opacity: theme === 'light' ? 1 : 0 }}
                aria-hidden="true"
            />
            <div
                className="contact-shade contact-shade-evening"
                style={{ opacity: theme === 'dark' ? 1 : 0 }}
                aria-hidden="true"
            />

            <div className="about-wrap contact-wrap">
                {/* 1. Head line GET IN TOUCH same as ABOUT ME section */}
                <div className="about-eyebrow-row contact-eyebrow-row">
                    <span className="about-eyebrow-text">
                        GET IN <span className="about-eyebrow-accent">TOUCH</span>
                    </span>
                    <span className="about-eyebrow-line" aria-hidden="true" />
                </div>

                <div className="contact-layout-wrap">
                    <div className="contact-info-col">
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
                                    disabled={status === 'sending'}
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
                                    disabled={status === 'sending'}
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
                                    disabled={status === 'sending'}
                                />
                            </div>
                            <button
                                className={`contact-submit-btn ${status === 'sending' ? 'contact-submit-btn-loading' : ''}`}
                                type="submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 size={16} className="contact-btn-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                            {feedback && (
                                <div className={`form-feedback-card form-feedback-${status}`} role="status">
                                    {status === 'success' && <CheckCircle size={16} className="form-feedback-icon" />}
                                    {status === 'error' && <AlertCircle size={16} className="form-feedback-icon" />}
                                    <div className="form-feedback-content">
                                        <p className="form-feedback-text">{feedback}</p>
                                        {status === 'error' && (
                                            <a
                                                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${form.name || 'Visitor'}`)}&body=${encodeURIComponent(form.message || '')}`}
                                                className="form-feedback-mailto-link"
                                            >
                                                Send via mail app instead &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-footer">
            <div className="about-wrap footer-inner-wrap">
                <div className="footer-left-brand">
                    <a className="footer-brand-logo-link" href="#home" aria-label="Bholu Home">
                        <img src="/assets/favicon.png" alt="Bholu Logo" className="footer-brand-logo-img" />
                    </a>
                    <div className="footer-brand-meta">
                        <span className="footer-brand-name">Bholu Shubhankar Anokha</span>
                        <span className="footer-brand-sub">© {new Date().getFullYear()} All rights reserved.</span>
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
