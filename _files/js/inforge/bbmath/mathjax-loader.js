window.MathJax = {
	loader: {
		load: ['ui/safe']
	},
	options: {
		enableMenu: false
	},
	tex: {
		inlineMath: [['$$\\(', '$$\\)']],
		displayMath: [['$$\\[', '$$\\]']],
		processEscapes: false,
		processRefs: true,
		processEnvironments: false,
		tags: 'ams'
	},
	svg: {
		fontCache: 'global'
	}
};

(function() {
	var script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
	script.async = true;
	document.head.appendChild(script);
})();
