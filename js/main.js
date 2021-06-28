// -----スムーススクロール-----
$(function () {
	$('a[href^="#"]').click(function () {
		const speed = 800;
		const href = $(this).attr('href');
		const target = $(href == '#' || href == '' ? 'html' : href);
		const position = target.offset().top - $(window).height() / 10;
		$('html, body').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});
});
