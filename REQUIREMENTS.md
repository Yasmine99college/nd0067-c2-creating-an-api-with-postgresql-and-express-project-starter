# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index :'/productStore' [GET]
- Show:'/productStore/:id' [GET]
- Create [token required]:'/productStore' [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]:'/users'[GET]
- Show [token required]:'/users/:id' [GET]
- Create N[token required]: '/users' [POST]

#### Orders
- Current Order by user (args: user id)[token required] :'ordersList' [GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]: '/ordersList/:id' [GET]

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category
[CREATE TABLE Product (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(70) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(70)

);
]

#### User
- id
- firstName
- lastName
- password
[CREATE TABLE User (
    id SERIAL PRIMARY  KEY,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    passwords VARCHAR(40) NOT NULL
    

);]

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
[CREATE TABLE Orders (
    id SERIAL PRIMARY  KEY,
    productID REFERENCES Product(id),
    userID REFERENCES User(id),
    Qty integer,
    status ENUM('active', 'complete')  


);]
