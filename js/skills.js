// Import Header/Footer
$(function () {
	var includes = $('[data-include]')
	$.each(includes, function () {
	  var file = './assets/' + $(this).data('include') + '.html'
	  $(this).load(file)
	})
  })


// Spinning Hero Text

if ($(window).width() <= 768) {

	const degreeToRadian = (angle) => {

		return angle * (Math.PI / 180);
	};



	const radius = 28;

	const diameter = radius * 2;



	const circle = document.querySelector("#circular-text");

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



	const radius = 58;

	const diameter = radius * 2;



	const circle = document.querySelector("#circular-text");

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





// Skills 1-5

$(window).scroll(function() {

	var sk2 = $('.sk2-text'),

		sk3 = $('.sk3-text'),

		sk4 = $('.sk4-text'),

		sk5 = $('.sk5-text'),

		diffsk2 = sk2[0].offsetTop - window.pageYOffset,

		diffsk3 = sk3[0].offsetTop - window.pageYOffset,

		diffsk4 = sk4[0].offsetTop - window.pageYOffset,

		diffsk5 = sk5[0].offsetTop - window.pageYOffset,

		offsetsk = $(window).height() * -0.5;



	if (diffsk2 < offsetsk) {
		$('#sk1-img').css("opacity", "0");
	} else {
		$('#sk1-img').css("opacity", "1");
	}



	if (diffsk3 < offsetsk) {
		$('#sk2-img').css("opacity", "0");
	} else {
		$('#sk2-img').css("opacity", "1");
	}



	if (diffsk4 < offsetsk) {
		$('#sk3-img').css("opacity", "0");
	} else {
		$('#sk3-img').css("opacity", "1");
	}



	if (diffsk5 < offsetsk) {
		$('#sk4-img').css("opacity", "0");
	} else {
		$('#sk4-img').css("opacity", "1");
	}

});





//Skills 10-12

$(window).scroll(function() {

	var sk11 = $('.sk11-text'),

		sk12 = $('.sk12-text'),

		diffsk11 = sk11[0].offsetTop - window.pageYOffset,

		diffsk12 = sk12[0].offsetTop - window.pageYOffset,

		offsetskh = $(window).height() * -10.8;



	if (diffsk11 < offsetskh) {
		$('#sk10-img').css("opacity", "0");
	} else {
		$('#sk10-img').css("opacity", "1");
	}



	if (diffsk12 < offsetskh) {
		$('#sk11-img').css("opacity", "0");
	} else {
		$('#sk11-img').css("opacity", "1");
	}

});



// Animation
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
	duration: 0.5,
	opacity: 0
});

ScrollTrigger.defaults({
	start: "top 70%",
	markerds: true,
	toggleActions: "play none none none"
});





//Hero

// gsap.from(".hero_img", {height: "0%", opacity: 1, duration: 1});

// gsap.from(".hero_img img", {height: "100%", duration: 1});







//Five Videos

gsap.from(".sk6 h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".sk6",
		start: "top 50%"
	}
});

gsap.from(".sk7 h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".sk7",
		start: "top 50%"
	}
});

gsap.from(".sk8 h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".sk8",
		start: "top 50%"
	}
});

gsap.from(".sk9 h2", {
	yPercent: 80,
	scrollTrigger: {
		trigger: ".sk9",
		start: "top 50%"
	}
});



gsap.from(".sk6 .sk6-9-dec", {
	delay: 0.5,
	yPercent: 30,
	scrollTrigger: {
		trigger: ".sk6",
		start: "top 50%"
	}
});

gsap.from(".sk7 .sk6-9-dec", {
	delay: 0.5,
	yPercent: 30,
	scrollTrigger: {
		trigger: ".sk7",
		start: "top 50%"
	}
});

gsap.from(".sk8 .sk6-9-dec", {
	delay: 0.5,
	yPercent: 30,
	scrollTrigger: {
		trigger: ".sk8",
		start: "top 50%"
	}
});

gsap.from(".sk9 .sk6-9-dec", {
	delay: 0.5,
	yPercent: 30,
	scrollTrigger: {
		trigger: ".sk9",
		start: "top 50%"
	}
});



gsap.from(".sk6 .sk6-9-img img", {
	duration: 1,
	scrollTrigger: {
		trigger: ".sk6",
		start: "top 50%"
	}
});

gsap.from(".sk7 .sk6-9-img img", {
	duration: 1,
	scrollTrigger: {
		trigger: ".sk7",
		start: "top 50%"
	}
});

gsap.from(".sk8 .sk6-9-img img", {
	duration: 1,
	scrollTrigger: {
		trigger: ".sk8",
		start: "top 50%"
	}
});

gsap.from(".sk9 .sk6-9-img img", {
	duration: 1,
	scrollTrigger: {
		trigger: ".sk9",
		start: "top 50%"
	}
});





//Finished-p

gsap.from(".sk13-content img", {
	duration: 2,
	scrollTrigger: ".sk13-wrapper"
});