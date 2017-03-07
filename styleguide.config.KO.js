
const path = require('path');

module.exports = {
  title: 'React Style Guide Example',
  defaultExample: true,
  components: 'release/**/[A-Z]*.js',

  updateWebpackConfig: function(webpackConfig, env) {
    const dir = path.resolve(__dirname, 'lib');
    webpackConfig.module.loaders.push(
      {
        test: /\.jsx?$/,
        include: dir,
        loader: 'babel',
      },
      {
        test: /\.js?$/,
        include: dir,
        loader: 'babel',
      }
    );
    return webpackConfig;
  },
};