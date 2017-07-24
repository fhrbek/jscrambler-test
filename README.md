# Jscambler-test

This README outlines the details of reproducing the JScambler problemn.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [Python](https://www.python.org/)
* [Canned](https://github.com/sideshowcoder/canned), recommended installation as `npm install -g canned`

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Building

* `ember build --environment production`

### Preparing for running with protected code

* `sed -i '' 's/integrity="[^"]*"//g' dist/index.html`

### Running

In one terminal window:
* `cd dist`
* `python -m SimpleHTTPServer 8001`

In another terminal window:
* `cd mock`
* `canned`

In a browser:
* visit your app at [http://localhost:8001/#/dudes](http://localhost:8001/#/dudes)
* check that you can see a list of dudes and there's no error in the browser console

### Code protection

* upload `dist/assets/jscrambler-test-<hash>.js` to the JScrambler dashboard
* have the code protected
* download the archive with protected code
* unpack the archive (replacing the original .js file)

### Testing the protected application

* visit your app at [http://localhost:8001/#/dudes](http://localhost:8001/#/dudes)
* check that you can't see a list of dudes and there's an error in the browser console

### Getting rid of the protection error

* remove `app/serializers/dude.js` (a dummy serializer that only delegates calls to its superclass)
* build the code again (`ember build --environment production`)
* remove integrity protection from `index.html` (`sed -i '' 's/integrity="[^"]*"//g' dist/index.html`)
* redo the Code protection (upload to JScramber, protect, download and replace)
* reload the application in your brower - this time it will work even with the scrambled code

### Conclusion
* the problem is there when a custom serializer is used, it's 100% reproducible

