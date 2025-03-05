// Import enironmental variables
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DB_PASSWORD)

// Import and use express
import express, { Request, Response } from "express"
const app = express() //  Create a new Express app instance


import { ITodo } from "./models/ITodo";


// DB Connection
import mysql, { ResultSetHeader } from 'mysql2/promise'
const db = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:     parseInt(process.env.DB_PORT || "3306")
})

const connectDB = async () => {
  try {
    await db.getConnection()
    console.log('Connected to DB')
  } catch(error) {
    console.log('Error connecting to DB: ' + error)
  }
} 

// Helper function. Error handling
const logError = (error: unknown) => {
  return error instanceof Error 
    ? error.message 
    : "Unknown error"
}


// Middleware
// Makes sure that all Requests body gets parsed to JSON
app.use(express.json());

app.get('/', (_, res: Response) => {
  res.json({message: 'Welcome to the Express + TS server'});
})


// Example on query string params
app.get('/todos', async (req: Request, res: Response) => {
  // type ParamsType = {filter?: string}
  // console.log(req.query)
  // const {filter}: ParamsType = req.query;

  try {
    const sql = "SELECT * FROM todos"
    const [rows] = await db.query<ITodo[]>(sql)
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
})

// Example on path params
app.get('/todos/:id', async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    const sql = `SELECT * FROM todos WHERE id = ?`
    const [rows] = await db.query<ITodo[]>(sql, [id])
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
})


// Create todo
app.post('/todos', async (req: Request, res: Response) => {
  const {content} = req.body;
  if (content === undefined) {
    res.status(400).json({message: 'Required fields missing', required_fields: ['content']})
    return;
  }

  try {
    const sql = `
      INSERT INTO todos (content)
      VALUES (?)
    `
    await db.query<ResultSetHeader>(sql, [content])
    res.status(201).json({message: 'Todo created'})
  } catch(error: unknown) {
    res.status(500).json({error: logError(error)})
  }
})


// Update todos
app.patch('/todos/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const {content, done} = req.body;
  if (content === undefined || done === undefined) {
    res.status(400).json({message: 'Required fields missing', required_fields: ['content', 'done']})
    return;
  }

  try {
    const sql = `
      UPDATE todos
      SET content = ?, done = ?
      WHERE id = ?
    `
    const [result] = await db.query<ResultSetHeader>(sql, [content, done, id])
    if (result.affectedRows === 0) {
      res.status(404).json({message: 'Todo not found'})
      return
    }
    res.json({message: 'Todo updated'});
  } catch(error) {
    res.status(500).json({error: logError(error)})
  }
})


// Delete todos
app.delete('/todos/:id', async (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const sql = `
      DELETE FROM todos
      WHERE id = ?
    `
    const [result] = await db.query<ResultSetHeader>(sql, [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({message: 'Todo not found'})
      return
    }
    res.json({message: 'Todo deleted'});
  } catch (error) {
    res.status(500).json({error: logError(error)})
  }
})


// Connect to DB
connectDB()
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})

// Exercise 05-express-mysql
// Rewrite 04-lecture/04-express-crud, using mysql instead of working with a local array

//     Begin with installing the packages mysql2 and dotenv: npm install mysql2 dotenv
//     In PHPMyAdmin -> Create a DB with a posts-table, with the following fields:
//         id INT(10) PK
//         title VARCHAR(100)
//         content TEXT
//         author VARCHAR(100)
//     Establish a DB-connection in index.ts. For XAMPP, the login info is:
//         host: "localhost"
//         user: "root"
//         password: "" // Empty string
//         database: ??? // Whatever you named the databse when creating it
//         port: 3306
//     Make sure the above credentials are saved in a .env file, and used by importing the dotenv package
//     Build on the previous code, rewrite all endpoints using database queries to perform CRUD, instead of using the local array
