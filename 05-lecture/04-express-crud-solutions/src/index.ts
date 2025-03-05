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
  
  try {
    if (filter) {
      let filterCaseInsesitive = filter !== undefined ?  filter.toLowerCase() : ""
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


// Create post
app.post('/posts', (req: Request, res: Response) => {
  const {title, content, author} = req.body;
  if (!title || !content || !author) {
    res.status(400).json({error: "Required fields missing", required_fields: ['title', 'content', 'author']})
    return
  }

  try {
    const newPost = new Post(title, content, author)
    posts.push(newPost)
    res.status(201).json({message: 'Post created'});
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({error: message})
  }
})


// Update post
app.patch('/posts/:id', (req: Request, res: Response) => {
  const {title, content, author} = req.body;
  if (!title || !content || !author) {
    res.status(400).json({error: "Required fields missing", required_fields: ['title', 'content', 'author']})
    return
  }
  
  try {
    const {id} = req.params;
    const post = posts.find((post) => post.id === parseInt(id))
    if (!post) {
      res.status(404).json({error: "Post not found"})
      return
    }

    post.title = title
    post.content = content
    post.author = author
    res.status(200).json({message: 'Post updated'});
  } catch (error: any) {
    const message = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({error: message})
  }
})



// Delete todos
app.delete('/posts/:id', (req: Request, res: Response) => {
  const {id} = req.params;

  try {
    const postIndex = posts.findIndex((post) => post.id === parseInt(id))
    if (postIndex == -1) {
      res.status(404).json({error: "Post not found"})
      return
    }

    posts.splice(postIndex, 1);
    res.status(200).json({message: 'Post deleted'});
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
