const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const con = require('./connection')
require('dotenv').config()

// import routes
const authRoutes = require('./routes/authRoute')
const orderRoutes = require('./routes/orderRoute')




// app
const app = express()
 


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())
// route middle ware
app.use('/api',authRoutes);
app.use('/api', orderRoutes)



// create node server
const port = process.env.PORT||8000;
app.listen(port, ()=>{
    console.log(`Node Server is running on PORT: ${port}`);
})