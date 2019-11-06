const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const App =require('./src/App')
var path = require('path');

const app = express();
app.engine('handlebars' ,exphbs());
app.set('view engine' , 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post('/send', (req, res) => {
	
	console.log(req.body);
});

//Listening to port 8080
app.listen(3000, '0.0.0.0', function(err, result) {
    if (err) {
        console.error("Error ", err);
    }
    console.log("Server started at 3000");
});
