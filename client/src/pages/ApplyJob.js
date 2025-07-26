import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Send, Building, MapPin, DollarSign } from 'lucide-react';
import axios from 'axios';
import './ApplyJob.css';

const ApplyJob = ({ user }) => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    applicantName: user?.name || '',
    email: user?.email || '',
    phone: '',
    coverLetter: ''
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`/api/jobs/${jobId}`);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const applicationData = {
        jobId,
        userId: user.id,
        ...formData
      };

      await axios.post('/api/applications', applicationData);
      navigate('/my-applications');
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
          <p>The job you're trying to apply for doesn't exist.</p>
          <Link to="/jobs" className="btn btn-primary">
            <ArrowLeft size={16} />
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-job-page">
      <div className="container">
        <div className="apply-header">
          <Link to={`/jobs/${jobId}`} className="btn btn-outline">
            <ArrowLeft size={16} />
            Back to Job
          </Link>
          <h1>Apply for {job.title}</h1>
        </div>

        <div className="apply-content">
          <div className="job-summary">
            <h2>Job Summary</h2>
            <div className="job-info">
              <div className="job-info-item">
                <Building size={20} />
                <div>
                  <strong>Company:</strong> {job.company}
                </div>
              </div>
              <div className="job-info-item">
                <MapPin size={20} />
                <div>
                  <strong>Location:</strong> {job.location}
                </div>
              </div>
              <div className="job-info-item">
                <DollarSign size={20} />
                <div>
                  <strong>Salary:</strong> {job.salary}
                </div>
              </div>
            </div>
          </div>

          <div className="application-form-container">
            <h2>Application Form</h2>
            
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Cover Letter *</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                  rows="6"
                  required
                />
                <p className="form-help">
                  Please include your relevant experience, skills, and why you're interested in this role.
                </p>
              </div>

              <div className="form-actions">
                <Link to={`/jobs/${jobId}`} className="btn btn-secondary">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={submitting}
                >
                  <Send size={16} />
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob; 