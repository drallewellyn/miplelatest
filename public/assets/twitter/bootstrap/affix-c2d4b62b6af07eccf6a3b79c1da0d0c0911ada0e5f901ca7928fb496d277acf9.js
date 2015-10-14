/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function(t){"use strict";var e=function(i,n){this.options=t.extend({},e.DEFAULTS,n),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(e.RESET).addClass("affix");var t=this.$window.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),n=this.$window.scrollTop(),o=this.$element.offset(),s=this.options.offset,r=s.top,a=s.bottom;"top"==this.affixed&&(o.top+=n),"object"!=typeof s&&(a=r=s),"function"==typeof r&&(r=s.top(this.$element)),"function"==typeof a&&(a=s.bottom(this.$element));var l=null!=this.unpin&&n+this.unpin<=o.top?!1:null!=a&&o.top+this.$element.height()>=i-a?"bottom":null!=r&&r>=n?"top":!1;if(this.affixed!==l){this.unpin&&this.$element.css("top","");var u="affix"+(l?"-"+l:""),c=t.Event(u+".bs.affix");this.$element.trigger(c),c.isDefaultPrevented()||(this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix","affixed"))),"bottom"==l&&this.$element.offset({top:i-a-this.$element.height()}))}}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var n=t(this),o=n.data("bs.affix"),s="object"==typeof i&&i;o||n.data("bs.affix",o=new e(this,s)),"string"==typeof i&&o[i]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(jQuery);