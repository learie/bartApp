(function(){
	angular
		.module('bartApp')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['$scope', 'mySocket', 'MainService'];

	function HomeController($scope, mySocket, MainService){

		// $scope.$on("socket:bartdata", function(ev, data){

		// })
		$scope.nextTrain = {
			MONT: undefined,
			EMBR: undefined,
			WOAK: undefined
		};

		mySocket.emit('hello');

		mySocket.on('bartdata', function(data){
			// console.log(data);
			var station = data.root.station.abbr;
			var train = {
				train: data.root.station.etd[0].destination,
				estimate: data.root.station.etd[0].estimate[0].minutes
			}

			$scope.nextTrain[station] = train;

			console.log('train: ', train)
			console.log('data: ', data)

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
                // height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
								showLegend: false,
                duration: 500,
                // labelThreshold: 0.01,
                labelSunbeamLayout: true
            }
        };
        $scope.data = MainService.data;
	}



})();
