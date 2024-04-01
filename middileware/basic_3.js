const express = require('express');
const app = express();

// Middleware function to log incoming requests
const requestLoggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Middleware to parse JSON bodies into JavaScript objects
app.use(express.json());

// Registering the request logger middleware globally
app.use(requestLoggerMiddleware);

// Route to handle GET requests
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route to handle POST requests
app.post('/submit', (req, res) => {
    console.log('Received form data:', req.body);
    res.send('Form data received!');
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
