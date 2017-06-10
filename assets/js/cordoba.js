/*
* Cordoba (HTML) V1.1
* Copyright 2015, Limitless LLC
* www.limitless.company
*/
function fixSizes(){if(windowHeight=$(window).height(),windowWidth=$(window).width(),$(".fullscreen").css("height",windowHeight),$(".work .stream").css("width",$(window).width()-15),windowWidth>767&&$(".work .stream").css("width",$(window).width()-325),windowWidth>959){$(".page .content").css("height",$(".page .cover").height()-100);var e=$(".page .text").height()+$(".page .info").height()+50;if($(".page .content").height()<e)$(".page .content").mCustomScrollbar({axis:"y",theme:"dark"}),$(".page .content").css("padding-right",0);else{var t=$(".page .content").height()-e;$(".page .info").css("margin-top",t+50),$(".page .content").css("overflow-y","hidden")}}$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),$(".work-preview .prev, .work-preview .next").css("top",(windowHeight-$(".work-preview .info").height())/2+40);var i=windowWidth/windowHeight;if(i>16/9){var a=windowWidth*(16/9);$(".home video").css("width",windowWidth),$(".home video").css("height",a);var o=($(".home video").height()-windowHeight)/2;$(".home video").css("margin-top","-"+o+"px"),$(".home video").css("margin-left","0px")}else{var a=windowHeight*(16/9);$(".home video").css("height",windowHeight),$(".home video").css("width",a);var o=($(".home video").width()-windowWidth)/2;$(".home video").css("margin-top","0px"),$(".home video").css("margin-left","-"+o+"px")}$(".vertical-center").each(function(){$(this).css("margin-top",($(this).parent().height()-$(this).height())/2)});var r=$(".home .title").width()-25,s=$(".home .slogan .phrase").width()+50;$(".home .slogan .before, .home .slogan .after").css("width",(r-s)/2);var n=(windowHeight-$(".home .flex-control-nav").height())/2;$(".home .flex-control-nav").css("top",n),$(".home .flex-prev").css("top",n-60),$(".home .flex-next").css("top",n+$(".home .flex-control-nav").height()+55)}function loadPortfolio(e){$(".stream .item").removeClass("active"),$(".stream .row").length>0&&($(".stream").append($(".stream .item")),$(".stream .item").css("opacity",0),$(".stream .row").remove()),"all"==e?($(".stream .item").addClass("active"),$(".work .navigate li").eq(0).addClass("active")):$(".stream .item").each(function(){$(this).attr("data-album").toLowerCase()==e&&$(this).addClass("active")});var t=$(".stream").width();$(".stream").attr("data-width",t);var i=0;$(".stream").append("<div class='row'></div>"),$(".stream .item").each(function(){if($(this).hasClass("active")){var e=($(this),$(this).attr("data-type"),$(this).attr("data-url")),a=($(this).attr("data-video"),$(this).attr("data-width")),o=$(this).attr("data-height"),r=300*(a/o);$(this).css("background-image","url("+e+")"),$(this).css("width",r);var s=t/i;if($("section.work").hasClass("eq")){var n=$(".stream .row").last().children().length+1,d=Math.floor(t/n);d>450?$(".stream .row").last().append($(this)):($(".stream .row").last().append($(this)),$(".stream .row").last().find("div.item").each(function(){var e=$(this).parent().children().length,t=$(this).parent().width(),i=t/e,a=25;$(this).css("width",i-a),$(this).css("height",i-a),$(this).attr("z-width",i-a),$(this).attr("z-height",i-a)}),$(".stream").append("<div class='row'></div>"))}else if(s>1.5&&t>767)i+=r,$(".stream .row").last().append($(this));else{i=r,$(".stream .row").last().append($(this));var l=25,d=0;$(".stream .row").last().find("div.item").each(function(){d+=$(this).width()});var h=d-t;t>d&&(h=t-d),$(".stream .row").last().find("div.item").each(function(){var e=$(this).width(),i=h*(e/d),a=e-i;t>d&&(a=e+i),$(this).css("width",a-l),$(this).attr("z-width",a-l),$(this).attr("z-height",300)}),$(".stream").append("<div class='row'></div>")}}}),$(".stream .item").stop().animate({opacity:"1"},"slow"),0==$(".stream .row").last().children().length&&$(".stream .row").last().remove(),$(".stream .item.video").each(function(){var e="<div class='overlay'></div>";$(this).html(e)}),$(document).on("click",".stream div.item",function(){openImage($(this))})}function fixPlayer(){$(".work-preview .player").each(function(){var e=$(this).attr("data-type"),t=$(this).attr("data-file"),i=$(this).parent().width(),a=$(this).parent().height();if("youtube"===e){var o='<iframe width="'+i+'" height="'+a+'" src="//www.youtube.com/embed/'+t+'?rel=0" frameborder="0" allowfullscreen></iframe>';$(this).html(o)}else if("vimeo"===e){var o='<iframe src="//player.vimeo.com/video/'+t+'?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="'+i+'" height="'+a+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';$(this).html(o)}})}function openImage(e){var t,e=e,i=e.attr("data-url"),a=e.attr("data-type"),o=e.attr("data-file"),r=e.attr("data-caption"),s=e.attr("data-album"),n=$(".work .stream .active").index(e),d=$(".work .stream .active").length,l=windowHeight-150,h=(windowHeight-100)/2+40,w="<div class='info'><div class='meta'><span class='picture-title'>"+r+"</span><span class='album-title'>"+s+"</span><span class='current'>"+(n+1)+" / "+d+"</span></div><div class='close'></div></div>";"image"==a&&(t="<div class='frame' style='height:"+l+"px'><img src='"+i+"' alt='"+r+"'></div>"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&(t="<div class='frame' style='height:"+l+"px'><div class='player' data-type='"+a+"' data-file='"+o+"'></div></div>");var c="<div class='nav'><div class='prev' style='top: "+h+"px;'>Prev</div><div class='next' style='top: "+h+"px;'>Next</div></div>";$.magnificPopup.open({items:{src:"<div class='work-preview'>"+w+t+c+"</div>",type:"inline"}}),$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview .prev, .work-preview .next").css("top",(windowHeight-$(".work-preview .info").height())/2+40),0==n&&$(".work-preview .prev").addClass("disabled"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&fixPlayer(),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),$(".work-preview .close").click(function(){var e=$.magnificPopup.instance;e.close()}),$(document).keydown(function(e){var i=e.keyCode?e.keyCode:e.which;if("39"==i&&d-1>n){n++;var h=$(".work .stream .active").eq(n);img=h.attr("data-url"),a=h.attr("data-type"),o=h.attr("data-file"),r=h.attr("data-caption"),s=h.attr("data-album"),$(".work-preview .meta .picture-title").text(r),$(".work-preview .meta .album-title").text(s),"image"==a&&(t="<div class='frame' style='height:"+l+"px'><img src='"+img+"' alt='"+r+"'></div>"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&(t="<div class='frame' style='height:"+l+"px'><div class='player' data-type='"+a+"' data-file='"+o+"'></div></div>"),$(".work-preview .frame").replaceWith(t),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&fixPlayer(),$(".work-preview .meta .current").text(n+1+" / "+d),$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),0==!n&&$(".work-preview .prev").removeClass("disabled"),n==d-1&&$(this).addClass("disabled")}}),$(".work-preview .next").click(function(){if(d-1>n){n++;var e=$(".work .stream .active").eq(n);img=e.attr("data-url"),a=e.attr("data-type"),o=e.attr("data-file"),r=e.attr("data-caption"),s=e.attr("data-album"),$(".work-preview .meta .picture-title").text(r),$(".work-preview .meta .album-title").text(s),"image"==a&&(t="<div class='frame' style='height:"+l+"px'><img src='"+img+"' alt='"+r+"'></div>"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&(t="<div class='frame' style='height:"+l+"px'><div class='player' data-type='"+a+"' data-file='"+o+"'></div></div>"),$(".work-preview .frame").replaceWith(t),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&fixPlayer(),$(".work-preview .meta .current").text(n+1+" / "+d),$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),0==!n&&$(".work-preview .prev").removeClass("disabled"),n==d-1&&$(this).addClass("disabled")}}),$(document).keydown(function(e){var i=e.keyCode?e.keyCode:e.which;if("37"==i&&n>0){n--;var h=$(".work .stream .active").eq(n);img=h.attr("data-url"),a=h.attr("data-type"),o=h.attr("data-file"),r=h.attr("data-caption"),s=h.attr("data-album"),$(".work-preview .meta .picture-title").text(r),$(".work-preview .meta .album-title").text(s),"image"==a&&(t="<div class='frame' style='height:"+l+"px'><img src='"+img+"' alt='"+r+"'></div>"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&(t="<div class='frame' style='height:"+l+"px'><div class='player' data-type='"+a+"' data-file='"+o+"'></div></div>"),$(".work-preview .frame").replaceWith(t),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&fixPlayer(),$(".work-preview .meta .current").text(n+1+" / "+d),$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),0==n&&$(this).addClass("disabled"),d>n&&$(".work-preview .next").removeClass("disabled")}}),$(".work-preview .prev").click(function(){if(n>0){n--;var e=$(".work .stream .active").eq(n);img=e.attr("data-url"),a=e.attr("data-type"),o=e.attr("data-file"),r=e.attr("data-caption"),s=e.attr("data-album"),$(".work-preview .meta .picture-title").text(r),$(".work-preview .meta .album-title").text(s),"image"==a&&(t="<div class='frame' style='height:"+l+"px'><img src='"+img+"' alt='"+r+"'></div>"),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&(t="<div class='frame' style='height:"+l+"px'><div class='player' data-type='"+a+"' data-file='"+o+"'></div></div>"),$(".work-preview .frame").replaceWith(t),("youtube"==a||"vimeo"==a||"soundcloud"==a)&&fixPlayer(),$(".work-preview .meta .current").text(n+1+" / "+d),$(".work-preview .frame").css("height",windowHeight-$(".work-preview .nav").height()-$(".work-preview .info").height()),$(".work-preview img").css("margin-top",-($(".work-preview img").height()/2)),0==n&&$(this).addClass("disabled"),d>n&&$(".work-preview .next").removeClass("disabled")}})}function animateIt(){setTimeout(function(){$(".header").addClass("animated fadeInDown")},1300),setTimeout(function(){$("section.home .title").addClass("animated fadeInLeft")},1600),setTimeout(function(){$("section.home .slogan").addClass("animated fadeInRight")},1600),setTimeout(function(){$(".page .content").addClass("animated fadeInRight")},1600),setTimeout(function(){$("section.work .navigate").addClass("animated fadeInLeft")},1600),setTimeout(function(){$("section.work .stream").addClass("animated fadeInRight")},1600),setTimeout(function(){$("section.blog .inner").addClass("animated fadeInUp")},1600)}var windowHeight=$(window).height(),windowWidth=$(window).width();jQuery(document).ready(function(e){"use strict";e(".header .logo").click(function(){e("section.home").length?e("html,body").animate({scrollTop:0},"slow"):window.open("index.html","_self")}),e(".header .menu").click(function(){e("nav.navigation").fadeToggle("slow"),e("nav.navigation .menu").css("margin-top",(windowHeight-e("nav.navigation .menu").height())/2),e(".header .menu").hasClass("close")?e(".header .menu").removeClass("close"):e(".header .menu").addClass("close")}),e(".navigation .menu li").hover(function(){e(".navigation .menu li").stop().animate({opacity:"0.5"},"slow"),e(this).stop().animate({opacity:"1"},"slow")},function(){e(".navigation .list li").stop().animate({opacity:"1"},"slow")}),e(".navigation .menu li").click(function(){var t=e(this).attr("data-url");window.location=t}),e(".navigation .social li").click(function(){var t=e(this).attr("data-url");window.open(t,"_blank")}),e(".error-page .back").click(function(){var t=e(this).attr("data-url");window.open(t,"_self")}),e(".home .discover").hover(function(){e(this).removeClass("fadeInDownHalf"),e(this).removeClass("animated")}),e(".home .discover").click(function(){var t=e(this).attr("data-url");window.open(t,"_self")}),e(".home .slide").each(function(){e(this).css("background-image","url("+e(this).attr("data-url")+")")}),e(".home .slider").flexslider({animation:"fade",animationLoop:!0,animationSpeed:1500,easing:"easeOutBack",slideshow:!0,pauseOnHover:!1,controlNav:!0,directionNav:!0}),e(".work .navigate li").click(function(){var t=e(this).text().toLowerCase();e(".work .navigate li").removeClass("active"),e(this).addClass("active"),loadPortfolio(t)}),e(".work .item").hover(function(){e(".work .item").addClass("hover"),e(this).removeClass("hover")},function(){e(".work .item").removeClass("hover")}),e(".work .album").click(function(){var t=e(this).attr("data-url");window.open(t,"_self")}),e(".link").click(function(){var t=e(this).attr("data-url");window.location=t}),e(".blog .post .cover").each(function(){e(this).css("background-image","url("+e(this).attr("data-image")+")")}),e(".blog .post").hover(function(){e(".blog .post").stop().animate({opacity:"0.25"},"slow"),e(this).stop().animate({opacity:"1"},"slow")},function(){e(".blog .post").stop().animate({opacity:"1"},"slow")}),e(".blog .post .image, .blog .post .cover").click(function(){e.magnificPopup.open({items:{src:e(this).parent().attr("data-url"),type:"ajax"},closeMarkup:"<button class='mfp-close'>close</button>"})}),e(".article .social .facebook").click(function(){var t=e(location).attr("href");window.open("https://www.facebook.com/sharer/sharer.php?u="+t,"Share","resizable=yes,width=640, height=360")}),e(".article .social .twitter").click(function(){var t=e(location).attr("href");window.open("https://twitter.com/home?status="+t,"Tweet","resizable=yes,width=640, height=360")})}),$(window).load(function(){fixSizes(),loadPortfolio("all"),$(".work .navigate").append("<select></select>"),$(".work .navigate li").each(function(){$(".work .navigate select").append("<option>"+$(this).text()+"</option>")}),$(".work .navigate select").change(function(){var e=$(".work .navigate select option:selected").text().toLowerCase();$(".work .navigate li").removeClass("active"),$(this).addClass("active"),loadPortfolio(e)}),$(".loader").delay(1e3).fadeOut("slow"),animateIt()});var lastWidth=$(window).width();$(window).bind("resize",function(){window.resizeEvt,$(window).resize(function(){clearTimeout(window.resizeEvt),window.resizeEvt=setTimeout(function(){fixSizes(),$(window).width()!=lastWidth&&(lastWidth=$(window).width(),loadPortfolio("all"))},150)})});