'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        'app': './index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'js'),
        filename: '[name].js',
    },
    module: {
        preloaders: [
            {
                test: /\.ts$/,
                exclude: /(?:^|\/)(?:node_modules|bower_components)(?:$|\/)/,
                loader: 'ts-loader',
            },
        ],
        loaders: [
            // Babel to convert import syntax
            {
                test: /\.[jt]s$/,
                exclude: /(?:^|\/)(?:node_modules|bower_components)(?:$|\/)/,
                loader: 'babel',
                query: {
                    plugins: ['transform-es2015-modules-commonjs'],
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            Promise: 'bluebird',
        }),
    ],
};
