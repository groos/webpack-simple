const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index.webpack': path.resolve('./src/index.js')
    },
    output: {
        libraryTarget: "umd",
        filename: "bundle.webpack.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};