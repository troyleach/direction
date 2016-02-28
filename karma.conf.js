// Karma configuration
// Generated on Fri Jan 15 2016 12:45:52 GMT-0600 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
    'app/bower_components/jquery/dist/jquery.js',
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-mocks/angular-mocks.js',
    'app/bower_components/angular-cookies/angular-cookies.js',
    'app/bower_components/angular-resource/angular-resource.js',
    'app/bower_components/angular-route/angular-route.js',
    'app/bower_components/ngstorage/ngStorage.min.js',
    
    'app/scripts/mainApp.js',
    'app/scripts/utility/util.js',
    'app/scripts/utility/constant.js',
    'app/scripts/filters/sampleFilter.js',
    'app/scripts/directives/sampleDirective.js',
    'app/scripts/services/sampleService.js',

    'app/scripts/controllers/averageRiskController.js',
    'app/scripts/controllers/increasedRiskController.js',
    'app/scripts/controllers/screeningSurveyController.js',

    'spec/**/*_spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,
    logLevel: config. LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
