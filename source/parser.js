/**
 * Created by programulya on 3/24/15.
 */

'use strict';

module.exports.calc = function(exp) {
    var reg = /(?:[$_][0-9$_]*)|(?:[;={}\[\]"'!&<>^\\?:])/ig;

    exp = exp.replace(reg);

    try {
        return Number(eval(exp).toFixed(2));
    } catch (ex) {
        console.log('Expression cannot be computed: ' + exp);
    }
};