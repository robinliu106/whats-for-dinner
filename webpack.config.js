const path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                loader: "babel-loader", //run files through babel
                test: /\.js$/, //files that end with .js
                exclude: /node_modules/,
            },
        ],
    },
    devtool: "cheap-module-eval-source-map", //source map
};
