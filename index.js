/**
 * Created by programulya on 3/23/2015.
 */

var Gitter = require('node-gitter');
var gitter = new Gitter('f5e5b956482e38436dd8d9870967e3d654198d2b');

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as:', user.username);
    });

gitter.rooms.join('programulya/Aleph.js', function(err, room) {
    if (err) {
        console.log('Error during to joining the room: ', err);
        return;
    }

    console.log('Room: ', room.name);

    //room.send('Test!');

    var events = room.listen();

    events.on('message', function(message) {
        //TODO math expressions
        console.log('New message:', message.text);
    });
});

