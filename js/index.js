// Import Header/Footer
$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = './assets/' + $(this).data('include') + '.html'
	  $(this).load(file)
	})
  })


//About Intro

var aipbox = $('.ai-p-box').offset().top;

$(window).scroll(function() {

	var aiImg = $('.ai-img'),

		aiScroll = $(window).scrollTop(),

		aiImgDisplayTrigger = $('.thd'),

		aiImgDisplayDiff = aiImgDisplayTrigger[0].offsetTop - window.pageYOffset;



	if (aiScroll >= aipbox) {
		aiImg.addClass('ai-img-fixed');
	} else {
		aiImg.removeClass('ai-img-fixed');
	}



	if (aiImgDisplayDiff < 100) {
		aiImg.css("display", "none");
	} else {
		aiImg.css("display", "");
	}

});





//Three Designs

$(window).scroll(function(e) {

	var thdBox2 = $('.thd_text_bx_2'),

		thdBox3 = $('.thd_text_bx_3'),

		thdDiff2 = thdBox2[0].offsetTop - window.pageYOffset;

	thdDiff3 = thdBox3[0].offsetTop - window.pageYOffset;

	thdunit = $(window).height() * -1.45;



	if (thdDiff2 < thdunit) {
		$('#thd_img_1').css("opacity", "0");
	} else {
		$('#thd_img_1').css("opacity", "1");
	}

	if (thdDiff3 < thdunit) {
		$('#thd_img_2').css("opacity", "0");

		$('.thd_btn').css({
			"opacity": "1",
			"pointer-events": "auto"
		});

		$('.thd_spinn').css("opacity", "0");
	} else {
		$('#thd_img_2').css("opacity", "1");

		$('.thd_btn').css({
			"opacity": "",
			"pointer-events": ""
		});

		$('.thd_spinn').css("opacity", "1");
	}

});





// Thd Spinning Text

if ($(window).width() <= 768) {

	const degreeToRadian = (angle) => {

		return angle * (Math.PI / 180);

	};



	const radius = 37;

	const diameter = radius * 2;



	const circle = document.querySelector(".thd_spinn_text");

	circle.style.width = `${diameter}px`;

	circle.style.height = `${diameter}px`;



	const text = circle.innerText;

	const characters = text.split("");

	circle.innerText = null;



	const startAngle = -90;

	const endAngle = 270;

	const angleRange = endAngle - startAngle;



	const deltaAngle = angleRange / characters.length;

	let currentAngle = startAngle;



	characters.forEach((char, index) => {

		const charElement = document.createElement("span");

		charElement.innerText = char;

		const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));

		const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));



		const transform = `translate(${xPos}px, ${yPos}px)`;

		const rotate = `rotate(${index * deltaAngle}deg)`;

		charElement.style.transform = `${transform} ${rotate}`;



		currentAngle += deltaAngle;

		circle.appendChild(charElement);

	});

} else {

	const degreeToRadian = (angle) => {

		return angle * (Math.PI / 180);

	};



	const radius = 60;

	const diameter = radius * 2;



	const circle = document.querySelector(".thd_spinn_text");

	circle.style.width = `${diameter}px`;

	circle.style.height = `${diameter}px`;



	const text = circle.innerText;

	const characters = text.split("");

	circle.innerText = null;



	const startAngle = -90;

	const endAngle = 270;

	const angleRange = endAngle - startAngle;



	const deltaAngle = angleRange / characters.length;

	let currentAngle = startAngle;



	characters.forEach((char, index) => {

		const charElement = document.createElement("span");

		charElement.innerText = char;

		const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));

		const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));



		const transform = `translate(${xPos}px, ${yPos}px)`;

		const rotate = `rotate(${index * deltaAngle}deg)`;

		charElement.style.transform = `${transform} ${rotate}`;



		currentAngle += deltaAngle;

		circle.appendChild(charElement);

	});

}




// Animation

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
	duration: 0.5,
	opacity: 0
});

ScrollTrigger.defaults({
	start: "top 70%",
	markesr: true,
	toggleActions: "play none none none"
});





//Intro Img

gsap.from(".ai-img", {
	opacity: 1,
	scrollTrigger: {
		trigger: ".ai-btn-box",
		start: "top 100%",
		end: "top 0%",
		scrub: 0.5,
	}
});





//Three Designs

//3D Container

gsap.from(".thd .wrapper", {
	opacity: 0,
	scrollTrigger: {
		trigger: ".thd",
		start: "top 95%",
		end: "top 15%",
		scrub: 1,
	}
});



gsap.from(".d_one_wrapper img", {
	xPercent: 110,
	scrollTrigger: ".d_one_wrapper .thd_img"
});

gsap.from(".d_one_wrapper .thd_name_box", {
	yPercent: 400,
	opacity: 0,
	scrollTrigger: ".d_one_wrapper .thd_img"
});



gsap.from(".d_two_wrapper img", {
	xPercent: 110,
	scrollTrigger: ".d_two_wrapper .thd_img"
});

gsap.from(".d_two_wrapper .thd_name_box", {
	yPercent: 400,
	opacity: 0,
	scrollTrigger: ".d_two_wrapper .thd_img"
});



gsap.from(".d_three_wrapper img", {
	xPercent: 110,
	scrollTrigger: ".d_three_wrapper .thd_img"
});

gsap.from(".d_three_wrapper .thd_name_box", {
	yPercent: 400,
	opacity: 0,
	scrollTrigger: ".d_three_wrapper .thd_img"
});





//Five Videos

gsap.from(".prm1 .prm-h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".prm1 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm2 .prm-h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".prm2 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm3 .prm-h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".prm3 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm4 .prm-h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".prm4 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm5 .prm-h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".prm5 .vid",
		start: "top 40%"
	}
});



gsap.from(".prm1 .prm-para", {
	yPercent: 30,
	scrollTrigger: {
		trigger: ".prm1 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm2 .prm-para", {
	yPercent: 30,
	scrollTrigger: {
		trigger: ".prm2 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm3 .prm-para", {
	yPercent: 30,
	scrollTrigger: {
		trigger: ".prm3 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm4 .prm-para", {
	yPercent: 30,
	scrollTrigger: {
		trigger: ".prm4 .vid",
		start: "top 40%"
	}
});

gsap.from(".prm5 .prm-para", {
	yPercent: 30,
	scrollTrigger: {
		trigger: ".prm5 .vid",
		start: "top 40%"
	}
});





//Finished-p

gsap.from(".finished-p-content img", {
	opacity: 0,
	stageer: 2,
	duration: 2,
	scrollTrigger: ".finished-p-wrapper"
});

// gsap.from(".finished-p-h2", {opacity: 0, yPercent: 10, scrollTrigger: ".finished-p-wrapper"});