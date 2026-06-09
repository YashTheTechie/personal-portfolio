const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// MANDATORY FOR RENDER: Instructs Express to trust the proxy load balancers
// This ensures express-rate-limit catches the user's actual IP, not Render's internal IP
app.set('trust proxy', 1);

// 1. Security & Network Configurations
// Bulletproof CORS setup allowing local development, live deployment, and trailing slash configurations
app.use(cors({ 
  origin: [
    'http://localhost:3000', 
    'https://portfolio-frontend-7nsv.onrender.com',
    'https://portfolio-frontend-7nsv.onrender.com/'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200 // Provides legacy browser support (IE11, various smart TVs) for preflight check response
})); 

app.use(express.json());

// Anti-spam security: Limits an IP address to 3 contact messages per hour
const msgLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 3, 
  message: { error: 'Too many messages sent from this device. Please try again in an hour.' }
});

// 2. Database Connectivity
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB cluster linked successfully.'))
  .catch(err => console.error('❌ Database connection breakdown:', err));

// Database Schema Definition
const MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', MessageSchema);

// 3. Email Transport Setup (Nodemailer using your champyash21 configs)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 4. API Endpoints
app.post('/api/contact', msgLimiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All parameters (name, email, message) are required.' });
  }

  try {
    // Phase A: Save message data into your MongoDB portfolio database
    const newInquiry = new Message({ name, email, message });
    await newInquiry.save();

    // Phase B: Dispatch email alert straight to your inbox
    const emailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `💼 New Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(emailOptions);
    res.status(201).json({ success: true, message: 'Message recorded and dispatched successfully.' });

  } catch (err) {
    console.error('Server Processing Failure:', err);
    res.status(500).json({ error: 'Internal system fault. Message could not be processed.' });
  }
});

// Start the server engine
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server executing operations on port ${PORT}`));