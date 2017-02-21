
var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './src/js/main.js',
  output: {
    		path: path.join(__dirname, 'public'),
    		filename: "js/main.js"
  },
  module: {
       rules: [

       {
           test: path.join(__dirname, 'src/js'),
           exclude: /node_modules/,
           use: 'babel-loader?cacheDirectory'
       },


       {
          test:  /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
          })
       }

     ]
 },

 plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].css",
      disable: true
    }),
  ]
,
devServer: {
contentBase: [path.join(__dirname, "/public")],
  compress: true,
  port: 9000,
  publicPath: "/public/"
}



};
