// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
        {
            test: /\.jsx?/,
            exclude: /node_modules|dist/,
            loaders: [
                // 'uglify-loader',
                {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ],
        },
        {
            test: /\.styl?/,
            use: [
                'style-loader', 'css-loader', 'stylus-loader'
            ]
        },
        {
            test: /\.css?/,
            use: [
                'style-loader', 'css-loader'
            ]
        },
        {
            test: /\.(eot|otf|svg|ttf|woff|woff2|html)$/,
            use: {
                loader: 'file-loader',
                options: {name: '[name].[ext]'}
            }
        }
    ],
  },
};
