import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, DollarSign, ArrowRight, Briefcase, Users, Award } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Static featured jobs data
  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp India",
      location: "Bangalore, Karnataka",
      salary: "₹15,00,000 - ₹25,00,000",
      type: "Full-time",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Mumbai, Maharashtra",
      salary: "₹12,00,000 - ₹20,00,000",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Design Studio",
      location: "Hyderabad, Telangana",
      salary: "₹8,00,000 - ₹15,00,000",
      type: "Full-time",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloud Solutions",
      location: "Pune, Maharashtra",
      salary: "₹10,00,000 - ₹18,00,000",
      type: "Full-time",
      posted: "5 days ago"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Labs",
      location: "Delhi, NCR",
      salary: "₹18,00,000 - ₹30,00,000",
      type: "Full-time",
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppTech",
      location: "Chennai, Tamil Nadu",
      salary: "₹9,00,000 - ₹16,00,000",
      type: "Full-time",
      posted: "4 days ago"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/#/jobs?search=${encodeURIComponent(searchQuery)}`;
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
            <Link to="/jobs" className="view-all-link">
              View All Jobs <ArrowRight className="arrow-icon" />
            </Link>
          </div>
          
          <div className="jobs-grid">
            {featuredJobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                
                <div className="job-company">{job.company}</div>
                
                <div className="job-details">
                  <div className="job-detail">
                    <MapPin className="detail-icon" />
                    <span>{job.location}</span>
                  </div>
                  <div className="job-detail">
                    <DollarSign className="detail-icon" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="job-detail">
                    <Clock className="detail-icon" />
                    <span>{job.posted}</span>
                  </div>
                </div>
                
                <Link to={`/jobs/${job.id}`} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Career?</h2>
            <p>Join thousands of professionals who found their dream jobs through our platform.</p>
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