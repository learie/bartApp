(function(){
	angular
		.module('bartApp')
		.service('HomeService', HomeService)
		.factory('mySocket', mySocket)

	HomeService.$inject = ['$http'];


	function HomeService($http){
		// this.fetchData = return $http.get
	}

	function mySocket(socketFactory){
		var socket = io.connect('http://localhost:3000')
		return socketFactory({
			ioSocket: socket
		});
	}

})();