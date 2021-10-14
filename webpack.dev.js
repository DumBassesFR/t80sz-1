const cssExtract = require("mini-css-extract-plugin")
const htmlWebpack = require("html-webpack-plugin")
const path = require("path")
const defcfg = require("./webpack.config")
const { merge } = require("webpack-merge")
module.exports = merge(defcfg, {
  mode: "development",
  entry: {
    main: "./src/pages/index.ts",
    debug: "./src/pages/debug/debug.ts",
  },
  output: {
    filename: "t80sz.[name].js",
    path: path.resolve(__dirname, "dev"),
    publicPath: "",
  },
  plugins: [
    new htmlWebpack({
      title: "The 80s Zone",
      filename: "index.html",
      meta: { viewport: "width=device-width, initial-scale=1" },
      excludeChunks: ["debug"],
      hash: true,
    }),
    new htmlWebpack({
      template: "src/pages/debug/debug.html",
      filename: "debug/index.html",
      excludeChunks: ["main"],
    }),
    new cssExtract({
      filename: "src/[name].css",
    }),
  ],
  devServer: {
    hot: false,
    client: {
      logging: "info",
      overlay: {
        errors: true,
        warnings: false
      },
      progress: true
    }
  },
  module: {
    rules: [
      {
        test: /\.((p|)css)$/i,
        exclude: /node_modules/,
        use: [cssExtract.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "../src/fonts/[name][ext][query]"
        }
      },
      {
        test: /\.(webp|png|jpg|mp3)$/i,
        type: 'asset/resource',
        generator: {
          filename: "../src/assets/[name][ext][query]"
        }
      }
    ],
  },
})
