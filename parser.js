/**
 * Created by programulya on 3/24/15.
 */

'use strict';

module.exports.parse = function (exp) {
    var reg = /(?:[$_][0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/ig;

    exp = exp.replace(reg);

    try {
        return eval(exp);
    } catch (ex) {
        console.log('Expression cannot be computed');
    }
};