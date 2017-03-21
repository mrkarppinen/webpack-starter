
var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
        publicPath: '/public/',
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
      disable: (process.env.NODE_ENV != 'production')
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'public/index.html'),
      template: path.join(__dirname, 'src/index.html'),
      excludeAssets: [/main.js/]
    }),
    new HtmlWebpackExcludeAssetsPlugin()
]
,
devServer: {
contentBase: [path.join(__dirname, "/src")],
  compress: true,
  port: 9000,
  publicPath: "/public/"
}



};
