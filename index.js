var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser');

// configure app to use bodyParser() which will get the data from a POST
app.use(require('express-method-override')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;

// register routes
app.use('/', require('./lib/routes').router);

// start server
app.listen(port);
console.log('--Server started at port: '+port+"--");
