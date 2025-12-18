var express = require('express');
var app = express();

var loginroute = require('./Routes/login');
var signuproute = require('./Routes/signup');

app.get('/', (req, res) => {
    res.send('Hello Lab');
});

app.use('/login', loginroute);
app.use('/signup', signuproute);

app.get('/display/:uname/:pwd', (req, res) => {
    console.log(req.params);
    res.send('Values Received : ' + req.params.uname);
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
