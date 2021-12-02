const path = require('path');

module.exports = {
    entry : './src/index.js',
    //mode: 'production',//For Publishing
    mode: 'development',// for Development
    devtool: 'inline-source-map',// for Development
    output : {
    filename: 'main.js',
    path : path.resolve(__dirname,'dist'),
    },
    module : {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
    },
};