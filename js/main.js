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

	$(".header-sp-icon-wrap").click(function () {
		if ($(".header-sp-icon-wrap").hasClass("is-open")) {
		  $(".header-sp-icon-wrap").removeClass("is-open");
		  $(".header-sp-nav").css("display", "none");
	
		  $("html,body").removeAttr("style");
		  $(window).off("touchmove.noscroll");
		} else {
		  $(".header-sp-icon-wrap").addClass("is-open");
		  $(".header-sp-nav").css("display", "block");
	
		  $("html,body").css("overflow", "hidden");
		  $(window).on("touchmove", function (event) {
			event.preventDefault();
		  });
		}
	  });
	
	  $(".header-sp-nav").click(function () {
		if ($(".header-sp-icon-wrap").hasClass("is-open")) {
		  $(".header-sp-nav").css("display", "none");
		  $(".header-sp-icon-wrap").removeClass("is-open");
	
		  $("html,body").removeAttr("style");
		  $(window).off("touchmove.noscroll");
		}
	  });
	  $(".header-sp-nav-list a").click(function () {
		  if ($(".header-sp-icon-wrap").hasClass("is-open")) {
			$(".header-sp-nav").css("display", "none");
			$(".header-sp-icon-wrap").removeClass("is-open");
	  
			$("html,body").removeAttr("style");
			$(window).off("touchmove.noscroll");
		  }
	});
});

