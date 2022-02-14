/* Replace with your SQL commands */
CREATE TABLE Orders (
    id SERIAL PRIMARY  KEY,
    productID REFERENCES Product(id),
    userID REFERENCES User(id),
    Qty integer,
    status ENUM('active', 'complete')  


);