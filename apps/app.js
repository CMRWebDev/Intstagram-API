$(function() {
	$('tag_getter').submit(function(){
		// clears results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submits
		var 
	});

	$('.popular-button').on("click", "#pop", function(){
		

		// run function that gets jax and displays data
		// function takes the tag and popular as params
		getRecent();
	});

	$('.recent-button').on("click", "#rec", function(){
		alert();
		// execute function that gets AJAX and displays data
		// function takes the  tag and recent
		getRecent();
	});

	

	// on click pupular
	// gets popular post 
	//GET PUPLAR




var tag_name = 
var search_type = "recent";





function getRecent() {
	var tag_name = "trucks";
	var search_type = "recent";

		$.ajax({
  			type: "GET",
 			dataType: "jsonp",
			cache: false,
			url: "https://api.instagram.com/v1/tags/" + tag_name + "/media/" + search_type + "?access_token=190034554.9e869c1.ec7b0eafa1f2499b98a0d4d0823fdfc8",
  			success: function(data) {
    			for (var i = 0; i < 6; i++) {
      				$(".results").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    			}
  			}
		});

	};

});

