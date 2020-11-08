const path = require('path');

module.exports = function (env = {}) {
  return {
    mode: env.mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, env.server || '.'),
      compress: true,
      port: 9090,
      hot: true
    }
  };
};
