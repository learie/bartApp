(function(){
	angular
		.module('bartApp')
		.controller('DashController', DashController)
	DashController.$inject = ['$scope', 'mySocket', 'DashService'];

	function DashController($scope, mySocket, DashService){

		$scope.options = {
            chart: {
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Sensor Captures'
                },
                yAxis: {
                    axisLabel: 'Amount of People',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            },
            title: {
                enable: true,
                text: 'Passengers in Bart Stations'
            },
            subtitle: {
                enable: false,
                text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
                css: {
                    'text-align': 'center',
                    'margin': '10px 13px 0px 7px'
                }
            },
            caption: {
                enable: false,
                html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                css: {
                    'text-align': 'justify',
                    'margin': '10px 13px 0px 7px'
                }
            }
        };

        $scope.data = [
                {
                    values: [{x: 0, y: 0}],
                    key: 'Montgomery',
                    color: '#ff7f0e',
                    station: 'mont',
                    area: false
                },
                {
                    values: [{x: 0, y: 0}],
                    key: 'Embarcadero',
                    color: '#2ca02c',
                    station: 'emba',
                    area: false
                },
                {
                    values: [{x: 0, y: 0}],
                    key: 'West Oakland',
                    color: '#7777ff',
                    station: 'west',
                    area: false
                }
            ];

        mySocket.on('predix', function(data){
        	DashService.updatePredix(data);
        	console.log('in dash data: ', data);
        	updateGraph();
        });

        function updateGraph() {
        	$scope.data = DashService.data;
        }

	}

})();