# Simple GraphQL Server Template

A minimal and clean template to quickly spin up a **GraphQL** server with **Express**, **Apollo Server**, **Drizzle ORM**, and **PostgreSQL** — built in **TypeScript**.

## ✨ Features

- GraphQL API with Apollo Server
- Express-based HTTP server
- Drizzle ORM for modern, type-safe database access
- PostgreSQL support
- Environment-based configuration
- Nodemon + TSX for fast local development
- Organized and scalable project structure

---

## 📁 Project Structure

src/

├── index.ts # Entry point: Server and Apollo initialization

├── db/

│ ├── schema.ts # Drizzle ORM schema definitions

│ └── client.ts # Drizzle ORM PostgreSQL client setup

├── graphql/

│ ├── resolvers.ts # GraphQL resolvers

│ └── typeDefs.ts # GraphQL type definitions (schema)

├── utils/

├── env.ts # Environment variables config

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/graphql-server.git
cd graphql-server
pnpm install

Tip: Make sure you have pnpm installed. If not:

npm install -g pnpm



⸻

🚀 Available Scripts

Command	Description
pnpm dev	Start the server in development mode
pnpm db-push	Push the current schema to the database
pnpm generate	Generate Drizzle ORM migration files
pnpm migrate	Run pending migrations in the database



⸻

🌱 Environment Variables

Create a .env file in the project root:

DATABASE_URL=postgresql://user:password@localhost:5432/dbname
PORT=4000

	•	DATABASE_URL: PostgreSQL connection string
	•	PORT: (Optional) Port number for the server (default: 4000)

⸻

⚙️ Tech Stack
	•	TypeScript
	•	Express
	•	Apollo Server (express middleware)
	•	GraphQL
	•	Drizzle ORM (v0.42.0)
	•	PostgreSQL
	•	dotenv
	•	nodemon + tsx

⸻

📚 Drizzle ORM Commands
	•	Push schema to DB:

pnpm db-push


	•	Generate migrations (after modifying schema):

pnpm generate


	•	Run migrations:

pnpm migrate



Note: Setup your drizzle.config.ts properly before running these commands.

Example drizzle.config.ts:

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});



⸻

📦 Deployment Notes
	•	Set your .env values correctly on your production server.
	•	Use process managers like PM2 or deploy via Docker if needed.
	•	Ensure your database is accessible from the production environment.

⸻

🤝 Contributing

Contributions, feedback, and feature suggestions are welcome!
Feel free to open an issue or pull request.

⸻

📝 License

This project is licensed under the ISC License.

⸻

📋 Quick Start Example

pnpm install
cp .env.example .env  # or manually create a .env
pnpm dev

Then open http://localhost:4000/graphql in your browser to access the GraphQL Playground 🚀.

```
