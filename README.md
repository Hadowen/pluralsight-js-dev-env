# pluralsight-js-dev-env
JavaScript development environment from Pluralsight course with Cory House

Editors:
This course uses Visual Studio Code for writing JavaScript. CSS, HTML, etc.  This is what I am using as well.  Settings for this are stored in the .editorconfig file.

Node and npm:
These are "package managers" that help with managing library dependencies such as JQuery, etc.  These settings are stored in the package.json file.

Express:
This is the development web server we are using to test our code.

Localtunnel:
This is used to share your app with others during the development process.

npm Scripts:
Since we are using npm above for package management, it just makes sense to use npm scripts for automating some tasks.  These can be found in the "scripts": section of the package.json file.

Babel:
This is used to allow for the use of advanced JavaScript features that aren't necessarily a part of Node yet.  We implement this in the "scripts": section of the package.json file by using babel-node as opposed to just specifying node to run our code.  This will also convert (transpile) our code down to ES5 for wider browser support.

Webpack:
This is used to bundle up our code, including not only JS but also CSS and HTML to name a few.  This also allows us to implement ES6 modules and use sourcemaps to debug our code in the browser.

ESLint:
This is a tool for automatically enforcing consistency in coding and helping to avoid mistakes.  This includes the use of eslint-watch which allows you to add specific files to watch for mistakes.  If you want to use experimental JS features, then you would need to add and configure babel-eslint.  Configuration for this is contained in the .eslintrc.json file.  For starting out, we are using the recommended/default rules.  The rule of "no-console": 1 will set a warning for the use of console.log.  We also added a script in the package.json file to call eslint-watch and watch the webpack.config.* file(s) and everything in the scr and buildScripts directories.  the addition of the lint:watch script in the package.json file will result in the files being checked for errors when saved.

Mocha:
This is used for automated testing.  This is confined to unit testing (i.e. testing the returned values from our functions).  This doesn't come with an assertion library (i.e. expect(2+2).to.equal(4)) so we will be using Chi because it's popular and has a lot of styles available.  JSDOM allows for browser testing without actually launching a browser.  Cheerio is like jQuery for the server.  Files are being stored alongside our js files.  These tests should run whenever we save the files.
We've also included a script in the package.json file to run our tests and a second script (test:watch) to make sure the tests are run each time the project is run.
