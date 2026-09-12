# Portfolio Backend with Admin Dashboard

A full-featured portfolio backend built with **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **Cloudinary** with admin authentication and project management system.

## 🚀 Features

- ✅ RESTful API with Express.js
- ✅ MongoDB integration with Mongoose
- ✅ Cloudinary for image management
- ✅ JWT Authentication
- ✅ Admin Dashboard (Create, Read, Update, Delete Projects)
- ✅ Role-based Access Control (Admin/User)
- ✅ TypeScript for type safety
- ✅ CORS enabled for frontend integration
- ✅ Request logging with Morgan
- ✅ Secure password hashing with bcryptjs
- ✅ File upload with multer
- ✅ Environment variable management

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Cloudinary account

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/Md-Saad-1289/My-profile-.git
cd My-profile-
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file from `.env.example`
```bash
cp .env.example .env
```

4. Update `.env` with your credentials
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_secret_key
```

## 🎯 Running the Project

### Development Mode
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production Mode
```bash
npm start
```

## 📁 Project Structure

```
src/
├── index.ts                  # Main server file
├── config/
│   └── database.ts          # MongoDB connection
├── models/
│   ├── User.ts             # User schema with authentication
│   ├── Project.ts          # Project schema
│   └── About.ts            # About/Profile schema
├── controllers/
│   ├── authController.ts   # Authentication logic
│   └── projectController.ts # Project CRUD logic
├── routes/
│   ├── authRoutes.ts       # Auth endpoints
│   └── projectRoutes.ts    # Project endpoints
├── middleware/
│   └── auth.ts             # JWT & Admin middleware
└── utils/
    └── cloudinary.ts       # Cloudinary configuration
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Projects (Public)
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project

### Projects (Admin Only)
- `POST /api/projects` - Create new project (requires JWT + admin)
- `PUT /api/projects/:id` - Update project (requires JWT + admin)
- `DELETE /api/projects/:id` - Delete project (requires JWT + admin)

### Health Check
- `GET /health` - Server health status
- `GET /` - Welcome message & API info

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cloudinary** - Cloud storage
- **multer** - File upload middleware
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables
- **cors** - Cross-origin requests
- **morgan** - HTTP request logger
- **typescript** - Type safety

## 📝 Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `NODE_ENV` | Environment (development/production) |
| `MONGODB_URI` | MongoDB connection string |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `JWT_SECRET` | Secret key for JWT tokens |

## 🔐 Authentication

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "password123",
    "role": "admin"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "password123"
  }'
```

## 📸 Project Management

### Create Project (Admin Only)
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "image=@path/to/image.jpg" \
  -F "title=My Awesome Project" \
  -F "description=Project description" \
  -F "technologies=React,Node.js,MongoDB" \
  -F "gitHubLink=https://github.com/username/repo" \
  -F "liveLink=https://project-demo.com"
```

### Update Project (Admin Only)
```bash
curl -X PUT http://localhost:5000/api/projects/PROJECT_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "image=@path/to/new-image.jpg" \
  -F "title=Updated Title" \
  -F "description=Updated description"
```

### Delete Project (Admin Only)
```bash
curl -X DELETE http://localhost:5000/api/projects/PROJECT_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Md-Saad-1289**

---

Happy coding! 🎉
