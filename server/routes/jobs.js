const express = require('express');
const router = express.Router();
const { 
  getAllJobs, 
  getJobById, 
  searchJobs, 
  addJob, 
  updateJob, 
  deleteJob 
} = require('../data/jobs');

// Get all jobs
router.get('/', (req, res) => {
  try {
    const jobs = getAllJobs();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

// Search jobs
router.get('/search', (req, res) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const jobs = searchJobs(q);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search jobs' });
  }
});

// Get job by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const job = getJobById(id);
    
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
});

// Add new job (admin only)
router.post('/', (req, res) => {
  try {
    const jobData = req.body;
    
    // Validate required fields
    const requiredFields = ['title', 'company', 'location', 'type', 'salary', 'description'];
    for (const field of requiredFields) {
      if (!jobData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }
    
    const newJob = addJob(jobData);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
});

// Update job (admin only)
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const jobData = req.body;
    
    const updatedJob = updateJob(id, jobData);
    
    if (!updatedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job' });
  }
});

// Delete job (admin only)
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedJob = deleteJob(id);
    
    if (!deletedJob) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    res.json({ message: 'Job deleted successfully', job: deletedJob });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

module.exports = router; 