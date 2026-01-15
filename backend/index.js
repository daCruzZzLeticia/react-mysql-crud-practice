import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.get('/', (req, res) => {
    res.json('Olá, esse é o back-end')
})

app.get('/books', (req, res) => {
    const q = 'SELECT * FROM books'
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log('conectado ao back-end!')
})
