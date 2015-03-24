/**
 * Created by programulya on 3/23/2015.
 */

var Gitter = require('node-gitter');
var math = require('mathjs');
var gitter = new Gitter('f5e5b956482e38436dd8d9870967e3d654198d2b');

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as:', user.username);
    });

gitter.rooms.join('programulya/Aleph.js', function(error, room) {
    if (error) {
        console.log('Error during to joining the room: ', error);
        return;
    }

    console.log('Room: ', room.name);

    room.send('calc 12 / (2.3 + 0.7)');

    var events = room.listen();

    events.on('message', function(message) {
        console.log(message.text.indexOf('calc'));

        if (message.text.indexOf('calc ') >= 0)
        {
            //math.eval(message.text.indexOf(5,));
            console.log('Calc message:', message.text);
        } else {
            console.log('No calc message:');
        }
    });
});

