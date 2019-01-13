require('./models/db');

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const path = require('path');
const exphs = require('express-handlebars');
const employeeController = require('./controller/employeeController');
var app = express();
app.set('views',path.join(__dirname,'/views/'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.engine('hbs',exphs({extname : 'hbs',defaultLayout : 'mainLayout',layoutDir : __dirname+'/views/layouts/'}));
app.set('view engine','hbs');
app.listen(port, () =>{
    console.log('Express server started at port:'+port);
});

app.use('/employee',employeeController);