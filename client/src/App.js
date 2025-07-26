import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ApplyJob from './pages/ApplyJob';
import MyApplications from './pages/MyApplications';
import Companies from './pages/Companies';
import About from './pages/About';
import Help from './pages/Help';
import './App.css';

// 404 Page Component
const NotFound = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#667eea' }}>404</h1>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
      The page you're looking for doesn't exist.
    </p>
    <Link 
      to="/" 
      style={{
        padding: '12px 24px',
        backgroundColor: '#667eea',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#5a6fd8'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
    >
      Go Home
    </Link>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#e74c3c' }}>Something went wrong</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
            Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 24px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#5a6fd8'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#667eea'}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check if user is logged in from localStorage
      const token = localStorage.getItem('token');
      const userData = localStorage.getItem('user');
      
      if (token && userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="App">
        <Navbar user={user} onLogout={logout} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<JobDetail user={user} />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login onLogin={login} />} />
            <Route path="/register" element={user ? <Navigate to="/dashboard" /> : <Register onLogin={login} />} />
            <Route 
              path="/dashboard" 
              element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/apply/:jobId" 
              element={user ? <ApplyJob user={user} /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/my-applications" 
              element={user ? <MyApplications user={user} /> : <Navigate to="/login" />} 
            />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App; 