const path = require("path")

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      { 
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.png$/,
        use: [
          {loader: "url-loader"}
        ]
      }
    ]
  }
}