/*!
 * jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
!function(t,e){"use strict";var i="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";t.fn.imagesLoaded=function(n){function o(){var e=t(d),i=t(p);a&&(p.length?a.reject(c,e,i):a.resolve(c)),t.isFunction(n)&&n.call(s,c,e,i)}function r(e,n){e.src!==i&&-1===t.inArray(e,u)&&(u.push(e),n?p.push(e):d.push(e),t.data(e,"imagesLoaded",{isBroken:n,src:e.src}),l&&a.notifyWith(t(e),[n,c,t(d),t(p)]),c.length===u.length&&(setTimeout(o),c.unbind(".imagesLoaded")))}var s=this,a=t.isFunction(t.Deferred)?t.Deferred():0,l=t.isFunction(a.notify),c=s.find("img").add(s.filter("img")),u=[],d=[],p=[];return c.length?c.bind("load.imagesLoaded error.imagesLoaded",function(t){r(t.target,"error"===t.type)}).each(function(n,o){var s=o.src,a=t.data(o,"imagesLoaded");return a&&a.src===s?void r(o,a.isBroken):o.complete&&o.naturalWidth!==e?void r(o,0===o.naturalWidth||0===o.naturalHeight):void((o.readyState||o.complete)&&(o.src=i,o.src=s))}):o(),a?a.promise(s):s}}(jQuery);