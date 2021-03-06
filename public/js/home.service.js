(function(){
	angular
		.module('bartApp')
		.service('MainService', MainService)
		.factory('mySocket', mySocket)

	MainService.$inject = ['$http'];


	function MainService($http){
		this.data = {
			mont: {
					A: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					B: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					C: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					]
				},
			emba: {
					A: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					B: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					C: [
						{
							key: "Passengers",
							y:40
						},{
							key: "Available",
							y: 60
						}
					]
				},
			west: {
					A: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					B: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					],
					C: [
						{
							key: "Passengers",
							y: 40
						},{
							key: "Available",
							y: 60
						}
					]
				}
		}

		function checkValue(val){
			if(val > 100){
				return 100;
			} else if(val < 0){
				return 0;
			} else{
				return val;
			}
		}

		this.updatePredix = (data) => {
			var pushees = {
				A: Math.floor(data.people * Math.random() + 5),
				B: Math.floor(data.people * Math.random() - 5),
				C: Math.floor(data.people * Math.random() + 5)
			}
			if(data.eventType === 'Entering'){
				if(this.data[data.station].A[0].y)
				this.data[data.station].A[0].y = checkValue(this.data[data.station].A[0].y + pushees.A);
				this.data[data.station].A[1].y = checkValue(this.data[data.station].A[1].y - pushees.A);

				this.data[data.station].B[0].y = checkValue(this.data[data.station].B[0].y + pushees.B);
				this.data[data.station].B[1].y = checkValue(this.data[data.station].B[1].y - pushees.B);

				this.data[data.station].C[0].y = checkValue(this.data[data.station].C[0].y + pushees.C);
				this.data[data.station].C[1].y = checkValue(this.data[data.station].C[1].y - pushees.C);

			} else{
				this.data[data.station].A[0].y = checkValue(this.data[data.station].A[0].y - pushees.A);
				this.data[data.station].A[1].y = checkValue(this.data[data.station].A[1].y + pushees.A);

				this.data[data.station].B[0].y = checkValue(this.data[data.station].B[0].y - pushees.B);
				this.data[data.station].B[1].y = checkValue(this.data[data.station].B[1].y + pushees.B);

				this.data[data.station].C[0].y = checkValue(this.data[data.station].C[0].y - pushees.C);
				this.data[data.station].C[1].y = checkValue(this.data[data.station].C[1].y + pushees.C);
			}

		}
	}

	function mySocket(socketFactory){
		var socket = io.connect('http://e5203700.ngrok.io')
		return socketFactory({
			ioSocket: socket
		});
	}

})();
