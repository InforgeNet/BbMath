<?php

namespace Inforge\BbMath\BbCode;

class Math
{
	public static function renderMathTag($tagChildren, $tagOption, $tag,
		array $options, \XF\BbCode\Renderer\AbstractRenderer $renderer)
	{
		$pre = '$$\[';
		$post = '$$\]';
		if (strpos($tag['tag'], 'imath') !== false) {
			$pre = '$$\(';
			$post = '$$\)';
		}
		if (count($tagChildren) == 0
			|| !is_string($tagChildren[0])
			|| strlen($tagChildren[0]) == 0)
			return '';
		$renderer->getTemplater()->includeJs([
				'src' => 'inforge/bbmath/mathjax-loader.js',
				'addon' => 'Inforge/BbMath',
				'min' => true,
			]);
		return $pre . $tagChildren[0] . $post;
	}
}
