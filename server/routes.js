const Router = require('express').Router() ;
const controller = require('./controller') ;

Router.post('/auth' , controller.auth) ;
Router.get('/user' , controller.get) ;

module.exports = Router ;