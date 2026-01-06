import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = () => {
    return (
        <div className="layout-container">
            <Sidebar />
            <main className="main-content">
                <header className="page-header">
                    <div className="container">
                        {/* Future Breadcrumbs or Search */}
                    </div>
                </header>
                <div className="page-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
