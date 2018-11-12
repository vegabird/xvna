module.exports = {
	min: {
      files: [{
          expand: true,
          cwd: 'app/partials/',
          src: ['*.html', '**/*.html'],
          dest: 'angular/partials/',
          ext: '.html',
          extDot: 'first'
      }]
  }
}