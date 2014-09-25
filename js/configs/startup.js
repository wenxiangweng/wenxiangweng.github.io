'use strict';
/* global StatusBar: true */
angular.module('app').run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // 默认隐藏掉键盘
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
