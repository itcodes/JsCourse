"use strict";

var _foo = _interopRequireDefault(require("./foo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _foo.default();
console.log(f.bar());
console.log(Math.pow(10, 3));