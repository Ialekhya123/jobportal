# Job Portal - Full Stack Web Application

A modern, responsive job portal built with React.js and Node.js, featuring a beautiful UI with advanced navigation, real-time notifications, and comprehensive job management capabilities.

## Features

### Modern UI/UX
- **Glass Morphism Design**: Beautiful gradient backgrounds with backdrop blur effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects throughout
- **Dark/Light Theme**: Professional color scheme with purple gradients

### Advanced Navigation
- **Smart Dropdowns**: Profile and alerts dropdowns with dynamic positioning
- **Right Sidebar**: Quick access to jobs, companies, and resources
- **Search Functionality**: Real-time job and company search
- **Mobile Menu**: Optimized mobile navigation with hamburger menu

### Notification System
- **Real-time Alerts**: Job matches, application updates, and reminders
- **Interactive Dropdown**: Click to view detailed notifications
- **Badge Counter**: Dynamic notification count display
- **Mark as Read**: Bulk notification management

### Job Management
- **50+ Sample Jobs**: Indian companies with realistic job listings
- **Advanced Filtering**: Filter by job type, location, and salary
- **Job Applications**: Track application status and history
- **Saved Jobs**: Bookmark and manage favorite positions

### Company Directory
- **50+ Companies**: Major Indian companies with detailed profiles
- **Industry Filtering**: Browse by technology, finance, healthcare
- **Company Profiles**: Employee count, location, and open positions
- **Direct Applications**: Apply directly to company listings

### User Management
- **User Authentication**: Secure login and registration system
- **Profile Management**: Complete user profile with settings
- **Application Tracking**: Monitor job application progress
- **Dashboard**: Personalized user dashboard with insights

## Technology Stack

### Frontend
- **React.js 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **Lucide React**: Beautiful icon library
- **CSS3**: Advanced styling with gradients, animations, and responsive design
- **Axios**: HTTP client for API communication

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Fast, unopinionated web framework
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing and security
- **UUID**: Unique identifier generation
- **CORS**: Cross-origin resource sharing

### Development Tools
- **Nodemon**: Auto-restart server during development
- **Concurrently**: Run frontend and backend simultaneously
- **Git**: Version control system

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd job-portal
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

### 3. Start Development Server
```bash
# Start both frontend and backend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

### 4. Build for Production
```bash
# Build the React app
npm run build

# Start production server
npm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (frontend + backend) |
| `npm run server` | Start backend server only |
| `npm run client` | Start frontend development server |
| `npm run build` | Build React app for production |
| `npm run install-all` | Install all dependencies |

## Project Structure

```
job-portal/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   ├── Navbar.js  # Main navigation
│   │   │   └── NavbarNew.css
│   │   ├── pages/         # Page components
│   │   │   ├── Home.js    # Homepage
│   │   │   ├── Jobs.js    # Job listings
│   │   │   ├── Companies.js # Company directory
│   │   │   ├── About.js   # About page
│   │   │   ├── Help.js    # Help center
│   │   │   ├── Login.js   # Authentication
│   │   │   └── Dashboard.js # User dashboard
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                # Node.js backend
│   ├── data/             # Sample data
│   │   ├── jobs.js       # Job listings
│   │   ├── companies.js  # Company data
│   │   └── users.js      # User management
│   ├── routes/           # API routes
│   │   ├── jobs.js       # Job endpoints
│   │   ├── companies.js  # Company endpoints
│   │   └── users.js      # User endpoints
│   └── index.js          # Server entry point
├── package.json          # Root package.json
└── README.md            # This file
```

## Key Features Explained

### Smart Navigation System
- **Dynamic Dropdowns**: Profile and alerts dropdowns automatically position themselves to stay within viewport
- **Responsive Design**: Navigation adapts to screen size with mobile-optimized menu
- **Search Integration**: Global search across jobs, companies, and keywords

### Real-time Notifications
- **Job Matches**: Automatic notifications for matching job opportunities
- **Application Updates**: Status changes for submitted applications
- **Profile Reminders**: Suggestions to complete profile for better matches

### Comprehensive Job Data
- **Indian Context**: 50+ jobs from major Indian companies
- **Realistic Salaries**: Indian Rupee (₹) salary ranges
- **Multiple Locations**: Jobs across major Indian cities
- **Various Industries**: Technology, finance, healthcare, and more

## API Endpoints

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get specific job
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job

### Companies
- `GET /api/companies` - Get all companies
- `GET /api/companies/:id` - Get specific company
- `POST /api/companies` - Create new company

### Users
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

## UI Components

### Navigation Bar
- **Brand Logo**: JobPortal with briefcase icon
- **Search Bar**: Global search with autocomplete
- **Alerts Button**: Notification dropdown with badge
- **Profile Dropdown**: User menu with avatar
- **More Button**: Right sidebar toggle

### Dropdowns
- **Profile Dropdown**: Dashboard, applications, settings, logout
- **Alerts Dropdown**: Notifications with mark as read functionality
- **Right Sidebar**: Quick access to jobs, companies, resources

### Responsive Design
- **Desktop**: Full navigation with all features
- **Tablet**: Optimized layout with collapsible elements
- **Mobile**: Hamburger menu with touch-friendly interface

## Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **CORS Protection**: Cross-origin request handling
- **Input Validation**: Server-side data validation

## Deployment

### Frontend Deployment
```bash
# Build the application
npm run build

# Deploy to your preferred hosting service
# (Netlify, Vercel, AWS S3, etc.)
```

### Backend Deployment
```bash
# Deploy to your preferred hosting service
# (Heroku, AWS, DigitalOcean, etc.)
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Job Portal Team**
- Built with love using React.js and Node.js
- Modern web development best practices
- Responsive design principles

## Acknowledgments

- **Lucide React** for beautiful icons
- **React Router** for seamless navigation
- **Express.js** for robust backend
- **CSS3** for stunning visual effects

---

**Star this repository if you found it helpful!**

**Live Demo**: [Add your live demo link here]

**Contact**: [Add your contact information here] 