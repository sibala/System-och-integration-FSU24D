import express, { Request, Response } from "express"
import { Todo } from "./models/Todo";
import { Post } from "./models/Post";
const app = express() //  Create a new Express app instance


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
app.get('/todos', (req: Request, res: Response) => {
  type ParamsType = {filter?: string}
  console.log(req.query)
  const {filter}: ParamsType = req.query;

  try {
    if (filter) {
      const filteredTodos = todos.filter((todo) => todo.content.includes(filter))
      res.json({filteredTodos});
      return;
    }
    
    res.json({todos});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// Example on path params
app.get('/todos/:id', (req: Request, res: Response) => {
  const {id} = req.params

  try {
    const todo = todos.find((todo) => todo.id == parseInt(id))
    if (!todo) {
      res.status(404).json({message: 'Todo not found'})
      return
    }
  
    res.json({todo});
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
