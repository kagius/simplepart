module.exports = {
    all: {
        src: 'src/js/**/*.js',        
        options: {
            specs: 'test/js/**/*.spec.js',
            template: require('grunt-template-jasmine-istanbul'),
            templateOptions: {
                coverage: 'reports/coverage/coverage.json',
                report: 'reports/coverage',
                thresholds: {
                    lines: 80,
                    statements: 80,
                    branches: 80,
                    functions: 80
                }
            }
        }
    }
};