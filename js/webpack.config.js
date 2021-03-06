const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/immersive-reader-sdk.ts',
    module: {
        rules: [ {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.ts$/,
            enforce: 'pre',
            use: [ { loader: 'tslint-loader' } ]
        } ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    output: {
        path: path.join(__dirname, 'lib'),
        library: 'ImmersiveReader',
        filename: 'immersive-reader-sdk.js',
        libraryTarget: 'umd'
    }
};