/**
 * Created by programulya on 3/23/2015.
 */

'use strict';

var Gitter = require('node-gitter');
var parser = require('./parser');
var gitter = new Gitter('f5e5b956482e38436dd8d9870967e3d654198d2b');

gitter.currentUser()
    .then(function (user) {
        console.log('Your login is:', user.username);
    });

gitter.rooms.join('programulya/Aleph.js', function (error, room) {
    if (error) {
        console.log('Error during to joining the room: ', error);
        return;
    }

    console.log('Room: ', room.name);

    var events = room.listen();

    events.on('message', function (message) {
        var startExp = 'calc ';
        if (message.text.indexOf(startExp) >= 0) {
            var exp = message.text.substring(startExp.length, message.text.length);
            var result = parser.calc(exp);

            if (result) {
                room.send(exp + '=' + result.toFixed(4));
            }
        }
    });
});


