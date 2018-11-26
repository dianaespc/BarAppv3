const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const establecimiento = require('./routes/establecimiento.route'); // Imports routes for the products
const promociones = require('./routes/promociones.route'); // Imports routes for the products
const app = express();

app.use("/vendor", express.static(__dirname + '/vendor'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/imagenes", express.static(__dirname + '/public/imagenes'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/establecimiento', establecimiento);
app.use('/promos', promociones);
app.use('/', routes);


// route pages

// Create an S3 client


// Set up mongoose connection
const mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// what port to run server on
app.listen(3001, function () {
  console.log('server started on port 3001');
});
