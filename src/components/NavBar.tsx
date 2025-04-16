
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Activity, Database, AlertTriangle, Settings, User, Menu, X } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <Activity size={18} /> },
    { name: 'Online Mode', path: '/online', icon: <Shield size={18} /> },
    { name: 'Offline Mode', path: '/offline', icon: <Database size={18} /> },
    { name: 'Alerts', path: '/alerts', icon: <AlertTriangle size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  return (
    <nav className="bg-cyber-dark border-b border-cyber-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-cyber-accent mr-2" />
              <span className="text-xl font-bold text-white">Sentinel <span className="text-cyber-accent">Guard</span></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cyber-text hover:text-cyber-accent focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? "bg-cyber-light text-cyber-accent"
                    : "text-cyber-text hover:bg-cyber-light hover:text-cyber-accent"
                } transition-colors duration-200`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <div className="border-l border-cyber-muted h-6 mx-2"></div>
            <button className="flex items-center text-cyber-text hover:text-cyber-accent">
              <User size={18} className="mr-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-dark border-t border-cyber-accent/20 px-2 pt-2 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? "bg-cyber-light text-cyber-accent"
                  : "text-cyber-text hover:bg-cyber-light hover:text-cyber-accent"
              } transition-colors duration-200 mb-1`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
          <div className="border-t border-cyber-muted my-2"></div>
          <button className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-cyber-text hover:bg-cyber-light hover:text-cyber-accent">
            <User size={18} className="mr-3" />
            <span>Login</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
