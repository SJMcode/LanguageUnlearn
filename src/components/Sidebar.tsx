import { NavLink } from 'react-router-dom';
import {
    BookOpen,
    Headphones,
    PenTool,
    Mic2,
    LayoutDashboard,
    Settings,
    GraduationCap
} from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
        { name: 'Listening', path: '/listening', icon: <Headphones size={20} /> },
        { name: 'Reading', path: '/reading', icon: <BookOpen size={20} /> },
        { name: 'Writing', path: '/writing', icon: <PenTool size={20} /> },
        { name: 'Speaking', path: '/speaking', icon: <Mic2 size={20} /> },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <GraduationCap className="logo-icon" size={32} />
                <span className="logo-text">IELTS Pro</span>
            </div>

            <nav className="sidebar-nav">
                <div className="nav-section-title">Preparation</div>
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span className="nav-text">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="sidebar-footer">
                <button className="nav-link">
                    <Settings size={20} />
                    <span className="nav-text">Settings</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
