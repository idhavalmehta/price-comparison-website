
(function($, w) {

	w.getdeals = {

		api: (function() {

			/*private data*/

			var forms = [
				'[form="search-form"]', // q
				'[form="filter-category"]', // category
				'[form="pagination"]', // page
			];

			var headers = {
				'GD-API-Email': $('meta[name="GD-API-Email"]').attr('content'),
				'GD-API-Token': $('meta[name="GD-API-Token"]').attr('content'),
			};

			/*private methods*/

			var serialize = function() {
				var all = forms.join(','),
				parameters = $(all).serialize();
				return parameters.replace(/&?[^=&]+=(&|$)/g,'');
			};

			/*public data / methods*/

			return {

				state: function(state) {
					var html = getdeals.template.render('api-state-' + state);
					$('#page-content .results-footer').html(html);
				},

				getResults: function() {
					getdeals.results.append();
				},

				getNextPage: function() {
					getdeals.results.append();
				},

			}

		} )(),

		results: (function() {

			/*private data*/
			
			var gutter = 16;
			
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

					var width = $(grid).innerWidth(),
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

				append: function() {

					// remove when ajax added **
					getdeals.api.state('load');
					
					// initialize masonry if needed
					
					if (!$masonry) { this.initMasonry(); }

					// render search results in a variable

					var html = '';
					
					for (var i=0;i<12;i++){
						var width = Math.floor(Math.random()*180) + 150,
							height = Math.floor(Math.random()*250) + 200;
						html += getdeals.template.render('product-card', {
							image: "https://picsum.photos/" + width + "/" + height + "/?random",
						});
					}

					var $items = $(html); // convert to jQuery object

					// attach images loaded event handler

					$items.imagesLoaded(function() {
						$masonry.append($items);
						$items.find('.card-title').trunk8({lines:2});
						$masonry.masonry('appended', $items).masonry();
						getdeals.api.state('more');
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

				reInitialize: function() {
					getdeals.results.initMasonry();
				},

			};

		} )(),

	};

})(jQuery, window);
