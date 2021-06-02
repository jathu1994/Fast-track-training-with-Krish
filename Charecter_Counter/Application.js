var {countCharecters} = require('./CharecterCounter');
var {countCharectersAndSpace} = require('./CharecterSpaceCounter');

var sentance = " a   b    c";
console.log(countCharecters(sentance));
console.log("with spaces counted sp2 key indicate howmany time continuous 2 spaces present");
console.log(countCharectersAndSpace(sentance));