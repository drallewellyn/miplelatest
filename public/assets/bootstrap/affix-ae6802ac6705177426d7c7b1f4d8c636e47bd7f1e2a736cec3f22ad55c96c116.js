/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof e&&e;o||n.data("bs.affix",o=new i(this,s)),"string"==typeof e&&o[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.5",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var o=this.$target.scrollTop(),s=this.$element.offset(),r=this.$target.height();if(null!=i&&"top"==this.affixed)return i>o?"top":!1;if("bottom"==this.affixed)return null!=i?o+this.unpin<=s.top?!1:"bottom":t-n>=o+r?!1:"bottom";var a=null==this.affixed,l=a?o:s.top,u=a?r:e;return null!=i&&i>=o?"top":null!=n&&l+u>=t-n?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,o=n.top,s=n.bottom,r=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(s=o=n),"function"==typeof o&&(o=n.top(this.$element)),"function"==typeof s&&(s=n.bottom(this.$element));var a=this.getState(r,e,o,s);if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","");var l="affix"+(a?"-"+a:""),u=t.Event(l+".bs.affix");if(this.$element.trigger(u),u.isDefaultPrevented())return;this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:r-e-s})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery);