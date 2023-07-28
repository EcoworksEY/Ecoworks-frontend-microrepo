const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 80,
    historyApiFallback: true,
    allowedHosts: "all"
  },
  output: {
    publicPath : '/',
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        },
      },
    //   {
    //     test: /\.(sa|sc|c)ss$/, // styles files
    //     loader: ["style-loader", "css-loader", "sass-loader"],
    //   },
      {
        test: /\.svg$/, // to import images and fonts
        loader: "svg-url-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
        {
            test: /\.css$/i,
            use:['style-loader', 'css-loader', 'postcss-loader'],
        }
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'ProductApplication',
        filename:
          'remoteEntry.js',
        remotes: {
          MFE1: 
          'MFE1@http://localhost:8082/remoteEntry.js',
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};
