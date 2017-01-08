module.exports = {
    context: __dirname + "/src",
    entry: {
        app: "./js/app.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist/assets",
        publicPath: "/assets",
    },
    devServer: {
        contentBase: __dirname + "/src",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["es2015"]}
                }],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ],

    },
};