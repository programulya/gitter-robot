# Gitter robot [![Build Status](https://travis-ci.org/programulya/gitter-robot.svg?branch=master)](https://travis-ci.org/programulya/gitter-robot) [![Join the chat at https://gitter.im/programulya/gitter-robot](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/programulya/gitter-robot?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Description

Gitter robot for math expressions including (),*,/,+,- in public gitter rooms.

![alt tag](https://s-media-cache-ak0.pinimg.com/236x/c9/65/f4/c965f46a96eb3f324f63c0127d06172e.jpg)

## Installation

1. Modify token in `config.json`
2. Install packages with `npm install`
3. Run with `node source/index.js [roomId]`

## Examples

1. Go to https://gitter.im/programulya/gitter-robot
2. Put message `calc 1+2` in the room
3. Gitter robot should answer `1+2=3`

Note! Gitter robot rounds result to 2 digits after comma. 
For example, for message `calc 1+2/3` answer will be `1+2/3=1.67`

## Dependencies

- node-gitter (1.2.8)
- mocha (1.17.0)
- should (3.0.1)

## Tests

Run unit tests with: `npm test`

## Deploy

Hosted on DigitalOcean using room `programulya/gitter-robot`

## License

MIT
