const path = require('path');

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions

    // npm install --save-dev babel-plugin-transform-es2015-destructuring
    // npm install --save-dev babel-plugin-transform-object-rest-spread
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }
      },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        use: [
         {
          loader: 'url-loader'
         }
        ]
      }
    ],
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
