const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
    mode:'development',
    devServer:{
        port:8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                microFrontEnd1: 'microFrontEnd1@http://localhost:8001/remoteEntry.js',
                microFrontEnd2: 'microFrontEnd2@http://localhost:8002/remoteEntry.js',
            }, 
        }),
        new HtmlWebpackPlugin({
            template:
                './public/index.html'
        }),
    ],
    module:{
        rules: [
            {
                test: /\.js?$/,
                loader:
                    'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },
};