# Instructions

## Watch the recorded lesson
In the recorded lesson we go through:
- ER-diagram to understand the DB tables and the relations between them 
- MySQL in PHPMyAdmin/XAMPP
- The Ecommerce API code.
- Testing the following endpoints of the API, in Insomnia:


## API Docs 
- [PRODUCTS endpoints](https://github.com/sibala/System-och-integration-FSU24D/tree/main/06-lecture#products-endpoints)
- [CUSTOMERS endpoints](https://github.com/sibala/System-och-integration-FSU24D/tree/main/06-lecture#customers-endpoints)
- [ORDERS endpoints](https://github.com/sibala/System-och-integration-FSU24D/tree/main/06-lecture#orders-endpoints)
- [ORDER ITEMS endpoints](https://github.com/sibala/System-och-integration-FSU24D/tree/main/06-lecture#order_items-endpoints)

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
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@gmail.com",
    "password": "234",
    "phone": "53451234",
    "street_address": "Street 123",
    "postal_code": "Postal code",
    "city": "City",
    "country": "Country",
    "created_at": "2025-03-07T07:25:02.000Z"
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
  "id": 1,
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@gmail.com",
  "password": "234",
  "phone": "53451234",
  "street_address": "Street 123",
  "postal_code": "Postal code",
  "city": "City",
  "country": "Country",
  "created_at": "2025-03-07T07:25:02.000Z"
}
``` 
  - [POST]   http://localhost:3000/customers
---
>Request JSON Body:
``` 
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@gmail.com",
  "password": "234",
  "phone": "53451234",
  "street_address": "Street 123",
  "postal_code": "Postal code",
  "city": "City",
  "country": "Country",
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
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@gmail.com",
  "password": "234",
  "phone": "53451234",
  "street_address": "Street 123",
  "postal_code": "Postal code",
  "city": "City",
  "country": "Country",
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


### ORDERS endpoints
  - [GET]    http://localhost:3000/orders
  - [GET]    http://localhost:3000/orders/:id
  - [POST]   http://localhost:3000/orders
  - [PATCH]  http://localhost:3000/orders/:id
  - [DELETE] http://localhost:3000/orders/:id

### ORDER_ITEMS endpoints
  - [PATCH]  http://localhost:3000/order-items/:id
  - [DELETE] http://localhost:3000/order-items/:id

