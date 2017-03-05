const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = 'build';
const PUBLIC_DIR = 'public';
const HTML_TEMPLATE_FILE = 'index.html';


module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map",
    path: path.join(__dirname,BUILD_DIR),
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.js', '.jsx','.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader:'awesome-typescript-loader',
        exclude: ['/node_modules','webpack.config.js']
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.tsx$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
      ,
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(PUBLIC_DIR,HTML_TEMPLATE_FILE),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     screw_ie8: true, // React doesn't support IE8
    //     warnings: false
    //   },
    //   mangle: {
    //     screw_ie8: true
    //   },
    //   output: {
    //     comments: false,
    //     screw_ie8: true
    //   }
    // })
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    inline: true
  }
};




