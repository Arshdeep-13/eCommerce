# E-Commerce Website

An e-commerce website built to offer a seamless online shopping experience for users. This project includes features like product browsing, user authentication, cart management, and secure payment processing.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Features

- **User Authentication**: Sign up, log in, and log out securely.
- **Product Browsing**: View and filter products by categories, prices, and ratings.
- **Shopping Cart**: Add, remove, and modify products in the cart.
- **Order Management**: Place orders, track status, and view order history.
- **Payment Processing**: Secure checkout with payment gateway integration.
- **Admin Panel**: Manage products, orders, and users (if applicable).

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React (or Next.js), Tailwind CSS (or Bootstrap)
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Payment Gateway**: Stripe
- **Version Control**: Git, GitHub

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Arshdeep-13/eCommerce.git
   ```
2. Navigate into the project directory:
   ```bash
   cd eCommerce
   ```
3. Install dependencies for both the frontend and backend:
   ```bash
   npm install
   cd Foody
   npm install
   cd ../Backend
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## Usage

1. Sign Up / Login: Create a new account or log in to an existing one.
2. Browse Products: Explore products by categories or search for specific items.
3. Add to Cart: Add items to your cart and manage quantities.
4. Checkout: Review your cart and proceed to secure checkout.
5. Order History: After placing an order, you can view your order history in your account.

## API Documentation

The backend API is RESTful and includes endpoints for:

1. User Authentication: POST /api/auth/login, POST /api/auth/register
2. Product Management: GET /api/products, GET /api/products/:id
3. Cart Management: POST /api/cart, GET /api/cart
4. Order Management: POST /api/orders, GET /api/orders
5. Payment Processing: POST /api/payment/checkout
