const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_[chunkhash:8].js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './build'),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body'
    }),

    new MiniCssExtractPlugin({
      filename: `css/[name]_[contenthash:8].css`
    })
  ]
};