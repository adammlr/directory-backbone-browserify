## Browserify sample application ##

Sample application using Browserify, Backbone, and Handlebars templates.

http://coenraets.org for more info

### Running the app ###

0. npm install -g browserify
1. npm install
2a. browserify -t hbsfy app.js -o bundle.js
2b. browserify -t hbsfy app.js -d -p [minifyify --map bundle.map.json --output bundle.map.json] > bundle.js
3. Open index.html