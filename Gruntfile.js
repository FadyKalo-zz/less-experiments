module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {},
        files: {
          "public/result.css": "client/source.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

};