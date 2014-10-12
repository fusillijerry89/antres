var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/*+json' }));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var Firebase = require('firebase')
var firebase = new Firebase("https://luminous-fire-2605.firebaseio.com");

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.send('Splash page.')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

app.get('/api/:var', function(req, res, next) {
    res.send(req.params.var);
    return next();
});

app.post('/api/users/add', urlencodedParser, function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    
    res.send(req.body.email);
    
    return next();
});
