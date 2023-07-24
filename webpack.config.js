const path = require('path')

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        filename :"main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rule: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ],
    }

}