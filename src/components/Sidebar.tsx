import { NavLink } from 'react-router-dom';
import {
    BookOpen,
    Headphones,
    PenTool,
    Mic2,
    LayoutDashboard,
    Settings,
    GraduationCap,
    Globe
} from 'lucide-react';
import '../styles/Sidebar.css';

import { X } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const mainNav = [
        { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    ];

    const languages = [
        {
            name: 'English',
            isMain: true,
            subItems: [
                { name: 'Listening', path: '/listening', icon: <Headphones size={18} /> },
                { name: 'Reading', path: '/reading', icon: <BookOpen size={18} /> },
                { name: 'Writing', path: '/writing', icon: <PenTool size={18} /> },
                { name: 'Speaking', path: '/speaking', icon: <Mic2 size={18} /> },
            ]
        },
        { name: 'German', isMain: false, subItems: [] },
        { name: 'French', isMain: false, subItems: [] },
        { name: 'Spanish', isMain: false, subItems: [] },
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="logo-wrapper">
                    <GraduationCap className="logo-icon" size={32} />
                    <span className="logo-text">Lang Pro</span>
                </div>
                <button className="sidebar-close" onClick={onClose}>
                    <X size={24} />
                </button>
            </div>

            <nav className="sidebar-nav">
                {mainNav.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClose}
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span className="nav-text">{item.name}</span>
                    </NavLink>
                ))}

                <div className="nav-section-title">Preparation</div>
                {languages.map((lang) => (
                    <div key={lang.name} className="lang-section">
                        <div className={`lang-header ${!lang.isMain ? 'disabled' : ''}`}>
                            <Globe size={20} className="lang-icon" />
                            <span className="nav-text">{lang.name}</span>
                            {!lang.isMain && <span className="coming-soon">Soon</span>}
                        </div>
                        {lang.isMain && (
                            <div className="sub-nav">
                                {lang.subItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={onClose}
                                        className={({ isActive }) => `sub-nav-link ${isActive ? 'active' : ''}`}
                                    >
                                        {item.icon}
                                        <span className="nav-text">{item.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
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
