const {Router} = require('express');
const multer = require('multer');
const ProductController = require('./controllers/ProductController');

const routes = Router();
const multerConfig = multer();


routes.post('/products', multerConfig.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

module.exports = routes;