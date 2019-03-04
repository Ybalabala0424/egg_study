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
  const config = {};

    let client = {
        // host
        host: 'localhost',
        port: '3306',
        // username
        user: 'root',
        // password
        password: '',
        // database
        database: 'register_egg',
        // ...
    };
    config.mysql={
          client: client,
          // default configuration for all databases
          default: {
          },
          // load into app, default is open
          app: true,
          // load into agent, default is close
          agent: false,

  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551600873008_9579';

  // add your middleware config here
  config.middleware = ['url'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
