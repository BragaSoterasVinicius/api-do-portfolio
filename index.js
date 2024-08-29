const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Import CORS middleware

const app = express();
app.use(cors());

// Set up your database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
});

// API endpoint to get words with a filter
app.get('/api/words', (req, res) => {
    const searchTerm = req.query.word;

    // Construct your query with a WHERE clause
    const query = 'SELECT * FROM conteudo';
    
    // Execute the query with the searchTerm as the parameter
    db.query(query, [searchTerm], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
