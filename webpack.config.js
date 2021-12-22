const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    
    entry: "./src/index.js",

    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Restaurant-Page',
        }),
    ],
    output : {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        clean: true,
    },
    module:{
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                  name: '/img/[name].[ext]'
                }
            }
    ],
            

    }

};