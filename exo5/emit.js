const EventEmitter = require('events');

// class MyEmitter extends EventEmitter {}
// const myEmitter = new MyEmitter();


const myEmitter = new EventEmitter();

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
	// Ce que je pense qui pourrait marcher
	switch (event) {
		case 'event' :
			myEmitter.on('event', () => {
				console.log('E once');
			});
			break;

		case 'click':
			// Insert a new listener in front
			myEmitter.on('click', () => {
				console.log('C once');
			});
			break;

		case 'hover':
			// Insert a new listener in front
			myEmitter.on('hover', () => {
				console.log('H once');
			});
			break;

		default:
			break;
	}
	// ---- Fin ce que je pense qui pourrait marcher

	// Partie documentation
		// if (event === 'event') {
		//     // Insert a new listener in front
		//     myEmitter.on('event', () => {
		//     	console.log('B');
		//     });
		// }
	// ---- Fin partie documentation

	// À quoi sert le listener si on ne l'utilise pas ????

});

myEmitter.on('event', () => {
	console.log('E');
});

myEmitter.on('click', () => {
	console.log('C');
});

myEmitter.on('hover', () => {
	console.log('H');
});

myEmitter.emit('event');
myEmitter.emit('click');
myEmitter.emit('hover');