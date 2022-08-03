const webpack = require('webpack');

module.exports = {
    mode: 'production',
    //allows webpack to optimize application
    devtool: 'source-map',
    //Val create-react-app recommends
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env.name': JSON.stringify(`Tpong`)
    //         //you'll usually be setting up api end-points 
    //     })
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Tpong')
        })
    ]
};