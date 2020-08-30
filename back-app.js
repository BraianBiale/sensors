const express = require('express')
const app = express()
const port = 3000

var data;

app.use(express.json())

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/', (req, res) => {
    res.send('Back Device')
})

app.route('/info').post(function (req, res) {
    console.log("info", req.body, '\n')
    data = req.body;
    res.send({
        status: 'SUCCESS'
    });
})

app.get('/chart-data', (req, res) => {
    res.send(JSON.stringify(data));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
