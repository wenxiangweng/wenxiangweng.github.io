'use strict';

angular.module('app').controller('HomeIndexCtrl', function($scope, messageService) {
	var vm = $scope.vm = {};

  vm.name = "World";
  vm.user = {firstName: ''};
  vm.message = messageService.message;

  vm.addUser = function () {
  	vm.message = 'Thanks' + vm.user.firstName + 'we added you.';
  };

  vm.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];

    $scope.myText = 'Not Selected';
    $scope.currentDate = '';
    $scope.updateMyText = function (date) {
        $scope.myText = 'Selected';
//        $scope.currentDate = date;
    };
});