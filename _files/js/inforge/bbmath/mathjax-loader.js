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

function retypesetMathjax(post)
{
	$(post).off('DOMSubtreeModified', postModifiedHandler);
	window.MathJax.typesetPromise().then(() => {
		$(post).on('DOMSubtreeModified', postModifiedHandler);
	}).catch((err) => console.log(err.message));
}

function postModifiedHandler()
{
	retypesetMathjax(this);
}

$(window).on('load', function() {
	$('article.message, article.resourceBody-main, blockquote.message-body').each(function() {
		$(this).on('DOMSubtreeModified', postModifiedHandler);
	});
});
