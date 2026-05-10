const EventEmitter = require('events');

//creating an instance of EventEmitter
const emitter = new EventEmitter();

//listener
emitter.on('birthday', () => {
    console.log('Happy Birthday!');
})

//emitting an event
emitter.emit('birthday');

//listener with parameters
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
})

//emitting an event with parameters
emitter.emit('greet', 'Alice');

//listener for multiple events
emitter.on('event1', () => {
    console.log('Event 1 triggered');
})

emitter.on('event2', () => {
    console.log('Event 2 triggered');
})

//emitting multiple events
emitter.emit('event1');
emitter.emit('event2');

//removing a listener
const listener = () => {
    console.log('This will be removed');
}

emitter.on('removeEvent', listener);
emitter.emit('removeEvent'); // This will trigger the listener

emitter.removeListener('removeEvent', listener);
emitter.emit('removeEvent'); // This will not trigger the listener