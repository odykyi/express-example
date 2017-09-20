
/**
 * Module dependencies.
 */

var app = require('./app');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('../db/models');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || 3001;
app.set('port', port);
/**
 * Create HTTP server.
 */
var server = http.createServer(app);

// models.sequelize.sync({force:false}).then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port, function() {
    debug('Express server listening on port ' + server.address().port);
  });
  server.on('error', onError);
  server.on('listening', onListening);
// });


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}