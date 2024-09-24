import express from 'express';
import { getAuthorizationUrl, handleCallback } from '../auth';

const router = express.Router();

router.get('/login', (req, res) => {
  const authUrl = getAuthorizationUrl();
  res.json({ authUrl });
});

router.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    if (typeof code !== 'string') {
      throw new Error('Invalid authorization code');
    }
    const { tokenSet, userInfo } = await handleCallback(code);
    // Here you can save user information to the database if needed
    res.json({ success: true, userInfo });
  } catch (error) {
    console.error('Error in callback:', error);
    res.status(500).json({ success: false, error: 'Authentication failed' });
  }
});

export default router;