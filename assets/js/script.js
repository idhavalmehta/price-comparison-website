
var template = $('#product-card').html();
Mustache.parse(template); // optional, speeds up future uses
var rendered = Mustache.render(template, {});

$(document).ready(function(){
	
	var grid = '#page-content .search-results';

	var gridWidth = $(grid).innerWidth();
	var gutter = 16;
	var n = Math.floor(gridWidth / 220);

	console.log(gridWidth);
	
	var columnWidth = (gridWidth) / n;
	columnWidth = columnWidth - gutter;
	var itemWidth = columnWidth;

	console.log(columnWidth);
	console.log(itemWidth);

	for (var i=0;i<12;i++){ $(grid).append(rendered); }
	$(grid).find('.card').width(itemWidth);
	$(grid).find('.card-title').trunk8({lines: 2});

	// init Masonry
	var $grid = $(grid).masonry({
		itemSelector: '.card',
		columnWidth: columnWidth,
		//percentPosition: true,
		gutter: gutter,
	});

	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});

});