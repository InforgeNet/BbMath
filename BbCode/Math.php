<?php

namespace Inforge\BbMath\BbCode;

class Math
{
	private static function loadMathjax(\XF\BbCode\Renderer\AbstractRenderer $renderer)
	{
		$renderer->getTemplater()->includeJs([
				'src' => 'inforge/bbmath/mathjax-loader.js',
				'addon' => 'Inforge/BbMath',
				'min' => true,
			]);
	}

	public static function renderMathTag($tagChildren, $tagOption, $tag,
		array $options, \XF\BbCode\Renderer\AbstractRenderer $renderer)
	{
		self::loadMathjax($renderer);
		return '$$\[' . $tagChildren[0] . '$$\]';
	}

	public static function renderInlineMathTag($tagChildren, $tagOption, $tag,
		array $options, \XF\BbCode\Renderer\AbstractRenderer $renderer)
	{
		self::loadMathjax($renderer);
		return '$$\(' . $tagChildren[0] . '$$\)';
	}
}
