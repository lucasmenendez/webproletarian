const path = require('path');
const webpack = require('webpack');

const ROOTPATH = "..";

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
	}
}

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { screw_ie8: true, warnings: false },
			output: { comments: false },
			sourceMap: false,
		})
	])
}