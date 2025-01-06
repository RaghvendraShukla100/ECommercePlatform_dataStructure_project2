# ECommercePlatform_dataStructure

## Overview
ECommercePlatform_dataStructure is a comprehensive system designed to manage an e-commerce platform. It handles data related to users, products, and orders, and provides a robust API for interacting with this data.

## Features
- User authentication and management
- Product catalog with detailed descriptions and categories
- Order management with tracking and history
- RESTful API for easy integration and interaction

## Prerequisites
- Node.js
- MongoDB Atlas account

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ECommercePlatform_dataStructure.git
    cd ECommercePlatform_dataStructure
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up your MongoDB Atlas connection string in a `.env` file:
    ```env
    MONGODB_URI=your_mongodb_atlas_connection_string
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Users
- **GET** `/users`: Fetch all users
- **POST** `/users`: Create a new user

### Products
- **GET** `/products`: Fetch all products
- **POST** `/products`: Create a new product

### Orders
- **GET** `/orders`: Fetch all orders
- **POST** `/orders`: Create a new order

## Schema

### User Schema
- `_id`: ObjectId
- `username`: String (unique)
- `email`: String (unique)
- `password`: String (hashed and salted)
- `firstName`: String
- `lastName`: String
- `address`: Object (street, city, state, zip)
- `cart`: Array of Objects (product IDs and quantities)
- `orders`: Array of Objects (order details, including products, date, and status)

### Product Schema
- `_id`: ObjectId
- `name`: String
- `description`: String
- `category`: String
- `subcategory`: String
- `price`: Number
- `images`: Array of Strings (URLs to product images)
- `stock`: Number
- `brand`: String (optional)
- `specifications`: Object
- `reviews`: Array of Objects (each review with user, rating, and comment)

### Order Schema
- `_id`: ObjectId
- `userId`: ObjectId (reference to the user)
- `orderDate`: Date
- `status`: String
- `shippingAddress`: Object (address details)
- `billingAddress`: Object (address details)
- `paymentMethod`: String
- `totalPrice`: Number
- `orderItems`: Array of Objects (product details and quantity)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or issues, please contact `your.email@example.com`.
