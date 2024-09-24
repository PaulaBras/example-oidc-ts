import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use authentication routes
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});