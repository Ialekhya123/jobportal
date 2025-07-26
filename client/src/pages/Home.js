import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, DollarSign, ArrowRight, Briefcase, Users, Award } from 'lucide-react';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs');
      setJobs(response.data.slice(0, 6)); // Show only first 6 jobs
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/jobs?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Find Your Dream Job
            </h1>
            <p className="hero-subtitle">
              Discover thousands of job opportunities with all the information you need. 
              Its your future. Come find it.
            </p>
            
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
                <button type="submit" className="btn btn-primary">
                  Search Jobs
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Briefcase className="stat-icon" />
              <div className="stat-content">
                <h3>500+</h3>
                <p>Active Jobs</p>
              </div>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <div className="stat-content">
                <h3>10,000+</h3>
                <p>Job Seekers</p>
              </div>
            </div>
            <div className="stat-item">
              <Award className="stat-icon" />
              <div className="stat-content">
                <h3>200+</h3>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="featured-jobs">
        <div className="container">
          <div className="section-header">
            <h2>Featured Jobs</h2>
            <Link to="/jobs" className="btn btn-outline">
              View All Jobs
              <ArrowRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="jobs-grid">
              {jobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <p className="job-company">{job.company}</p>
                  <div className="job-details">
                    <div className="job-detail">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-detail">
                      <Clock size={16} />
                      <span>Posted {job.postedDate}</span>
                    </div>
                    <div className="job-detail">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <p className="job-description">
                    {job.description.substring(0, 150)}...
                  </p>
                  <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Next Opportunity?</h2>
            <p>Join thousands of job seekers who have found their dream jobs through our platform.</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/jobs" className="btn btn-outline">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 