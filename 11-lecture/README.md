# Authentication

## Try implementing authentication in your ecommerce project, if time allows. (Not Obligatory)
The ecommerce-api is updated with 4 new endpoinst for managing authentication
- Register user: http://localhost:3000/auth/register (POST)
- Login user: http://localhost:3000/auth/login (POST)
- Refresh token: http://localhost:3000/auth/refresh-token (POST)
- Logout user: http://localhost:3000/auth/clear-token (POST)

- Also the ecommerce.sql export file is updated with an additional table "users", for storing newley registererd users
- Must add ACCESS_TOKEN_SECRET = secret in .env to make the new version of the ecommerce-api to work 

