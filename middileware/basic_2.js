// const express = require('express');
// const app = express();

// // Middleware function 1 to log request method and URL
// app.use((req, res, next) => {
//    console.log("Hello From middileware function 1")
//   console.log(`${req.method} ${req.url}`);
//   next(); // Call the next middleware function
// });

// // Middleware function 2 to log the time of the request
// app.use((req, res, next) => {
//   req.requestTime = Date.now();
//   console.log("Hello From middileware function 2")
//   next(); // Call the next middleware function
// });

// // Route handler
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// // Route handler to demonstrate accessing data set by middleware
// app.get('/time', (req, res) => {
//   res.send(`Request received at: ${req.requestTime}`);
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


