jQuery(document).ready(function(e){WebFont.load({google:{families:["Barlow:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"]}})}),jQuery(document).ready(function(e){var i,n=e(".btn-toggle-menu");n.length&&(i=e(".toggle-menu"),n.on("click",function(e){e.preventDefault(),i.slideToggle(),i.addClass("mobile")}))}),jQuery(document).ready(function(e){function a(e){return 11===e.replace(/\D/g,"").length?"(00) 00000-0000":"(00) 0000-00009"}var i={onKeyPress:function(e,i,n,t){n.mask(a.apply({},arguments),t)}};e(".mask-phone").mask(a,i),e(".mask-date").mask("00/00/0000"),e(".mask-datetime").mask("00/00/0000 00:00"),e(".mask-month").mask("00/0000"),e(".mask-cpf").mask("000.000.000-00"),e(".mask-cnpj").mask("00.000.000/0000-00"),e(".mask-zipcode").mask("00000-000"),e(".mask-money").mask("R$ 000.000.000.000.000,00",{reverse:!0,placeholder:"0,00"})}),jQuery(document).ready(function(e){e=e(".section-slide .swiper-container");e.length&&new Swiper(e,{autoplay:{delay:7e3},navigation:{prevEl:e.parent().find(".slide-navigation.prev"),nextEl:e.parent().find(".slide-navigation.next")},speed:550,pagination:{el:".slide-pagination",clickable:!0,bulletClass:"bullet",bulletActiveClass:"bullet-active",modifierClass:"slide-pagination-"}})}),jQuery(document).ready(function(e){e(".box-search-city .box-list").mCustomScrollbar({scrollInertia:300,scrollEasing:"linear"});new List("city-search",{valueNames:["city"]})}),$(document).ready(function(){$(".site-header").scrollToFixed()}),$(function(){$("#navbar-menu ul li a[href^='#']").on("click",function(e){e.preventDefault();var i=this.hash;$(".toggle-menu").slideUp(150),setTimeout(function(){$("html, body").animate({scrollTop:$(i).offset().top},750)},200)})}),jQuery(document).ready(function(e){e=e(".section-testimony .swiper-container");e.length&&new Swiper(e,{autoplay:{delay:7e3},slidesPerView:3,speed:550,spaceBetween:30,pagination:{el:".testimony-pagination",clickable:!0,bulletClass:"bullet",bulletActiveClass:"bullet-active",modifierClass:"slide-pagination-"},breakpoints:{991:{slidesPerView:2},767:{slidesPerView:1}}})}),$(function(){$(".anchor-link[href^='#']").on("click",function(e){e.preventDefault();var i=this.hash;setTimeout(function(){$("html, body").animate({scrollTop:$(i).offset().top},750)},200)})});
//# sourceMappingURL=scripts.js.map
