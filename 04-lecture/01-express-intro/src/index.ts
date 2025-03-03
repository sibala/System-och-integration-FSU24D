import express, { Response } from "express"
import { Todo } from "./models/Todo";
const app = express() //  Create a new Express app instance


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

app.get('/todos', (req, res) => {
  res.json({todos});
})

// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})


// Exercise 01-express-intro
// Create a new Express server with TypeScript, just as we did in the lesson
// Add a new GET endpoint that returns a list of posts
// The posts should be an instance of the Post class (modules/Post.ts) with the following properties
// id, title, content, author
