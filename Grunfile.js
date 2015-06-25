// Generated on 2015-06-24 using generator-angular 0.11.1
'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'app/vendor'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },
    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['<%= yeoman.app %>/index.html'],
        ignorePath:  /\.\.\//
      },
      test: {
        devDependencies: true,
        src: '<%= karma.unit.configFile %>',
        ignorePath:  /\.\.\//,
        fileTypes:{
          js: {
            block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
              detect: {
                js: /'(.*\.js)'/gi
              },
              replace: {
                js: '\'{{filePath}}\','
              }
            }
          }
      }
    },
    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: []
        }, {
          expand: true,
          cwd: 'bower_components/angular',
          src: 'angular.min.js',
          dest: '<%= yeoman.dist %>/angular'
        }, {
          expand: true,
          cwd: 'bower_components/jquery/dist',
          src: 'jquery.min.js',
          dest: '<%= yeoman.dist %>/jquery'
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: '**',
          dest: '<%= yeoman.dist %>/bootstrap'
        },{
            expand: true,
            cwd: 'bower_components/selectize/dist',
            src: '**',
            dest: '<%= yeoman.dist %>/selectize'
          }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles'
      ]
    }
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'concat',
    'ngAnnotate',
    'copy:dist'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};
