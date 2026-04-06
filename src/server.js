require('dotenv').config
const express = require('express');
const app = express();

// default port digunakan 5000
// backend dev sila buat .env file dalam root directory kalau nak tukar port number
const PORT = process.env.PORT || 5000

// health check endpoint 
app.get('/health', (req, res) =>  {
    res.status(200).json({
        status: 'UP',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})