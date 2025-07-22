# JavaScript Backend Learning Journey

This repository contains my comprehensive JavaScript backend development learning projects using Node.js, Express.js, and MongoDB. Each folder represents a specific concept or mini-project demonstrating different aspects of backend development.

## 🚀 Projects Overview

### 📁 Project Structure
```
Javascript Backend/
├── 01_basics/                    # Node.js fundamentals
├── 02_basics/                    # Express.js basics
├── 03_data_modeling_mongoose/    # Mongoose and data modeling
├── 04_dynamic_routing_and_ejs/   # Dynamic routing with EJS templating
├── 05_middleware/                # Express middleware concepts
├── 06_project/                   # Intermediate project
├── 07_mongodb_basics/            # MongoDB fundamentals
├── 08_mongodb/                   # Advanced MongoDB operations
├── 09_authentication/            # Authentication with bcrypt & cookies
├── 10_jwt/                       # JWT token authentication
├── 11_data_association/          # MongoDB data relationships
├── 12_mini_project/              # Full-stack social media app
└── index.js                      # Main entry point
```

## 🌟 Featured Project: Mini Social Media App (12_mini_project)

A complete full-stack social media application built with modern backend technologies.

### ✨ Features
- **User Authentication**: Secure registration and login with bcrypt password hashing
- **JWT Authorization**: Token-based authentication with cookie management
- **User Profiles**: Personalized user dashboards
- **Post Creation**: Create and manage posts
- **Data Association**: Linked user and post relationships
- **Responsive UI**: Clean interface with Tailwind CSS
- **Session Management**: Secure logout and session handling

### 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcrypt, JSON Web Tokens (JWT)
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Tailwind CSS
- **Development**: Nodemon for hot reloading

### 📋 API Endpoints
```
GET  /                  # Homepage/Registration
GET  /login            # Login page
POST /register         # User registration
POST /login            # User authentication
GET  /profile          # User dashboard (protected)
POST /post             # Create new post (protected)
GET  /logout           # Logout and clear session
```

### 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DynaMax000/js-backend.git
   cd js-backend/12_mini_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   Make sure MongoDB is running on your system

4. **Run the application**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4000`

### 📊 Database Schema

**User Model:**
```javascript
{
  username: String (required),
  name: String (required),
  email: String (required, unique),
  age: Number,
  password: String (hashed),
  posts: [ObjectId] (references to Post model)
}
```

**Post Model:**
```javascript
{
  content: String (required),
  user: ObjectId (reference to User model),
  date: Date (default: now)
}
```

## 🎯 Learning Objectives Covered

### Core Concepts
- [x] **Node.js Fundamentals**: Server-side JavaScript execution
- [x] **Express.js Framework**: Web application framework
- [x] **MongoDB Integration**: NoSQL database operations
- [x] **Mongoose ODM**: Object Document Mapping
- [x] **Template Engines**: EJS for dynamic HTML generation
- [x] **Middleware**: Custom and third-party middleware usage

### Advanced Topics
- [x] **Authentication & Authorization**: Secure user management
- [x] **Password Hashing**: bcrypt for password security
- [x] **JWT Tokens**: Stateless authentication
- [x] **Cookie Management**: Session handling
- [x] **Data Relationships**: User-Post associations
- [x] **Route Protection**: Middleware-based authorization
- [x] **Error Handling**: Comprehensive error management

### Security Features
- [x] **Password Encryption**: bcrypt hashing with salt
- [x] **JWT Implementation**: Secure token-based auth
- [x] **Input Validation**: Data sanitization
- [x] **Cookie Security**: HTTP-only cookies
- [x] **Route Protection**: Authentication middleware

## 🔄 Project Evolution

Each numbered folder represents a step in the learning journey:

1. **Basics (01-02)**: Node.js and Express fundamentals
2. **Data Layer (03, 07-08)**: Database integration and modeling
3. **Frontend Integration (04)**: Template engines and dynamic routing
4. **Middleware (05-06)**: Custom middleware and project structure
5. **Security (09-10)**: Authentication and authorization
6. **Advanced (11-12)**: Data relationships and full application

## 🚀 Getting Started

To explore any specific concept:

1. Navigate to the desired folder
2. Install dependencies: `npm install`
3. Check individual README files for specific instructions
4. Run the project: `npm start` or `node index.js`

## 📝 Key Learnings

- **RESTful API Design**: Proper HTTP methods and status codes
- **Database Design**: Efficient schema design and relationships
- **Security Best Practices**: Authentication, authorization, and data protection
- **Code Organization**: Modular structure and separation of concerns
- **Error Handling**: Graceful error management and user feedback
- **Performance**: Efficient database queries and middleware usage

## 🔮 Future Enhancements

- [ ] Password reset functionality
- [ ] Email verification
- [ ] Real-time features with Socket.io
- [ ] File upload capabilities
- [ ] Advanced post features (likes, comments)
- [ ] Admin dashboard
- [ ] API rate limiting
- [ ] Comprehensive testing suite

## 🤝 Contributing

This is a learning repository, but suggestions and improvements are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Author**: [Lavesh Kartik](https://github.com/DynaMax000)  
**Repository**: [js-backend](https://github.com/DynaMax000/js-backend)

*Built with ❤️ while learning backend development*