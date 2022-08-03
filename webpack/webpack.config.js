// This file will merge .common.js file with either the dev or prod

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');


//Depending on the envVars you pass in you'll have separate scrips launch.
module.exports = (envVars) => {
    const { env } = envVars;
    const envConfig = require(`./webpack.${env}.js`);
    const config = merge(commonConfig, envConfig);
    return config;
};