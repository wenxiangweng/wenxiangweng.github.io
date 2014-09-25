/**
 * Created by wengwenxiang on 14-9-9.
 */

'use strict';

angular.module('app').directive('focus', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element[0].focus();
        }
    };
});
