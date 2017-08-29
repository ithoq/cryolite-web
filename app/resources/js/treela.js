/**
 * Project: [treela-portal]
 * Created on: '8/24/2017'
 * License: 'MIT'
 * Author: Akshay Kr Singh <akshay.scythe@gmail.com>
 */

export function initHorizontalMenu() {
  let animationTimer;
  
  let hMenu = $("[data-pages-init='horizontal-menu']");
  autoHideLi();
  $(document).on('click', '.menu-bar > ul > li', function () {
    if ($(this).children("ul").length === 0) {
      return;
    }
    if ($(window).width() < 992) {
      let menubar = $('.menu-bar');
      let el = $(this);
      let li = menubar.find('li');
      let sub = $(this).children('ul');
      
      if (el.hasClass("open active")) {
        el.find('.arrow').removeClass("open active");
        sub.slideUp(200, function () {
          el.removeClass("open active");
        });
        
      } else {
        menubar.find('li.open').find('ul').slideUp(200);
        menubar.find('li.open').find('a').find('.arrow').removeClass('open active');
        menubar.find('li.open').removeClass("open active");
        el.find('.arrow').addClass("open active");
        sub.slideDown(200, function () {
          el.addClass("open active");
        });
      }
    } else {
      if ($(this).hasClass('opening')) {
        _hideMenu($(this));
      }
      else {
        _showMenu($(this));
      }
    }
    
  });
  
  let resizeTimer;
  $(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      autoHideLi();
    }, 250);
  });
  
  $('.content').on('click', function () {
    $('.horizontal-menu .bar-inner > ul > li').removeClass('open');
    $('.menu-bar > ul > li').removeClass('open opening').children("ul").removeAttr("style");
    $("body").find(".ghost-nav-dropdown").remove();
  });
  
  $('[data-toggle="horizontal-menu"]').on('click touchstart', function (e) {
    e.preventDefault();
    $('body').toggleClass('horizontal-menu-open');
    if (!$('.horizontal-menu-backdrop').length) {
      $('.header').append('<div class="horizontal-menu-backdrop"/>');
      $('.horizontal-menu-backdrop').fadeToggle('fast');
    } else {
      $('.horizontal-menu-backdrop').fadeToggle('fast', function () {
        $(this).remove();
      });
    }
    
    $('.menu-bar').toggleClass('open');
  });
  
  function autoHideLi() {
    let hMenu = $("[data-pages-init='horizontal-menu']");
    let extraLiHide = parseInt(hMenu.data("hideExtraLi")) || 0;
    if (hMenu.length === 0) {
      return
    }
    let hMenuRect = hMenu[0].getBoundingClientRect();
    let liTotalWidth = 0;
    let liCount = 0;
    hMenu.children('ul').children('li.more').remove();
    hMenu.children('ul').children('li').each(function (index) {
      $(this).removeAttr("style");
      liTotalWidth = liTotalWidth + $(this).outerWidth(true);
      liCount++;
    });
    
    if ($(window).width() < 992) {
      return;
    }
    
    let possibleLi = parseInt(hMenuRect.width / (liTotalWidth / liCount)) - 1;
    possibleLi = possibleLi - extraLiHide;
    
    if (liCount > possibleLi) {
      let wrapper = createWrapperLI(hMenu);
      for (let i = possibleLi; i < liCount; i++) {
        let currentLi = hMenu.children('ul').children('li').eq(i);
        let clone = currentLi.clone();
        clone.children("ul").addClass("sub-menu");
        wrapper.children("ul").append(clone);
        currentLi.hide();
      }
    }
    
  }
  
  function createWrapperLI(hMenu) {
    let li = hMenu.children('ul').append("<li class='more'>" +
      "<a href='javascript:;'><span class='title'><i class='pg pg-more'></i></span></a><ul></ul></li>");
    li = hMenu.children('ul').children('li.more');
    return li;
  }
  
  function _hideMenu($el) {
    let ul = $($el.children("ul")[0]);
    let ghost = $("<div class='ghost-nav-dropdown'></div>");
    if (ul.length === 0) {
      return;
    }
    let rect = ul[0].getBoundingClientRect();
    ghost.css({
      "width": rect.width + "px",
      "height": rect.height + "px",
      "z-index": "auto"
    })
    $el.append(ghost);
    let timingSpeed = ul.children("li").css('transition-duration');
    
    timingSpeed = parseInt(parseFloat(timingSpeed) * 1000);
    $el.addClass('closing');
    window.clearTimeout(animationTimer);
    animationTimer = window.setTimeout(function () {
      ghost.height(0);
      $el.removeClass('open opening closing');
    }, timingSpeed - 80);
  }
  
  function _showMenu($el) {
    
    let ul = $($el.children("ul")[0]);
    let ghost = $("<div class='ghost-nav-dropdown'></div>");
    $el.children(".ghost-nav-dropdown").remove();
    $el.addClass('open').siblings().removeClass('open opening');
    if (ul.length === 0) {
      return;
    }
    let rect = ul[0].getBoundingClientRect();
    ghost.css({
      "width": rect.width + "px",
      "height": "0px"
    });
    $el.append(ghost);
    ghost.height(rect.height);
    let timingSpeed = ghost.css('transition-duration');
    
    timingSpeed = parseInt(parseFloat(timingSpeed) * 1000);
    window.clearTimeout(animationTimer);
    animationTimer = window.setTimeout(function () {
      $el.addClass('opening');
      ghost.remove()
    }, timingSpeed);
  }
}
