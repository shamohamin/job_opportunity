const express = require('express') ;
const bodyParser = require('body-parser') ;
const app = express() ;
const cors = require('cors');
const router = require('./server/routes') ;
app.use(bodyParser.json()) ;
app.use(cors()) ;
app.use('/api' , router) ;
app.use(bodyParser.urlencoded({ extended : false })) ;
app.listen(3500 , function(){
    console.log(`connection established in 3500`) ;
});