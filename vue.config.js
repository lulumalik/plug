module.exports = {
    // options...
    // publicPath: '/eas/' 
    // options...
    // publicPath: '/eas/' 
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: `addCircle-chunk.js`,
            chunkFilename: `addCircle-chunk.js`,
          }
    },
    css: {
        extract: false,
    },

}