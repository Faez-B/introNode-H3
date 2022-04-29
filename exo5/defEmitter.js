const EventEmitter = require('events');

class Logger extends EventEmitter {

    // Fonction custom pour emettre
    log(payload) {
        console.log("Event envoyé");
        this.emit("messageRecu", payload);
    }
}

module.exports = Logger;