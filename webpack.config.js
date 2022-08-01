const path = require('path');

module.exports = {
  target: 'webworker',
  entry: './src/index.js',

  mode: 'development',

  externals: [{ 'cross-fetch': 'fetch' }],
};
