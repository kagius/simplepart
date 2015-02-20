module.exports = function (grunt) {    
    require('load-grunt-config')(grunt, {
        loadGruntTasks: {
            pattern: ['grunt-*', '!grunt-template-jasmine-istanbul']
        }
    });

    grunt.registerTask('default', ['compass', 'jshint', 'jasmine', 'ngdocs']);
};