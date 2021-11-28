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
		$pre = '$$\[';
		$post = '$$\]';
		if (strpos($tag['tag'], 'imath') === 0) {
			$pre = '$$\(';
			$post = '$$\)';
		}
		if (count($tagChildren) == 0
			|| !is_string($tagChildren[0])
			|| strlen($tagChildren[0]) == 0)
			return '';
		self::loadMathjax($renderer);
		return $pre . $tagChildren[0] . $post;
	}
}
