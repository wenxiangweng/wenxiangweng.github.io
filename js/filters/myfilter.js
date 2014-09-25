/**
 * Created by wengwenxiang on 14-9-10.
 */

angular.module('app').filter('myfilter', function() {
   return function (item, letter) {
       return item.toUpperCase();
   };
});