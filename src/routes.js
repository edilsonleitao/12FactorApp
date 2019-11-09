const express = require('express');
const StudentController = require('./controllers/StudentController');

const routes = express.Router();

routes.get('/students', StudentController.index);
routes.get('/students/:id', StudentController.show);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.destroy);

module.exports = routes;