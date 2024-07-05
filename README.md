I apologize for the oversight. Here is the correct markdown code for the README file:

````markdown
# Small Shop Server API

## GitHub Repository

[GitHub Repository Link](https://github.com/RahatRezwan/small-shop-server)

## Hosted API

[Hosted API Link](https://small-shop-server-psi.vercel.app/)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/RahatRezwan/small-shop-server
   ```
````

2. **Navigate to the Project Directory**

   ```bash
   cd small-shop-server
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables**

   -  Create a `.env` file in the root directory.
   -  Add the following variables:
      ```
      NODE_ENV=development
      PORT= Your_Port
      DB_USERNAME=your_username
      DB_PASSWORD=your_db_password
      DATABASE_URL= Your_mongoose_connection_url
      ```
   -  You can also use env.example file for run this project. Just rename the file to .env

5. **Run the Project**

   1. To run the project in dev mode.

   ```bash
   npm run dev
   ```

   2. To run the project in production mode.

   ```bash
   npm run build
   npm start
   ```

## API Routes

### Products

| Method         | Route                           | Description                      |
| -------------- | ------------------------------- | -------------------------------- |
| GET            | /api/products                   | Get all products                 |
| Search Product | /api/products?searchTerm='lamp' | Get all products by search query |
| GET            | /api/products/:productId        | Get a product by ID              |
| POST           | /api/products                   | Create a new product             |
| PUT            | /api/products/:productId        | Update a product by ID           |
| DELETE         | /api/products/:productId        | Delete a product by ID           |

### Orders

| Method          | Route                               | Description                  |
| --------------- | ----------------------------------- | ---------------------------- |
| GET             | /api/orders                         | Get all orders               |
| Search by email | /api/orders?email=example@email.com | Get all orders for the email |
| POST            | /api/orders                         | Create a new order           |

## Example Data

### Example Product

```json
{
   "name": "Wireless Mouse",
   "description": "Ergonomic wireless mouse with adjustable DPI settings.",
   "price": 29.99,
   "category": "Electronics",
   "tags": ["computer", "peripherals", "wireless", "ergonomic"],
   "variants": [
      {
         "type": "color",
         "value": "Black"
      },
      {
         "type": "color",
         "value": "White"
      }
   ],
   "inventory": {
      "quantity": 150,
      "inStock": true
   }
}
```

### Example Order

```json
{
   "email": "level2@programming-hero.com",
   "productId": "5fd67e890b60c903cd8544a3",
   "price": 999,
   "quantity": 1
}
```
