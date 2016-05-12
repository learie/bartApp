var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var request = require('request');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var WebSocket = require('ws');



var auth = 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0YjAzZDcyZS05MDI3LTRiMTUtOGE2Zi1lNDRjZjQwZjUxY2MiLCJzdWIiOiJ0ZXN0Iiwic2NvcGUiOlsidWFhLnJlc291cmNlIiwib3BlbmlkIiwidWFhLm5vbmUiLCJpZS1wZWRlc3RyaWFuLnpvbmVzLjM1MjQ5MDc1LTdlYzItNDQzZS04NWI2LTcyZTEwMGFhMjRkNC51c2VyIl0sImNsaWVudF9pZCI6InRlc3QiLCJjaWQiOiJ0ZXN0IiwiYXpwIjoidGVzdCIsImdyYW50X3R5cGUiOiJjbGllbnRfY3JlZGVudGlhbHMiLCJyZXZfc2lnIjoiY2NmMGU2ODEiLCJpYXQiOjE0NjMwMDUzNDQsImV4cCI6MTQ2MzA0ODU0NCwiaXNzIjoiaHR0cHM6Ly8zNmI3NmNhMi1iZDFkLTRhM2MtODk5NS03Y2VjYjU4ZDFmNDEucHJlZGl4LXVhYS5ydW4uYXdzLXVzdzAyLXByLmljZS5wcmVkaXguaW8vb2F1dGgvdG9rZW4iLCJ6aWQiOiIzNmI3NmNhMi1iZDFkLTRhM2MtODk5NS03Y2VjYjU4ZDFmNDEiLCJhdWQiOlsidGVzdCIsInVhYSIsIm9wZW5pZCIsImllLXBlZGVzdHJpYW4uem9uZXMuMzUyNDkwNzUtN2VjMi00NDNlLTg1YjYtNzJlMTAwYWEyNGQ0Il19.BNkotsLVDA1x83cNzPr_lydROjQd5T4wkfyPc_A376N2Rap4yOBV0rzVV61xNF3t5MXiw1egS_9o8ROlkG8a7bzWbFpTUzJZxg6A7dZNXxmMMdyXLDP9sDZXo7PkXZM7dc13YEK8LWq7gkBMvvReacN9eK4D_oe0J1Lw1ajLMsZs50BOwX7GBvQRfK4PWRCcAsE6aR5IURC0goGghxO1G2iv_TolNsMg6f4oZx2kNeL--nk0r26PqnPMCcGcMLTnG4vnGQEL4C4OukRIBNxIqsOYQzNQoZXRX27KNqFlS8hrdwID3BZSezalVhaGboJ4bd1vkmcm6-hbJZeDzBh9Sw';
var zone = '35249075-7ec2-443e-85b6-72e100aa24d4';
var wsurl;

request({
  url: 'https://ie-pedestrian.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000027/live-events?event-types=SFIN,SFOUT',
  method: 'GET',
  headers: {
    "authorization": auth,
    "predix-zone-id": zone
  }
}, function(err, resp, body){
  wsurl = JSON.parse(body).url;
  // console.log(wsurl)

  var headers = {
  "authorization": auth,
  "predix-zone-id": zone,
  "origin": "https://www.predix.io"
  };

  var socket = new WebSocket(wsurl, {headers: headers});

  socket.on('open', function(){
    console.log('socket open, asset 27');
  })

  socket.on('message', function(data){
    var data = JSON.parse(data);
    var eventType = data["event-type"] == 'SFIN' ? 'Entering' : 'Exiting';
    console.log('Montgomery: ' + data.measures[0].value + ' ' + eventType);
  })
})

request({
  url: 'https://ie-pedestrian.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000028/live-events?event-types=SFIN,SFOUT',
  method: 'GET',
  headers: {
    "authorization": auth,
    "predix-zone-id": zone
  }
}, function(err, resp, body){
  wsurl = JSON.parse(body).url;
  console.log(wsurl)

  var headers = {
  "authorization": auth,
  "predix-zone-id": zone,
  "origin": "https://www.predix.io"
  };

  var socket = new WebSocket(wsurl, {headers: headers});

  socket.on('open', function(){
    console.log('socket open, asset 28');
  })

  socket.on('message', function(data){
    var data = JSON.parse(data);
    var eventType = data["event-type"] == 'SFIN' ? 'Entering' : 'Exiting';
    console.log('Embarcadero: ' + data.measures[0].value + ' ' + eventType);
  })
})

request({
  url: 'https://ie-pedestrian.run.aws-usw02-pr.ice.predix.io/v1/assets/1000000029/live-events?event-types=SFIN,SFOUT',
  method: 'GET',
  headers: {
    "authorization": auth,
    "predix-zone-id": zone
  }
}, function(err, resp, body){
  wsurl = JSON.parse(body).url;
  console.log(wsurl)

  var headers = {
  "authorization": auth,
  "predix-zone-id": zone,
  "origin": "https://www.predix.io"
  };

  var socket = new WebSocket(wsurl, {headers: headers});

  socket.on('open', function(){
    console.log('socket open, asset 29');
  })

  socket.on('message', function(data){
    var data = JSON.parse(data);
    var eventType = data["event-type"] == 'SFIN' ? 'Entering' : 'Exiting';
    console.log('Oakland: ' + data.measures[0].value + ' ' + eventType);
  })
})


//
//
//
//
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', routes);
// app.use('/users', users);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });
//
//
// module.exports = app;
