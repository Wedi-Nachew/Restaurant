const path = require('path')

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    output: {
        filename :"main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2)$/,
                type: "asset/resource"
            },
        ],
    }

}