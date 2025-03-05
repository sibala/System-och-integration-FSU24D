// Express import and configurations
import express, { Request, Response } from "express"
const app = express() //  Create a new Express app instance

import {connectDB} from './config/db'

// Middleware
app.use(express.json()); // Makes sure that all Requests body gets parsed to JSON

// Routes
import todoRouter from './routes/todos'
app.use('/todos', todoRouter)

// Connect to DB
connectDB()
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})

// Exercise 06-express-mysql-refactored
// Move the code for DB connection to config/db.ts
// Helper functions such as logError may be moved to utils/logUtils.ts
// Build on the previous code, refactor all endpoints to routes and controllers
