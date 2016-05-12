(function(){
	angular
		.module('bartApp')
		.controller('DashController', DashController)
	DashController.$inject = ['$scope'];

	function DashController($scope){
		console.log('hello');
	}

})();