
(function($, w) {

	w.getdeals = {

		api: (function() {

			/*private data*/

			var data = {

				forms: [
					'[form="search-form"]', // q
					'[form="filter-category"]', // category
					'[form="pagination"]', // page
				],

				serialize: function() {
					var all = this.forms.join(',');
					return $(all).serialize().replace(/&?[^=&]+=(&|$)/g,'');
				},

			};

			/*public data / methods*/

			return {

				state: function(state) {
					var html = '';
					switch (state) {
						case 'none':
							Materialize.toast('No products found. Please try a different search query.', 3000);break;
						case 'error':
							Materialize.toast('Error! Please refresh the page and try again.', 3000);break;
						default:
							var html = getdeals.template.render('api-state-' + state);break;
					}
					if (html.length) {
						html = '<div class="api-state">' + html + '</div>';
					}
					$('#page-content .pagination').html(html);
				},

				getResults: function() {
					var request = $.ajax({
						method: 'GET',
						url: 'https://getdeals.co.in/api/v1/search',
						data: data.serialize(),
						headers: {
							'GD-API-Email': $('meta[name="GD-API-Email"]').attr('content'),
							'GD-API-Token': $('meta[name="GD-API-Token"]').attr('content'),
						}, beforeSend: function() {
							getdeals.api.state('load');
						}, success: function(response) {
							getdeals.results.append(response);
						}, error: function() {
							getdeals.api.state('error');
						}
					});
				},

				getNextPage: function() {
					var $e = $('[name="page"]'),
						page = parseInt($e.val()) + 1;
					$e.val(page); // update search form
					getdeals.api.getResults();
				},

			}

		} )(),

		results: (function() {

			/*private data*/
			
			var gutter = 15;
			
			var columnWidth = 0;
			
			var itemWidth = 0;

			var grid = '.search-results';

			var selector = '.product-card';

			var styleID = 'masonry-product-card-styles';

			var $masonry = null;

			/*public data / methods*/

			return {

				initMasonry: function() {

					// calculate widths

					var width = $(grid).innerWidth() + gutter,
					noOfColumns = Math.floor(width / 250);
					
					columnWidth = (width / noOfColumns) - gutter;
					itemWidth = columnWidth;
					
					// update selector styles
					
					var style = $('#' + styleID);
					// create style tag if not exists
					if (style.length === 0) {
						style = $('<style>').attr('id', styleID).appendTo('head');
					}
					var css = '.product-card { width:' + itemWidth + 'px; }';
					style.html(css); // replace css of this style

					// return masonry instance

					$masonry = $(grid).masonry({
						itemSelector: selector, gutter: gutter,
					});

				},

				append: function(results) {

					// initialize masonry if needed
					
					if (!$masonry) { this.initMasonry(); }

					// render search results in a variable

					var html = '';
					var noOfResults = results.length;
					
					for (var i=0;i<noOfResults;i++){
						html += getdeals.template.render('product-card', results[i]);
					}

					var $items = $(html); // convert to jQuery object

					// attach images loaded event handler

					$items.imagesLoaded(function() {
						$masonry.append($items);
						$items.find('.card-title').trunk8({lines:2});
						$masonry.masonry('appended', $items).masonry();
						if (noOfResults) { getdeals.api.state('more'); }
						else if ($('.product-card').length) { getdeals.api.state('last'); }
						else { getdeals.api.state('none'); } // no results found
					} );
					
				},

			};

		} )(),

		template: (function() {

			/*public data / methods*/

			return {

				parse: function(id) {
					var template = $('#' + id).html();
					Mustache.parse(template); // cache for future use
					return template; // return html for storage
				},

				render: function(id, data={}) {
					var template = getdeals.templates.getTemplate(id);
					return Mustache.render(template, data);
				},

			};

		} )(),

		templates: (function() {

			/*private data*/

			var templates = {};

			/*public data / methods*/

			return {

				parseAll: function() {
					$('script[type="text/html').each(function() {
						var id = $(this).attr('id');
						templates[id] = getdeals.template.parse(id);
					} );
				},

				getTemplate: function(id) {
					if (templates.hasOwnProperty(id)) { return templates[id]; }
					return ''; // empty string to avoid errors
				},

			};

		} )(),

		masonry: (function() {

			/*public data / methods*/

			return {

				remake: function() {
					getdeals.results.initMasonry();
				},

			};

		} )(),

	};

})(jQuery, window);
