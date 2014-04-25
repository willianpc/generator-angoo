module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      dist: {
        files: ['*', 'app/*', 'app/js/*.js', 'app/css/*.css', 'app/**/*.htm', 'app/**/*.html'],
        //tasks: [''],

        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9090,
          hostname: '0.0.0.0',
          base: 'app'
        }
      }
    },

    copy: {
      bower: {
        files: [
          {
            expand: true, 
            flatten: true,
            src: ['bower_components/angular/angular.min.js', 
                  'bower_components/angular-route/angular-route.min.js',
                  'bower_components/bootstrap/dist/js/bootstrap.min.js',
                  'bower_components/jquery/dist/jquery.min.js',
                  'bower_components/requirejs/require.js'],
            dest: 'app/lib'
          },
          
          {
            expand: true, 
            flatten: true,
            src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 
                  'bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                  'bower_components/bootstrap/dist/fonts'],
            dest: 'app/css'
          },
          
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'connect', 'watch']);
};