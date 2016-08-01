﻿var path = require("path");
var webpack = require("webpack");

var cfg = {
    devtool: "source-map",
    entry: "./temp/Main.js",
    output: {
        path: path.join(__dirname, "static/js/dist"),
        filename: "fte.js"
    },
    module: {
        preLoaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "source-map-loader"
          }
        ]
    }
};

module.exports = cfg;