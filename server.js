const express = require('express');
const mysql = require('mysql2');
const fs = require('fs')
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
const inquire = require('inquirer')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Candyland123',
      database: 'office_db'
    },
    console.log(`Connected to the office_db database.`)
  );

app.get('/api/movies', (req,res) => {
    db.query('SELECT * FROM movies', (err,rows) =>{
        
        res.json(rows);
    })
})

app.get('/api/movie-review', (req,res) => {
    db.query(`SELECT
             FROM movies.movie_name AS movie,
             reviews.review
             FROM
             reviews
             LEFT JOIN movies ON reviews.movie_id = movie.id
             ORDER BY movies.movie_name`, (err,rows) =>{
        
        res.json(rows);
    })
})


app.post("/api/new_movie", (req, res)=> {
    const params = req.body.movie_name;
    db.query(`INSERT INTO movies (movie_name) VALUES (?)`, params, (err, rows) => {
        if (err) throw err; 
        res.json(rows);
    })
})
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, ()=> {
    console.log(`CHECK THIS HYPE MOVIE LIST HERE: http://localhost:${PORT}`)
})