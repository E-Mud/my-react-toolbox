const path = require('path');

module.exports = {
    entry: {
        'index.js': './lib/index.js',
        'components/Button.js': './lib/components/Button.js',
        'styles/typography.styl': './lib/styles/typography.styl'
    },
    output: {
        filename: '[name]',
        path: path.join(__dirname, 'dist')
    },
    module : {
        loaders : [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
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
                test: /\.json/,
                use: {
                    loader: 'json-loader'
                }
            },
            // {
            //     test: /\.styl?/,
            //     use: [
            //       {loader: 'file-loader', options: {name: '[name].css'}},
            //       'extract-loader', 'css-loader', 'stylus-loader'
            //     ]
            // },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2|html|css)$/,
                use: {
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'}
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    }
}
