/// Import Header/Footer
$(function () {
var includes = $('[data-include]')
$.each(includes, function () {
  var file = './assets/' + $(this).data('include') + '.html'
  $(this).load(file)
})
})


//Lighbox
var el = document.querySelector('.prt_wrapper');
lightGallery(el, {
    loop: true,
    fourceAutoply: false,
    autoplay: false,
    thumbnail: false,
    pager: $(window).width() >= 768 ? true : false,
    speed: 400,
    scale: 0.5,
    keypress: true,
    rotateLeft: false,
    flipHorizontal: false,
    flipVertical: false,
    mode: 'lg-slide',
    cssEasing: 'cubic-bezier(0.25, 0, 0.25, 1)'
});
//Fading in Images
gsap.set(".click", {
    opacity: 0,
    yPercent: 50
});
ScrollTrigger.batch(".click", {
    onEnter: batch => gsap.to(batch, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.15
    })
});