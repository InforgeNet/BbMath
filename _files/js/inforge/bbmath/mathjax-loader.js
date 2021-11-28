var BbMath = window.BbMath || {};

!function($, window, document, _undefined)
{
	"use strict";

	BbMath.MathJax = XF.create({
		options: {
			mathjax: {
				loader: {
					load: ['ui/safe'],
				},
				enableMenu: false,
				tex: {
					inlineMath: [['$$\\(', '$$\\)']],
					displayMath: [['$$\\[', '$$\\]']],
					processEscapes: false,
					processRefs: true,
					processEnvironments: false,
					tags: 'ams',
				},
				svg: {
					fontCache: 'global',
				},
			},
			mathjaxUrl: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js'
		},

		__construct: function(options) {
			window.MathJax = this.options.mathjax;
		},

		load: function() {
			XF.loadScript(this.options.mathjaxUrl, XF.proxy(this, 'loadSuccess'));
		},

		loadSuccess: function() {
			$(document).on('xf:layout', XF.proxy(this, 'retypeset'));
		},

		retypeset: function() {
			MathJax.startup.promise = MathJax.startup.promise
				.then(() => MathJax.typesetPromise())
				.catch((err) => console.log('MathJax typeset failed: ' + err.message));
			return MathJax.startup.promise;
		},
	});

	$(document).on('xf:page-load-complete', function() {
		var mathjax = new BbMath.MathJax();
		mathjax.load();
	});
}
(jQuery, window, document);
