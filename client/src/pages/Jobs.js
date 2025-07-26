import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Clock, DollarSign, Filter, X } from 'lucide-react';
import axios from 'axios';
import './Jobs.css';

const Jobs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    salary: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
    }
  };

  const applyFilters = useCallback(() => {
    let filtered = [...jobs];

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply type filter
    if (filters.type) {
      filtered = filtered.filter(job => job.type === filters.type);
    }

    // Apply salary filter
    if (filters.salary) {
      filtered = filtered.filter(job => {
        const salary = job.salary.toLowerCase();
        if (filters.salary === 'low') {
          return salary.includes('$50,000') || salary.includes('$60,000') || salary.includes('$70,000');
        } else if (filters.salary === 'medium') {
          return salary.includes('$80,000') || salary.includes('$90,000') || salary.includes('$100,000');
        } else if (filters.salary === 'high') {
          return salary.includes('$120,000') || salary.includes('$150,000') || salary.includes('$200,000');
        }
        return true;
      });
    }

    setFilteredJobs(filtered);
  }, [jobs, searchQuery, filters]);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ search: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      salary: ''
    });
    setSearchQuery('');
    setSearchParams({});
  };

  const getUniqueLocations = () => {
    return [...new Set(jobs.map(job => job.location))];
  };

  const getUniqueTypes = () => {
    return [...new Set(jobs.map(job => job.type))];
  };

  return (
    <div className="jobs-page">
      <div className="container">
        {/* Header */}
        <div className="jobs-header">
          <h1>All Jobs</h1>
          <p>Find your next career opportunity</p>
        </div>

        {/* Search and Filters */}
        <div className="jobs-controls">
          <form onSubmit={handleSearch} className="search-section">
            <div className="search-input-group">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>

          <button
            className="btn btn-outline"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="filters-panel">
            <div className="filters-header">
              <h3>Filters</h3>
              <button
                className="btn btn-outline btn-sm"
                onClick={clearFilters}
              >
                Clear All
              </button>
            </div>
            
            <div className="filters-grid">
              <div className="filter-group">
                <label className="form-label">Location</label>
                <select
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="form-input"
                >
                  <option value="">All Locations</option>
                  {getUniqueLocations().map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="form-label">Job Type</label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="form-input"
                >
                  <option value="">All Types</option>
                  {getUniqueTypes().map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label className="form-label">Salary Range</label>
                <select
                  value={filters.salary}
                  onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
                  className="form-input"
                >
                  <option value="">All Salaries</option>
                  <option value="low">$50,000 - $70,000</option>
                  <option value="medium">$80,000 - $100,000</option>
                  <option value="high">$120,000+</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="jobs-results">
          <div className="results-header">
            <h2>{filteredJobs.length} Jobs Found</h2>
            {(searchQuery || Object.values(filters).some(f => f)) && (
              <button
                className="btn btn-outline btn-sm"
                onClick={clearFilters}
              >
                <X size={16} />
                Clear Filters
              </button>
            )}
          </div>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div className="no-results">
              <h3>No jobs found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          ) : (
            <div className="jobs-grid">
              {filteredJobs.map((job) => (
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
                  <div className="job-requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/jobs/${job.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs; 