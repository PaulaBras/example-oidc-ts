import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db';
import authRoutes from './routes/auth';
import { initializeOIDC } from './auth';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());

async function startServer() {
  try {
    // Connect to MongoDB
    await connectDB();

    // Initialize OIDC client
    await initializeOIDC();

    // Use authentication routes
    app.use('/auth', authRoutes);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();