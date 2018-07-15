// const devMode = process.env.NODE_ENV !== 'production';
// console.log('NODE_ENV: ', process.env.NODE_ENV);
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './sass/main.scss',
  output: {
    publicPath: '/'
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: [
            // MiniCssExtractPlugin.loader,
            'style-loader',
            {
              loader: 'css-loader',
              options: { sourceMap: true },
            },
            {
              loader: 'sass-loader',
              options: { 
                sourceMap: true,
                omitSourceMapUrl: true 
              },
            },
          ]
      }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css", // [name].css or  [hash].css or [contenthash].css
      
    })
  ]
};