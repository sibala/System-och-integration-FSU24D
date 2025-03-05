# Exercises


## Exercise 05-express-mysql
### Rewrite 04-lecture/04-express-crud, using mysql instead of working with a local array
- Begin with installing the packages mysql2 and dotenv: npm install mysql2 dotenv
- In PHPMyAdmin -> Create a DB with a posts-table, with the following fields:
  - id INT(10) PK 
  - title VARCHAR(100)
  - content TEXT
  - author VARCHAR(100)
- Establish a DB-connection in index.ts. For XAMPP, the login info is:
  - host: "localhost"
  - user: "root"
  - password: "" // Empty string
  - database: ??? // Whatever you named the databse when creating it
  - port: 3306
- Make sure the above credentials are saved in a .env file, and used by importing the dotenv package
- Build on the previous code, rewrite all endpoints using database queries to perform CRUD, instead of using the local array 


