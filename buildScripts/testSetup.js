// This file isn't transpiled using Babel so must use CommonJS and ES5.

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Moca doesn't understand.
require.extensions['.css'] = function() {};
