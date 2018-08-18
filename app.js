console.log('hiii we are going on right direction');
var express = require('express');
var app = express();

//a middleware function with no mount path. The function is executed every time the app receives a request
app.use(function(req,res,next){
	 console.log('Time:', Date.now())
	next();
});



var index = require('./routes/index');
app.get('/',index,function(req,res){
	res.send('hello we are going in right direction');
});

// what a http req contains
var myhttprequest = require('./routes/myhttprequest');
app.get('/myhttprequest',myhttprequest);



//To skip the rest of the middleware functions from a router middleware stack, call next('route') to pass control to the next route. NOTE: next('route') will work only in middleware functions that were loaded by using the app.METHOD() or router.METHOD() functions.
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') next('route')
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // send a regular response
  res.send('regular')
})

// handler for the /user/:id path, which sends a special response
app.get('/user/:id', function (req, res, next) {
  res.send('special')
})

//Define error-handling middleware functions in the same way as other middleware functions, except with four arguments instead of three, specifically with the signature (err, req, res, next)):
//define error-handling middleware last, after other app.use() and routes calls
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000);