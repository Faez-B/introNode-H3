const Logger = require('./defEmitter');

const logger = new Logger();

logger.on('messageRecu', function(payload) {
    console.log("Message reçu , payload: " , payload);
})

module.exports = logger;