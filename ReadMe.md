# Simple User Authentication API:

This project is a basic user authentication REST API built using Node.js, Express.js, and MongoDB.
It provides core authentication features such as user registration, login, and forgot password, with all endpoints documented using Swagger (OpenAPI 3.0).

The main purpose of this project is to understand how authentication APIs are structured and how Swagger can be used to document and test APIs effectively.

# About the Project:

This API was created as part of backend practice to implement real-world authentication flows in a simple and clean way.
Instead of focusing on advanced security features, the project emphasizes:

1.Clear API structure
2.Proper request and response handling
3.Clean Swagger documentation
4.Easy testing through Swagger UI

It is suitable for learning purposes, internship submissions, and backend fundamentals.

# Features

1.User registration using email and password
2.User login authentication
3.Forgot password API (demo implementation)
4.RESTful POST APIs
5.Swagger UI for API documentation and testing
6.OpenAPI 3.0 specification support

# Tech Stack Used

1.Backend: Node.js, Express.js
2.Database: MongoDB with Mongoose
3.API Documentation: Swagger UI (OpenAPI 3.0)
4.Other Tools: dotenv, nodemon

# Swagger UI: http://localhost:3000/docs

# Available API Endpoints

I. Register User

1.Method: POST
2.Endpoint: /api/auth/register
3.Purpose: Creates a new user account

II. Login User

1.Method: POST
2.Endpoint: /api/auth/login
3.Purpose: Authenticates a user using valid credentials

III. Forgot Password (Demo)

1.Method: POST
2.Endpoint: /api/auth/forgot-password
3.Purpose: Simulates a password reset request

# Output Image : "Output/localhost_3000_docs_.png"