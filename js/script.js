$(function() {

  //  = ADAPTIVE MENU =

  var menu = $(".navbar__main-navigation");
  var menuTouchBtn = $(".navbar__touch-menu");

  menuTouchBtn.click(function(e) {
    e.preventDefault();
    menu.fadeToggle();
  });

  // На ширине больше 760пх меню открыто всегда
  $(window).resize(function() {
    var wid = $(window).width();

    if (wid > 760 && menu.is(":hidden")) {
      menu.removeAttr("style");
    }

  });


  // = SMOOTH SCROLL v 2.0 =

  $("#js-nav a").on("click", function(e) {

    e.preventDefault();

    var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;

    $("html, body").animate({
      scrollTop: currentBlockOffset - 85
    }, 500);

  });

  // for fixed header!!!

  var navH = $("#js-navbar-wrapper").innerHeight();


  $(document).on("scroll", function() {

    var documentScroll = $(this).scrollTop();

    if (documentScroll > navH) {

      $("#js-navbar-wrapper").addClass("js-fixed-navbar");
      $("#js-navbar").css("border-bottom", "none");

    } else {

      $("#js-navbar-wrapper").removeClass("js-fixed-navbar");

    }
  });


  // = MODAL WINDOW =


  $("#js-show-modal").on("click", function(e) {

    e.preventDefault();
    $("#js-modal").fadeIn(500);
    $("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");

  });


  $("#js-modal-close").on("click", function(e) {

    e.preventDefault();
    $("#js-modal").fadeOut(100);
    $("body").removeClass("open-modal");
    $("#js-overlay").remove();

  });

  $("body").on("click", "#js-overlay", function() {
    $("#js-modal").fadeOut(100);
    $("body").removeClass("open-modal");
    $("#js-overlay").remove();
  });

});
