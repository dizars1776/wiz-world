import express from 'express'

const app = express()
const baseUrl = 'http://localhost'
const port = 9090

app.listen(port, () => {
    console.log(`Wizz-World app is listening on port ${baseUrl}:${port}`)
})
