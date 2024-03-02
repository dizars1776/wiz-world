import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import housesRouter from './routes/housesRouter.js'

const app = express()
const port = process.env.PORT || 9090;

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

app.use('/houses', housesRouter)

// Serve the built Next.js app statically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, '../client/out')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/out/index.html'));
});

app.listen(port, () => {
    console.log(`Wizz-World app is listening on port ${port}`)
})

