const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ],
  devServer: {
    port: 3003,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }    
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: false
          }
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}