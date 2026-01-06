import { motion } from 'framer-motion';
import {
    BarChart3,
    Clock,
    Award,
    ArrowRight,
    Play,
    ExternalLink
} from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const stats = [
        { label: 'Practice Time', value: '12h 45m', icon: <Clock className="stat-icon blue" /> },
        { label: 'Modules Completed', value: '18/40', icon: <BarChart3 className="stat-icon amber" /> },
        { label: 'Current Band Score', value: '7.5', icon: <Award className="stat-icon emerald" /> },
    ];

    const projects = [
        {
            title: 'English (IELTS)',
            description: 'Comprehensive IELTS preparation with LRWS modules and practice tests.',
            level: 'Advanced',
            image: '/landingpage.png',
            color: 'blue',
            path: '/listening'
        },
        {
            title: 'German (A1-B2)',
            description: 'Master German grammar and vocabulary with interactive exercises.',
            level: 'Beginner',
            image: '',
            color: 'amber',
            path: '#'
        },
        {
            title: 'French (DelF)',
            description: 'Learn French from basics to advanced levels with native speaker audio.',
            level: 'Intermediate',
            image: '',
            color: 'emerald',
            path: '#'
        },
        {
            title: 'Spanish (DELE)',
            description: 'Interactive Spanish lessons focused on conversational fluency.',
            level: 'Beginner',
            image: '',
            color: 'rose',
            path: '#'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Welcome to Lang Pro!</h1>
                <p>Your journey to mastering new languages starts here.</p>
            </header>

            <section className="stats-grid">
                {stats.map((stat, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-info">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                        {stat.icon}
                    </div>
                ))}
            </section>

            <section className="featured-section">
                <h2>Project Showcase</h2>
                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={`project-card ${project.color}`}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        >
                            <div className="project-preview">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="preview-img" />
                                ) : (
                                    <div className="preview-placeholder">
                                        <Play size={48} className="placeholder-icon" />
                                    </div>
                                )}
                                <div className="preview-overlay">
                                    <button className="btn-demo">
                                        <ExternalLink size={18} /> Live Demo
                                    </button>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <span className="project-badge">{project.level}</span>
                                </div>
                                <p>{project.description}</p>
                                <button className="btn-start">
                                    Start Learning <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Dashboard;
