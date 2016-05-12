(function(){
	angular
		.module('bartApp')
		.service('MainService', MainService)
		.factory('mySocket', mySocket)

	MainService.$inject = ['$http'];


	function MainService($http){
		this.data = {
			mont: [
				{
					key: "Passengers",
					y: 10
				},{
					key: "",
					y: 90
				}
			],
			emba: [
				{
					key: "Passengers",
					y: 10
				},{
					key: "",
					y: 90
				}
			],
			west: [
				{
					key: "Passengers",
					y: 10
				},{
					key: "",
					y: 90
				}
			]
		}

		// this.data.mont = 10;
		// this.data.emba = 10;
		// this.data.west = 10;
		this.updatePredix = (data) => {
			if(data.eventType === 'Entering'){
				this.data[data.station][0].y += data.people;
				this.data[data.station][1].y -= data.people;
			} else{
				this.data[data.station][0].y -= data.people;
				this.data[data.station][1].y += data.people;
			}
			
		}
	}

	function mySocket(socketFactory){
		var socket = io.connect('http://localhost:3000')
		return socketFactory({
			ioSocket: socket
		});
	}

})();