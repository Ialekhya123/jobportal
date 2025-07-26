const express = require('express');
const router = express.Router();
const { 
  getAllApplications, 
  getApplicationById, 
  getApplicationsByUserId, 
  getApplicationsByJobId,
  addApplication, 
  updateApplication, 
  deleteApplication,
  hasUserApplied
} = require('../data/applications');
const { getJobById } = require('../data/jobs');

// Get all applications (admin only)
router.get('/', (req, res) => {
  try {
    const applications = getAllApplications();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// Get applications by user ID
router.get('/user/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const applications = getApplicationsByUserId(userId);
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user applications' });
  }
});

// Get applications by job ID (admin only)
router.get('/job/:jobId', (req, res) => {
  try {
    const { jobId } = req.params;
    const applications = getApplicationsByJobId(jobId);
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job applications' });
  }
});

// Get application by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const application = getApplicationById(id);
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch application' });
  }
});

// Apply for a job
router.post('/', (req, res) => {
  try {
    const applicationData = req.body;
    
    // Validate required fields
    const requiredFields = ['jobId', 'userId', 'applicantName', 'email', 'phone', 'coverLetter'];
    for (const field of requiredFields) {
      if (!applicationData[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }
    
    // Check if job exists
    const job = getJobById(applicationData.jobId);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    
    // Check if user has already applied for this job
    if (hasUserApplied(applicationData.userId, applicationData.jobId)) {
      return res.status(400).json({ error: 'You have already applied for this job' });
    }
    
    const newApplication = addApplication(applicationData);
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Update application status (admin only)
router.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const applicationData = req.body;
    
    const updatedApplication = updateApplication(id, applicationData);
    
    if (!updatedApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    res.json(updatedApplication);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update application' });
  }
});

// Delete application (user can delete their own application)
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query; // Optional: to ensure user can only delete their own application
    
    const application = getApplicationById(id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    // Optional: Check if user owns this application
    if (userId && application.userId !== userId) {
      return res.status(403).json({ error: 'You can only delete your own applications' });
    }
    
    const deletedApplication = deleteApplication(id);
    res.json({ message: 'Application deleted successfully', application: deletedApplication });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

// Check if user has applied for a specific job
router.get('/check/:jobId/:userId', (req, res) => {
  try {
    const { jobId, userId } = req.params;
    const hasApplied = hasUserApplied(userId, jobId);
    res.json({ hasApplied });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check application status' });
  }
});

module.exports = router; 