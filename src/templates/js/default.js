$("#pagetop").click(function () {
  $("html, body").animate({scrollTop: 0}, 1000);
});

// BEGIN: onscroll top
$(window).on('scroll', function(){
  var _nav = $('nav').offsetTop;
    if ($(window).scrollTop() >= 110) {
      $('nav').addClass('fixed-nav');
    }
    else {
      $('nav').removeClass('fixed-nav');
    }


});

// END: onscroll top

// BEGIN: SLIDER
$(document).ready(function () {
  
  $(".slider-banner").slick({
    dots: false,
    infinite: true,
    speed: 800,
    fade: false,
    arrows: false,
    cssEase: "linear",
  });
  $(".slider-work").slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider-service").slick({
    dots: false,
    infinite: true,
    speed: 300,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".slider-good-work").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

});
// END: SLIDER

// BEGIN: TABS

$(document).ready(function () {
  $('.content-info:first').show();
  $(".circle-mission ul li.tab-link").click(function () {
    var tab_id = $(this).attr("rel");
    $('.content-info').hide();
    $('.' + tab_id).fadeIn();
    
    $('.circle-mission ul li.tab-link').each(function (element) {
      $(this).removeClass('active');
      $(this).children('span').css('background', '#ffe037');
    });
    $('.circle-mission dl dt').each(function (element) {
      $(this).removeClass('active');
      $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on','_off'))
    });
    // bg
    $(this).addClass('active');
    if($(this).hasClass('active')) {
      $(this).children('span').css('background', '#c02739');
    }
    // text
    var dt = '.' +$(this).data('tabs');
    $(dt).addClass('active');
    if($(dt).hasClass('active')) {
      $(dt).children('img').attr('src',$(dt).children('img').attr('src').replace('_off','_on'))
      }
  });

});
// END: TABS

// BEGIN: heightLine
function heightLine() {
  this.className = "heightLine";
  this.parentClassName = "heightLineParent";
  reg = new RegExp(this.className + "-([a-zA-Z0-9-_]+)", "i");
  objCN = new Array();
  var objAll = document.getElementsByTagName ?
    document.getElementsByTagName("*") :
    document.all;
  for (var i = 0; i < objAll.length; i++) {
    if (typeof objAll[i].className == "string") {
      var eltClass = objAll[i].className.split(/\s+/);
      for (var j = 0; j < eltClass.length; j++) {
        if (eltClass[j] == this.className) {
          if (!objCN["main CN"]) objCN["main CN"] = new Array();
          objCN["main CN"].push(objAll[i]);
          break;
        } else if (eltClass[j] == this.parentClassName) {
          if (!objCN["parent CN"]) objCN["parent CN"] = new Array();
          objCN["parent CN"].push(objAll[i]);
          break;
        } else if (eltClass[j].match(reg)) {
          var OCN = eltClass[j].match(reg);
          if (!objCN[OCN]) objCN[OCN] = new Array();
          objCN[OCN].push(objAll[i]);
          break;
        }
      }
    }
  }

  //check font size
  var e = document.createElement("div");
  var s = document.createTextNode("S");
  e.appendChild(s);
  e.style.classname = "check-fontsize";
  e.style.visibility = "hidden";
  e.style.position = "absolute";
  e.style.top = "0";
  document.body.appendChild(e);
  var defHeight = e.offsetHeight;

  changeBoxSize = function () {
    for (var key in objCN) {
      if (objCN.hasOwnProperty(key)) {
        //parent type
        if (key == "parent CN") {
          for (var i = 0; i < objCN[key].length; i++) {
            var max_height = 0;
            var CCN = objCN[key][i].childNodes;
            for (var j = 0; j < CCN.length; j++) {
              if (CCN[j] && CCN[j].nodeType == 1) {
                CCN[j].style.height = "auto";
                max_height =
                  max_height > CCN[j].offsetHeight ?
                  max_height :
                  CCN[j].offsetHeight;
              }
            }
            for (var j = 0; j < CCN.length; j++) {
              if (CCN[j].style) {
                var stylea =
                  CCN[j].currentStyle ||
                  document.defaultView.getComputedStyle(CCN[j], "");
                var newheight = max_height;
                if (stylea.paddingTop)
                  newheight -= stylea.paddingTop.replace("px", "");
                if (stylea.paddingBottom)
                  newheight -= stylea.paddingBottom.replace("px", "");
                if (stylea.borderTopWidth && stylea.borderTopWidth != "medium")
                  newheight -= stylea.borderTopWidth.replace("px", "");
                if (
                  stylea.borderBottomWidth &&
                  stylea.borderBottomWidth != "medium"
                )
                  newheight -= stylea.borderBottomWidth.replace("px", "");
                CCN[j].style.height = newheight + "px";
              }
            }
          }
        } else {
          var max_height = 0;
          for (var i = 0; i < objCN[key].length; i++) {
            objCN[key][i].style.height = "auto";
            max_height =
              max_height > objCN[key][i].offsetHeight ?
              max_height :
              objCN[key][i].offsetHeight;
          }
          for (var i = 0; i < objCN[key].length; i++) {
            if (objCN[key][i].style) {
              var stylea =
                objCN[key][i].currentStyle ||
                document.defaultView.getComputedStyle(objCN[key][i], "");
              var newheight = max_height;
              if (stylea.paddingTop)
                newheight -= stylea.paddingTop.replace("px", "");
              if (stylea.paddingBottom)
                newheight -= stylea.paddingBottom.replace("px", "");
              if (stylea.borderTopWidth && stylea.borderTopWidth != "medium")
                newheight -= stylea.borderTopWidth.replace("px", "");
              if (
                stylea.borderBottomWidth &&
                stylea.borderBottomWidth != "medium"
              )
                newheight -= stylea.borderBottomWidth.replace("px", "");
              objCN[key][i].style.height = newheight + "px";
            }
          }
        }
      }
    }
  };

  checkBoxSize = function () {
    if (defHeight != e.offsetHeight) {
      changeBoxSize();
      defHeight = e.offsetHeight;
    }

    // var elm = document.querySelector(".check-fontsize");
    // if (elm) elm.parentNode.removeChild(elm);
  };
  changeBoxSize();
  setInterval(checkBoxSize, 1000);
  window.onresize = changeBoxSize;
}
function addEvent(elm, listener, fn) {
  try {
    elm.addEventListener(listener, fn, false);
  } catch (e) {
    elm.attachEvent("on" + listener, fn);
  }
}
addEvent(window, "load", heightLine);
// END: heightLine

// BEGIN: on_off image
var $onOff = $('.on_off'),
  $noChange = "none";
$onOff.hover(function () {
    $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
  },
  function () {
    if (!$(this).hasClass($noChange)) {
      $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
    }
  });
// END: on_off image


//BEGIN: MENU TOGGLE

$(function () {

  $('body').removeClass('navOpen');
  $(".hamburger").click(function () {
    if ($('body').hasClass('navOpen')) {
      $('body').addClass('navClose');
      $('body').removeClass('navOpen');
      $('body').css('position', 'static');
      $(window).scrollTop(offsetY);

    } else {
      $('body').addClass('navOpen');
      $('body').removeClass('navClose');

      offsetY = window.pageYOffset;
      $('body').css({
        position: 'fixed',
        width: '100%',
        'top': -offsetY + 'px'
      });

      return false;
    }
  });

  $("#menu_toggle").click(function () {
    $('body').removeClass('navOpen');
    $('body').addClass('navClose');
    $('body').css('position', 'static');
  });

});

//END: MENU TOGGLE