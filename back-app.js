const express = require('express')
const app = express()
const port = 3000


app.use(express.json())

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://braianbiale.github.io');
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

count = 0

app.route('/info').post(function (req, res) {
    console.log("info", count++, req.body, '\n')
    res.send({
        status: 'SUCCESS'
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})