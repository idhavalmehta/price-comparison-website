
$(document).ready(function(){
	var parameters = window.location.search;
	parameters = $.unserialize(parameters.substring(1));
	$('#search-form').unserialize(parameters); // update form values
	getdeals.templates.parseAll(); // makes mustache faster
	if (parameters.q) { getdeals.api.getResults(); }
});

$(window).resize(function() {
	getdeals.masonry.remake(); // create the masonry grid again
} );

$('#page-content').on('click', '#load-more-btn', function(e){
	getdeals.api.state('load');
	getdeals.api.getNextPage();
});
