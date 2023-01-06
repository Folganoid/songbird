const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        quiz: './src/quiz.js',
        results: './src/results.js',
        gallery: './src/gallery.js',
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
          },
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true},
                    }
                ]
            },
            {
				test: /\.css$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {}
				}, 'css-loader']
			},

            {
                test: /\.s[sc]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {},
                    },
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(ttf|png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
                type: 'asset/resource',
              },
            {
				test: /\.js$/,
				exclude: /node-modules/,
                use: [
                    {
                        loader: 'babel-loader',
	                }
                ]
			},

        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin ({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
        }),
        new HtmlWebPackPlugin ({
            filename: 'quiz.html',
            template: './src/quiz.html',
            chunks: ['quiz'],
        }),
        new HtmlWebPackPlugin ({
            filename: 'results.html',
            template: './src/results.html',
            chunks: ['results'],
        }),
        new HtmlWebPackPlugin ({
            filename: 'gallery.html',
            template: './src/gallery.html',
            chunks: ['gallery'],
        }),
        new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),
    ],
    devServer: {
        compress: true,
        port: 3000,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}


