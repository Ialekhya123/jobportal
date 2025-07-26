import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Building, Calendar, ArrowLeft, Send } from 'lucide-react';
import axios from 'axios';
import './JobDetail.css';

const JobDetail = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasApplied, setHasApplied] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    applicantName: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const fetchJobDetails = useCallback(async () => {
    try {
      const response = await axios.get(`/api/jobs/${id}`);
      setJob(response.data);
      
      // Check if user has already applied
      if (user) {
        const appliedResponse = await axios.get(`/api/applications/check/${id}/${user.id}`);
        setHasApplied(appliedResponse.data.hasApplied);
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching job details:', error);
      setLoading(false);
    }
  }, [id, user]);

  useEffect(() => {
    fetchJobDetails();
  }, [fetchJobDetails]);

  const handleApply = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowApplyForm(true);
  };

  const handleFormChange = (e) => {
    setApplicationForm({
      ...applicationForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const applicationData = {
        jobId: id,
        userId: user.id,
        ...applicationForm
      };

      await axios.post('/api/applications', applicationData);
      setHasApplied(true);
      setShowApplyForm(false);
      setApplicationForm({
        applicantName: '',
        email: '',
        phone: '',
        coverLetter: ''
      });
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to submit application');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container">
        <div className="error-page">
          <h2>Job Not Found</h2>
          <p>The job you're looking for doesn't exist.</p>
          <Link to="/jobs" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="job-detail-page">
      <div className="container">
        <div className="job-detail-header">
          <Link to="/jobs" className="btn btn-outline">
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>

        <div className="job-detail-content">
          <div className="job-detail-main">
            <div className="job-header">
              <h1>{job.title}</h1>
              <span className="job-type">{job.type}</span>
            </div>

            <div className="job-company-info">
              <Building size={20} />
              <span>{job.company}</span>
            </div>

            <div className="job-meta">
              <div className="job-meta-item">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
              <div className="job-meta-item">
                <DollarSign size={16} />
                <span>{job.salary}</span>
              </div>
              <div className="job-meta-item">
                <Calendar size={16} />
                <span>Posted {job.postedDate}</span>
              </div>
              <div className="job-meta-item">
                <Clock size={16} />
                <span>Deadline: {job.deadline}</span>
              </div>
            </div>

            <div className="job-description">
              <h3>Job Description</h3>
              <p>{job.description}</p>
            </div>

            <div className="job-requirements">
              <h3>Requirements</h3>
              <ul>
                {job.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="job-detail-sidebar">
            <div className="apply-card">
              <h3>Apply for this position</h3>
              
              {hasApplied ? (
                <div className="applied-status">
                  <div className="alert alert-success">
                    You have already applied for this position
                  </div>
                  <Link to="/my-applications" className="btn btn-outline">
                    View My Applications
                  </Link>
                </div>
              ) : (
                <button
                  onClick={handleApply}
                  className="btn btn-primary apply-btn"
                >
                  <Send size={16} />
                  Apply Now
                </button>
              )}
            </div>

            <div className="job-summary">
              <h4>Job Summary</h4>
              <div className="summary-item">
                <strong>Company:</strong> {job.company}
              </div>
              <div className="summary-item">
                <strong>Location:</strong> {job.location}
              </div>
              <div className="summary-item">
                <strong>Type:</strong> {job.type}
              </div>
              <div className="summary-item">
                <strong>Salary:</strong> {job.salary}
              </div>
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {showApplyForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Apply for {job.title}</h3>
                <button
                  onClick={() => setShowApplyForm(false)}
                  className="modal-close"
                >
                  ×
                </button>
              </div>

              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmitApplication} className="application-form">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="applicantName"
                    value={applicationForm.applicantName}
                    onChange={handleFormChange}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={applicationForm.email}
                    onChange={handleFormChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={applicationForm.phone}
                    onChange={handleFormChange}
                    className="form-input"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={applicationForm.coverLetter}
                    onChange={handleFormChange}
                    className="form-input form-textarea"
                    placeholder="Tell us why you're interested in this position..."
                    required
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    onClick={() => setShowApplyForm(false)}
                    className="btn btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetail; 