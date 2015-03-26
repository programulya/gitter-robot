/**
 * Created by programulya on 3/23/2015.
 */

'use strict';

var gitter = require('node-gitter');
var parser = require('./parser');
var config = require('./../config');

var chat = new gitter(config.token);
var roomId = process.argv.slice(2)[0];

chat.currentUser()
    .then(function(user) {
        console.log('Your login is:', user.username);
    });

chat.rooms.join(roomId, function(error, room) {
    if (error) {
        console.log('Error during to joining the room: ', error);
        return;
    }

    console.log('Your room is: ', room.name);

    var events = room.listen();

    events.on('message', function(message) {
        var startExp = 'calc ';
        if (message.text.indexOf(startExp) >= 0) {
            var exp = message.text.substring(startExp.length, message.text.length);
            var result = parser.calc(exp);

            if (result) {
                room.send(exp + '=' + result);
            }
        }
    });
});


