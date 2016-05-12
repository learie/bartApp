(function(){
	angular
		.module('bartApp')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['$scope', 'mySocket', 'MainService'];

	function HomeController($scope, mySocket, MainService){

		// $scope.$on("socket:bartdata", function(ev, data){

		// })

		mySocket.emit('hello');

		mySocket.on('bartdata', function(data){
			console.log(data);

		})

		mySocket.on('predix', function(data){
			console.log(data);
			MainService.updatePredix(data);
			updateGraph();
		})

		function updateGraph(){
			$scope.data = MainService.data;
		}

		$scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };
        $scope.data = MainService.data;
	}



})();
