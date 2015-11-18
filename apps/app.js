$(function() {
	$('tag_getter').submit(function(){
		// clears results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submits
		var tags = $(this).find("input[name='tags']").val();
		alert();
	});

	// gets popular post 
	$.ajax({
  		type: "GET",
 		dataType: "jsonp",
		cache: false,
		url: "https://api.instagram.com/v1/media/popular?access_token=190034554.9e869c1.ec7b0eafa1f2499b98a0d4d0823fdfc8",
  		success: function(data) {
    		for (var i = 0; i < 6; i++) {
      			$(".results").append("<li><a target='_blank' href='" + data.data[i].link + "'><img src='" + data.data[i].images.low_resolution.url +"'></img></a></li>");
    }
  }
});

});