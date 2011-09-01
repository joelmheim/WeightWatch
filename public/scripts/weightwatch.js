var weightwatch = {};

(function(ns) {
	ns.weightRepository = function() {
		var weights = [
                        {dato: new Date(2011, 1, 1, 0, 0, 0, 0), weight: 94.2},
                        {dato: new Date(2011, 2, 25, 0, 0, 0, 0), weight: 95.4},
                        {dato: new Date(2011, 4, 15, 0, 0, 0, 0), weight: 97.1},
                        {dato: new Date(2011, 6, 20, 0, 0, 0, 0), weight: 104.2},
                        {dato: new Date(2011, 8, 27, 0, 0, 0, 0), weight: 100.5}
                      ];
		return {
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
	
	function drawGraph(data) {
        var d = [];
        
		$(data).each( function () {
			var entry = this; 
            d.push([entry.dato, entry.weight]);
        });
		
        $.plot($("#placeholder"), [d], { xaxis: { mode: "time" } });
    };
    
     function populateList(data) {
        $(data).each( function () {
            var entry = this; 
            $("#weight").append("<li data-role=\"list-divider\">" + entry.dato + "</li>");
            $("#weight").append("<li>" + entry.weight + "</li>");
        });  
    };
    

});


