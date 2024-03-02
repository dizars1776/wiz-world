import express from 'express'
import morgan from 'morgan'
import housesRouter from './routes/housesRouter.js'

const app = express()
const baseUrl = 'http://localhost'
const port = 9090

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/houses', housesRouter)

app.listen(port, () => {
    console.log(`Wizz-World app is listening on port ${baseUrl}:${port}`)
})

