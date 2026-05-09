const add = require('./local1');

console.log(add(2, 3));

//module is a variable which is available in every file in nodejs by default. It is an object which has a property called exports. We can use this property to export any variable, function, class etc. from a file and use it in another file by requiring it.