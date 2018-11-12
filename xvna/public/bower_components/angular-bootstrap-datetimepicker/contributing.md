Submitting Issues
=================

If you are submitting a bug, please create a [jsfiddle](http://jsfiddle.net/) demonstrating the issue.

Contributing code
=================

To contribute, fork the library and install grunt and dependencies. You need [node](http://nodejs.org/); use [nvm](https://github.com/creationix/nvm) or [nenv](https://github.com/ryuone/nenv) to install it.

```bash
git clone https://github.com/dalelotts/angular-bootstrap-datetimepicker.git
cd angular-bootstrap-datetimepicker
npm install -g grunt-cli
npm install
git checkout develop  # all patches against develop branch, please!
grunt                 # this runs tests and jshint
```

Very important notes
====================

 * **Pull pull requests to the `master` branch will be closed.** Please submit all pull requests to the `develop` branch.
 * **Pull requests will not be merged without unit tests.** 
 * **Do not include the minified files in your pull request.** 

Grunt tasks
===========

We use Grunt for managing the build. Here are some useful Grunt tasks:

  * `grunt` The default task lints the code and runs the tests. You should make sure you do this before submitting a PR.