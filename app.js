// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); 
const app = express.Router();
const port = 5000;
app.use(bodyParser.json());
app.post('/add', async (req, res) => {
    try {
        const bookData = req.body;
        const connection = await db.getConnection()
        const [result, fields] = await connection.query(
            "INSERT INTO books (bookName, details, author, publication, quantity, price) VALUES (?, ?, ?, ?, ?, ?)",
            [
              req.body.bookName,
              req.body.details,
              req.body.author,
              req.body.publication,
              req.body.quantity,
              req.body.price,
            ]
          );
            connection.release();
        const bookId = result.insertId;
        res.json({ message: 'Book added successfully', book: { id: bookId, ...bookData } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error adding book to the database' });
    }
});
module.exports = app;