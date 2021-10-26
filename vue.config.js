module.exports = {
    // options...
    // publicPath: '/eas/' 
    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },
    css: {
        extract: false,
    },
}