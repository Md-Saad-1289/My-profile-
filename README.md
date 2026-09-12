# Portfolio Backend

A full-stack portfolio backend built with **Node.js**, **Express**, **TypeScript**, **MongoDB**, and **Cloudinary**.

## 🚀 Features

- RESTful API with Express.js
- MongoDB integration with Mongoose
- Cloudinary for image management
- TypeScript for type safety
- CORS enabled for frontend integration
- Request logging with Morgan
- Environment variable management

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
├── index.ts              # Main server file
├── config/
│   └── database.ts       # MongoDB connection
├── models/               # Mongoose schemas
├── routes/               # API routes
├── controllers/          # Business logic
└── utils/               # Utility functions
```

## 🔌 API Endpoints

### Health Check
- `GET /health` - Server health status
- `GET /` - Welcome message

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **cloudinary** - Cloud storage
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

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

**Md-Saad-1289**

---

Happy coding! 🎉
