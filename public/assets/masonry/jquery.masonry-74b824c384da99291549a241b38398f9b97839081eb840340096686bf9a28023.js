/**
 * jQuery Masonry v2.1.08
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2012 David DeSandro
 */
!function(t,e,i){"use strict";/*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */
var n,o=e.event;o.special.smartresize={setup:function(){e(this).bind("resize",o.special.smartresize.handler)},teardown:function(){e(this).unbind("resize",o.special.smartresize.handler)},handler:function(t,e){var i=this,r=arguments;t.type="smartresize",n&&clearTimeout(n),n=setTimeout(function(){o.dispatch.apply(i,r)},"execAsap"===e?0:100)}},e.fn.smartresize=function(t){return t?this.bind("smartresize",t):this.trigger("smartresize",["execAsap"])},e.Mason=function(t,i){this.element=e(i),this._create(t),this._init()},e.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},e.Mason.prototype={_filterFindBricks:function(t){var e=this.options.itemSelector;return e?t.filter(e).add(t.find(e)):t},_getBricks:function(t){var e=this._filterFindBricks(t).css({position:"absolute"}).addClass("masonry-brick");return e},_create:function(i){this.options=e.extend(!0,{},e.Mason.settings,i),this.styleQueue=[];var n=this.element[0].style;this.originalStyle={height:n.height||""};var o=this.options.containerStyle;for(var r in o)this.originalStyle[r]=n[r]||"";this.element.css(o),this.horizontalDirection=this.options.isRTL?"right":"left";var s=this.element.css("padding-"+this.horizontalDirection),a=this.element.css("padding-top");this.offset={x:s?parseInt(s,10):0,y:a?parseInt(a,10):0},this.isFluid=this.options.columnWidth&&"function"==typeof this.options.columnWidth;var l=this;setTimeout(function(){l.element.addClass("masonry")},0),this.options.isResizable&&e(t).bind("smartresize.masonry",function(){l.resize()}),this.reloadItems()},_init:function(t){this._getColumns(),this._reLayout(t)},option:function(t,i){e.isPlainObject(t)&&(this.options=e.extend(!0,this.options,t))},layout:function(t,e){for(var i=0,n=t.length;n>i;i++)this._placeBrick(t[i]);var o={};if(o.height=Math.max.apply(Math,this.colYs),this.options.isFitWidth){var r=0;for(i=this.cols;--i&&0===this.colYs[i];)r++;o.width=(this.cols-r)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:o});var s,a=this.isLaidOut&&this.options.isAnimated?"animate":"css",l=this.options.animationOptions;for(i=0,n=this.styleQueue.length;n>i;i++)s=this.styleQueue[i],s.$el[a](s.style,l);this.styleQueue=[],e&&e.call(t),this.isLaidOut=!0},_getColumns:function(){var t=this.options.isFitWidth?this.element.parent():this.element,e=t.width();this.columnWidth=this.isFluid?this.options.columnWidth(e):this.options.columnWidth||this.$bricks.outerWidth(!0)||e,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((e+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(t){var i,n,o,r,s,a=e(t);if(i=Math.ceil(a.outerWidth(!0)/this.columnWidth),i=Math.min(i,this.cols),1===i)o=this.colYs;else for(n=this.cols+1-i,o=[],s=0;n>s;s++)r=this.colYs.slice(s,s+i),o[s]=Math.max.apply(Math,r);for(var l=Math.min.apply(Math,o),c=0,u=0,d=o.length;d>u;u++)if(o[u]===l){c=u;break}var p={top:l+this.offset.y};p[this.horizontalDirection]=this.columnWidth*c+this.offset.x,this.styleQueue.push({$el:a,style:p});var h=l+a.outerHeight(!0),f=this.cols+1-d;for(u=0;f>u;u++)this.colYs[c+u]=h},resize:function(){var t=this.cols;this._getColumns(),(this.isFluid||this.cols!==t)&&this._reLayout()},_reLayout:function(t){var e=this.cols;for(this.colYs=[];e--;)this.colYs.push(0);this.layout(this.$bricks,t)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(t){this.reloadItems(),this._init(t)},appended:function(t,e,i){if(e){this._filterFindBricks(t).css({top:this.element.height()});var n=this;setTimeout(function(){n._appended(t,i)},1)}else this._appended(t,i)},_appended:function(t,e){var i=this._getBricks(t);this.$bricks=this.$bricks.add(i),this.layout(i,e)},remove:function(t){this.$bricks=this.$bricks.not(t),t.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var i=this.element[0].style;for(var n in this.originalStyle)i[n]=this.originalStyle[n];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),e(t).unbind(".masonry")}},/*!
   * jQuery imagesLoaded plugin v1.1.0
   * http://github.com/desandro/imagesloaded
   *
   * MIT License. by Paul Irish et al.
   */
e.fn.imagesLoaded=function(t){function i(){t.call(o,r)}function n(t){var o=t.target;o.src!==a&&-1===e.inArray(o,l)&&(l.push(o),--s<=0&&(setTimeout(i),r.unbind(".imagesLoaded",n)))}var o=this,r=o.find("img").add(o.filter("img")),s=r.length,a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",l=[];return s||i(),r.bind("load.imagesLoaded error.imagesLoaded",n).each(function(){var t=this.src;this.src=a,this.src=t}),o};var r=function(e){t.console&&t.console.error(e)};e.fn.masonry=function(t){if("string"==typeof t){var i=Array.prototype.slice.call(arguments,1);this.each(function(){var n=e.data(this,"masonry");return n?e.isFunction(n[t])&&"_"!==t.charAt(0)?void n[t].apply(n,i):void r("no such method '"+t+"' for masonry instance"):void r("cannot call methods on masonry prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){var i=e.data(this,"masonry");i?(i.option(t||{}),i._init()):e.data(this,"masonry",new e.Mason(t,this))});return this}}(window,jQuery);