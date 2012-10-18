Ember Skeleton
==============

A skeleton application framework using Ember.js and Rake Pipeline.

Running
-------

    $ bundle install
    $ bundle exec rackup

App Structure
-------------

    bb-player
    ├── Assetfile - App build file
    ├── Gemfile - Package dependencies for rakep/rack
    ├── Gemfile.lock - Here be dragons: don't touch, always include
    ├── app - App specific code
    │   ├── css - App CSS or SCSS (.scss)
    │   ├── lib - App code, *modularized during build*
    │   ├── modules - Module code, *already modularized*
    │   ├── plugins - Plugins (e.g. jquery.jsonrpc.js)
    │   │   └── loader.js - JS module loader
    │   ├── static - Static files, never touched, copied over during build
    │   ├── templates - Handlebars templates, *modularized during build*
    │   ├── tests - QUnit application tests
    │   └── vendor - Vendor code, *modularized during build*
    ├── assets - Built out asset files, minified in production
    │   ├── app.css - Built out app CSS/SCSS
    │   ├── app.js - Built out app JS
    │   └── loader.js - Built out JS module loader
    ├── config.ru - Rack development web server configuration
    ├── index.html - The app entry point
    ├── tests - QUnit testing files
    │   ├── index.html - The testing entry point
    │   ├── qunit - Testing support files
    │   └── run-tests.js - The PhantomJS QUnit test runner
    └── tmp - Temporary build files used by rakep

Testing
-------

You can test the app by invoking:

    $ bundle exec rake test

This executes the tests by using [PhantomJS](http://www.phantomjs.org/),
which you need to have installed.

Or you can run the tests via:

    $ bundle exec rackup
    $ open http://localhost:9292/tests/index.html

If you want to continuously run the tests every time a file changes, invoke:

    $ bundle exec guard

Building
--------

You can build your app by invoking:

    $ bundle exec rake build

This will pack all the files in app into the directory assets/
according to the instructions in Assetfile

If you execute 

    $ bundle exec rackup

you can access the application on http://localhost:9292/index.html
It's also possible to create a minified version of your code via 
   
    $ RAKEP_MODE=production bundle exec rakep
