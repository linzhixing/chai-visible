module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-phantomjs-launcher'
    ],
    files: [
      'lib/index.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'lib/index.js': ['webpack', 'sourcemap'],
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: configureWebpack(),
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true,
    concurrency: Infinity,
    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    }
  });
}

function configureWebpack(webpackConfigFunction) {
  var webpackConfig = require('./webpack.config.js');
  webpackConfig.entry = undefined; // karma will pass the proper argument for entry
  return webpackConfig;
}
