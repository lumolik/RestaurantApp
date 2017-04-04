var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + "/dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'Restaurant',
            template:'./src/index.ejs'
        })
    ],
    module: {
        rules: [
            {test: /\.tsx?$/,loader: 'ts-loader',exclude: /node_modules/,},
            {enforce: 'pre',test: /\.js$/,loader: "source-map-loader"},
            {enforce: 'pre',test: /\.tsx?$/,use: "source-map-loader"},
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        compress: true,
        port: 9000
    }
};