# OIDC Login Test Project

This project demonstrates OIDC login functionality using a TypeScript backend (Express) and frontend (Vite + React). It uses MongoDB as a data store and Docker for containerization.

## Prerequisites

- Docker and Docker Compose
- Node.js and npm (for local development)

## Setup

1. Clone the repository:
   ```
   git clone git@git.pabr.de:paul/example-oidc-ts.git
   cd example-oidc-ts
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values:
     ```
     cp .env.example .env
     ```
   - Update the OIDC-related variables in the `.env` file with your OIDC provider details.

3. Build and run the project using Docker Compose:
   ```
   docker-compose up --build
   ```

   This will start the backend server, frontend application, and MongoDB.

4. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost:3000

## Development

For local development without Docker:

1. Install backend dependencies:
   ```
   npm install
   ```

2. Install frontend dependencies:
   ```
   cd src/frontend
   npm install
   ```

3. Run the backend in development mode:
   ```
   npm run dev:backend
   ```

4. Run the frontend in development mode:
   ```
   npm run dev:frontend
   ```

## Project Structure

- `src/backend`: Express server and OIDC authentication logic
- `src/frontend`: Vite + React frontend application
- `Dockerfile.backend`: Dockerfile for the backend service
- `src/frontend/Dockerfile`: Dockerfile for the frontend service
- `docker-compose.yml`: Docker Compose configuration for running the entire stack

## Testing OIDC Login

1. Access the frontend application at http://localhost
2. Click the "Login with OIDC" button
3. You will be redirected to your OIDC provider's login page
4. After successful authentication, you will be redirected back to the application

## Notes

- Make sure to configure your OIDC provider with the correct redirect URI (http://localhost:3000/auth/callback by default)
- For production use, ensure to update the OIDC configuration and use appropriate security measures

## Troubleshooting

- If you encounter any issues with CORS, make sure the backend URL in the frontend's `.env` file matches the actual backend URL
- Check the Docker logs for any error messages if services fail to start

For any other issues, please refer to the project's issue tracker or contact the maintainers.