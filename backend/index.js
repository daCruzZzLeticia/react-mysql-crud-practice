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

app.listen(8800, () => {
    console.log('conectado ao back-end!')
})
