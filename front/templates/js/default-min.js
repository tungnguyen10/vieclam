function heightLine(){this.className="heightLine",this.parentClassName="heightLineParent",reg=new RegExp(this.className+"-([a-zA-Z0-9-_]+)","i"),objCN=new Array;for(var e=document.getElementsByTagName?document.getElementsByTagName("*"):document.all,t=0;t<e.length;t++)if("string"==typeof e[t].className)for(var o=e[t].className.split(/\s+/),i=0;i<o.length;i++){if(o[i]==this.className){objCN["main CN"]||(objCN["main CN"]=new Array),objCN["main CN"].push(e[t]);break}if(o[i]==this.parentClassName){objCN["parent CN"]||(objCN["parent CN"]=new Array),objCN["parent CN"].push(e[t]);break}if(o[i].match(reg)){var s=o[i].match(reg);objCN[s]||(objCN[s]=new Array),objCN[s].push(e[t]);break}}var r=document.createElement("div"),n=document.createTextNode("S");r.appendChild(n),r.style.classname="check-fontsize",r.style.visibility="hidden",r.style.position="absolute",r.style.top="0",document.body.appendChild(r);var d=r.offsetHeight;changeBoxSize=function(){for(var e in objCN)if(objCN.hasOwnProperty(e))if("parent CN"==e)for(var t=0;t<objCN[e].length;t++){for(var o=0,i=objCN[e][t].childNodes,s=0;s<i.length;s++)i[s]&&1==i[s].nodeType&&(i[s].style.height="auto",o=o>i[s].offsetHeight?o:i[s].offsetHeight);for(s=0;s<i.length;s++)if(i[s].style){var r=o;(n=i[s].currentStyle||document.defaultView.getComputedStyle(i[s],"")).paddingTop&&(r-=n.paddingTop.replace("px","")),n.paddingBottom&&(r-=n.paddingBottom.replace("px","")),n.borderTopWidth&&"medium"!=n.borderTopWidth&&(r-=n.borderTopWidth.replace("px","")),n.borderBottomWidth&&"medium"!=n.borderBottomWidth&&(r-=n.borderBottomWidth.replace("px","")),i[s].style.height=r+"px"}}else{for(o=0,t=0;t<objCN[e].length;t++)objCN[e][t].style.height="auto",o=o>objCN[e][t].offsetHeight?o:objCN[e][t].offsetHeight;for(t=0;t<objCN[e].length;t++)if(objCN[e][t].style){var n;r=o;(n=objCN[e][t].currentStyle||document.defaultView.getComputedStyle(objCN[e][t],"")).paddingTop&&(r-=n.paddingTop.replace("px","")),n.paddingBottom&&(r-=n.paddingBottom.replace("px","")),n.borderTopWidth&&"medium"!=n.borderTopWidth&&(r-=n.borderTopWidth.replace("px","")),n.borderBottomWidth&&"medium"!=n.borderBottomWidth&&(r-=n.borderBottomWidth.replace("px","")),objCN[e][t].style.height=r+"px"}}},checkBoxSize=function(){d!=r.offsetHeight&&(changeBoxSize(),d=r.offsetHeight)},changeBoxSize(),setInterval(checkBoxSize,1e3),window.onresize=changeBoxSize}function addEvent(e,t,o){try{e.addEventListener(t,o,!1)}catch(i){e.attachEvent("on"+t,o)}}$(document).ready(function(){$(".slider-banner").slick({dots:!1,infinite:!0,speed:500,fade:!1,arrows:!1,cssEase:"linear"}),$(".slider-work").slick({dots:!0,infinite:!1,speed:300,arrows:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1080,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-service").slick({dots:!1,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1140,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-good-work").slick({dots:!0,arrows:!1,infinite:!1,speed:300,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]})}),$(document).ready(function(){$(".content-info:first").show(),$(".circle-mission ul li.tab-link").click(function(){var e=$(this).attr("rel");$(".content-info").hide(),$("."+e).fadeIn()}),$(".tab-link").hover(function(){var e=$(this),t=e.attr("rel");e.parent("ul").prev("dl").children("dt").find("img."+t).attr("src",e.parent("ul").prev("dl").children("dt").find("img."+t).attr("src").replace("_off","_on"))},function(){var e=$(this),t=e.attr("rel");e.parent("ul").prev("dl").children("dt").find("img."+t).attr("src",e.parent("ul").prev("dl").children("dt").find("img."+t).attr("src").replace("_on","_off"))})}),addEvent(window,"load",heightLine);var $onOff=$(".on_off"),$noChange="none";$onOff.hover(function(){$(this).attr("src",$(this).attr("src").replace("_off","_on"))},function(){$(this).hasClass($noChange)||$(this).attr("src",$(this).attr("src").replace("_on","_off"))});