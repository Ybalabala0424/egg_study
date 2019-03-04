'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const url=app.middleware.url();
  router.get('/', url,controller.home.index);
  router.get('/cal',controller.calculator.match)
  router.get('/report',controller.weather.report);
  router.get('/register',controller.register.regi);
};
