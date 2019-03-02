"use strict";
exports.__esModule = true;
var path = require("path");
var config = {
    name: "dev",
    mode: "development",
    context: path.resolve(__dirname, "src"),
    target: "node",
    entry: "./index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [".ts"]
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    cache: true,
    devtool: "inline-source-map"
};
exports["default"] = config;
