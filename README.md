# Node API Example

This is a professional Node.js API boilerplate built with TypeScript, Express, and Clean Architecture principles.

## Features

- **TypeScript**: Strict type safety.
- **Express**: Fast, unopinionated web framework.
- **Clean Architecture**: Separation of concerns (Controllers, Routes, Utils).
- **Validation**: Zod for environment and request validation.
- **Logging**: Winston logger.
- **Security**: Helmet & CORS.
- **Standard Tooling**: ESLint, Prettier, Nodemon.

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment:
   ```bash
   cp .env.example .env
   # Update .env variables if needed
   ```

### Scripts

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm start`: Start production server.
- `npm run lint`: Run linting.

## API Endpoints

- `GET /api/v1/health`: Health check.
