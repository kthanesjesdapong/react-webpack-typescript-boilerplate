const webpack = require('webpack');
const ReachRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
    },
    devtool: 'cheap-module-source-map',
    //Val create-react-app recommends
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Kavin')
            //you'll usually be setting up api end-points 
        }),
        new ReachRefreshWebpackPlugin(),
        // React will detect when you make changes to the file and change only the text edited
        //State will persist upon refresh
    ]
};