module.exports = {
    angular: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'app/data',     dest: "angular/data"},
            {expand: true, src: "**", cwd: 'app/img',     dest: "angular/img"},
            {expand: true, src: "**", cwd: 'app/js',      dest: "angular/js"},
            {expand: true, src: "**", cwd: 'app/partials',     dest: "angular/partials"},
            {src: 'app/index.min.html', dest : 'angular/index.html'},
            {src: 'app/index-hospital.min.html', dest : 'angular/hospital.html'},
            {src: 'app/index-university.min.html', dest : 'angular/university.html'},
            {src: 'app/index-music.min.html', dest : 'angular/music.html'},
            {src: 'app/index-blog.min.html', dest : 'angular/blog.html'},
            {src: 'app/index-crm.min.html', dest : 'angular/crm.html'},
            {src: 'app/index-ecommerce.min.html', dest : 'angular/ecommerce.html'},
            {src: 'app/index-socialmedia.min.html', dest : 'angular/socialmedia.html'},
            {src: 'app/index-freelancing.min.html', dest : 'angular/freelancing.html'}
        ]
    }
};
