import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DB_PASSWORD)
import express, { Request, Response } from "express"
import { Todo } from "./models/Todo";

const app = express() //  Create a new Express app instance

// DB Connection
import mysql from 'mysql2/promise'
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


// Middleware
// Makes sure that all Requests body gets parsed to JSON
app.use(express.json());

// define the root path with a message
// req, handles the incoming request from the client
// res, handles the outgoing response to the client
// May use _ to indicate that the parameter is not used
app.get('/', (_, res: Response) => {
  res.json({message: 'Welcome to the Express + TS server'});
})


const todos: Todo[] = [
  new Todo('Handla mat'),
  new Todo('Laga mat'),
  new Todo('Koda')
]

// Example on query string params
app.get('/todos', async (req: Request, res: Response) => {
  // type ParamsType = {filter?: string}
  // console.log(req.query)
  // const {filter}: ParamsType = req.query;

  try {
    const sql = "SELECT * FROM todos"
    const [rows] = await db.query(sql)
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// Example on path params
app.get('/todos/:id', async (req: Request, res: Response) => {
  const {id} = req.params

  try {
    const sql = `SELECT * FROM todos WHERE id = ?`
    const [rows] = await db.query(sql, [id])
    res.json(rows);
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// Create todos
app.post('/todos', (req: Request, res: Response) => {
  const {content} = req.body;
  if (!content) {
    res.status(400).json({error: "Content is required"})
    return
  }

  try {
    const newTodo = new Todo(content)
    todos.push(newTodo)
    res.status(201).json({message: 'Todo created', todo: newTodo});
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({error: message})
  }
})


// Update todos
app.patch('/todos/:id', (req: Request, res: Response) => {
  const {content, done} = req.body;

  const {id} = req.params;
  const todo = todos.find((todo) => todo.id === parseInt(id))
  if (!todo) {
    res.status(404).json({error: "Todo not found"})
    return
  }

  try {
    todo.content = content !== undefined ? content : todo.content;
    todo.done = done !== undefined ? done : todo.done;
    res.status(200).json({message: 'Todo updated', todo: todo});
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({error: message})
  }
})



// Delete todos
app.delete('/todos/:id', (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))
    if (todoIndex == -1) {
      res.status(404).json({error: "Todo not found"})
      return
    }

    todos.splice(todoIndex, 1);
    res.status(200).json({message: 'Todo deleted'});
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({error: message})
  }
})



// Connect to DB
connectDB()
// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})



// Exercise 04-express-crud
// Build on the previous code, create new endpoints for POST/PATCH/DELETE posts 
// The POST endpoint should create a new post with the following properties: id, title, content, author
// The PATCH endpoint should update an existing post with the “:id” path param. Should be able to update the title, content and author
// The DELETE endpoint should delete an existing post with the “:id” path param
