(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1:function(t,e,n){"use strict";n.r(e),n.d(e,"isRTL",(function(){return a})),n.d(e,"isMobile",(function(){return o})),n.d(e,"isDarkMode",(function(){return i})),n.d(e,"formatDate",(function(){return r})),n.d(e,"getParameterByName",(function(){return c})),n.d(e,"adjustImageGallery",(function(){return u})),n.d(e,"managePostImages",(function(){return s})),n.d(e,"makeImagesZoomable",(function(){return l}));var a=function(){var t=document.querySelector("html");return["ar","he","fa"].includes(t.getAttribute("lang"))},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(t,")")).matches},i=function(){var t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return t&&t.matches},r=function(t){return t?new Date(t).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},c=function(t,e){e||(e=window.location.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(t,"(=([^&#]*)|&|#|$)")).exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},u=function(){for(var t=document.querySelectorAll(".kg-gallery-image img"),e=0,n=t.length;e<n;e++){var a=t[e].closest(".kg-gallery-image"),o=t[e].attributes.width.value/t[e].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},s=function(t){t(".js-post-content").find("img").each((function(){t(this).closest("figure").hasClass("kg-bookmark-card")||t(this).parent().is("a")||t(this).addClass("js-zoomable");var e=t(this).parent().find("figcaption");e?t(this).attr("alt",e.text()):t(this).attr("alt","")}))},l=function(t,e){e(".js-zoomable").on("close",(function(){o()&&t(event.target).parent().hasClass("kg-gallery-image")&&t(".medium-zoom-image").removeClass("medium-zoom-image-mobile")}))}},12:function(t,e,n){n(1),n(22),n(27),n(29),n(31),n(33),n(35),t.exports=n(37)},22:function(t,e){},27:function(t,e){},29:function(t,e){},31:function(t,e){},33:function(t,e){},35:function(t,e){},37:function(t,e){}},[[12,0,1]]]);