import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, Mail, Phone, Clock, Search, BookOpen, User, Building } from 'lucide-react';
import './Help.css';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I create an account?',
      answer: 'Click the "Register" button in the top navigation bar. Fill in your details including name, email, and password. Verify your email address to complete the registration process.'
    },
    {
      id: 2,
      question: 'How do I apply for a job?',
      answer: 'Browse jobs on the Jobs page, click on a job that interests you, and click the "Apply Now" button. Fill out the application form and submit your resume and cover letter.'
    },
    {
      id: 3,
      question: 'How can I track my job applications?',
      answer: 'Once logged in, go to "My Applications" in the navigation menu. You can view all your submitted applications and their current status.'
    },
    {
      id: 4,
      question: 'How do I update my profile?',
      answer: 'Log in to your account and click on your profile name in the top navigation. Select "Profile" from the dropdown menu to edit your information.'
    },
    {
      id: 5,
      question: 'Can I save jobs for later?',
      answer: 'Yes! When viewing a job, click the bookmark icon to save it. You can view all your saved jobs in the "Saved Jobs" section of your profile.'
    },
    {
      id: 6,
      question: 'How do I reset my password?',
      answer: 'On the login page, click "Forgot Password?" and enter your email address. You will receive a link to reset your password via email.'
    },
    {
      id: 7,
      question: 'How do I contact a company?',
      answer: 'Most job postings include contact information for the hiring manager or HR department. You can also reach out through the application process.'
    },
    {
      id: 8,
      question: 'Is my personal information secure?',
      answer: 'Yes, we take data security seriously. All personal information is encrypted and stored securely. We never share your data with third parties without your consent.'
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'Start Chat',
      available: true
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'Send Email',
      available: true
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us Monday-Friday, 9 AM - 6 PM EST',
      action: 'Call Now',
      available: true
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="help-page">
      <div className="container">
        {/* Header */}
        <div className="help-header">
          <h1>Help Center</h1>
          <p>Find answers to common questions and get the support you need</p>
        </div>

        {/* Search */}
        <div className="help-search">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h2>Quick Links</h2>
          <div className="links-grid">
            <div className="link-card">
              <User size={24} />
              <h3>For Job Seekers</h3>
              <p>Learn how to create profiles, apply for jobs, and track applications</p>
            </div>
            <div className="link-card">
              <Building size={24} />
              <h3>For Employers</h3>
              <p>Post jobs, manage applications, and find the perfect candidates</p>
            </div>
            <div className="link-card">
              <BookOpen size={24} />
              <h3>Guides & Tutorials</h3>
              <p>Step-by-step guides to help you get the most out of our platform</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {filteredFaqs.map(faq => (
              <div key={faq.id} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span>{faq.question}</span>
                  {openFaq === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === faq.id && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Options */}
        <div className="support-section">
          <h2>Need More Help?</h2>
          <p>Our support team is here to help you succeed</p>
          <div className="support-grid">
            {supportOptions.map((option, index) => (
              <div key={index} className="support-card">
                <div className="support-icon">
                  <option.icon size={32} />
                </div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <button className={`support-btn ${option.available ? 'available' : 'unavailable'}`}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <Mail size={16} />
                <span>support@jobportal.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Monday - Friday, 9 AM - 6 PM EST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="feedback-section">
          <h2>Was this helpful?</h2>
          <p>Help us improve our help center by providing feedback</p>
          <div className="feedback-buttons">
            <button className="feedback-btn positive">👍 Yes, it helped</button>
            <button className="feedback-btn negative">👎 No, I need more help</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 