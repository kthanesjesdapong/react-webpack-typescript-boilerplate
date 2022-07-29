const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    //Entry point, points to our index.tsx where React is being rendered
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        //Allows us to leave off file extensions when importing.
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
                //For all of the files listed in test, we use the specified loader.
                //For all ts,js,tsx,jsx use babel loader
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
        // This determines where our bundle will be outputted to.
        //The filename tells webpack that we want our bundled output to be 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
    ],
    //Injects our bundle.js to index.html, and it will place that html file into the build folder.
    //We don't have to specify script tag, it'll do it for us.
    stats: 'errors-only',
};