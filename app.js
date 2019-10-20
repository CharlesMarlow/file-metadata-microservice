    const express = require('express');
    const cors = require('cors');
    const bodyParser = require('body-parser');
    const multer = require('multer');

    const upload = multer({
        dest: 'uploads/',
    });
    const port = process.env.PORT || 3000;
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());

    // Send static file to browser
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/views/index.html");
    });

    // Post file upload
    app.post("/upload", upload.single('upfile'), (req, res) => {
        return res.json(req.file);
    });

    app.listen(port, () => {
        console.log(`App is listening on port ${3000}. This is great news!`);
    });
