define(["require", "exports", "module", "../../../../../plugins/textDepend/test","a"], function(require, exports, module) {
var test = require('test');
var a = require('a');
test.assert(a.program() === exports, 'exact exports');
test.print('DONE', 'info');

});
