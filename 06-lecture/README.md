# Instructions

## Watch the recorded lesson
In the recorded lesson we go through:
- ER-diagram to understand the DB tables and the relations between them 
- MySQL in PHPMyAdmin/XAMPP
- The Ecommerce API code.
- Testing the following endpoints of the API, in Insomnia:


## API Docs 

### PRODUCTS endpoints

  - [GET]    http://localhost:3000/products
---

>Request JSON Body:
`None`

>Response JSON Body:
``` 
[
  {
    "id": 9,
    "name": "Product name",
    "description": "Desc...",
    "price": 423,
    "stock": 234,
    "category": "Graduation Cake",
    "image": "image url",
    "created_at": "2025-03-11T13:59:05.000Z"
  }
]
``` 


  - [GET]    http://localhost:3000/products/:id
---
>Request JSON Body: 
`None`

>Response JSON Body:
``` 
{
  "id": 9,
  "name": "Product name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
  "created_at": "2025-03-11T13:59:05.000Z"
}
``` 
  - [POST]   http://localhost:3000/products
---
>Request JSON Body:
``` 
{
  "name": "Product name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
}
``` 


>Response JSON Body:
``` 
{
  message: "Product created"
}
``` 
  - [PATCH]  http://localhost:3000/products/:id
---
>Request JSON Body:
``` 
{
  "name": "Product name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
}
``` 

>Response JSON Body:
``` 
{
  message: "Product updated"
}
``` 
  - [DELETE] http://localhost:3000/products/:id
---
>Request JSON Body:
`None`

>Response JSON Body:
``` 
{
  message: "Product deleted"
}
``` 

### CUSTOMERS endpoints

- [GET]    http://localhost:3000/customers
---

>Request JSON Body:
`None`

>Response JSON Body:
``` 
[
  {
    "id": 9,
    "name": "customer name",
    "description": "Desc...",
    "price": 423,
    "stock": 234,
    "category": "Graduation Cake",
    "image": "image url",
    "created_at": "2025-03-11T13:59:05.000Z"
  }
]
``` 


  - [GET]    http://localhost:3000/customers/:id
---
>Request JSON Body: 
`None`

>Response JSON Body:
``` 
{
  "id": 9,
  "name": "customer name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
  "created_at": "2025-03-11T13:59:05.000Z"
}
``` 
  - [POST]   http://localhost:3000/customers
---
>Request JSON Body:
``` 
{
  "name": "customer name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
}
``` 


>Response JSON Body:
``` 
{
  message: "Customer created"
}
``` 
  - [PATCH]  http://localhost:3000/customers/:id
---
>Request JSON Body:
``` 
{
  "name": "customer name",
  "description": "Desc...",
  "price": 423,
  "stock": 234,
  "category": "Graduation Cake",
  "image": "image url",
}
``` 

>Response JSON Body:
``` 
{
  message: "Customer updated"
}
``` 
  - [DELETE] http://localhost:3000/customers/:id
---
>Request JSON Body:
`None`

>Response JSON Body:
``` 
{
  message: "Customer deleted"
}
``` 


<b>ORDERS</b>
  - [GET]    http://localhost:3000/orders
  - [GET]    http://localhost:3000/orders/:id
  - [POST]   http://localhost:3000/orders
  - [PATCH]  http://localhost:3000/orders/:id
  - [DELETE] http://localhost:3000/orders/:id

<b>ORDER_ITEMS</b>
  - [PATCH]  http://localhost:3000/order-items/:id
  - [DELETE] http://localhost:3000/order-items/:id

