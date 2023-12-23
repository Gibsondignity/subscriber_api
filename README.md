# Subscriber API using Node.js, Express, and MongoDB

This is a simple RESTful API built with Node.js, Express, and MongoDB for managing subscribers. It allows you to perform CRUD (Create, Read, Update, Delete) operations on a subscriber collection in a MongoDB database.

## Requirements

- Node.js (version >= 14.0.0)
- MongoDB (Make sure MongoDB is installed and running locally or provide a connection string to a remote MongoDB instance)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/Gibsondignity/subscriber_api.git

    cd subscriber_api

    npm install

    
2. Connect to mongodb database

    PORT=3000  # Port number for the server
    MONGODB_URI=mongodb://localhost:27017/subscriberdb  # MongoDB connection URI


3. Start development server

    npm run devStart
    This will run the app in development mode with nodemon watching your files. Visit `http://localhost:${PORT}` to view the


4. API Endpoints
    
    GET /subscribers - Get all subscribers
    GET /subscribers/:id - Get a single subscriber by ID
    POST /subscribers - Create a new subscriber
    PUT /subscribers/:id - Update a subscriber by ID
    DELETE /subscribers/:id - Delete a subscriber by ID

5. Testing
    Request:

    GET http://localhost:3000/subscribers
    Content-Type: application/json

    {
        name: 'Gibson Dignity',
        subscribeToChanel: 'Youth Tech Hub'
    }


    Response:
    
    [
        {
            "_id": "609d9c8e6e4e543d88c3a636",
            "name": "John Doe",
            "email": "john@example.com",
            "subscribedToChannel": "News"
        },
        {
            "_id": "609d9c976e4e543d88c3a637",
            "name": "Jane Smith",
            "email": "jane@example.com",
            "subscribedToChannel": "Updates"
        }
    ]
