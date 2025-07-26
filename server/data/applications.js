const { v4: uuidv4 } = require('uuid');

// Sample application data
let applications = [
  {
    id: '1',
    jobId: '1',
    userId: 'user1',
    applicantName: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1-555-0123',
    resume: 'john_doe_resume.pdf',
    coverLetter: 'I am excited to apply for the Senior Software Engineer position...',
    status: 'pending',
    appliedDate: '2024-01-20'
  },
  {
    id: '2',
    jobId: '2',
    userId: 'user2',
    applicantName: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1-555-0456',
    resume: 'jane_smith_resume.pdf',
    coverLetter: 'I am interested in the Frontend Developer role...',
    status: 'reviewed',
    appliedDate: '2024-01-18'
  },
  {
    id: '3',
    jobId: '3',
    userId: 'user3',
    applicantName: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    phone: '+1-555-0789',
    resume: 'mike_johnson_resume.pdf',
    coverLetter: 'I would like to apply for the Data Scientist position...',
    status: 'pending',
    appliedDate: '2024-01-22'
  }
];

// Get all applications
const getAllApplications = () => {
  return applications;
};

// Get application by ID
const getApplicationById = (id) => {
  return applications.find(app => app.id === id);
};

// Get applications by user ID
const getApplicationsByUserId = (userId) => {
  return applications.filter(app => app.userId === userId);
};

// Get applications by job ID
const getApplicationsByJobId = (jobId) => {
  return applications.filter(app => app.jobId === jobId);
};

// Add new application
const addApplication = (applicationData) => {
  const newApplication = {
    id: uuidv4(),
    ...applicationData,
    status: 'pending',
    appliedDate: new Date().toISOString().split('T')[0]
  };
  applications.push(newApplication);
  return newApplication;
};

// Update application
const updateApplication = (id, applicationData) => {
  const index = applications.findIndex(app => app.id === id);
  if (index !== -1) {
    applications[index] = { ...applications[index], ...applicationData };
    return applications[index];
  }
  return null;
};

// Delete application
const deleteApplication = (id) => {
  const index = applications.findIndex(app => app.id === id);
  if (index !== -1) {
    const deletedApplication = applications[index];
    applications.splice(index, 1);
    return deletedApplication;
  }
  return null;
};

// Check if user has already applied for a job
const hasUserApplied = (userId, jobId) => {
  return applications.some(app => app.userId === userId && app.jobId === jobId);
};

module.exports = {
  getAllApplications,
  getApplicationById,
  getApplicationsByUserId,
  getApplicationsByJobId,
  addApplication,
  updateApplication,
  deleteApplication,
  hasUserApplied
}; 