(function(e){"use strict";jQuery(document).ready(function(){var i=e(window),t=e(".header-sticky");i.on("scroll",function(){var s=i.scrollTop();s<100?t.removeClass("is-sticky"):t.addClass("is-sticky")}),document.onkeydown=function(s){if(event.keyCode==123||s.ctrlKey&&s.shiftKey&&s.keyCode=="I".charCodeAt(0)||s.ctrlKey&&s.shiftKey&&s.keyCode=="C".charCodeAt(0)||s.ctrlKey&&s.shiftKey&&s.keyCode=="J".charCodeAt(0)||s.ctrlKey&&s.keyCode=="U".charCodeAt(0))return!1},e("button.navbar-toggler").click(function(){e(".main-menu-area").addClass("active"),e(".mm-fullscreen-bg").addClass("active"),e("body").addClass("hidden")}),e(".close-box").click(function(){e(".main-menu-area").removeClass("active"),e(".mm-fullscreen-bg").removeClass("active"),e("body").removeClass("hidden")}),e(".mm-fullscreen-bg").click(function(){e(".main-menu-area").removeClass("active"),e(".mm-fullscreen-bg").removeClass("active"),e("body").removeClass("hidden")}),e(".shopping-cart a.cart-count").click(function(){e(".mini-cart").addClass("show"),e(".mm-fullscreen-bg").addClass("active"),e("body").addClass("hidden")}),e(".ajax-spin-cart").click(function(){window.setTimeout(function(){e(".mini-cart").addClass("show"),e(".mm-fullscreen-bg").addClass("active"),e("body").addClass("hidden")},1e3)}),e(".shopping-cart-close i").click(function(){e(".mini-cart").removeClass("show"),e(".mm-fullscreen-bg").removeClass("active"),e("body").removeClass("hidden")}),e(".mm-fullscreen-bg").click(function(){e(".mini-cart").removeClass("show"),e(".mm-fullscreen-bg").removeClass("active"),e(".filter-sidebar").removeClass("active")}),e("button.filter-button").on("click",function(){e(".filter-sidebar").addClass("active"),e(".mm-fullscreen-bg").addClass("active")}),e("button.close-filter-sidebar").on("click",function(){e(".filter-sidebar").removeClass("active"),e(".mm-fullscreen-bg").removeClass("active")}),e(".grid").imagesLoaded(function(){e(".grid").isotope({itemSelector:"li",layoutMode:"masonry"})}),e(window).scroll(function(){e(this).scrollTop()>1e3?e("#top").fadeIn():e("#top").fadeOut()}),e("#top").click(function(){return e("html, body").animate({scrollTop:0},100),!1});var a=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),o=a.map(function(s){return new bootstrap.Tooltip(s)})})})(jQuery);
//# sourceMappingURL=/s/files/1/0412/8151/9765/t/2/assets/main.js.map?v=135738431109890947911659767948