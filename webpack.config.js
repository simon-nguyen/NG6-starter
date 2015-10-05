module.exports = {
	devtool: 'sourcemap',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/app\/lib/, /node_modules/],
				loader: 'babel'
			},
			{
				test: /\.html$/,
				loader: 'raw'
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
      },
			{
				test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/font-woff"
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=application/octet-stream"
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file"
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: "url?limit=10000&mimetype=image/svg+xml"
			}
    ]
	}
};