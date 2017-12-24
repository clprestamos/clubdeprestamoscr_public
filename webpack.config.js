const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';

// >> Target Structure <<
// > Root App
const APP_FOLDER = path.resolve(__dirname, './app');
// > Dist
const DIST_FOLDER = path.resolve(__dirname, './dist');
const DIST_FOLDER_STYLE = path.resolve(DIST_FOLDER, './style');

const DIST_FILE_CSS_BUNDLE_NAME = 'bundle.css';
const DIST_FILE_CSS_BUNDLE = `style/${DIST_FILE_CSS_BUNDLE_NAME}`;
// > Src
const SRC_FOLDER = path.resolve(APP_FOLDER, './src');
const SRC_FILE_JS_APP = path.resolve(SRC_FOLDER, './js/index');

let plugins = [
  new webpack.DefinePlugin({
    __DEV__: false,
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  // > Minimize JS
  new MinifyPlugin({}, {
    parserOpts: {
      sourceMap: false,
      comments: false,
    },
  }),
  // > CSS Bundle
  new ExtractTextPlugin({
    filename: DIST_FILE_CSS_BUNDLE,
    disable: false,
    allChunks: true,
  }),
  // > Minimize CSS
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /DIST_FILE_CSS_BUNDLE_NAME/,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: {
      discardComments: { removeAll: true },
    },
    canPrint: true,
  }),
  new CopyWebpackPlugin([
    { from: './app/src/images', to: path.resolve(DIST_FOLDER, './images') },
    {
      from: './node_modules/font-awesome/css/font-awesome.min.css',
      to: path.resolve(DIST_FOLDER, './style'),
    },
    {
      from: './node_modules/font-awesome/fonts',
      to: path.resolve(DIST_FOLDER, './fonts'),
    },
  ], {
    copyUnmodified: true,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['app', 'vendor'],
    minChunks: 2,
  }),
  new HtmlWebpackPlugin({
    template: 'app/index.ejs',
    favicon: 'app/src/images/favicon.ico',
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
      minifyURLs: true,
    },
    inject: true,
  }),
  // restrict the extra locales that moment.js can load; en is always builtin
  new webpack.ContextReplacementPlugin(/^\.\/locale$/, (context) => {
    // check if the context was created inside the moment package
    if (!/\/moment\//.test(context.context)) return;
    // context needs to be modified in place
    Object.assign(context, {
      // include only japanese, korean and chinese variants
      // all tests are prefixed with './' so this must be part of the regExp
      // the default regExp includes everything; /^$/ could be used to include nothing
      regExp: /^\.\/(ja|ko|zh)/,
      // point to the locale data folder relative to moment/src/lib/locale
      request: '../../locale',
    });
  }),
];

if (DEVELOPMENT) {
  plugins = [
    new webpack.DefinePlugin({
      __DEV__: true,
      __HOST__: 'http://localhost:7070',
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        SITE_KEY: JSON.stringify('6LdLCTsUAAAAALL-9p_C181biMLzELJIioMOsQzp'),
      },
    }),
    // > Configure CSS Bundle file
    new ExtractTextPlugin({
      filename: DIST_FILE_CSS_BUNDLE,
      disable: false,
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          formatter: require('eslint-formatter-pretty'),
        },
      },
    }),
    new CopyWebpackPlugin([
      { from: './app/src/images', to: path.resolve(DIST_FOLDER, './images') },
      {
        from: './node_modules/font-awesome/css/font-awesome.min.css',
        to: path.resolve(DIST_FOLDER, './style'),
      },
      {
        from: './node_modules/font-awesome/fonts',
        to: path.resolve(DIST_FOLDER, './fonts'),
      },
    ], {
      copyUnmodified: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'vendor'],
      minChunks: 2,
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.ejs',
      favicon: 'app/src/images/favicon.ico',
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
        minifyURLs: true,
      },
      inject: true,
    }),
  ];
}

module.exports = {
  // > JS Input / Output
  entry: {
    app: [SRC_FILE_JS_APP],
    vendor: [
      'enzyme',
      'lodash',
      'moment',
      'prop-types',
      'react',
      'react-autobind',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'react-router-hash-link',
      'react-scroll-to-component',
      'redux',
      'redux-devtools-extension',
      'redux-mock-store',
      'redux-thunk',
      'semantic-ui-react',
      'superagent',
    ],
  },
  output: {
    path: DIST_FOLDER,
    publicPath: '/',
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: 'sourcemaps/[file].map',
  },
  // > Module Folders (packages and extensions)
  resolve: {
    modules: ['node_modules', APP_FOLDER],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
    descriptionFiles: ['package.json'],
  },
  // > Module Handles
  module: {
    loaders: [{
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75,
            },
          },
        },
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|otf|ottf|svg)$/,
      loader: 'file-loader',
    }],
    rules: [
      // > ESLINT
      {
        enforce: 'pre',
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
      },
      // > JS / JSX
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        include: [APP_FOLDER],
        exclude: /(node_modules)/,
        options: {
          presets: ['env', 'react', 'stage-2'],
        },
      },
      // > CSS / SCSS
      {
        test: /\.(css|scss)?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader/url!file-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, 'sass-loader'],
          publicPath: DIST_FOLDER_STYLE,
        }),
      },
      // > Favicon
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
        use: ['url-loader?limit=100000'],
      },
    ], // rules
  }, // module
  devtool: DEVELOPMENT ? 'source-map' : '',
  context: __dirname,
  target: 'web',
  plugins,
  cache: false,
  watchOptions: {
    aggregateTimeout: 1000,
    poll: true,
  },
  devServer: {
    contentBase: APP_FOLDER,
    compress: true,
    historyApiFallback: true,
    inline: true,
    port: 7070,
  },
};
