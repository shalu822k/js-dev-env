//This file isnt transpiled, so must use commonJS and ES5

//Register Babel to transpile before our tests run
require('babel-register');

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};
