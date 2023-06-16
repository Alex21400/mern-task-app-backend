const express = require('express')
const connectDB = require('./config/connectDB')
const dotenv = require('dotenv').config()
const cors = require('cors')
const taskRouter = require('./routes/taskRoutes')

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use('/api/tasks', taskRouter)


// Routes
app.get('/', (req, res) => {
    res.send('<h2>Welcome to the Home Page</h2>')
})

const PORT = process.env.PORT || 5000

// Makes sure connectDB is run first before the server
const startServer = async () => {
    try {
        await connectDB()

        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`)
        })
    } catch(error) {
        console.log(error)
    }
}
startServer()