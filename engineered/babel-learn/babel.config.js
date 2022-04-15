module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        //targets与package.json中的browserslist功能一样，如果设置了targets会覆盖掉browserslist，如果都不设置，则会将es6语法转换为es5语法，一般都配置browserslist
        targets: {
          chrome: "28",
          ie: 11,
        },

        //与polyfill行为有关 最好是用usage，相当于按需加载
        useBuiltIns: "usage", //还有entry、false

        //babel转码用到的包，目前推荐使用3版本，如果不配置会默认使用第2版
        corejs: 3,

        //模块化规范，如果不设置用的是require，将它设置为false就不进行转换，推荐设置为false，这样可以使用tree shaking
        modules: false,
      },
    ],
  ],
};
