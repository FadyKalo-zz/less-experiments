module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths:["client/less"]
        },
        files: {
          "public/result.css": "client/env/local.less"
        }
      },
      production: {
        options: {
          paths:["client/less"]
        },
        files: {
          "public/result.css": "client/env/production.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

};