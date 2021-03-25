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

var retypesetDisabled = false;

function retypesetMathjax()
{
	$(this).off('DOMSubtreeModified', retypesetMathjax);
	if (retypesetDisabled) {
		setTimeout(retypesetMathjax, 500);
		return;
	}
	retypesetDisabled = true;
	$(this).on('DOMSubtreeModified', retypesetMathjax);
	window.MathJax.typesetPromise().then(() => {
		retypesetDisabled = false;
	}).catch((err) => console.log(err.message));
}

$(window).on('load', function() {
	$('article.message, article.resourceBody-main, blockquote.message-body').each(function() {
		$(this).on('DOMSubtreeModified', retypesetMathjax);
	});
});
