var check1 = true;
		var check2 = true;
		var check3 = true;
		var check4 = true;
		var check5 = true;
		var check6 = true;

$('.program__enroll').hover(function() {
	$(this).css('border-color', '#cc0000');
	$(this).css('background', '#fff');
	$(this).css('color', '#cc0000');
  }, function() {
	$(this).css('border-color', '#cc0000');
	$(this).css('background', '#cc0000');
	$(this).css('color', '#fff');
  });
$('.carousel__item').hover(function() {
    $( this ).find('h2').css('color', '#cc0000');
    $( this ).find('svg').css('fill', '#cc0000');
    $( this ).css('border-top', '10px solid #cc0000');
	$(this).find('.program__enroll').css('border-color', '#cc0000');
	$( this ).find('.program__enroll').css('background', '#cc0000');
	$(this).find('.program__enroll').css('color', '#fff');
  }, function() {
    $( this ).find('h2').css('color', '#454545');
    $( this ).find('svg').css('fill', 'unset');
    $( this ).css('border-top', '10px solid #fff');
	$( this ).find('.program__enroll').css('background', '#fff');
	$(this).find('.program__enroll').css('border-color', '#454545');

	$(this).find('.program__enroll').css('color', '#454545');

  });
$('.faq__block h2').on('click', function(){
	$(this).parent().find('p').slideToggle();
	$(this).parent().find('.faq__close').toggleClass('active');
});


$(document).ready(function() {
	$('#nav').onePageNav();
    $('#map').height($('#contact').height());
    var width = $(window).width();
    var width2 = -10-(width-1496)/6;
    var width3 =  width-width2;
    var width4 = (width3*660.6)/width+325;
    if ($(window).width() >= '1496'){
        $('#header').css('background-position-x', width2);
        $('#header').css('background-size', width3+'px '+width4+'px');
    }
    $('carousel').slick('setPosition');
});
	$(window).scroll(function(){
		var top = $(this).scrollTop();

			if (top > 650 && check1) {
				check1 = false;
				$( ".steps__block:first-child h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:first-child .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:first-child').css('opacity', '1');
				//$('.steps__block:first-child').fadeIn();
				//$('.steps__block:first-child').addClass('d-flex');
			};
			if (top > 750 && check2) {
				check2 = false;
				$( ".steps__block:nth-child(2) h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:nth-child(2) .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:nth-child(2)').css('opacity', '1');
				//$('.steps__block:nth-child(2)').fadeIn();
				//$('.steps__block:nth-child(2)').addClass('d-flex');
			};
			if (top > 850 && check3) {
				check3 = false;
				$( ".steps__block:nth-child(3) h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:nth-child(3) .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:nth-child(3)').css('opacity', '1');
				//$('.steps__block:nth-child(3)').fadeIn();
				//$('.steps__block:nth-child(3)').addClass('d-flex');
			};
			if (top > 950 && check4) {
				check4 = false;
				$( ".steps__block:nth-child(4) h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:nth-child(4) .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:nth-child(4)').css('opacity', '1');
				//$('.steps__block:nth-child(4)').fadeIn();
				//$('.steps__block:nth-child(4)').addClass('d-flex');
			};
			if (top > 1050 && check5) {
				check5 = false;
				$( ".steps__block:nth-child(5) h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:nth-child(5) .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:nth-child(5)').css('opacity', '1');
				//$('.steps__block:nth-child(5)').fadeIn();
				//$('.steps__block:nth-child(5)').addClass('d-flex');
			};
			if (top > 1150 && check6) {
				check6 = false;
				$( ".steps__block:nth-child(6) h2" ).animate({
					color: "#000000"
				  }, 500, function() {
					// Animation complete.
				  });
				$( ".steps__block:nth-child(6) .steps__number" ).animate({
					color: "#cc0000",
					borderColor: "#cc0000"
				  }, 500, function() {
					// Animation complete.
				  });
				//$('.steps__block:nth-child(6)').css('opacity', '1');
				//$('.steps__block:nth-child(6)').fadeIn();
				//$('.steps__block:nth-child(6)').addClass('d-flex');
			}
		});
$(document).ready(menuScroll);
$(window).on("scroll", menuScroll);
function menuScroll() {
		var top = $(this).scrollTop();
	console.log(top);
	if (top > 550) {

		$('.fixed-top').css('position', 'fixed');
				     if ($(window).width() <= '991'){
		        $('.header__menu').css('background', 'rgba(204,0,0,1)');
		        $('.header__menu ul li a').css('color', '#fff');
		        $('.closemenu svg').css('fill', '#fff');
		        $('.header__languages').prev().removeClass('d-flex').addClass('d-none');
		        $('.phonetoggle svg').on('click', function(){
		        	$('.menutoggle svg').trigger('click');
		        	$('.header__menu ul').removeClass('d-flex').addClass('d-none');
		        	$('.header__menu .header__dropdown span').css('display','block');
		        	$('.header__menu .header__dropdown').css('margin-top','20px');
		        })
		    }
		$('.menutoggle svg g').css('fill', '#fff');
		$('.phonetoggle svg').css('fill', '#fff');
		$('.header__top').css('background', '#cc0000');
		$('.header__close').css('border-top-color', '#fff');
		$('.header__dropdown span').css('color', '#fff');
		$('.header__languages a:not(.active-language)').css('opacity', '0.4');
		$( '.active' ).css( 'border-top-color', '#fff !important' );
		$( '.active-language' ).css( 'color', '#fff' );
		$( '.header__languages a' ).hover(function(){
			$(this).css('font-weight', '700');
			$(this).css('opacity', '1');
			$(this).css('color', '#fff');
		}, function() {
			if ($(this).hasClass('active-language')) {

			} else {
			$(this).css('font-weight', '400');
			$(this).css('opacity', '0.4');
			$(this).css('color', '#fff');
		}
		});
		$('.header__languages a').css('color', '#fff');
		$('.st0').css('fill', '#fff');
		$('.st1').css('fill', '#fff');
		$('.st2').css('fill', '#fff');
		$('.header__languages').prev().hover(function() {
		    //$(this).find('.header__close').next().css('opacity','0');
		    $(this).find('.header__close').addClass('active');
		    $(this).find('span').css('display', 'block');
		    $(this).css('background', '#cc0000');
		  }, function() {
		    //$(this).find('.header__close').next().css('opacity','1');
		    $(this).find('.header__close').removeClass('active');
		    $(this).find('span').css('display', 'none');
		    $(this).find('.d-flex span').css('display', 'block');
		    $(this).css('background', '#cc0000');
		  });
	}
	if (top < 550) {


		$('.fixed-top').css('position', 'absolute');
		if ($(window).width() <= '991'){
		        $('.header__menu').css('background', 'rgba(255,255,255,0.8)');
		        $('.header__menu ul li a').css('color', '#000');
		        $('.closemenu svg').css('fill', '#000');
		        $('.header__languages').prev().removeClass('d-flex').addClass('d-none');
		        $('.phonetoggle svg').on('click', function(){
		        	$('.menutoggle svg').trigger('click');
		        	$('.header__menu ul').removeClass('d-flex').addClass('d-none');
		        	$('.header__menu .header__dropdown span').css('display','block');
		        	$('.header__menu .header__dropdown').css('margin-top','20px');
		        })
		    }
		$('.menutoggle svg g').css('fill', '#000');
		$('.phonetoggle svg').css('fill', '#000');
		$('.header__top').css('background', 'transparent');
		$( '.header__dropdown .active' ).css( 'border-top-color', '#949494 !important' );
		$('.header__close').css('border-top-color', '#cc0000');
		$('.header__dropdown span').css('color', 'unset');
		$('.header__languages a').css('opacity', '1');
		$('.header__languages a').css('color', '#000');
		$( '.active-language' ).css( 'color', '#cc0000' );
		$( '.header__languages a' ).hover(function(){
			$(this).css('font-weight', '700');
			$(this).css('color', '#cc0000');
		}, function() {
			if($(this).hasClass('active-language')) {

			} else {
			$(this).css('font-weight', '400');
			$(this).css('color', '#000');
		}
		});
		$('.st0').css('fill', '#02A1FF');
		$('.st1').css('fill', '#E50000');
		$('.st2').css('fill', '#EC1C24');
		$('.header__dropdown').css('background', 'transparent');
		$('.header__languages').prev().hover(function() {
    //$(this).find('.header__close').next().css('opacity','0');
    $(this).find('.header__close').addClass('active');
    $(this).find('span').css('display', 'block');
    $(this).css('background', 'transparent');
  }, function() {
    //$(this).find('.header__close').next().css('opacity','1');
    $(this).find('.header__close').removeClass('active');
    $(this).find('span').css('display', 'none');
    $(this).find('.d-flex span').css('display', 'block');
    $(this).css('background', 'transparent');
  });
				if ($(window).width() < '768'){
		        $('.header__languages a').css('color', '#fff');
				$( '.active-language' ).css( 'color', '#fff' );
				$('.menutoggle svg g').css('fill', '#fff');
		$('.phonetoggle svg').css('fill', '#fff');
		    }
	}
}
$('.steps__wrapper').hover(function() {
		    $(this).find('h2').css('color','#cc0000');
		    $(this).find('p').stop().slideToggle();
		    $(this).parent().find('.steps__number').css('background', '#cc0000');
		    $(this).parent().find('.steps__number').css('color', '#fff');
		  }, function() {
		    $(this).find('h2').css('color','#2c2c2c');
		    $(this).find('p').stop().slideToggle();
		    $(this).parent().find('.steps__number').css('background', '#fff');
		    $(this).parent().find('.steps__number').css('color', '#cc0000');
		  });
$('.steps__number').hover(function() {
		    $(this).parent().find('h2').css('color','#cc0000');
		    $(this).parent().find('p').stop().slideToggle();
		    $(this).css('background', '#cc0000');
		    $(this).css('color', '#fff');
		  }, function() {
		    $(this).parent().find('h2').css('color','#2c2c2c');
		    $(this).parent().find('p').stop().slideToggle();
		    $(this).css('background', '#fff');
		    $(this).css('color', '#cc0000');
		  });
$('.tellephone').click(function(e){
		e.preventDefault();
		$('.tellephone-modal:not(.intensive)').fadeToggle();
		$('.modal-container').fadeToggle();
		$('.up-button').fadeOut();
	});
$('.program__enroll').on('click', function(){
	$('.intensive').fadeToggle();
		$('.modal-container').fadeToggle();
		$('.up-button').fadeOut();
});
$('.header__button, .carousel2__register, .recommend__button').click(function(e){
		e.preventDefault();
		//$('.intensive').fadeToggle();
		//$('.modal-container').fadeToggle();
		//$('.up-button').fadeOut();
	$('html, body').animate({
        scrollTop: $("#contact .contact__body").offset().top-200
    }, 2000);
	});
	setInterval(changeTell, 6000);

	function changeTell(){
		$('.tellephone-img').fadeOut();
		$('.tellephone-text').fadeIn();
		setTimeout(function(){
		$('.tellephone-text').fadeOut();
		$('.tellephone-img').fadeIn();
		}, 3000)
	}
$('.modal-container').click(function(){
		$('.tellephone-modal').fadeOut();
		$('.sell-modal').fadeOut();
		$('.set-modal').fadeOut();
		$(this).fadeOut();
		$('.tellephone').fadeIn();
		$('.up-button').fadeIn();
		$('.form-result').find('p').detach();
	});
	$('.close-img').click(function(){
		$('.tellephone-modal').fadeOut();
		$('.sell-modal').fadeOut();
		$('.set-modal').fadeOut();
		$('.modal-container').fadeOut();
		$('.tellephone').fadeIn();
		$('.up-button').fadeIn();
		$('.form-result').find('p').detach();
	});
if(screen.width < 991.98){
	var test = $('.recommend__register').detach();
	test.insertBefore('.recommend__advantages');
}
$('.menutoggle svg').on('click', function(){
	$('.header__menu').fadeIn();
	$('.header__menu ul').addClass('d-flex').removeClass('d-none');
	$('.header__menu .header__dropdown span').css('display','none');
	$('.header__menu .header__dropdown').css('margin-top','0px');
});
$('.closemenu svg').on('click', function(){
	$('.header__menu').fadeOut();
});
imgs = [
'img/book.jpg',
'img/book2.jpg',
'img/book3.jpg',
];
i=0;
setInterval(function(){
	if (i==2) {
	i=0;
} else {
	i++;
}
    img = imgs[i];
    $('.lead-magnet img').attr('src', img);
}, 3000);
if ($(window).width() <= '450'){
		       $('.work .carousel2__item img').wrap('<div style="max-width: 95%"></div>');
		    }
if ($(window).width() <= '468'){
		       $('.header__subtitle').find('br').detach();
		    }
if ($(window).width() <= '644'){
		       $('.carousel4 div.d-flex').addClass('flex-column');
		       $('.carousel4 .d-flex img[src="img/reviews-img1.png"]').attr('src', 'img/reviews-img-phone-1.jpg');
		       $('.carousel4 .d-flex img[src="img/reviews-img2.png"]').attr('src', 'img/reviews-img-phone-2.jpg');
		       $('.carousel4 .d-flex img[src="img/reviews-img3.png"]').attr('src', 'img/reviews-img-phone-3.jpg');
		       $('.carousel4 .d-flex img[src="img/reviews-img5_1.png"]').attr('src', 'img/reviews-img-phone-5_1.jpg');
		       $('.carousel4 .d-flex h1').each(function(){
		       	var temp1 = $(this).parent().prev();
		       	$(this).detach().insertBefore(temp1);
		       });
		       $('.recommend__advantages').removeClass('flex-row').removeClass('flex-lg-column').addClass('flex-column');
		       $('.recommend__advantage').removeClass('flex-column');


		    }
if ($(window).width() <= '829'){
		       $('.reviews .carousel4 img[src="img/reviews-img1.png"]').attr('src', 'img/reviews-img-1-tablet.png');
		       $('.reviews .carousel4 img[src="img/reviews-img2.png"]').attr('src', 'img/reviews-img-2-tablet.png');
		       $('.reviews .carousel4 img[src="img/reviews-img3.png"]').attr('src', 'img/reviews-img-3-tablet.png');
		       $('.reviews .carousel4 img[src="img/reviews-img5_1.png"]').attr('src', 'img/reviews-img-5_1-tablet.png');
		    }
if ($(window).width() <= '768'){
		       $('.recommend .container').removeClass('container').addClass('container-fluid');
		       $('.footer .container').removeClass('container').addClass('container-fluid');
		       $('.lead-magnet .container').removeClass('container').addClass('container-fluid');
		       $('.steps .container').removeClass('container').addClass('container-fluid');
		       $('.tutors .container').removeClass('container').addClass('container-fluid');
		       $('.work .container').removeClass('container').addClass('container-fluid');
			   $('.program .container').removeClass('container').addClass('container-fluid');
		    }
if ($(window).width() <= '705'){
		       $('.carousel3__item').addClass('flex-column');
		       $('.carousel3__item').css('padding-bottom', '25px');
		       $('.carousel3__item img').css('order', '-1');
		       $('.recommend__intensive').addClass('flex-column');
		       $('.recommend .col-sm-11').removeClass('col-sm-11').addClass('col-sm-12');
		       $('.recommend__intensive').css('padding-left', '0');
		       $('.recommend__intensive').css('padding-top', '30px');
		       $('.recommend__intensive').css('padding-bottom', '30px');
		       $('.recommend__text').css('width', 'unset');
		       $('.recommend__text').css('max-width', '85%');
		       $('.recommend__text').css('margin-top', '30px');
		       $('.recommend__intensive img').css('order', '-1');
		       $('.recommend__intensive img').css('margin', '0');
		       $('.contact .container').css('max-width', '90%');
		       $('.contact form').addClass('flex-column');
		       $('.contact__contacts').css('order', '1');
		       $('.contact__contacts .justify-content-around').css('width', '100%');
		       $('.contact__contacts .justify-content-around').addClass('align-items-center');
		       $('.contact__contacts .justify-content-around .d-flex').css('margin-top', '15px');
		       $('.contact__form h1').css('margin-right', '0px');
		       var temp = $('.contact__form h1').detach();
		       temp.insertBefore($('.contact__body'));
		       $('.footer__logo, .footer__copyright').css('margin-top', '20px');
		       $('.footer__logo h1').css('font-size', '30px');
		       $('.carousel2__item').addClass('flex-column');
		       $('.carousel2__item a').css('margin-bottom', '35px');
		       var temp2 = $('.lead-magnet__form').detach();
		       $('.lead-magnet .d-none').removeClass('d-none').append(temp2);
		       $('.lead-magnet__form').addClass('flex-wrap');
		       $('.lead-magnet__form').css('margin-top', '25px');
		       $('.lead-magnet input').css('width', '45%');
		       $('.lead-magnet input').css('margin-right', '0');
		       $('.lead-magnet input:last-child').css('width', 'unset');
		       $('.lead-magnet input:last-child').css('margin', '0 auto');
		       $('.lead-magnet input:last-child').css('margin-top', '25px');
		       $('.lead-magnet input:last-child').css('min-width', '220px');
		       $('.lead-magnet .col-lg-12.d-flex').addClass('align-items-center');
		       $('.lead-magnet img').css('max-width', '100%');
		       $('.lead-magnet img').css('max-height', '100%');
		       $('.lead-magnet img').css('margin-right', '0');
		       $('.lead-magnet img').wrap('<div></div>');
		       $('.lead-magnet img').parent().css('margin-right', '35px');
		    }
if ($(window).width() <= '576'){
	
$('.program .container-fluid').removeClass('container-fluid').addClass('container');
$('.steps .col-lg-12:last-child .steps__block-right').removeClass('steps__block-right').removeClass('justify-content-end');
$('.steps .col-lg-12:last-child .d-flex:nth-child(2n-1)').addClass('steps__block-right').addClass('justify-content-end');
	$('.steps .col-lg-12:last-child .d-flex:nth-child(2n) h2').addClass('text-right');
	$('.steps .col-lg-12:last-child .d-flex:nth-child(2n) p').addClass('text-right');
}
if ($(window).width() < '450'){
var width = $('#ajaxform2').parent().width();
var height = $('#ajaxform2').parent().height();
$('#ajaxform2').parent().css('margin-left', -(width/2) + 'px');
$('#ajaxform2').parent().css('margin-top', -(height/2) + 'px');
}