# gitter-robot [![Build Status](https://travis-ci.org/programulya/gitter-robot.svg?branch=master)](https://travis-ci.org/programulya/gitter-robot)

## Description

Gitter robot for math expressions including (),*,/,+,- in public gitter rooms.

![alt tag](https://s-media-cache-ak0.pinimg.com/236x/c9/65/f4/c965f46a96eb3f324f63c0127d06172e.jpg)

## Installation

1. Modify token use config.json
2. Run with: `node source/index.js [roomId]`

## Examples

1. Go to https://gitter.im/[roomId]
2. Put message `calc 1+2` in the room
3. Gitter robot should answer `1+2=3`

## Tests

Covered by unit tests using:
- mocha (1.17.0)
- should (3.0.1)

## Contributors

Programulya <julsavinkova@gmail.com>.

## License

MIT