function heightLine(){this.className="heightLine",this.parentClassName="heightLineParent",reg=new RegExp(this.className+"-([a-zA-Z0-9-_]+)","i"),objCN=new Array;for(var e=document.getElementsByTagName?document.getElementsByTagName("*"):document.all,o=0;o<e.length;o++)if("string"==typeof e[o].className)for(var t=e[o].className.split(/\s+/),s=0;s<t.length;s++){if(t[s]==this.className){objCN["main CN"]||(objCN["main CN"]=new Array),objCN["main CN"].push(e[o]);break}if(t[s]==this.parentClassName){objCN["parent CN"]||(objCN["parent CN"]=new Array),objCN["parent CN"].push(e[o]);break}if(t[s].match(reg)){var i=t[s].match(reg);objCN[i]||(objCN[i]=new Array),objCN[i].push(e[o]);break}}var n=document.createElement("div"),a=document.createTextNode("S");n.appendChild(a),n.style.classname="check-fontsize",n.style.visibility="hidden",n.style.position="absolute",n.style.top="0",document.body.appendChild(n);var r=n.offsetHeight;changeBoxSize=function(){for(var e in objCN)if(objCN.hasOwnProperty(e))if("parent CN"==e)for(var o=0;o<objCN[e].length;o++){for(var t=0,s=objCN[e][o].childNodes,i=0;i<s.length;i++)s[i]&&1==s[i].nodeType&&(s[i].style.height="auto",t=t>s[i].offsetHeight?t:s[i].offsetHeight);for(i=0;i<s.length;i++)if(s[i].style){var n=t;(a=s[i].currentStyle||document.defaultView.getComputedStyle(s[i],"")).paddingTop&&(n-=a.paddingTop.replace("px","")),a.paddingBottom&&(n-=a.paddingBottom.replace("px","")),a.borderTopWidth&&"medium"!=a.borderTopWidth&&(n-=a.borderTopWidth.replace("px","")),a.borderBottomWidth&&"medium"!=a.borderBottomWidth&&(n-=a.borderBottomWidth.replace("px","")),s[i].style.height=n+"px"}}else{for(t=0,o=0;o<objCN[e].length;o++)objCN[e][o].style.height="auto",t=t>objCN[e][o].offsetHeight?t:objCN[e][o].offsetHeight;for(o=0;o<objCN[e].length;o++)if(objCN[e][o].style){var a;n=t;(a=objCN[e][o].currentStyle||document.defaultView.getComputedStyle(objCN[e][o],"")).paddingTop&&(n-=a.paddingTop.replace("px","")),a.paddingBottom&&(n-=a.paddingBottom.replace("px","")),a.borderTopWidth&&"medium"!=a.borderTopWidth&&(n-=a.borderTopWidth.replace("px","")),a.borderBottomWidth&&"medium"!=a.borderBottomWidth&&(n-=a.borderBottomWidth.replace("px","")),objCN[e][o].style.height=n+"px"}}},checkBoxSize=function(){r!=n.offsetHeight&&(changeBoxSize(),r=n.offsetHeight)},changeBoxSize(),setInterval(checkBoxSize,1e3),window.onresize=changeBoxSize}function addEvent(e,o,t){try{e.addEventListener(o,t,!1)}catch(s){e.attachEvent("on"+o,t)}}$("#pagetop").click(function(){$("html, body").animate({scrollTop:0},1e3)}),$(window).on("scroll",function(){$("nav").offsetTop;$(window).scrollTop()>=110?$("nav").addClass("fixed-nav"):$("nav").removeClass("fixed-nav")}),$(document).ready(function(){$(".slider-banner").slick({dots:!1,infinite:!0,speed:800,fade:!1,arrows:!1,cssEase:"linear"}),$(".slider-work").slick({dots:!0,infinite:!1,speed:300,arrows:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1080,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-service").slick({dots:!1,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1140,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-good-work").slick({dots:!0,arrows:!1,infinite:!1,speed:300,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(){$(".btn-open").click(function(e){$(".user_menu, .company_menu").toggleClass("open")}),$(".content-info:first").show(),$(".circle-mission ul li.tab-link").click(function(){var e=$(this).attr("rel");$(".content-info").hide(),$("."+e).fadeIn(),$(".circle-mission ul li.tab-link").each(function(e){$(this).removeClass("active"),$(this).children("span").css("background","#ffe037")}),$(".circle-mission dl dt").each(function(e){$(this).removeClass("active"),$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_on","_off"))}),$(this).addClass("active"),$(this).hasClass("active")&&$(this).children("span").css("background","#c02739");var o="."+$(this).data("tabs");$(o).addClass("active"),$(o).hasClass("active")&&$(o).children("img").attr("src",$(o).children("img").attr("src").replace("_off","_on"))})}),addEvent(window,"load",heightLine);var $onOff=$(".on_off"),$noChange="none";$onOff.hover(function(){$(this).attr("src",$(this).attr("src").replace("_off","_on"))},function(){$(this).hasClass($noChange)||$(this).attr("src",$(this).attr("src").replace("_on","_off"))}),$(function(){$("body").removeClass("navOpen"),$(".hamburger").click(function(){if(!$("body").hasClass("navOpen"))return $("body").addClass("navOpen"),$("body").removeClass("navClose"),offsetY=window.pageYOffset,$("body").css({position:"fixed",width:"100%",top:-offsetY+"px"}),!1;$("body").addClass("navClose"),$("body").removeClass("navOpen"),$("body").css("position","static"),$(window).scrollTop(offsetY)}),$("#menu_toggle").click(function(){$("body").removeClass("navOpen"),$("body").addClass("navClose"),$("body").css("position","static")})});