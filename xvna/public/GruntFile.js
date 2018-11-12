module.exports = function(grunt) {
    var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);

    // build Angular
    gtx.alias('build:angular', [
        'clean:angular', 
        'copy:angular', 

        'recess:style', 
        'recess:style2',
        'recess:style3',
        'recess:style4',
        'recess:style5',
        'recess:style6',
        'recess:style7',
        'recess:style8',
        'recess:style9',

        'concat:general',
        'concat:hospital', 
        'concat:university', 
        'concat:music', 
        'concat:blog', 
        'concat:crm', 
        'concat:ecommerce', 
        'concat:socialmedia', 
        'concat:freelancing', 

        'uglify:general', 
        'uglify:hospital',
        'uglify:university', 
        'uglify:music', 
        'uglify:blog', 
        'uglify:crm', 
        'uglify:ecommerce', 
        'uglify:socialmedia', 
        'uglify:freelancing'

    ]);

    // Build Angular Hospital
    //gtx.alias('build:angularhospital', ['clean:angularhospital', 'copy:angularhospital', 'recess:angularhospital', 'concat:angularhospital', 'uglify:angularhospital']);

    gtx.alias('release', ['bower-install-simple', 'build:dev', 'bump-commit']);
    gtx.alias('release-patch', ['bump-only:patch', 'release']);
    gtx.alias('release-minor', ['bump-only:minor', 'release']);
    gtx.alias('release-major', ['bump-only:major', 'release']);
    gtx.alias('prerelease', ['bump-only:prerelease', 'release']);

    gtx.finalise();
}