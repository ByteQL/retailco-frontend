const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#61B3EF',
      '@btn-height-lg': '50px',
      '@font-family': "'Rubik', sans-serif",
      '@form-item-margin-bottom': '10px',
      '@font-size-base': '13px',
    },
  }),
  function(config) {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /Conflicting order/,
      }),
    );

    // Drop noisy eslint pre-rule
    config.module.rules.splice(1, 1);

    // Drop noisy tslint plugin
    const EXCLUDED_PLUGINS = ['ForkTsCheckerWebpackPlugin'];
    config.plugins = config.plugins.filter(
      plugin => !EXCLUDED_PLUGINS.includes(plugin.constructor.name),
    );

    return config;
  },
);
