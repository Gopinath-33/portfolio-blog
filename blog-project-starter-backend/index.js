// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection with Serverless Caching
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blogDB';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGO_URI, {
      bufferCommands: false, // Prevents buffering timeout errors
    });
    isConnected = db.connections[0].readyState;
    console.log('MongoDB Connected Successfully!');
  } catch (err) {
    console.error('MongoDB Connection Error:', err.message);
    throw err;
  }
};

// Middleware to ensure DB is connected before processing requests
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    return res.status(500).json({ 
      message: 'Database connection failed', 
      error: err.message 
    });
  }
});

// Schema & Model
const blogSchema = new mongoose.Schema({
  newTitle: { type: String, required: true },
  newContent: { type: String, required: true },
  date: { type: String, required: true },
  likes: { type: Number, default: 0 }
});

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

// Root Health Check Route
app.get('/', (req, res) => {
  res.send('Portfolio Blog API is running smoothly!');
});

// Routes
// 1. Get All Blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ _id: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Like a Blog Post
app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Create a New Blog Post
app.post('/api/blogs', async (req, res) => {
  const { newTitle, newContent, date, likes } = req.body;

  if (!newTitle || !newContent) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newBlog = await Blog.create({
      newTitle,
      newContent,
      date: date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      likes: likes || 0
    });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. Delete a Blog Post Route
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found in database' });
    }
    return res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err.message);
    return res.status(500).json({ message: err.message });
  }
});

// Local dev support
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Required for Vercel Serverless Function
module.exports = app;