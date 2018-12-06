$(document).ready(function(){
	new Swiper(".swiper-container",{effect:"fade",autoplay:{delay:4e3}});
	// $(".owl-foot").owlCarousel({margin:10,loop:!0,autoWidth:!0,items:15,autoplay:!0,autoplayHoverPause:!0}),
	$("[data-fancybox]").fancybox({fullScreen:{autoStart:!0},margin:[0,0]})

	// $(".btn_hamburger").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".navbar").slideToggle();
 //    if ($('.open').length) {
 //      if (!$(this).hasClass('open')) {
 //        $('.open li').slideToggle();
 //        $('.open').removeClass('open');
 //      }
 //    }
 //    return false;
 //  });

 $('.slider-dileram').slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 300000,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  responsive: [{
    breakpoint: 992,
    settings: {
      arrows: false,
      dots: true,
      slidesToShow: 2
    }
  }, {
    breakpoint: 767.98,
    settings: {
      arrows: false,
      dots: true,
      fade: true,
      slidesToShow: 1
    }
  }]
});

 $('.owl-carousel-obrazec').owlCarousel({
  animateOut: 'fadeOut',
  items:1,
  dots:false,
  nav: true,
  navText: []
});

 $('.owl-carousel-obrazec60').owlCarousel({
  animateOut: 'fadeOut',
  items:1,
  dots:false,
  nav: true,
  navText: []
});

  $('.owl-serii').owlCarousel({
    center: true,
    loop:true,
    autoWidth:true,
    margin:15,
    autoplay: true
  });

 if( $(window).width() > 768 ) {
  $('.topmenu_item').hover(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
    );
}

if( $(window).width() <= 768 ) {
  $('.topmenu_item').click(function() {
    if ($('.open').length) {
      if (!$(this).hasClass('open')) {
        $('.open li').slideToggle();
        $('.open').removeClass('open');
      }
    }
    $(this).children().children('li').slideToggle();
    $(this).toggleClass('open');
      // $(".top-header").mCustomScrollbar();
    });
  $(".top-header").mCustomScrollbar({
    callbacks:{
      onInit:function(){
        console.log("scrollbars initialized");
        /* your functions here */
      }
    }
  });
}

var route=$(".top-header").offset().left;
$(".btn_hamburger").click(function(){
  $(this).toggleClass("on");
  if ($(".top-header").offset().left<0) $(".top-header").animate({left:0},500);
  else $(".top-header").animate({left:route},500);
  return false;
});

$("a.btn-jakor").click(function() {
  $("html, body").animate({
   scrollTop: $($(this).attr("href")).offset().top - 120 + "px"
 }, {
   duration: 500,
   easing: "swing"
 });
  return false;
});


$('.container').carousel({
  num: 5,
  maxWidth: 450,
  maxHeight: 300,
  distance: 50,
  scale: 0.6,
  animationTime: 1000,
  showTime: 4000
});

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}


// Eventos teclado
$(document).keydown(function(e) {
  switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
      }
      e.preventDefault();
    });

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});

$( '#slider-pro-dileram' ).sliderPro({
  width: '100%',
  height: 460,
  orientation: 'vertical',
  fade: true,
  autoplay: false,
  thumbnailWidth: 490,
  thumbnailHeight: 200,
  arrows: false,
  buttons: false,
  thumbnailsPosition: 'left',
  thumbnailPointer: true,
  breakpoints: {
    1200: {
      thumbnailsPosition: 'left',
      thumbnailWidth: 270,
      thumbnailHeight: 135,
      height: 400,
    },
    991.98: {
      orientation: 'vertical',
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 240,
      thumbnailHeight: 120,
      height: 280,
    }
  }
});

$( '#slider-pro-tkani' ).sliderPro({
  width: '100%',
  height: 460,
  orientation: 'vertical',
  fade: true,
  autoplay: false,
  thumbnailWidth: 466,
  thumbnailHeight: 153.33,
  arrows: false,
  buttons: false,
  thumbnailsPosition: 'left',
  breakpoints: {
    1200: {
      thumbnailsPosition: 'left',
      thumbnailWidth: 270,
      thumbnailHeight: 133.33,
      height: 400,
    },
    991.98: {
      orientation: 'vertical',
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 220,
      thumbnailHeight: 84,
      height: 340,
    },
    576: {
      orientation: 'vertical',
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 180,
      thumbnailHeight: 84,
      height: 400,
    }
  }
});

$( '#slider-pro-proizv' ).sliderPro({
  width: '100%',
  height: 460,
  orientation: 'vertical',
  fade: true,
  autoplay: false,
  thumbnailWidth: 320,
  thumbnailHeight: 178,
  arrows: false,
  buttons: false,
  thumbnailsPosition: 'bottom',
  breakpoints: {
    1200: {
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 260,
      thumbnailHeight: 152,
      height: 320,
    },
    768: {
      orientation: 'vertical',
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 200,
      thumbnailHeight: 100,
      height: 340,
    },
    576: {
      orientation: 'vertical',
      thumbnailsPosition: 'bottom',
      thumbnailWidth: 200,
      thumbnailHeight: 100,
      height: 400,
    }
  }
});

$('.owl-carousel-arhitektoram').owlCarousel({
  animateOut: 'fadeOut',
  items:1,
  dots:false,
  nav: true,
  mouseDrag: false,
  touchDrag: false,
  navText: [],
  responsive:{
    0:{
      nav: false
    },
    576:{
      nav: true
    }
  }
});
$('.cocoen').cocoen();

$('.owl-work-1').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
  autoplay:true,
  slideSpeed : 10000,
  smartSpeed:10000,
  autoplayTimeout:10000,
  responsive:{
    0:{
      margin:15,
      items:2
    },
    768:{
      margin:15,
      items:2
    },
    1200:{
      items:4
    },
    2000:{
      items:6
    },
    3000:{
      items:10
    }
  }
})

$('.owl-work-2').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
  autoplay:true,
  slideSpeed : 15000,
  smartSpeed:15000,
  autoplayTimeout:15000,
  responsive:{
    0:{
      margin:15,
      items:2
    },
    768:{
      margin:15,
      items:2
    },
    1200:{
      items:4
    },
    2000:{
      items:6
    },
    3000:{
      items:10
    }
  }
})

$('.owl-work-3').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  dots:false,
  autoplay:true,
  slideSpeed : 20000,
  smartSpeed:20000,
  autoplayTimeout:20000,
  responsive:{
    0:{
      margin:15,
      items:2
    },
    768:{
      margin:15,
      items:2
    },
    1200:{
      items:4
    },
    2000:{
      items:6
    },
    3000:{
      items:10
    }
  }
})

$('.owl-proizv').owlCarousel({
  loop:true,
  margin:5,
  nav:false,
  dots:false,
  responsive:{
    0:{
      margin:15,
      items:2
    },
    600:{
      items:4
    },
    1200:{
      items:6
    },
    2000:{
      items:8
    },
    3000:{
      items:12
    }
  }
})


$('.owl-carousel-news-new').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  navText: [],
  dots:false,
  responsiveClass:true,
  responsive:{
    0:{
      items:1
    },
    767:{
      items:2
    },
    1200:{
      items:3
    },
    2800:{
      items:4,
      nav:true
    }
  }
});

$('.owl-carousel-pir').owlCarousel({
  loop:true,
  nav:true,
  navText: [],
  dots:false,
  items:1
});

$('.somfy').click(function(){
  $('.video-wr-somfy').show("clip", { direction: "vertical" }, 500);
  $('.slider-after').hide();
});
$('.close-span').click(function(){
  $('.video-wr-somfy').hide( "clip", {direction: "vertical"}, 500 );
  $('.slider-after').show();
});

$('.mac').click(function(){
  $('.video-wr-mac').show("clip", { direction: "vertical" }, 500);
  $('.slider-after').hide();
});
$('.close-span').click(function(){
  $('.video-wr-mac').hide( "clip", {direction: "vertical"}, 500 );
  $('.slider-after').show();
});

$('.gaviota').click(function(){
  $('.video-wr-gaviota').show("clip", { direction: "vertical" }, 500);
  $('.slider-after').hide();
});
$('.close-span').click(function(){
  $('.video-wr-gaviota').hide( "clip", {direction: "vertical"}, 500 );
  $('.slider-after').show();
});

$('.copaco').click(function(){
  $('.video-wr-copaco').show("clip", { direction: "vertical" }, 500);
  $('.slider-after').hide();
});
$('.close-span').click(function(){
  $('.video-wr-copaco').hide( "clip", {direction: "vertical"}, 500 );
  $('.slider-after').show();
});

$('.serg').click(function(){
  $('.video-wr-serg').show("clip", { direction: "vertical" }, 500);
  $('.slider-after').hide();
});
$('.close-span').click(function(){
  $('.video-wr-serg').hide( "clip", {direction: "vertical"}, 500 );
  $('.slider-after').show();
});

$('.sattl').hover(
  function(){
    $(this).attr('src','image/sattler.png')
  },
  function(){
    $(this).attr('src','image/sattler2.png')
  }
)

$('.copaco').hover(
  function(){
    $(this).attr('src','image/copaco.png')
  },
  function(){
    $(this).attr('src','image/copaco2.png')
  }
)

$('.dikson').hover(
  function(){
    $(this).attr('src','image/dikson.png')
  },
  function(){
    $(this).attr('src','image/dikson2.png')
  }
)

$('.serge').hover(
  function(){
    $(this).attr('src','image/sergeferrari.png')
  },
  function(){
    $(this).attr('src','image/sergeferrari2.png')
  }
)

  $("a.jakor").click(function() {
    $("html, body").animate({
     scrollTop: $($(this).attr("href")).offset().top - 50  + "px"
   }, {
     duration: 500,
     easing: "swing"
   });
    return false;
  });

    $('.owl-slider-partnery').owlCarousel({
    loop:true,
    autoplay:false,
    autoplayTimeout:3000,
    smartSpeed:1000,
    nav: true,
    navText: [],
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        dots: true
      },
      768:{
        items:3,
        dots: true
      },
      1400:{
        items:5,
      }
    }
  });


});

// var btn = document.getElementById('btn');
// var spanBtn = document.getElementById('spanBtn');
// btn.disabled = true;
// spanBtn.onclick = function(){
//   var pass = prompt('Пароль?');

//   if (pass == 'Decolife') {
//     alert( 'ok' );
//     btn.disabled = false;
//     spanBtn.style.display = "none";
//     btn.style.zIndex = "100";
//   } else if (pass == null) { 
//     alert( 'Вход отменён' );
//   } else {
//     alert( 'Пароль неверен' );
//   }
// }

var btn1 = document.getElementById('btn1');
var spanBtn1 = document.getElementById('spanBtn1');
btn1.disabled = true;
spanBtn1.onclick = function(){
  var pass = prompt('Пароль?');

  if (pass == 'Decolife') {
    alert( 'ok' );
    btn1.disabled = false;
    spanBtn1.style.display = "none";
    btn1.style.zIndex = "100";
  } else if (pass == null) { 
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }
}

var btn2 = document.getElementById('btn2');
var spanBtn2 = document.getElementById('spanBtn2');
btn2.disabled = true;
spanBtn2.onclick = function(){
  var pass = prompt('Пароль?');

  if (pass == 'Decolife') {
    alert( 'ok' );
    btn2.disabled = false;
    spanBtn2.style.display = "none";
    btn2.style.zIndex = "100";
  } else if (pass == null) { 
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }
}

// var btn3 = document.getElementById('btn3');
// var spanBtn3 = document.getElementById('spanBtn3');
// btn3.disabled = true;
// spanBtn3.onclick = function(){
//   var pass = prompt('Пароль?');

//   if (pass == 'Decolife') {
//     alert( 'ok' );
//     btn3.disabled = false;
//     spanBtn3.style.display = "none";
//     btn3.style.zIndex = "100";
//   } else if (pass == null) { 
//     alert( 'Вход отменён' );
//   } else {
//     alert( 'Пароль неверен' );
//   }
// }

var btnMat = document.getElementById('btn_mat');
var spanBtnMat = document.getElementById('spanBtn_mat');
btnMat.disabled = true;
spanBtnMat.onclick = function(){
  var pass = prompt('Пароль?');

  if (pass == 'Decolife') {
    alert( 'ok' );
    btnMat.disabled = false;
    spanBtnMat.style.display = "none";
    btnMat.style.zIndex = "100";
  } else if (pass == null) { 
    alert( 'Вход отменён' );
  } else {
    alert( 'Пароль неверен' );
  }
}