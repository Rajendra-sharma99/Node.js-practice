// const express = require('express');
// const multer = require('multer');
// const app = express();


// const upload = multer({
//     storage: multer.diskStorage({
//         // cb means callback
//         destination: function (req, file, cb) {
//             cb(null, "uploads");
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file");

// app.post('/upload', upload,(req, res) => {
//     res.send("file uploded");
// });


// app.listen(5000, () => {
//     console.log("App is running on port 5000");
// })




const express = require('express');
const multer = require('multer');
const fs = require('fs'); // require the 'fs' module for file system operations
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            const uploadDir = 'uploads'; // specify the directory name
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir); // create the directory if it doesn't exist
            }
            cb(null, uploadDir);
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("user_file");

app.post('/upload', upload, (req, res) => {
    res.send("file uploaded");
});

app.listen(5000, () => {
    console.log("App is running on port 5000");
});
