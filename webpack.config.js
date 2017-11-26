/*
	./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}