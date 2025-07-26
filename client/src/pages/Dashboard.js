import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { User, Briefcase, Calendar, Mail } from 'lucide-react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserApplications = useCallback(async () => {
    try {
      const response = await axios.get(`/api/applications/user/${user.id}`);
      setApplications(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching applications:', error);
      setLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    fetchUserApplications();
  }, [fetchUserApplications]);

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <h1>Welcome back, {user.name}!</h1>
          <p>Manage your job applications and profile</p>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-sidebar">
            <div className="user-card">
              <div className="user-avatar">
                <User size={40} />
              </div>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <span className="user-role">{user.role}</span>
            </div>

            <div className="dashboard-nav">
              <Link to="/jobs" className="nav-item">
                <Briefcase size={20} />
                <span>Browse Jobs</span>
              </Link>
              <Link to="/my-applications" className="nav-item">
                <Calendar size={20} />
                <span>My Applications</span>
              </Link>
              <Link to="/profile" className="nav-item">
                <User size={20} />
                <span>Profile</span>
              </Link>
            </div>
          </div>

          <div className="dashboard-main">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <Briefcase size={24} />
                </div>
                <div className="stat-content">
                  <h3>{applications.length}</h3>
                  <p>Applications</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Calendar size={24} />
                </div>
                <div className="stat-content">
                  <h3>{applications.filter(app => app.status === 'pending').length}</h3>
                  <p>Pending</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <Mail size={24} />
                </div>
                <div className="stat-content">
                  <h3>{applications.filter(app => app.status === 'reviewed').length}</h3>
                  <p>Reviewed</p>
                </div>
              </div>
            </div>

            <div className="recent-applications">
              <h2>Recent Applications</h2>
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                </div>
              ) : applications.length === 0 ? (
                <div className="empty-state">
                  <Briefcase size={48} />
                  <h3>No applications yet</h3>
                  <p>Start applying to jobs to see your applications here</p>
                  <Link to="/jobs" className="btn btn-primary">
                    Browse Jobs
                  </Link>
                </div>
              ) : (
                <div className="applications-list">
                  {applications.slice(0, 5).map((application) => (
                    <div key={application.id} className="application-item">
                      <div className="application-info">
                        <h4>{application.applicantName}</h4>
                        <p>Applied on {application.appliedDate}</p>
                      </div>
                      <div className="application-status">
                        <span className={`badge badge-${application.status === 'pending' ? 'warning' : 'info'}`}>
                          {application.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  {applications.length > 5 && (
                    <Link to="/my-applications" className="btn btn-outline">
                      View All Applications
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 