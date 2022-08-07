import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'

dotenv.config()

// connect with MongoDB database
connectDB()


const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('API is running')
})

// user routes
app.use('/api/users', userRoutes)


// error middlewares
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message
    })
})



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT}`))