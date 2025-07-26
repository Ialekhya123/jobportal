const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

// Sample user data
let users = [
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john.doe@email.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi', // password
    role: 'applicant',
    createdAt: '2024-01-01'
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi', // password
    role: 'applicant',
    createdAt: '2024-01-02'
  },
  {
    id: 'user3',
    name: 'Mike Johnson',
    email: 'mike.johnson@email.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi', // password
    role: 'applicant',
    createdAt: '2024-01-03'
  },
  {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@jobportal.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi', // password
    role: 'admin',
    createdAt: '2024-01-01'
  }
];

// Get all users
const getAllUsers = () => {
  return users.map(user => {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  });
};

// Get user by ID
const getUserById = (id) => {
  const user = users.find(u => u.id === id);
  if (user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
  return null;
};

// Get user by email
const getUserByEmail = (email) => {
  return users.find(u => u.email === email);
};

// Create new user
const createUser = async (userData) => {
  const { email, password, ...otherData } = userData;
  
  // Check if user already exists
  if (getUserByEmail(email)) {
    throw new Error('User with this email already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    email,
    password: hashedPassword,
    role: 'applicant',
    createdAt: new Date().toISOString().split('T')[0],
    ...otherData
  };

  users.push(newUser);
  
  const { password: _, ...userWithoutPassword } = newUser;
  return userWithoutPassword;
};

// Update user
const updateUser = (id, userData) => {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...userData };
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
  }
  return null;
};

// Delete user
const deleteUser = (id) => {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);
    const { password, ...userWithoutPassword } = deletedUser;
    return userWithoutPassword;
  }
  return null;
};

// Authenticate user
const authenticateUser = async (email, password) => {
  const user = getUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return null;
  }

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  authenticateUser
}; 