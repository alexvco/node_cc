const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Another Event listener
myEmitter.on('esh', () => console.log('Esh Fired!'));

// Init event
myEmitter.emit('event'); // Event Fired!
myEmitter.emit('esh'); // Esh Fired!
myEmitter.emit('event'); // Event Fired!
myEmitter.emit('event'); // Event Fired!




// Another event example

const uuid = require('uuid');

console.log(uuid.v4()); // generates random uuid, ie: 15af9dbc-818c-461d-bb8d-5f7c1de81119

class Logger extends EventEmitter {
	// This is an instance method for new Logger();
  log(msg) {
    // Call event ('message' is the event here)
    this.emit('message', { id: uuid.v4(), msg }); // this is the same as: this.emit('message', { id: uuid.v4(), msg: msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World'); // Called Listener { id: '402ce232-81d8-4dc0-b06e-777bae7ac37e', msg: 'Hello World' }
logger.log('Hi'); // Called Listener { id: 'a8b4346e-2210-4054-9f16-e672c7ed134d', msg: 'Hi' }
logger.log('Hello'); // Called Listener { id: '03f02456-05be-42e8-84f0-69c11c03149c', msg: 'Hello' }