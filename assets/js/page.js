(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return r})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return s})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return u})),n.d(t,"makeImagesZoomable",(function(){return m}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},r=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},s=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},u=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},m=function(e,t){var n=t(".js-zoomable");n.on("open",(function(t){o()&&e(t.target).parent().hasClass("kg-gallery-image")&&setTimeout((function(){var t=e(".medium-zoom-image--opened"),n=t[0].style.transform,a=n.substr(0,n.indexOf(" ")),o=parseFloat(a.substr(a.indexOf("(")+1).split(")")[0]),r=n.substr(n.indexOf(" ")+1),i=parseFloat(r.split(",")[1]),s="scale(1) translate3d(0, ".concat(i<0?o*i+i:o*i-i,"px, 0)");t.addClass("medium-zoom-image-mobile"),t[0].style.transform=s}),10)})),n.on("close",(function(){o()&&e(event.target).parent().hasClass("kg-gallery-image")&&e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")}))}},20:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),i=n.n(r),s=n(4),c=n(1);o()(document).ready((function(){i()(".js-post-content"),Object(c.adjustImageGallery)(),Object(c.managePostImages)(o.a),Object(c.makeImagesZoomable)(o.a,s.a)}))}},[[20,0,1]]]);