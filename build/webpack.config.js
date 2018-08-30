const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const ROOTPATH = "..";
const PROD = process.env.NODE_ENV === 'production';

function resolve(dir) {
	return path.resolve(__dirname, ROOTPATH, dir);
}

module.exports = {
	mode: 'development',
	entry: {
		webproletarian: resolve('src/webproletarian.js')
	},
	output: {
		libraryTarget: 'umd',
		path: resolve('dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
            {
				test: /\.js$/,
				exclude: '/node_modules/',
                loader: 'babel-loader'
			}
		]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({ 
				uglifyOptions: {
					compress: PROD === true,
					keep_classnames: PROD === true,
					mangle: PROD === true
				}
			})
		]
	}
}

if (PROD) {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]);
}