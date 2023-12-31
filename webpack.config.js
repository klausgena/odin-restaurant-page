const path= require('path');
const yaml = require('yamljs');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
    module: {
	rules: [
	    {
		test: /\.css/i,
		use: ['style-loader', 'css-loader'],
	    },
	    {
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	    },
	    {
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		type: 'asset/resource',
	    },
	    {
		test: /\.(csv|tsv)$/i,
		use: ['csv-loader'],
	    },
	    {
		test: /\.yaml$/i,
		type: 'json',
		parser: {
		    parse: yaml.parse,
		},
	    },
	],
    },
};
