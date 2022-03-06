// this runs in the node environment, so we can get away with using "require" in here
var path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	mode: "development",
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	devServer: {
		port: 3010,
		hot: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.s(a|c)ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: `./src/index.html`,
		}),
	],
}
