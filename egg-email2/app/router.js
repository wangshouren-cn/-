// app/router.js
module.exports = (app) => {
  const { router, controller } = app;
  // router.post('/login', controller.email.login);//登录
  router.post("/authorize", controller.email.authorize);
};
