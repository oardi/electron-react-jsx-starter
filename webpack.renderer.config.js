
const rules = require('./webpack.rules');

rules.push({
	test: /\.jsx?$/,
	exclude: /node_modules/,
	loader: ['babel-loader']
});

rules.push({
	test: /\.css$/,
	use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
	test: /\.s[ac]ss$/i,
	use: [
		'style-loader',
		'css-loader',
		'sass-loader',
	],
})

rules.push({ test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=assets/[name].[ext]' })

rules.push({
	test: /\.(png|jpg|gif)$/,
	use: [
		{
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				outputPath: 'assets/img',
				publicPath: 'assets/img'
			}
		}
	]
})

module.exports = {
	// Put your normal webpack config below here
	module: {
		rules,
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
};
