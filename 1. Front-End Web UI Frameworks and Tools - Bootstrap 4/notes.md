##JQuery Syntax

**$(selector).action()**
		* `$`: define/access JQuery
		* `(selector)`: to query and find HTML elements
		* `action()`: action to be performed on the element(s)
		* eg: `$("p").hide()`, `$("#myCarousel").carousel('pause')`

**JQuery Selectors**
		* Any HTML elements eg: `p`, `button` etc.
		* Using an #id, eg: `#myCarousel`
		* Class, eg: `.btn`, `.btn.btn-default`
		* Attribute, eg: `[href]`, `[data-toggle="tooltip"]`
		* Current element: `$(this)`

**JavaScript based control example:**
		* $('carousel').carousel();
		* eg:
			`$('.carousel').carousel({ interval:2000});`
