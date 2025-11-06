# Authentication Backend API

A secure and scalable authentication backend built with Node.js, Express, MongoDB, and JWT.

## 🚀 Features

- User Registration & Login
- JWT-based Authentication
- Password Hashing with bcrypt
- Protected Routes
- Profile Management
- Error Handling
- CORS Enabled

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **Environment Variables**: dotenv

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth-app
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🗄️ Database Setup

Make sure MongoDB is installed and running on your system:

```bash
# If using MongoDB locally
mongod

# Or use MongoDB Atlas cloud database
```

## 📚 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/user` | Get current user | Private |
| PUT | `/api/auth/profile` | Update user profile | Private |

### Request/Response Examples

#### Register User
**POST** `/api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login User
**POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Get Current User
**GET** `/api/auth/user`
```bash
Headers: Authorization: Bearer <jwt-token>
```

## 🏗️ Project Structure

```
backend/
├── config/
│   └── db.js                 # Database connection
├── controllers/
│   └── user.controller.js    # User controller logic
├── middleware/
│   ├── authMiddleware.js     # JWT authentication
│   └── errorMiddleware.js    # Error handling
├── models/
│   └── User.js               # User schema/model
├── routes/
│   └── user.route.js         # User routes
├── .env                      # Environment variables
├── server.js                 # Main server file
└── package.json              # Dependencies
```

## 🔐 Environment Variables

- `PORT` - Server port (default: 5000)  
- `MONGODB_URI` - MongoDB connection string  
- `JWT_SECRET` - Secret key for JWT tokens  

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

## 🧪 Testing

Test the API endpoints using Postman or curl:

```bash
# Test server
curl http://localhost:5000/

# Test registration
curl -X POST http://localhost:5000/api/auth/register   -H "Content-Type: application/json"   -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
```

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Yoonus Anees - [Yoonus Anees](https://github.com/YoonusAnees)

## 🙏 Acknowledgments

- Express.js team  
- MongoDB community  
- JWT for authentication
