const express = require('express');
const app = express();

// Middleware for checking age criteria
function checkAge(req, res, next) {
    const { age } = req.query;

    // Assuming age is provided as a query parameter
    if (!age || isNaN(age)) {
        return res.status(400).send('Age parameter is missing or invalid');
    }

    if (parseInt(age) < 18) {
        return res.status(403).send('You must be at least 18 years old to access this resource');
    }

    next();
}

// Middleware for checking password
function checkPassword(req, res, next) {
    const { password } = req.query;

    // Assuming password is provided in request body
    if (!password || password !== 'supersecret') {
        return res.status(401).send('Incorrect password');
    }

    next();
}

// Protected route using both middlewares
app.get('/protected', checkAge, checkPassword, (req, res) => {
    res.send('You have access to the protected resource');
});

// Example route without middleware
app.get('/public', (req, res) => {
    res.send('This is a public resource');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// http://localhost:3000/protected/?age=30&password=supersecret    using This I can see Protected Things