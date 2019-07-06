const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
console.log(WEBPACK_ENV);

module.exports = {
  	entry: './src/app.js',
  	output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: WEBPACK_ENV === '/dist/' ? '/dist/' : '//s.diaopie.com/E_system/dist/',
    filename: 'js/app.js'
  },
  resolve: {
  	alias : {
  		page : path.resolve(__dirname, 'src/page'),
  		component : path.resolve(__dirname, 'src/component')
  	}
  },
  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    },
    {
    	test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
       },
	   {
		test: /\.scss$/,
		use: ExtractTextPlugin.extract({
		  fallback: 'style-loader',
		  use: ['css-loader', 'sass-loader']
		})
		},
		{
	    test: /\.(png|jpg|gif)$/,
	    use: [
	      {
	        loader: 'url-loader',
	        options: {
	          limit: 8192,
	          name: 'resource/[name].[ext]'
	        },
	      },
	    ],
	  },
	  {
	    test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
	    use: [
	      {
	        loader: 'url-loader',
	        options: {
	          limit: 8192,
	          name: 'resource/[name].[ext]'
	        },
	      },
	    ],
	  },
  ]
},
	  plugins: [
	  new HtmlWebpackPlugin({
	  	template: './src/index.html',
	  	favicon: './favicon.ico'
	  }),
	  new ExtractTextPlugin("css/[name].css"),
	  new webpack.optimize.CommonsChunkPlugin({
	  	name: 'common',
	  	filename: 'js/base.js'
	  })
	],
	devServer: {
		port: 8086,
		historyApiFallback: {
			index: '/dist/index.html'
		}
   }
};