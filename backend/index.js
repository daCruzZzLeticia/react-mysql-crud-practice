import express from 'express'
import mysql from 'mysql'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

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

app.post('/books', (req, res) => {
    const q = 'INSERT INTO books (`title`, `description`, `cover`) VALUES (?)'
    const values = [req.body.title, req.body.description, req.body.cover]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('livro criado com sucesso!')
    })
})

app.listen(8800, () => {
    console.log('conectado ao back-end!')
})
