
$(document).ready(function(){
	$('.modal').modal(); // materializecss
	var parameters = window.location.search;
	parameters = $.unserialize(parameters.substring(1));
	$('#search-form').unserialize(parameters); // update form values
	getdeals.templates.parseAll(); // makes mustache faster
	if (parameters.q) { getdeals.api.getResults(); }
});

$(window).resize(function() {
	getdeals.masonry.reInitialize();
} );

$('#page-content').on('click', '#load-more-btn', function(e){
	getdeals.api.state('load');
	getdeals.api.getNextPage();
});
