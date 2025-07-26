import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Briefcase, Search, ChevronDown, Bell, Settings, Bookmark, Building, Users, HelpCircle, Home, FileText, MoreHorizontal } from 'lucide-react';
import './NavbarNew.css';

const Navbar = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isAlertsDropdownOpen, setIsAlertsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const userDropdownRef = useRef(null);
  const userButtonRef = useRef(null);
  const alertsDropdownRef = useRef(null);
  const alertsButtonRef = useRef(null);

  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close user dropdown
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target) &&
          userButtonRef.current && !userButtonRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
      
      // Close alerts dropdown
      if (alertsDropdownRef.current && !alertsDropdownRef.current.contains(event.target) &&
          alertsButtonRef.current && !alertsButtonRef.current.contains(event.target)) {
        setIsAlertsDropdownOpen(false);
      }
    };

    if (isUserDropdownOpen || isAlertsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserDropdownOpen, isAlertsDropdownOpen]);

  const handleLogout = () => {
    onLogout();
    setIsUserDropdownOpen(false);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleUserDropdown = (e) => {
    e.stopPropagation();
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsAlertsDropdownOpen(false); // Close alerts when opening user dropdown
  };

  const toggleAlertsDropdown = (e) => {
    e.stopPropagation();
    setIsAlertsDropdownOpen(!isAlertsDropdownOpen);
    setIsUserDropdownOpen(false); // Close user dropdown when opening alerts
  };

  // Function to get dropdown positioning
  const getDropdownPosition = (buttonRef) => {
    if (!buttonRef.current) return { top: 80, right: 20 };
    
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate position
    let top = buttonRect.bottom + 10;
    let right = viewportWidth - buttonRect.right;
    
    // Ensure dropdown doesn't go off-screen
    const dropdownWidth = 320; // Max width of dropdowns
    const dropdownHeight = 400; // Approximate max height
    
    // Adjust horizontal position if needed
    if (right + dropdownWidth > viewportWidth) {
      right = 20; // Default right margin
    }
    
    // Adjust vertical position if needed
    if (top + dropdownHeight > viewportHeight) {
      top = buttonRect.top - dropdownHeight - 10;
    }
    
    // Ensure minimum top position
    if (top < 80) {
      top = 80;
    }
    
    return { top, right };
  };

  // Get positions for dropdowns
  const userDropdownPosition = getDropdownPosition(userButtonRef);
  const alertsDropdownPosition = getDropdownPosition(alertsButtonRef);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      title: "New job match",
      message: "Senior Developer position at TCS matches your profile",
      time: "2 hours ago",
      type: "job"
    },
    {
      id: 2,
      title: "Application update",
      message: "Your application at Infosys has been reviewed",
      time: "1 day ago",
      type: "application"
    },
    {
      id: 3,
      title: "Profile reminder",
      message: "Complete your profile to get better job matches",
      time: "3 days ago",
      type: "reminder"
    }
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            {/* Brand */}
            <Link to="/" className="navbar-brand">
              <div className="brand-icon">
                <Briefcase className="navbar-icon" />
              </div>
              <span>JobPortal</span>
            </Link>

            {/* Search Bar */}
            <div className="navbar-search">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input-group">
                  <Search className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search for jobs, companies, or keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                  />
                  <button type="submit" className="search-btn">
                    Search
                  </button>
                </div>
              </form>
            </div>

            {/* Navigation Menu */}
            <div className="navbar-menu">
              <Link to="/" className="nav-btn">
                <Home size={18} />
                <span>Home</span>
              </Link>
              
              {user ? (
                <>
                  {/* Notifications */}
                  <div className="navbar-alerts">
                    <button 
                      ref={alertsButtonRef}
                      onClick={toggleAlertsDropdown}
                      className="nav-btn notification-btn"
                    >
                      <Bell size={18} />
                      <span>Alerts</span>
                      <span className="notification-badge">{notifications.length}</span>
                    </button>
                    
                    {isAlertsDropdownOpen && (
                      <div ref={alertsDropdownRef} className="alerts-dropdown" style={{ top: alertsDropdownPosition.top, right: alertsDropdownPosition.right }}>
                        <div className="alerts-header">
                          <h3>Notifications</h3>
                          <button className="mark-all-read">Mark all read</button>
                        </div>
                        
                        <div className="alerts-content">
                          {notifications.map((notification) => (
                            <div key={notification.id} className="alert-item">
                              <div className="alert-icon">
                                {notification.type === 'job' && <Briefcase size={16} />}
                                {notification.type === 'application' && <FileText size={16} />}
                                {notification.type === 'reminder' && <Bell size={16} />}
                              </div>
                              <div className="alert-content">
                                <div className="alert-title">{notification.title}</div>
                                <div className="alert-message">{notification.message}</div>
                                <div className="alert-time">{notification.time}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="alerts-footer">
                          <Link to="/notifications" className="view-all-alerts">
                            View all notifications
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* User Profile */}
                  <div className="navbar-user">
                    <button 
                      ref={userButtonRef}
                      onClick={toggleUserDropdown} 
                      className="user-profile-btn"
                    >
                      <div className="user-avatar">
                        {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <span className="user-name">{user.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    
                    {isUserDropdownOpen && (
                      <div ref={userDropdownRef} className="user-dropdown" style={{ top: userDropdownPosition.top, right: userDropdownPosition.right }}>
                        <div className="dropdown-header">
                          <div className="user-avatar-large">
                            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div className="user-info">
                            <div className="user-name-large">{user.name}</div>
                            <div className="user-email">{user.email}</div>
                            <div className="user-status">
                              <span className="status-dot"></span>
                              <span className="status-text">Online</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="dropdown-divider"></div>
                        
                        <Link to="/dashboard" className="dropdown-link" onClick={() => setIsUserDropdownOpen(false)}>
                          <Briefcase size={16} />
                          <span>Dashboard</span>
                        </Link>
                        
                        <Link to="/my-applications" className="dropdown-link" onClick={() => setIsUserDropdownOpen(false)}>
                          <FileText size={16} />
                          <span>My Applications</span>
                        </Link>
                        
                        <Link to="/saved-jobs" className="dropdown-link" onClick={() => setIsUserDropdownOpen(false)}>
                          <Bookmark size={16} />
                          <span>Saved Jobs</span>
                        </Link>
                        
                        <div className="dropdown-divider"></div>
                        
                        <Link to="/profile" className="dropdown-link" onClick={() => setIsUserDropdownOpen(false)}>
                          <User size={16} />
                          <span>Profile Settings</span>
                        </Link>
                        
                        <Link to="/settings" className="dropdown-link" onClick={() => setIsUserDropdownOpen(false)}>
                          <Settings size={16} />
                          <span>Account Settings</span>
                        </Link>
                        
                        <div className="dropdown-divider"></div>
                        
                        <button onClick={handleLogout} className="dropdown-link logout-btn">
                          <LogOut size={16} />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="navbar-auth">
                  <Link to="/login" className="btn btn-outline btn-sm">
                    <User size={16} />
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-sm">
                    Register
                  </Link>
                </div>
              )}

              {/* Sidebar Toggle */}
              <button 
                className="nav-btn sidebar-toggle"
                onClick={toggleSidebar}
              >
                <MoreHorizontal size={18} />
                <span>More</span>
              </button>
            </div>

            <button 
              className="navbar-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="navbar-mobile">
              <div className="mobile-search">
                <form onSubmit={handleSearch} className="search-form">
                  <div className="search-input-group">
                    <Search className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search for jobs, companies, or keywords..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="search-input"
                    />
                    <button type="submit" className="search-btn">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="mobile-nav-buttons">
                <Link to="/" className="mobile-nav-btn">
                  <Home size={20} />
                  <span>Home</span>
                </Link>
                
                <Link to="/jobs" className="mobile-nav-btn">
                  <Briefcase size={20} />
                  <span>Jobs</span>
                </Link>
                
                <Link to="/companies" className="mobile-nav-btn">
                  <Building size={20} />
                  <span>Companies</span>
                </Link>
                
                <Link to="/about" className="mobile-nav-btn">
                  <Users size={20} />
                  <span>About</span>
                </Link>
                
                <Link to="/help" className="mobile-nav-btn">
                  <HelpCircle size={20} />
                  <span>Help</span>
                </Link>
              </div>
              
              {user ? (
                <div className="mobile-user-section">
                  <Link to="/dashboard" className="mobile-nav-btn">
                    <Briefcase size={20} />
                    <span>Dashboard</span>
                  </Link>
                  
                  <Link to="/my-applications" className="mobile-nav-btn">
                    <FileText size={20} />
                    <span>Applications</span>
                  </Link>
                  
                  <button className="mobile-nav-btn notification-btn">
                    <Bell size={20} />
                    <span>Alerts ({notifications.length})</span>
                  </button>
                </div>
              ) : (
                <div className="mobile-auth">
                  <Link to="/login" className="btn btn-outline btn-sm">
                    <User size={16} />
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary btn-sm">
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Right Sidebar */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <h3>Quick Access</h3>
              <button className="sidebar-close" onClick={toggleSidebar}>
                <X size={20} />
              </button>
            </div>
            
            <div className="sidebar-content">
              <div className="sidebar-section">
                <h4>Jobs</h4>
                <Link to="/jobs" className="sidebar-link">
                  <Briefcase size={16} />
                  Browse All Jobs
                </Link>
                <Link to="/jobs?type=remote" className="sidebar-link">
                  <Briefcase size={16} />
                  Remote Jobs
                </Link>
                <Link to="/jobs?type=fulltime" className="sidebar-link">
                  <Briefcase size={16} />
                  Full-time Jobs
                </Link>
                <Link to="/jobs?type=parttime" className="sidebar-link">
                  <Briefcase size={16} />
                  Part-time Jobs
                </Link>
              </div>
              
              <div className="sidebar-section">
                <h4>Companies</h4>
                <Link to="/companies" className="sidebar-link">
                  <Building size={16} />
                  Browse Companies
                </Link>
                <Link to="/companies?industry=technology" className="sidebar-link">
                  <Building size={16} />
                  Tech Companies
                </Link>
                <Link to="/companies?industry=finance" className="sidebar-link">
                  <Building size={16} />
                  Finance Companies
                </Link>
                <Link to="/companies?industry=healthcare" className="sidebar-link">
                  <Building size={16} />
                  Healthcare Companies
                </Link>
              </div>
              
              <div className="sidebar-section">
                <h4>Resources</h4>
                <Link to="/about" className="sidebar-link">
                  <Users size={16} />
                  About Us
                </Link>
                <Link to="/help" className="sidebar-link">
                  <HelpCircle size={16} />
                  Help Center
                </Link>
                <Link to="/contact" className="sidebar-link">
                  <User size={16} />
                  Contact Us
                </Link>
              </div>
              
              {user && (
                <div className="sidebar-section">
                  <h4>My Account</h4>
                  <Link to="/dashboard" className="sidebar-link">
                    <Briefcase size={16} />
                    Dashboard
                  </Link>
                  <Link to="/my-applications" className="sidebar-link">
                    <FileText size={16} />
                    My Applications
                  </Link>
                  <Link to="/saved-jobs" className="sidebar-link">
                    <Bookmark size={16} />
                    Saved Jobs
                  </Link>
                  <Link to="/profile" className="sidebar-link">
                    <User size={16} />
                    Profile Settings
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 