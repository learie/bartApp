(function(){
	angular
		.module('bartApp')
		.service('DashService', DashService)

	function DashService(){
		var i = 1;
		this.updatePredix = (data) => {
			if(data.eventType === 'Entering'){
				var x = {x: i, y: data.people};
				for(var j = 0; j < this.data.length; j++){
					if(this.data[j].station === data.station){
						this.data[j].values.push(x);
					} else{
						this.data[j].values.push({x: i, y: 0});
					}
				}
				i++;
			}
		}

		this.data = [
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

		]
	}

})();