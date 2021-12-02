require('dotenv').config({path: "./config.env"})
const express = require('express')
const cors = require('cors')
const authRoute = require('./routes/auth')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
