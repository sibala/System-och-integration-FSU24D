# Exercises

## Exercise 01-express-intro
- Create a new Express server with TypeScript, just as we did in the lesson
- Add a new GET endpoint that returns a list of posts
- The posts should be an instance of the Post class (modules/Post.ts) with the following properties
- id, title, content, author


## Exercise 02-express-params
### a)
- Build on the previous code, extend the GET endpoint that returns a list of posts
- Filter the list by the “Author” property, depending on  the “filter” query param value
- The sort query param is retrieved from the Request object.


### b)
- Build on the previous code, create a new GET endpoint “/posts/:id” 
- that returns a specific post depending on the “:id” path param from the URL 
- The “:id” path param is retrieved from the Request object.


## Exercise 04-express-crud
- Build on the previous code, create new endpoints for POST/PATCH/DELETE posts 
- The POST endpoint should create a new post with the following properties: id, title, content, author
- The PATCH endpoint should update an existing post with the “:id” path param. Should be able to update the title, content and author
- The DELETE endpoint should delete an existing post with the “:id” path param
