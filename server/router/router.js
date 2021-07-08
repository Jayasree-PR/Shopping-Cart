const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');


route.get('/mycart',services.displaycart);
route.get('/home',services.displayhome);
//route.get('/cart/:id',services.remove);

route.post('/addtocart',controller.create);
route.get('/addtocart',controller.find);
route.post('/cart/delete/:id',controller.delete);




module.exports=route;