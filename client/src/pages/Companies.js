import React, { useState } from 'react';
import { Building, MapPin, Users, Globe, Search, Filter } from 'lucide-react';
import './Companies.css';

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  // Sample company data with Indian companies
  const companies = [
    {
      id: 1,
      name: 'TCS (Tata Consultancy Services)',
      industry: 'Technology',
      location: 'Mumbai, Maharashtra',
      employees: '500,000+',
      website: 'https://tcs.com',
      description: 'India\'s largest IT services company, providing consulting, technology, and digital solutions globally.',
      logo: '🏢',
      founded: '1968',
      openPositions: 150
    },
    {
      id: 2,
      name: 'Infosys',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '300,000+',
      website: 'https://infosys.com',
      description: 'Global leader in next-generation digital services and consulting, helping enterprises navigate their digital transformation.',
      logo: '💻',
      founded: '1981',
      openPositions: 120
    },
    {
      id: 3,
      name: 'Wipro',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '250,000+',
      website: 'https://wipro.com',
      description: 'Leading global information technology, consulting, and business process services company.',
      logo: '🌐',
      founded: '1945',
      openPositions: 100
    },
    {
      id: 4,
      name: 'HCL Technologies',
      industry: 'Technology',
      location: 'Noida, Uttar Pradesh',
      employees: '200,000+',
      website: 'https://hcl.com',
      description: 'Global technology company that helps enterprises reimagine their businesses for the digital age.',
      logo: '🔧',
      founded: '1976',
      openPositions: 80
    },
    {
      id: 5,
      name: 'Tech Mahindra',
      industry: 'Technology',
      location: 'Pune, Maharashtra',
      employees: '150,000+',
      website: 'https://techmahindra.com',
      description: 'Leading provider of digital transformation, consulting, and business re-engineering services.',
      logo: '🚀',
      founded: '1986',
      openPositions: 90
    },
    {
      id: 6,
      name: 'Reliance Jio',
      industry: 'Telecommunications',
      location: 'Mumbai, Maharashtra',
      employees: '50,000+',
      website: 'https://jio.com',
      description: 'India\'s largest telecom operator, providing 4G and 5G services with digital ecosystem.',
      logo: '📱',
      founded: '2007',
      openPositions: 75
    },
    {
      id: 7,
      name: 'Bharti Airtel',
      industry: 'Telecommunications',
      location: 'Delhi, NCR',
      employees: '25,000+',
      website: 'https://airtel.com',
      description: 'Leading global telecommunications company with operations in 18 countries across Asia and Africa.',
      logo: '📞',
      founded: '1995',
      openPositions: 60
    },
    {
      id: 8,
      name: 'Amazon India',
      industry: 'E-commerce',
      location: 'Bangalore, Karnataka',
      employees: '100,000+',
      website: 'https://amazon.in',
      description: 'India\'s largest online marketplace, offering millions of products across various categories.',
      logo: '📦',
      founded: '2013',
      openPositions: 200
    },
    {
      id: 9,
      name: 'Flipkart',
      industry: 'E-commerce',
      location: 'Bangalore, Karnataka',
      employees: '30,000+',
      website: 'https://flipkart.com',
      description: 'India\'s leading e-commerce marketplace, offering a wide range of products and services.',
      logo: '🛒',
      founded: '2007',
      openPositions: 85
    },
    {
      id: 10,
      name: 'Paytm',
      industry: 'Fintech',
      location: 'Noida, Uttar Pradesh',
      employees: '20,000+',
      website: 'https://paytm.com',
      description: 'India\'s leading digital payments platform, offering UPI, wallet, and financial services.',
      logo: '💳',
      founded: '2010',
      openPositions: 70
    },
    {
      id: 11,
      name: 'Razorpay',
      industry: 'Fintech',
      location: 'Bangalore, Karnataka',
      employees: '2,000+',
      website: 'https://razorpay.com',
      description: 'Leading fintech company providing payment solutions for businesses of all sizes.',
      logo: '💸',
      founded: '2014',
      openPositions: 45
    },
    {
      id: 12,
      name: 'Swiggy',
      industry: 'Food Delivery',
      location: 'Bangalore, Karnataka',
      employees: '15,000+',
      website: 'https://swiggy.com',
      description: 'India\'s leading food delivery platform, connecting restaurants with customers.',
      logo: '🍕',
      founded: '2014',
      openPositions: 55
    },
    {
      id: 13,
      name: 'Zomato',
      industry: 'Food Delivery',
      location: 'Gurgaon, Haryana',
      employees: '10,000+',
      website: 'https://zomato.com',
      description: 'Food delivery and restaurant discovery platform serving millions of customers.',
      logo: '🍽️',
      founded: '2008',
      openPositions: 40
    },
    {
      id: 14,
      name: 'Ola Cabs',
      industry: 'Transportation',
      location: 'Bangalore, Karnataka',
      employees: '8,000+',
      website: 'https://olacabs.com',
      description: 'India\'s largest ride-sharing platform, providing mobility solutions across cities.',
      logo: '🚗',
      founded: '2010',
      openPositions: 35
    },
    {
      id: 15,
      name: 'Uber India',
      industry: 'Transportation',
      location: 'Mumbai, Maharashtra',
      employees: '5,000+',
      website: 'https://uber.com',
      description: 'Global ride-sharing platform providing transportation services across India.',
      logo: '🚕',
      founded: '2013',
      openPositions: 30
    },
    {
      id: 16,
      name: 'Google India',
      industry: 'Technology',
      location: 'Mumbai, Maharashtra',
      employees: '15,000+',
      website: 'https://google.co.in',
      description: 'Google\'s India operations, focusing on local products and services for Indian users.',
      logo: '🔍',
      founded: '2004',
      openPositions: 100
    },
    {
      id: 17,
      name: 'Microsoft India',
      industry: 'Technology',
      location: 'Hyderabad, Telangana',
      employees: '20,000+',
      website: 'https://microsoft.com',
      description: 'Microsoft\'s largest R&D center outside the US, developing products for global markets.',
      logo: '🪟',
      founded: '1990',
      openPositions: 120
    },
    {
      id: 18,
      name: 'IBM India',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '100,000+',
      website: 'https://ibm.com',
      description: 'IBM\'s largest workforce outside the US, providing technology and consulting services.',
      logo: '💼',
      founded: '1992',
      openPositions: 80
    },
    {
      id: 19,
      name: 'Oracle India',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '40,000+',
      website: 'https://oracle.com',
      description: 'Oracle\'s development center in India, working on database and cloud technologies.',
      logo: '🗄️',
      founded: '1994',
      openPositions: 65
    },
    {
      id: 20,
      name: 'SAP Labs India',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '15,000+',
      website: 'https://sap.com',
      description: 'SAP\'s largest R&D center outside Germany, developing enterprise software solutions.',
      logo: '📊',
      founded: '1998',
      openPositions: 50
    },
    {
      id: 21,
      name: 'Accenture India',
      industry: 'Consulting',
      location: 'Mumbai, Maharashtra',
      employees: '200,000+',
      website: 'https://accenture.com',
      description: 'Global professional services company providing strategy, consulting, and technology services.',
      logo: '🎯',
      founded: '1989',
      openPositions: 150
    },
    {
      id: 22,
      name: 'Cognizant',
      industry: 'Technology',
      location: 'Chennai, Tamil Nadu',
      employees: '300,000+',
      website: 'https://cognizant.com',
      description: 'Leading provider of information technology, consulting, and business process services.',
      logo: '🧠',
      founded: '1994',
      openPositions: 110
    },
    {
      id: 23,
      name: 'Mindtree',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '30,000+',
      website: 'https://mindtree.com',
      description: 'Digital transformation and technology services company helping enterprises reimagine their business.',
      logo: '🌳',
      founded: '1999',
      openPositions: 40
    },
    {
      id: 24,
      name: 'L&T Infotech',
      industry: 'Technology',
      location: 'Mumbai, Maharashtra',
      employees: '40,000+',
      website: 'https://lntinfotech.com',
      description: 'Global technology consulting and digital solutions company.',
      logo: '🏗️',
      founded: '1997',
      openPositions: 60
    },
    {
      id: 25,
      name: 'Capgemini India',
      industry: 'Technology',
      location: 'Mumbai, Maharashtra',
      employees: '150,000+',
      website: 'https://capgemini.com',
      description: 'Global leader in consulting, technology services, and digital transformation.',
      logo: '🎩',
      founded: '1967',
      openPositions: 90
    },
    {
      id: 26,
      name: 'ThoughtWorks',
      industry: 'Technology',
      location: 'Bangalore, Karnataka',
      employees: '10,000+',
      website: 'https://thoughtworks.com',
      description: 'Global technology consultancy that integrates strategy, design, and engineering.',
      logo: '💭',
      founded: '1993',
      openPositions: 35
    },
    {
      id: 27,
      name: 'PhonePe',
      industry: 'Fintech',
      location: 'Bangalore, Karnataka',
      employees: '3,000+',
      website: 'https://phonepe.com',
      description: 'India\'s leading digital payments platform, offering UPI, wallet, and financial services.',
      logo: '📱',
      founded: '2015',
      openPositions: 25
    },
    {
      id: 28,
      name: 'CRED',
      industry: 'Fintech',
      location: 'Bangalore, Karnataka',
      employees: '1,000+',
      website: 'https://cred.club',
      description: 'Credit card bill payment platform that rewards users for paying their bills on time.',
      logo: '💳',
      founded: '2018',
      openPositions: 20
    },
    {
      id: 29,
      name: 'Groww',
      industry: 'Fintech',
      location: 'Bangalore, Karnataka',
      employees: '1,500+',
      website: 'https://groww.in',
      description: 'Investment platform that makes investing in mutual funds and stocks simple.',
      logo: '📈',
      founded: '2017',
      openPositions: 30
    },
    {
      id: 30,
      name: 'Policybazaar',
      industry: 'Insurance',
      location: 'Gurgaon, Haryana',
      employees: '5,000+',
      website: 'https://policybazaar.com',
      description: 'India\'s largest insurance aggregator, helping customers compare and buy insurance policies.',
      logo: '🛡️',
      founded: '2008',
      openPositions: 40
    },
    {
      id: 31,
      name: 'Nykaa',
      industry: 'E-commerce',
      location: 'Mumbai, Maharashtra',
      employees: '3,000+',
      website: 'https://nykaa.com',
      description: 'India\'s leading beauty and wellness e-commerce platform.',
      logo: '💄',
      founded: '2012',
      openPositions: 35
    },
    {
      id: 32,
      name: 'Myntra',
      industry: 'E-commerce',
      location: 'Bangalore, Karnataka',
      employees: '5,000+',
      website: 'https://myntra.com',
      description: 'India\'s leading fashion e-commerce platform, offering clothing, footwear, and accessories.',
      logo: '👗',
      founded: '2007',
      openPositions: 45
    },
    {
      id: 33,
      name: 'BigBasket',
      industry: 'E-commerce',
      location: 'Bangalore, Karnataka',
      employees: '15,000+',
      website: 'https://bigbasket.com',
      description: 'India\'s largest online grocery store, delivering fresh fruits, vegetables, and household items.',
      logo: '🛒',
      founded: '2011',
      openPositions: 50
    },
    {
      id: 34,
      name: 'Grofers',
      industry: 'E-commerce',
      location: 'Gurgaon, Haryana',
      employees: '10,000+',
      website: 'https://grofers.com',
      description: 'Online grocery delivery platform, providing fresh groceries and household essentials.',
      logo: '🥬',
      founded: '2013',
      openPositions: 40
    },
    {
      id: 35,
      name: 'Dunzo',
      industry: 'Logistics',
      location: 'Bangalore, Karnataka',
      employees: '5,000+',
      website: 'https://dunzo.in',
      description: 'Hyperlocal delivery platform, delivering anything from groceries to medicines.',
      logo: '🚚',
      founded: '2015',
      openPositions: 30
    },
    {
      id: 36,
      name: 'Delhivery',
      industry: 'Logistics',
      location: 'Gurgaon, Haryana',
      employees: '20,000+',
      website: 'https://delhivery.com',
      description: 'India\'s largest logistics company, providing supply chain solutions.',
      logo: '📦',
      founded: '2011',
      openPositions: 60
    },
    {
      id: 37,
      name: 'Rivigo',
      industry: 'Logistics',
      location: 'Gurgaon, Haryana',
      employees: '5,000+',
      website: 'https://rivigo.com',
      description: 'Technology-enabled logistics company, revolutionizing trucking in India.',
      logo: '🚛',
      founded: '2014',
      openPositions: 25
    },
    {
      id: 38,
      name: 'Nazara Technologies',
      industry: 'Gaming',
      location: 'Mumbai, Maharashtra',
      employees: '1,000+',
      website: 'https://nazara.com',
      description: 'Leading mobile gaming company in India, developing and publishing games.',
      logo: '🎮',
      founded: '2000',
      openPositions: 20
    },
    {
      id: 39,
      name: 'Dream11',
      industry: 'Gaming',
      location: 'Mumbai, Maharashtra',
      employees: '500+',
      website: 'https://dream11.com',
      description: 'India\'s biggest fantasy sports platform, with over 100 million users.',
      logo: '🏏',
      founded: '2008',
      openPositions: 15
    },
    {
      id: 40,
      name: 'MPL (Mobile Premier League)',
      industry: 'Gaming',
      location: 'Bangalore, Karnataka',
      employees: '800+',
      website: 'https://mpl.live',
      description: 'Mobile gaming platform offering skill-based games and tournaments.',
      logo: '📱',
      founded: '2018',
      openPositions: 25
    },
    {
      id: 41,
      name: 'BYJU\'S',
      industry: 'Education',
      location: 'Bangalore, Karnataka',
      employees: '50,000+',
      website: 'https://byjus.com',
      description: 'India\'s largest edtech company, providing personalized learning programs.',
      logo: '📚',
      founded: '2011',
      openPositions: 200
    },
    {
      id: 42,
      name: 'Unacademy',
      industry: 'Education',
      location: 'Bangalore, Karnataka',
      employees: '5,000+',
      website: 'https://unacademy.com',
      description: 'India\'s largest learning platform, offering live classes and courses.',
      logo: '🎓',
      founded: '2015',
      openPositions: 80
    },
    {
      id: 43,
      name: 'Vedantu',
      industry: 'Education',
      location: 'Bangalore, Karnataka',
      employees: '3,000+',
      website: 'https://vedantu.com',
      description: 'Live online tutoring platform, connecting students with expert teachers.',
      logo: '👨‍🏫',
      founded: '2014',
      openPositions: 60
    },
    {
      id: 44,
      name: 'Cure.fit',
      industry: 'Healthcare',
      location: 'Bangalore, Karnataka',
      employees: '5,000+',
      website: 'https://cure.fit',
      description: 'Health and fitness platform offering online and offline fitness classes.',
      logo: '💪',
      founded: '2016',
      openPositions: 40
    },
    {
      id: 45,
      name: 'Practo',
      industry: 'Healthcare',
      location: 'Bangalore, Karnataka',
      employees: '3,000+',
      website: 'https://practo.com',
      description: 'Healthcare platform connecting patients with doctors and healthcare services.',
      logo: '🏥',
      founded: '2008',
      openPositions: 35
    },
    {
      id: 46,
      name: '1mg',
      industry: 'Healthcare',
      location: 'Gurgaon, Haryana',
      employees: '2,000+',
      website: 'https://1mg.com',
      description: 'Online pharmacy and healthcare platform, providing medicines and health services.',
      logo: '💊',
      founded: '2015',
      openPositions: 30
    },
    {
      id: 47,
      name: 'Netmeds',
      industry: 'Healthcare',
      location: 'Chennai, Tamil Nadu',
      employees: '1,500+',
      website: 'https://netmeds.com',
      description: 'Online pharmacy platform, delivering medicines and healthcare products.',
      logo: '🏥',
      founded: '2010',
      openPositions: 25
    },
    {
      id: 48,
      name: 'OYO',
      industry: 'Hospitality',
      location: 'Gurgaon, Haryana',
      employees: '20,000+',
      website: 'https://oyorooms.com',
      description: 'India\'s largest hospitality chain, offering budget hotels and accommodations.',
      logo: '🏨',
      founded: '2013',
      openPositions: 100
    },
    {
      id: 49,
      name: 'Treebo',
      industry: 'Hospitality',
      location: 'Bangalore, Karnataka',
      employees: '2,000+',
      website: 'https://treebo.com',
      description: 'Budget hotel chain, providing quality accommodations at affordable prices.',
      logo: '🌳',
      founded: '2015',
      openPositions: 30
    },
    {
      id: 50,
      name: 'FabHotels',
      industry: 'Hospitality',
      location: 'Gurgaon, Haryana',
      employees: '1,500+',
      website: 'https://fabhotels.com',
      description: 'Budget hotel aggregator, offering quality accommodations across India.',
      logo: '🏨',
      founded: '2014',
      openPositions: 25
    }
  ];

  const industries = ['all', 'Technology', 'Telecommunications', 'E-commerce', 'Fintech', 'Food Delivery', 'Transportation', 'Consulting', 'Insurance', 'Logistics', 'Gaming', 'Education', 'Healthcare', 'Hospitality'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="companies-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Companies</h1>
          <p>Discover amazing companies and find your next opportunity</p>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="filter-box">
            <Filter className="filter-icon" />
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="filter-select"
            >
              {industries.map(industry => (
                <option key={industry} value={industry}>
                  {industry === 'all' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>Showing {filteredCompanies.length} companies</p>
        </div>

        {/* Companies Grid */}
        <div className="companies-grid">
          {filteredCompanies.map(company => (
            <div key={company.id} className="company-card">
              <div className="company-header">
                <div className="company-logo">
                  <span className="logo-emoji">{company.logo}</span>
                </div>
                <div className="company-info">
                  <h3 className="company-name">{company.name}</h3>
                  <p className="company-industry">{company.industry}</p>
                </div>
              </div>
              
              <div className="company-details">
                <div className="detail-item">
                  <MapPin size={16} />
                  <span>{company.location}</span>
                </div>
                <div className="detail-item">
                  <Users size={16} />
                  <span>{company.employees} employees</span>
                </div>
                <div className="detail-item">
                  <Globe size={16} />
                  <a href={company.website} target="_blank" rel="noopener noreferrer">
                    {company.website.replace('https://', '')}
                  </a>
                </div>
              </div>
              
              <p className="company-description">{company.description}</p>
              
              <div className="company-footer">
                <span className="founded-year">Founded {company.founded}</span>
                <span className="open-positions">{company.openPositions} open positions</span>
              </div>
              
              <button className="view-jobs-btn">
                View Jobs
              </button>
            </div>
          ))}
        </div>

        {filteredCompanies.length === 0 && (
          <div className="no-results">
            <Building size={48} />
            <h3>No companies found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies; 