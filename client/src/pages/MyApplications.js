import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Eye, Calendar, Building } from 'lucide-react';
import axios from 'axios';
import './MyApplications.css';

const MyApplications = ({ user }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`/api/applications/user/${user.id}`);
        setApplications(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user.id]);

  const handleDelete = async (applicationId) => {
    if (!window.confirm('Are you sure you want to delete this application?')) {
      return;
    }

    setDeleting(applicationId);
    try {
      await axios.delete(`/api/applications/${applicationId}?userId=${user.id}`);
      setApplications(applications.filter(app => app.id !== applicationId));
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete application');
    } finally {
      setDeleting(null);
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      pending: 'badge-warning',
      reviewed: 'badge-info',
      accepted: 'badge-success',
      rejected: 'badge-error'
    };
    
    return (
      <span className={`badge ${statusClasses[status] || 'badge-info'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="my-applications-page">
      <div className="container">
        <div className="applications-header">
          <h1>My Applications</h1>
          <p>Track and manage your job applications</p>
        </div>

        {applications.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">
              <Building size={48} />
            </div>
            <h3>No applications yet</h3>
            <p>Start applying to jobs to see your applications here</p>
            <Link to="/jobs" className="btn btn-primary">
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="applications-container">
            <div className="applications-stats">
              <div className="stat-item">
                <span className="stat-number">{applications.length}</span>
                <span className="stat-label">Total Applications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {applications.filter(app => app.status === 'pending').length}
                </span>
                <span className="stat-label">Pending</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {applications.filter(app => app.status === 'reviewed').length}
                </span>
                <span className="stat-label">Reviewed</span>
              </div>
            </div>

            <div className="applications-list">
              {applications.map((application) => (
                <div key={application.id} className="application-card">
                  <div className="application-header">
                    <div className="application-title">
                      <h3>{application.applicantName}</h3>
                      <p className="application-email">{application.email}</p>
                    </div>
                    <div className="application-status">
                      {getStatusBadge(application.status)}
                    </div>
                  </div>

                  <div className="application-details">
                    <div className="detail-item">
                      <Calendar size={16} />
                      <span>Applied on {application.appliedDate}</span>
                    </div>
                    <div className="detail-item">
                      <Building size={16} />
                      <span>Job ID: {application.jobId}</span>
                    </div>
                  </div>

                  <div className="application-cover-letter">
                    <h4>Cover Letter:</h4>
                    <p>{application.coverLetter.substring(0, 200)}...</p>
                  </div>

                  <div className="application-actions">
                    <Link 
                      to={`/jobs/${application.jobId}`} 
                      className="btn btn-outline btn-sm"
                    >
                      <Eye size={16} />
                      View Job
                    </Link>
                    <button
                      onClick={() => handleDelete(application.id)}
                      className="btn btn-danger btn-sm"
                      disabled={deleting === application.id}
                    >
                      <Trash2 size={16} />
                      {deleting === application.id ? 'Deleting...' : 'Delete'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications; 