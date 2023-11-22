// Import Header/Footer
$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = './assets/' + $(this).data('include') + '.html'
	  $(this).load(file)
	})
  })


//Heading Fade Animation

$(window).scroll(function(e) {

	var para1 = $('.para1');

	var para2 = $('.para2');

	var para3 = $('.para3');

	var para4 = $('.para4');

	var para51 = $('.para5-p1');

	var para52 = $('.para5-p2');

	var para53 = $('.para5-p3');

	var para54 = $('.para5-p3');

	var diff1 = para1[0].offsetTop - window.pageYOffset;

	var diff2 = para2[0].offsetTop - window.pageYOffset;

	var diff3 = para3[0].offsetTop - window.pageYOffset;

	var diff4 = para4[0].offsetTop - window.pageYOffset;

	var diff51 = para51[0].offsetTop - window.pageYOffset;

	var diff52 = para52[0].offsetTop - window.pageYOffset;

	var diff53 = para53[0].offsetTop - window.pageYOffset;

	var diff54 = para54[0].offsetTop - window.pageYOffset;

	var range = 250;



	//Para 1

	if (diff1 < range) {

		$('.para1').css("opacity", "0");

		$(".hd1").css({
			"opacity": "0"
		});

		$(".hd2").css({
			"opacity": "0.7",
			"transition-delay": "0.6s"
		});

		$('.about-text').css("opacity", "0");

	} else {

		$('.para1').css("opacity", "1");

		$(".hd1").css({
			"opacity": "0.7"
		});

		$(".hd2").css({
			"opacity": "0",
		});

		$('.about-text').css("opacity", "1");

	}



	//Para 2

	if (diff2 < range) {

		$('.para2').css("opacity", "0");

		$(".hd2").css({
			"opacity": "0",
			"transition-delay": "0s"
		});

		$(".hd3").css({
			"opacity": "0.7",
			"transition-delay": "0.6s"
		});

	} else {

		$('.para2').css("opacity", "1");

		$('.hd3').css("opacity", "0");

	}



	//Para 3

	if (diff3 < range) {

		$('.para3').css("opacity", "0");

		$(".hd3").css({
			"opacity": "0",
			"transition-delay": "0s"
		});

		$(".hd4").css({
			"opacity": "0.7",
			"transition-delay": "0.6s"
		});

	} else {

		$('.para3').css("opacity", "1");

		$('.hd4').css("opacity", "0");

	}



	//Para 4

	if (diff4 < range) {

		$('.para4').css("opacity", "0");

		$(".hd4").css({
			"opacity": "0",
			"transition-delay": "0s"
		});

		$(".hd5").css({
			"opacity": "0.7",
			"transition-delay": "0.6s"
		});

	} else {

		$('.para4').css("opacity", "1");

		$('.hd5').css("opacity", "0");

	}



	//Para5-P1

	if (diff51 < range) {

		$('.para5-p1').css("opacity", "0");

	} else {

		$('.para5-p1').css("opacity", "1");

	}



	//Para5-P2

	if (diff52 < range) {

		$('.para5-p2').css("opacity", "0");

	} else {

		$('.para5-p2').css("opacity", "1");

	}



	//Para5-P3

	if (diff53 < range) {

		$('.para5-p3').css("opacity", "0");

	} else {

		$('.para5-p3').css("opacity", "1");

	}



	//Para5-P4

	if (diff54 < range) {

		$('.para5-p3').css("opacity", "0");

		$(".hd5").css({
			"opacity": "0",
			"transition-delay": "0s"
		});

	} else {

		$('.para5-p4').css("opacity", "1");

	}

});





//Decreasing Brightness

// $(document).ready(function() {

// 	$(window).scroll(function() {

// 		$('#bg-img1').css("opacity", 1 - $(window).scrollTop() / $('.main').height())

// 	})

// })