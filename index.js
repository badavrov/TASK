const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const expressValidator = require('express-validator');
const path = require('path');
const app = express();
const passport = require('passport');
const cors = require('cors');
var expressSession = require('express-session');
var proxy = require('http-proxy-middleware');


app.use('/api', proxy({target: 'http://localhost:1337', changeOrigin: true}));

// Express and Passport Session
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//BODYPARSER AND VALIDATOR
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())


app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

//DB CONNECTION
require('./API/Core/Mongo/Connection')

//DBSchemas
require('./API/Users/Schema/Schema')
require('./API/Positions/Schema/Schema')

//API ROUTES
app.use(require('./API/Users/Routes/Routes')) 
app.use(require('./API/Positions/Routes/Routes')) 


//FRNT

app.get('/doc', function(request, response){
    response.sendfile(__dirname, '/DOCUMENTATION.md.html');
});
app.use(express.static(path.join(__dirname, 'assets')));

    
const port = process.env.PORT || 1337;
app.listen(port, () => console.log('Server listening on: ' + port));