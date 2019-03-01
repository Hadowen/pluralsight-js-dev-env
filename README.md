# pluralsight-js-dev-env
JavaScript development environment from Pluralsight course with Cory House

When trying to learn JavaScript, I really struggled with understanding all the pieces involved.  This course REALLY helped a lot!  It talked about the different aspects of the development environment plus talked about what some of the modules are in the node_modules folder.


So how do you use all this stuff?
Running 'npm start' will start the code in dev mode and display the test app.

Running 'npm run share' will start the code and provide a public URL with which others can use to navigate to your site.

Running 'npm build -s' in the terminal windsow of Microsoft Studio Code (what I used to write this)
will build the project and run it.  Once the build is complete, the browser will open to 'localhose:3000'
```````````````````````````````````````````````````````````````````````````````````````````````````````````


Code Editors:
This course uses Visual Studio Code for writing JavaScript. CSS, HTML, etc.  This is what I am using as well.  Settings for this are stored in the .editorconfig file.

Node and npm:
These are "package managers" that help with managing library dependencies such as JQuery, etc.  These settings are stored in the package.json file.

Express:
This is the development web server we are using to test our code.  This can also be used in production which is why it was choosen.

Localtunnel:
This is used to share your app with others during the development process.  It creates a public URL that anyone with internet access can use to see your app.

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

Continuous Integration:
This course also talked about using a continuous integration server.  I've got the basic setup done for this but haven't actually signed up for a server.  The course recommends both Travis CI (travis-ci.org) and Appveyor (www.appveyor.com).  Travis CI is Lynux based and Appveyor is Windows based.  They recommended both to ensure that your code would run on both MAC and Windows.  Both are free and you can sign in using your GitHub account.

HTTP Calls:
For this, we are using Fetch since we will only need to make calls to the browser as opposed to just the server or both.  If we were just doing server-side code, request would be the recommended library to use.  Isomorphic Fetch would be good for use with both the server and browser.

JSON Schema Faker:
It can also be helpful to mock HTTP for testing purposes or to work when offline, etc.  JSON Schema Faker allows to mock up the APIs we will eventually use and populate them with test data (using faker.js, chance.js, and randexp.js).  Running npm run generateMockData in the terminal window will generate our fake data for us and create a db.json file.

JSON Server:
This allows us to use the data created above via our "fake" APIs.  This will use the sample data created above and create an API for us to use.  Run this by executing npm run start-mockapi in the terminal window.  A script was added to the package.json file to automatically regenerate the fake data (prestart-mockapi) and another parameter was added to the app start command to automatically start the mock api each time we restart the app.

Project Structure:
This section is here to talk a bit about, yes, structuring your project.  Many times you will see developers put JavaScript in a <script></script> tag in the *.html file.  Doing that won't allow for testing, linting, reusing, transpiling, or explicitly importing dependencies.  Therefore, JavaScript belongs in an *.js file.  Don't dynamically generate JS to handle different users, dynamically generate JSON instead that your JS code can use to customize the interface for your user.  Also, organize files by feature as opposed to file type.  Finally, extract business logic to POJOs (plain old JavaScript objects) as opposed to framework-specific files.

Automated Production Build:
Minification - Speeds page loads and saves bandwidth.  Code can still be debuged via sourcemaps discussed above.

WebpackMd5Hash:
This will insert a hash code in the filename so that when your code changes, the hash will also change so that the cache of your JavaScript can be "busted" to account for the new code.  This can be seen in the dist folder of this project.

ExtractTextPlugin:
This plugin will pull the css ouf of the JavaScript file and create a separate file.  This allows for the file to be kept separate and can prevent any "hiccups" that might occur from JavaScript styling that sometimes occurrs.

Error Logging:
Track:js is a separate service that can be used for this purpose.  I did not add this code because I didn't feel like subscribing to the service. If you did use this service, it would simple entail adding two <script></script>s to the index.html file referencing Track:js.  These are actually provided when you sign up for the service.


```````````````````````````````````````````````````````````````````````````````````````````````````````````
For those not (that) familiar with GitHub:
git add .
...will add the changes to your local repository

git commit -m "[insert comment here]"
...will commit the changes and label it with the provided comment

git push
...will send the changes to the git server
