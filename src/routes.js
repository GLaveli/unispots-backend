const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');
const CreateUser = require('./controllers/CreateUser');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const IndexController = require('./controllers/IndexController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/create', CreateUser.store);
routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/booking', BookingController.store);


routes.get('/', IndexController.indexMessage);


module.exports = routes;