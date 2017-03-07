var path = require('path');
var glob = require('glob');

module.exports = {
  title: 'React Style Guide Example',
  components: function() {
    return glob.sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
      .filter(function(module) {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
  },

  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('./node_modules/react-docgen-typescript').parse,
  sections: [
    {
      name: 'Documentation',
      sections: [
        {
          name: 'ChatComponent',
          content: 'src/components/chatComponent/Readme.md',
          components: 'src/components/chatComponent/ChatWindow.tsx'
        },
        {
          name: 'userComponent',
          content: 'src/components/userComponent/Readme.md',
          components: 'src/components/userComponent/UserList.tsx'
        },
        {
          name: 'MessageApp',
          content: 'src/Readme.md',
          components: 'src/MessageApp.tsx'
        }
      ]
    }
  ],
  updateWebpackConfig: function(webpackConfig, env) {
    var dir = path.resolve(__dirname, 'src/components');
    webpackConfig.resolve.extensions.push('.ts');
    webpackConfig.resolve.extensions.push('.tsx');

    webpackConfig.module.loaders.push(
      {
        test: /\.tsx?$/,
        include: __dirname,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        include: __dirname,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {presets:['react']}
      },
      {
        test: /\.js?$/,
        include: __dirname,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets:['react']}
      }
    );

    return webpackConfig;
  }
};