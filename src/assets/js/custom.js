(function ($) {
  "use strict"; $(window).scroll(function () { if ($(this).scrollTop() > 200) { $('#backtotop:hidden').stop(true, true).fadeIn(); } else { $('#backtotop').stop(true, true).fadeOut(); } }); $(function () { $("#scroll").on('click', function () { $("html,body").animate({ scrollTop: $("#thetop").offset().top }, "slow"); return false }) }); $(window).on('load', function () { $('.preloader').addClass('loaded'); if ($('.preloader').hasClass('loaded')) { $('.spinner').delay(1000).queue(function () { $(this).remove(); }); } }); $('.search_btn').on('click', function () { $('.search_btn > .fa-search').toggleClass('fa-times'); }); $('[data-background]').each(function () { $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')'); }); $('select').niceSelect(); $(document).ready(function () { $('.close_btn, .overlay').on('click', function () { $('.sidebar_mobile_menu').removeClass('active'); $('.overlay').removeClass('active'); }); $('.mobile_menu_btn').on('click', function () { $('.sidebar_mobile_menu').addClass('active'); $('.overlay').addClass('active'); }); }); $('.dropdown > a').addClass('dropdown-toggle'); $('.dropdown-menu .dropdown > a').on('click', function (e) {
    if (!$(this).next().hasClass('show')) { $(this).parents('.dropdown-menu').first().find('.show').removeClass("show"); }
    var $subMenu = $(this).next(".dropdown-menu"); $subMenu.toggleClass('show'); $(this).parents('li.dropdown.show').on('.dropdown', function (e) { $('.dropdown-menu > .dropdown .show').removeClass("show"); }); $('.dropdown-menu li a.dropdown-toggle').removeClass("show_dropdown"); if ($(this).next().hasClass('show')) { $(this).addClass("show_dropdown"); }
    return false;
  }); $(window).on('scroll', function () { if ($(this).scrollTop() > 120) { $('.sticky_header').addClass("stuck") } else { $('.sticky_header').removeClass("stuck") } }); $(document).ready(function () { $('.close_btn, .overlay').on('click', function () { $('.cart_sidebar').removeClass('active'); $('.overlay').removeClass('active'); }); $('.cart_btn').on('click', function () { $('.cart_sidebar').addClass('active'); $('.overlay').addClass('active'); }); }); $('.popup_video').magnificPopup({ type: 'iframe', preloader: false, removalDelay: 160, mainClass: 'mfp-fade', fixedContentPos: false }); $('.zoom-gallery').magnificPopup({ delegate: '.popup_image', type: 'image', closeOnContentClick: false, closeBtnInside: false, mainClass: 'mfp-with-zoom mfp-img-mobile', image: { verticalFit: true, titleSrc: function (item) { return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>'; } }, gallery: { enabled: true }, zoom: { enabled: true, duration: 300, opener: function (element) { return element.find('img'); } } }); if ($(".popup_image").length) { $(".popup_image").each(function () { $(".popup_image").magnificPopup({ type: 'image', tLoading: 'Loading image #%curr%...', removalDelay: 300, mainClass: 'mfp-with-zoom mfp-img-mobile', gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } }); }) }
  var $grid = $('.grid').imagesLoaded(function () { $grid.masonry({ itemSelector: '.grid-item', percentPosition: true, columnWidth: '.grid-sizer' }); }); $('.counte_text').countTo({ speed: 1000, refreshInterval: 50, }); $('.main_slider').owlCarousel({ items: 1, margin: 0, nav: false, loop: true, dots: true, autoplay: true, smartSpeed: 1000, autoplayTimeout: 6000 }); $('.creative_testimonial_carousel').owlCarousel({ items: 1, nav: true, loop: true, margin: 30, dots: false, autoplay: true, smartSpeed: 1000, autoplayTimeout: 6000, autoplayHoverPause: true, }); $('.column_1_carousel').owlCarousel({ items: 1, nav: true, loop: true, margin: 30, dots: true, autoplay: true, smartSpeed: 1000, autoplayTimeout: 6000, autoplayHoverPause: true, }); $('.column_2_carousel').owlCarousel({ loop: true, nav: true, margin: 30, dots: true, autoplay: true, smartSpeed: 1000, autoplayTimeout: 6000, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1200: { items: 2 } } }); $('.column_3_carousel').owlCarousel({ loop: true, nav: true, margin: 30, dots: true, autoplay: true, smartSpeed: 1000, autoplayTimeout: 6000, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 700: { items: 2 }, 1100: { items: 3 } } }); $('.portfolio_carousel').owlCarousel({ nav: false, loop: true, margin: 30, dots: false, autoplay: true, smartSpeed: 1000, autoplayTimeout: 5000, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 991: { items: 3 }, 1300: { items: 4 } } }); $('.printing_bar').circleProgress({ value: 0.85, fill: '#ffffff' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(85 * progress) + '<sub>%</sub>'); }); $('.branding_bar').circleProgress({ value: 0.93, fill: '#ffffff' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(93 * progress) + '<sub>%</sub>'); }); $('.orange_printing_bar').circleProgress({ value: 0.85, fill: '#ff4328' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(85 * progress) + '<sub>%</sub>'); }); $('.yellow_branding_bar').circleProgress({ value: 0.93, fill: '#fec931' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(93 * progress) + '<sub>%</sub>'); }); $('.blue_logo_bar').circleProgress({ value: 0.63, fill: '#39a6f5' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(63 * progress) + '<sub>%</sub>'); }); $('.purple_tshart_bar').circleProgress({ value: 0.98, fill: '#931dd0' }).on('circle-animation-progress', function (event, progress) { $(this).find('.percentage_text').html(Math.round(98 * progress) + '<sub>%</sub>'); }); if ($("#slider-range").length) {
    $("#slider-range").slider({ range: true, min: 5, max: 1000, values: [30.00, 429.00], slide: function (event, ui) { $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]); } }); $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  }
  $('.ar_top').on('click', function () { var getID = $(this).next().attr('id'); var result = document.getElementById(getID); var qty = result.value; $('.proceed_to_checkout .update-cart').removeAttr('disabled'); if (!isNaN(qty)) { result.value++; } else { return false; } }); (function () {
    window.inputNumber = function (el) {
      var min = el.attr("min") || false; var max = el.attr("max") || false; var els = {}; els.dec = el.prev(); els.inc = el.next(); el.each(function () { init($(this)); }); function init(el) {
        els.dec.on("click", decrement); els.inc.on("click", increment); function decrement() { var value = el[0].value; value--; if (!min || value >= min) { el[0].value = value; } }
        function increment() { var value = el[0].value; value++; if (!max || value <= max) { el[0].value = value++; } }
      }
    };
  })(); inputNumber($(".input_number")); if ($('.scene').length > 0) { $('.scene').parallax({ scalarX: 10.0, scalarY: 10.0, }); }
  function wowAnimation() { new WOW({ offset: 100, mobile: true }).init() }
  wowAnimation(); if ($('#mapBox').length) { var $lat = $('#mapBox').data('lat'); var $lon = $('#mapBox').data('lon'); var $zoom = $('#mapBox').data('zoom'); var $marker = $('#mapBox').data('marker'); var $info = $('#mapBox').data('info'); var $markerLat = $('#mapBox').data('mlat'); var $markerLon = $('#mapBox').data('mlon'); var map = new GMaps({ el: '#mapBox', lat: $lat, lng: $lon, scrollwheel: false, scaleControl: true, streetViewControl: false, panControl: true, disableDoubleClickZoom: true, mapTypeControl: false, zoom: $zoom, }); map.addMarker({ lat: $markerLat, lng: $markerLon, icon: $marker, infoWindow: { content: $info } }) }
})(jQuery);




// Like Button - Heart
$(function () {
  $(".heart_like").on("click", function () {
    $(this).toggleClass("is-active");
  });
});



// Responsive Tabbed Content
$(".rspnsv_tab_content").hide();
$(".rspnsv_tab_content:first").show();

/* if in tab mode */
$("ul.rspnsv_tab li").click(function () {

  $(".rspnsv_tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();

  $("ul.rspnsv_tab li").removeClass("active");
  $(this).addClass("active");

  $(".rspnsv_tab_drawer_heading").removeClass("rspnsv_tab_active");
  $(".rspnsv_tab_drawer_heading[rel^='" + activeTab + "']").addClass("rspnsv_tab_active");

});
/* if in drawer mode */
$(".rspnsv_tab_drawer_heading").click(function () {

  $(".rspnsv_tab_content").hide();
  var rspnsv_tab_activeTab = $(this).attr("rel");
  $("#" + rspnsv_tab_activeTab).fadeIn();

  $(".rspnsv_tab_drawer_heading").removeClass("rspnsv_tab_active");
  $(this).addClass("rspnsv_tab_active");

  $("ul.rspnsv_tab li").removeClass("active");
  $("ul.rspnsv_tab li[rel^='" + rspnsv_tab_activeTab + "']").addClass("active");
});

/* Extra class "tab_last" to add border to right side of last tab */
$('ul.rspnsv_tab li').last().addClass("tab_last");
