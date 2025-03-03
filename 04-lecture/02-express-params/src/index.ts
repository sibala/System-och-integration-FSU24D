import express, { Request, Response } from "express"
import { Todo } from "./models/Todo";
import { Post } from "./models/Post";
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

// Solution to Exercise 02-express-params
const posts: Post[] = [
  new Post('Title 1', 'Content...', 'John'),
  new Post('Title 2', 'Content...', 'John'),
  new Post('Title 3', 'Content...', 'Jane'),
]
app.get('/posts', (req: Request, res: Response) => {
  type ParamsType = {filter?: string}
  console.log(req.query)
  const {filter}: ParamsType = req.query;
  let filterCaseInsesitive = filter !== undefined ?  filter.toLowerCase() : ""

  try {
    if (filter) {
      const filteredPosts = posts.filter((post) => post.author.toLowerCase().includes(filterCaseInsesitive))
      res.json({filteredPosts});
      return;
    }
    
    res.json({posts});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// Example on path params
app.get('/posts/:id', (req: Request, res: Response) => {
  const {id} = req.params

  try {
    const post = posts.find((post) => post.id == parseInt(id))
    if (!post) {
      res.status(404).json({message: 'Post not found'})
      return
    }
  
    res.json({post});
  } catch (error) {
    res.status(500).json({error: error.message})
  }
})


// Start Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
})





// Exercise 02-express-params
// a)
// Build on the previous code, extend the GET endpoint that returns a list of posts
// Filter the list by the “Author” property, depending on  the “filter” query param value
// The sort query param is retrieved from the Request object.

// b)
// Build on the previous code, create a new GET endpoint “/posts/:id” 
// that returns a specific post depending on the “:id” path param from the URL 
// The “:id” path param is retrieved from the Request object.
