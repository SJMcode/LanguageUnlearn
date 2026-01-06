import {
    BarChart3,
    Clock,
    Award,
    ArrowRight
} from 'lucide-react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const stats = [
        { label: 'Practice Time', value: '12h 45m', icon: <Clock className="stat-icon blue" /> },
        { label: 'Modules Completed', value: '18/40', icon: <BarChart3 className="stat-icon amber" /> },
        { label: 'Current Band Score', value: '7.5', icon: <Award className="stat-icon emerald" /> },
    ];

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Welcome back, Learner!</h1>
                <p>Ready to improve your IELTS score today?</p>
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
                <h2>Recommended for you</h2>
                <div className="featured-grid">
                    <div className="featured-card">
                        <div className="featured-content">
                            <h3>Reading: Matching Headings</h3>
                            <p>Master one of the trickiest sections of the IELTS reading test.</p>
                            <button className="btn-primary">
                                Start Practice <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className="featured-badge">Level 2</div>
                    </div>

                    <div className="featured-card accent">
                        <div className="featured-content">
                            <h3>Listening: Section 3</h3>
                            <p>Practice academic discussions and academic vocabulary in context.</p>
                            <button className="btn-secondary">
                                Continue <ArrowRight size={16} />
                            </button>
                        </div>
                        <div className="featured-badge">Level 3</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
