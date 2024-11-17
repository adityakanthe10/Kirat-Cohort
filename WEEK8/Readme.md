# Paytm-like Application

This is a **Paytm-like application** built using the MERN stack, providing functionalities like user signup, account creation, balance management, and money transfer.

## Features

- **Signup & Signin**: Users can create an account and log in securely using JWT authentication.
- **Dashboard**: Displays user balance and available contacts for money transfer.
- **Send Money**: Users can transfer money to other accounts.
- **Responsive Design**: Simple, user-friendly interface built using React.

---

## Tech Stack

### Backend
- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing user data and account details.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Mongoose**: ORM for MongoDB.

### Frontend
- **React**: Frontend library for building UI.
- **React Router**: For navigation between pages.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the frontend.

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system.
- MongoDB running locally or hosted on a cloud service like MongoDB Atlas.

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd  backend
2. Install dependencies:
    ```bash
    npm install
3. Create a .env file:
    ```bash
    PORT=3000
    MONGO_URI=<Your MongoDB connection string>
    JWT_SECRET=<Your JWT secret>
4. Start the server:
    ```bash 
    npm start

