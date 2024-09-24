import React, { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const LoginPage: React.FC = () => {
  const [authUrl, setAuthUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/auth/login`)
      .then(response => response.json())
      .then(data => setAuthUrl(data.authUrl))
      .catch(error => console.error('Error fetching auth URL:', error));
  }, []);

  const handleLogin = () => {
    if (authUrl) {
      window.location.href = authUrl;
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin} disabled={!authUrl}>
        Login with OIDC
      </button>
    </div>
  );
};

export default LoginPage;