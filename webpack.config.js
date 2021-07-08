const path = require('path');
const include = [path.resolve(__dirname, "src"), path.resolve(__dirname, "utils"), path.resolve(__dirname, "config")]
const exclude = [path.resolve(__dirname, "node_modules")]
module.exports = {
    entry: "./src",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    devtool: "inline-source-map",
    resolve: {
        alias: {
            utils: path.resolve(__dirname, "utils"),
            config: path.resolve(__dirname, "config"),
            static: path.resolve(__dirname, "static")
        },
        extensions: [".js", ".json", ".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                include,
                exclude,
                loader: "babel-loader"
            },
            {
                test: /\.ts$/,
                include,
                exclude,
                loader: "ts-loader"
            }
        ]
    },
    target: "node"
}