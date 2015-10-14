/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var o=i.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:o});if(e.trigger(s),!s.isDefaultPrevented()){var r=t(n);this.activate(e.parent("li"),i),this.activate(r,r.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},e.prototype.activate=function(e,i,n){function o(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),n&&n()}var s=i.find("> .active"),r=n&&t.support.transition&&s.hasClass("fade");r?s.one(t.support.transition.end,o).emulateTransitionEnd(150):o(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=function(i){return this.each(function(){var n=t(this),o=n.data("bs.tab");o||n.data("bs.tab",o=new e(this)),"string"==typeof i&&o[i]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(jQuery);