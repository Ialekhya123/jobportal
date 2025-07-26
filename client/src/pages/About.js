import React from 'react';
import { Users, Target, Award, Heart, Globe, Shield, Zap, Star } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { icon: Users, number: '10,000+', label: 'Job Seekers' },
    { icon: Globe, number: '500+', label: 'Companies' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Star, number: '4.8/5', label: 'User Rating' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'User-First Approach',
      description: 'We prioritize the needs of job seekers and employers, creating meaningful connections.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and privacy are protected with industry-leading security measures.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best job search experience possible.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former HR executive with 15+ years of experience in talent acquisition.',
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech leader with expertise in building scalable job platforms.',
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist focused on creating exceptional user experiences.',
      avatar: '👩‍🎨'
    },
    {
      name: 'David Kim',
      role: 'Head of Marketing',
      bio: 'Marketing expert with deep knowledge of the job market landscape.',
      avatar: '👨‍💼'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1>About Job Portal</h1>
          <p className="hero-subtitle">
            Connecting talented professionals with amazing opportunities since 2020
          </p>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Job Portal, we believe that everyone deserves to find meaningful work that aligns with their passions and skills. 
              Our platform connects talented professionals with innovative companies, creating opportunities for growth and success.
            </p>
            <p>
              We're committed to making the job search process seamless, transparent, and effective for both job seekers and employers.
            </p>
          </div>
          <div className="mission-image">
            <Target size={120} />
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <stat.icon size={32} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <value.icon size={40} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            We're a passionate team dedicated to revolutionizing the job search experience.
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">
                  <span className="avatar-emoji">{member.avatar}</span>
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="story-section">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Job Portal was founded in 2020 with a simple vision: to make job searching and hiring more human, 
              more efficient, and more successful. What started as a small team of passionate individuals has grown 
              into a platform that serves thousands of job seekers and employers every day.
            </p>
            <p>
              We've helped countless professionals find their dream jobs and assisted companies in building 
              exceptional teams. Our commitment to innovation and user experience has made us a trusted partner 
              in the job market ecosystem.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of professionals who have found their dream jobs through our platform.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Browse Jobs</button>
            <button className="btn btn-outline">Post a Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 