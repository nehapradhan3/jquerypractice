var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};

window.onload = function(){



	$.ajax({
		 	  url: 'http:localhost:8080/samdashboard/UsersAskedPastThreeSevenAndThirtyDays',
			//url: 'http:localhost:8080/samdashboard/getTotalUsersByDays?rom=2016-07-21T17:34:49.000Z&to=2016-11-21T17:34:49.000Z',	
		 	  dataType:"json",
		 	  contentType:"application/json",
		 	  async: false,
		  	 error: function() {
		 	     $('#info').html('<p>An error has occurred</p>');
		 	 },
		  	 success: function(data){

		  	 	console.log(data, "data-----");

		  	 	var keys = [];

		  	 	for(key in data){
		  	 		keys.push(key);
		  	 	}


		  	 	var data = $.map(data, function(val){
		  	 		return val;
		  	 	})

		  	 	var lineChartData = {
					labels : keys,
					datasets : [
						{
							label: "My First dataset",
							fillColor : "rgba(66, 244, 146, 0.79)",
							strokeColor : "rgba(0, 165, 74, 1)",
							pointColor : "rgba(48, 164, 255, 1)",
							pointStrokeColor : "#fff",
							pointHighlightFill : "#fff",
							pointHighlightStroke : "rgba(48, 164, 255, 1)",
							data : data
						}
						
					]

				}


					var chart1 = document.getElementById("line-chart").getContext("2d");
					window.myLine = new Chart(chart1).Line(lineChartData, {
						responsive: true
					});

		  	 },
		   type: 'GET'
		});
	/*var chart2 = document.getElementById("bar-chart").getContext("2d");
	window.myBar = new Chart(chart2).Bar(barChartData, {
		responsive : true
	});
	var chart3 = document.getElementById("doughnut-chart").getContext("2d");
	window.myDoughnut = new Chart(chart3).Doughnut(doughnutData, {responsive : true
	});
	var chart4 = document.getElementById("pie-chart").getContext("2d");
	window.myPie = new Chart(chart4).Pie(pieData, {responsive : true
	});*/
	
};
