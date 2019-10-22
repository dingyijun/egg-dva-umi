/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1570993506434_4983';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.assets = {
    publicPath: '/public',
    devServer: {
      autoPort: true,
      debug: true,
      command: 'umi dev --port={port}',
      env: {
        APP_ROOT: process.cwd() + '/web',
        BROWSER: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:{port}',
        PUBLIC_PATH: 'http://127.0.0.1:{port}',
      },
    },
  };

  config.security = {
    csrf: false,
  };

  return config;
};
