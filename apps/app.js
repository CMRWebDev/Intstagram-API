$(function() {
	$('tag_getter').submit(function(){
		// clears results if previous search has run
		$('.results').html('');
		// get the value of the tags the user submits
		var tags = $(this).find("input[name='tags']").val();
	});

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/media/popular?client_id=9e869c15be8d4d4db5be9e9500f81741",
    });
});