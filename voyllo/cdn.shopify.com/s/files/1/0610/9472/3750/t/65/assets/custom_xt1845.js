jQuery(document).ready(function(){jQuery(".left-cat-section ul li").click(function(){jQuery(".left-cat-section ul li").removeClass("active"),jQuery(this).addClass("active");var e=jQuery(this).attr("id");jQuery(".faq-ans-sec").removeClass("active"),jQuery("#"+e+"-details").addClass("active")}),jQuery(".single-question-main").click(function(){jQuery(".answer-sec-main").removeClass("active");var e=$(this).attr("id");e=="active-question-id"?jQuery(this).removeAttr("id"):(jQuery(".single-question-main").removeAttr("id"),jQuery(this).attr("id","active-question-id"),jQuery(".answer-sec-main",this).addClass("active"))})});
//# sourceMappingURL=/s/files/1/0610/9472/3750/t/65/assets/custom_xt.js.map?v=160980781950796565861676727183
