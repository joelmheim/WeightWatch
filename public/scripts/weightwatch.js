var weightwatch = {};

(function(ns) {
	ns.weightRepository = function() {
		var weights = [];
		var weights_key = "weightwatch.weighter";
		
        var saveData = function () {
            localStorage.setItem(weights_key, JSON.stringify(weights));
        }
        
        if (localStorage.getItem(weights_key) !== null) {
            weights = JSON.parse(localStorage.getItem(weights_key));
        }

        return {
            addWeight: function(weight) {
                if(typeof weight !== "undefined") {
                    weights.push(weight);
                    saveData();
                } 
            },
			getWeights: function(callback) {
				if (typeof callback  === 'function') {
					callback(weights);
				}
			}
		};
	};
})(weightwatch);

$(document).ready(function () {
    var weightRepository = weightwatch.weightRepository();	
    
	weightRepository.getWeights(function(weights) {
		populateList(weights);
		drawGraph(weights);
	});
	
    $('#weighin').submit(function() {
        var weight = { 'date': $('#weighindate').val(), 'weight': $('#weighinweight').val()};
        weightwatch.weightRepository().addWeight(weight);
    });


	function drawGraph(data) {
        var d = [];
        
		if (data.length > 0) {
    		$(data).each( function () {
				var entry = this;
				d.push([ new Date(entry['date']), entry['weight']]);
	        });
		}
		
        $.plot($("#placeholder"), [d], { xaxis: { mode: "time" } });
    };
    
     function populateList(data) {
	 	if (data.length > 0) {
	        $(data).each( function () {
                var entry = this; 
	            $("#weight").append("<li data-role=\"list-divider\">" + entry['date'] + "</li>");
	            $("#weight").append("<li>" + entry['weight'] + "</li>");
	        });  
    	} else {
                $("#weight").append("<li data-role=\"list-divider\"> No entry </li>");
                $("#weight").append("<li> Add a weight by clicking the Add button below </li>");
		}
    };
    
    function addWeightEntry() {
		
	}
});

