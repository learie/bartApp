(function(){
	angular
		.module('bartApp')
		.controller('DashController', DashController)
	DashController.$inject = ['$scope', 'mySocket', 'MainService'];

	function DashController($scope, mySocket, MainService){

        $scope.selectedStation = 'mont';
        $scope.selectedCar = 'A';
        $scope.options = {
            chart: {
                type: 'pieChart',
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: false,
                showLegend: false,
                duration: 500,
                labelSunbeamLayout: true
            }
        };

		function updateSelection() {
            updateGraph();
        }

        mySocket.on('predix', function(data){
        	MainService.updatePredix(data);
        	updateGraph();
        });

        function updateGraph() {
        	$scope.data = MainService.data;
            $scope.dataSelected = $scope.data[$scope.selectedStation][$scope.selectedCar];
        }
        updateGraph();
	}

})();