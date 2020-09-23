const express = require('express')
const mongoose = require('mongoose')
// import to make .env file readable
require('dotenv/config')
// import routes
const orderRoutes = require('./routes/order')
const itemsRoutes = require('./routes/items')

const app = express()

app.use(express.json())
app.use('/order', orderRoutes)
app.use('/items', itemsRoutes)
// ROUTES


// Connect to db
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
mongoose.connect(
    process.env.DB_CONNECTION, 
    dbOptions,
    ).then(
        () => console.log('Connected to DB!'),
        error => console.log(error)
    )

// Ho to start listening \
app.listen(8080)

console.log("Hello world")