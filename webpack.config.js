const path = require('path');

module.exports = {
    mode: 'development',      
    entry: './src/main-js.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') //__dirname = start from this directory , root , and go to dist folder and run bundle.js
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
        ]
    }
};
