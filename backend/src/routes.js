const express = require('express');
const { register, login } = require('./controllers/authController.js');
const { getMechanics, getMechanicDetails } = require('./controllers/mechanicController.js');
const { requestAssistance, confirmAssistance } = require('./controllers/requestController.js');

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.get('/mechanics', getMechanics);
route.get('/mechanics/details', getMechanicDetails);
route.post('/request', requestAssistance);
route.post('/confirm', confirmAssistance);

module.exports = route;