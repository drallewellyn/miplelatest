/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e,n){var o,s,r,a=e.nodeName.toLowerCase();return"area"===a?(o=e.parentNode,s=o.name,e.href&&s&&"map"===o.nodeName.toLowerCase()?(r=t("img[usemap='#"+s+"']")[0],!!r&&i(r)):!1):(/^(input|select|textarea|button|object)$/.test(a)?!e.disabled:"a"===a?e.href||n:n)&&i(e)}function i(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}t.ui=t.ui||{},t.extend(t.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({scrollParent:function(e){var i=this.css("position"),n="absolute"===i,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,s=this.parents().filter(function(){var e=t(this);return n&&"static"===e.css("position")?!1:o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==i&&s.length?s:t(this[0].ownerDocument||document)},uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,n){return!!t.data(e,n[3])},focusable:function(i){return e(i,!isNaN(t.attr(i,"tabindex")))},tabbable:function(i){var n=t.attr(i,"tabindex"),o=isNaN(n);return(o||n>=0)&&e(i,!o)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(e,i){function n(e,i,n,s){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,n&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),s&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===i?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+i]=function(e){return void 0===e?r["inner"+i].call(this):this.each(function(){t(this).css(s,n(this,e)+"px")})},t.fn["outer"+i]=function(e,o){return"number"!=typeof e?r["outer"+i].call(this,e):this.each(function(){t(this).css(s,n(this,e,!0,o)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.fn.extend({focus:function(e){return function(i,n){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),n&&n.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var i,n,o=t(this[0]);o.length&&o[0]!==document;){if(i=o.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0}}),t.ui.plugin={add:function(e,i,n){var o,s=t.ui[e].prototype;for(o in n)s.plugins[o]=s.plugins[o]||[],s.plugins[o].push([i,n[o]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}}}),/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){var e=0,i=Array.prototype.slice;return t.cleanData=function(e){return function(i){var n,o,s;for(s=0;null!=(o=i[s]);s++)try{n=t._data(o,"events"),n&&n.remove&&t(o).triggerHandler("remove")}catch(r){}e(i)}}(t.cleanData),t.widget=function(e,i,n){var o,s,r,a,l={},u=e.split(".")[0];return e=e.split(".")[1],o=u+"-"+e,n||(n=i,i=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[u]=t[u]||{},s=t[u][e],r=t[u][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new r(t,e)},t.extend(r,s,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(n,function(e,n){return t.isFunction(n)?void(l[e]=function(){var t=function(){return i.prototype[e].apply(this,arguments)},o=function(t){return i.prototype[e].apply(this,t)};return function(){var e,i=this._super,s=this._superApply;return this._super=t,this._superApply=o,e=n.apply(this,arguments),this._super=i,this._superApply=s,e}}()):void(l[e]=n)}),r.prototype=t.widget.extend(a,{widgetEventPrefix:s?a.widgetEventPrefix||e:e},l,{constructor:r,namespace:u,widgetName:e,widgetFullName:o}),s?(t.each(s._childConstructors,function(e,i){var n=i.prototype;t.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete s._childConstructors):i._childConstructors.push(r),t.widget.bridge(e,r),r},t.widget.extend=function(e){for(var n,o,s=i.call(arguments,1),r=0,a=s.length;a>r;r++)for(n in s[r])o=s[r][n],s[r].hasOwnProperty(n)&&void 0!==o&&(t.isPlainObject(o)?e[n]=t.isPlainObject(e[n])?t.widget.extend({},e[n],o):t.widget.extend({},o):e[n]=o);return e},t.widget.bridge=function(e,n){var o=n.prototype.widgetFullName||e;t.fn[e]=function(s){var r="string"==typeof s,a=i.call(arguments,1),l=this;return r?this.each(function(){var i,n=t.data(this,o);return"instance"===s?(l=n,!1):n?t.isFunction(n[s])&&"_"!==s.charAt(0)?(i=n[s].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+s+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+s+"'")}):(a.length&&(s=t.widget.extend.apply(null,[s].concat(a))),this.each(function(){var e=t.data(this,o);e?(e.option(s||{}),e._init&&e._init()):t.data(this,o,new n(s,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=t(n||this.defaultElement||this)[0],this.element=t(n),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),n!==this&&(t.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===n&&this.destroy()}}),this.document=t(n.style?n.ownerDocument:n.document||n),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var n,o,s,r=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(r={},n=e.split("."),e=n.shift(),n.length){for(o=r[e]=t.widget.extend({},this.options[e]),s=0;s<n.length-1;s++)o[n[s]]=o[n[s]]||{},o=o[n[s]];if(e=n.pop(),1===arguments.length)return void 0===o[e]?null:o[e];o[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(e,i,n){var o,s=this;"boolean"!=typeof e&&(n=i,i=e,e=!1),n?(i=o=t(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,o=this.widget()),t.each(n,function(n,r){function a(){return e||s.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?s[r]:r).apply(s,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||t.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+s.eventNamespace,c=l[2];c?o.delegate(c,u,a):i.bind(u,a)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(i).undelegate(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?n[t]:t).apply(n,arguments)}var n=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,n){var o,s,r=this.options[e];if(n=n||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],s=i.originalEvent)for(o in s)o in i||(i[o]=s[o]);return this.element.trigger(i,n),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(n,o,s){"string"==typeof o&&(o={effect:o});var r,a=o?o===!0||"number"==typeof o?i:o.effect||i:e;o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=s,o.delay&&n.delay(o.delay),r&&t.effects&&t.effects.effect[a]?n[e](o):a!==e&&n[a]?n[a](o.duration,o.easing,s):n.queue(function(i){t(this)[e](),s&&s.call(n[0]),i()})}}),t.widget}),/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){return function(){function e(t,e,i){return[parseFloat(t[0])*(f.test(t[0])?e/100:1),parseFloat(t[1])*(f.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,s,r=Math.max,a=Math.abs,l=Math.round,u=/left|center|right/,c=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,h=/^\w+/,f=/%$/,p=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==o)return o;var e,i,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=n.children()[0];return t("body").append(n),e=s.offsetWidth,n.css("overflow","scroll"),i=s.offsetWidth,e===i&&(i=n[0].clientWidth),n.remove(),o=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),n=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,s="scroll"===n||"auto"===n&&e.height<e.element[0].scrollHeight;return{width:s?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),n=t.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:n,isDocument:o,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:n||o?i.width():i.outerWidth(),height:n||o?i.height():i.outerHeight()}}},t.fn.position=function(o){if(!o||!o.of)return p.apply(this,arguments);o=t.extend({},o);var f,m,g,v,y,b,w=t(o.of),x=t.position.getWithinInfo(o.within),_=t.position.getScrollInfo(x),C=(o.collision||"flip").split(" "),k={};return b=n(w),w[0].preventDefault&&(o.at="left top"),m=b.width,g=b.height,v=b.offset,y=t.extend({},v),t.each(["my","at"],function(){var t,e,i=(o[this]||"").split(" ");1===i.length&&(i=u.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=u.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=d.exec(i[0]),e=d.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],o[this]=[h.exec(i[0])[0],h.exec(i[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===o.at[0]?y.left+=m:"center"===o.at[0]&&(y.left+=m/2),"bottom"===o.at[1]?y.top+=g:"center"===o.at[1]&&(y.top+=g/2),f=e(k.at,m,g),y.left+=f[0],y.top+=f[1],this.each(function(){var n,u,c=t(this),d=c.outerWidth(),h=c.outerHeight(),p=i(this,"marginLeft"),b=i(this,"marginTop"),T=d+p+i(this,"marginRight")+_.width,S=h+b+i(this,"marginBottom")+_.height,E=t.extend({},y),A=e(k.my,c.outerWidth(),c.outerHeight());"right"===o.my[0]?E.left-=d:"center"===o.my[0]&&(E.left-=d/2),"bottom"===o.my[1]?E.top-=h:"center"===o.my[1]&&(E.top-=h/2),E.left+=A[0],E.top+=A[1],s||(E.left=l(E.left),E.top=l(E.top)),n={marginLeft:p,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[C[e]]&&t.ui.position[C[e]][i](E,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:h,collisionPosition:n,collisionWidth:T,collisionHeight:S,offset:[f[0]+A[0],f[1]+A[1]],my:o.my,at:o.at,within:x,elem:c})}),o.using&&(u=function(t){var e=v.left-E.left,i=e+m-d,n=v.top-E.top,s=n+g-h,l={target:{element:w,left:v.left,top:v.top,width:m,height:g},element:{element:c,left:E.left,top:E.top,width:d,height:h},horizontal:0>i?"left":e>0?"right":"center",vertical:0>s?"top":n>0?"bottom":"middle"};d>m&&a(e+i)<m&&(l.horizontal="center"),h>g&&a(n+s)<g&&(l.vertical="middle"),r(a(e),a(i))>r(a(n),a(s))?l.important="horizontal":l.important="vertical",o.using.call(this,t,l)}),c.offset(t.extend(E,{using:u}))})},t.ui.position={fit:{left:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,a=t.left-e.collisionPosition.marginLeft,l=o-a,u=a+e.collisionWidth-s-o;e.collisionWidth>s?l>0&&0>=u?(i=t.left+l+e.collisionWidth-s-o,t.left+=l-i):u>0&&0>=l?t.left=o:l>u?t.left=o+s-e.collisionWidth:t.left=o:l>0?t.left+=l:u>0?t.left-=u:t.left=r(t.left-a,t.left)},top:function(t,e){var i,n=e.within,o=n.isWindow?n.scrollTop:n.offset.top,s=e.within.height,a=t.top-e.collisionPosition.marginTop,l=o-a,u=a+e.collisionHeight-s-o;e.collisionHeight>s?l>0&&0>=u?(i=t.top+l+e.collisionHeight-s-o,t.top+=l-i):u>0&&0>=l?t.top=o:l>u?t.top=o+s-e.collisionHeight:t.top=o:l>0?t.top+=l:u>0?t.top-=u:t.top=r(t.top-a,t.top)}},flip:{left:function(t,e){var i,n,o=e.within,s=o.offset.left+o.scrollLeft,r=o.width,l=o.isWindow?o.scrollLeft:o.offset.left,u=t.left-e.collisionPosition.marginLeft,c=u-l,d=u+e.collisionWidth-r-l,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];0>c?(i=t.left+h+f+p+e.collisionWidth-r-s,(0>i||i<a(c))&&(t.left+=h+f+p)):d>0&&(n=t.left-e.collisionPosition.marginLeft+h+f+p-l,(n>0||a(n)<d)&&(t.left+=h+f+p))},top:function(t,e){var i,n,o=e.within,s=o.offset.top+o.scrollTop,r=o.height,l=o.isWindow?o.scrollTop:o.offset.top,u=t.top-e.collisionPosition.marginTop,c=u-l,d=u+e.collisionHeight-r-l,h="top"===e.my[1],f=h?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>c?(n=t.top+f+p+m+e.collisionHeight-r-s,(0>n||n<a(c))&&(t.top+=f+p+m)):d>0&&(i=t.top-e.collisionPosition.marginTop+f+p+m-l,(i>0||a(i)<d)&&(t.top+=f+p+m))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,n,o,r,a=document.getElementsByTagName("body")[0],l=document.createElement("div");e=document.createElement(a?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)e.style[r]=n[r];e.appendChild(l),i=a||document.documentElement,i.insertBefore(e,i.firstChild),l.style.cssText="position: absolute; left: 10.7432222px;",o=t(l).offset().left,s=o>10&&11>o,e.innerHTML="",i.removeChild(e)}()}(),t.ui.position}),/*!
 * jQuery UI Tooltip 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */
function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./position"],t):t(jQuery)}(function(t){return t.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(e,i){var n=(e.attr("aria-describedby")||"").split(/\s+/);n.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(n.join(" ")))},_removeDescribedBy:function(e){var i=e.data("ui-tooltip-id"),n=(e.attr("aria-describedby")||"").split(/\s+/),o=t.inArray(i,n);-1!==o&&n.splice(o,1),e.removeData("ui-tooltip-id"),n=t.trim(n.join(" ")),n?e.attr("aria-describedby",n):e.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=t("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(e,i){var n=this;return"disabled"===e?(this[i?"_disable":"_enable"](),void(this.options[e]=i)):(this._super(e,i),void("content"===e&&t.each(this.tooltips,function(t,e){n._updateContent(e.element)})))},_disable:function(){var e=this;t.each(this.tooltips,function(i,n){var o=t.Event("blur");o.target=o.currentTarget=n.element[0],e.close(o,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,n=t(e?e.target:this.element).closest(this.options.items);n.length&&!n.data("ui-tooltip-id")&&(n.attr("title")&&n.data("ui-tooltip-title",n.attr("title")),n.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&n.parents().each(function(){var e,n=t(this);n.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),n.attr("title")&&(n.uniqueId(),i.parents[this.id]={element:this,title:n.attr("title")},n.attr("title",""))}),this._registerCloseHandlers(e,n),this._updateContent(n,e))},_updateContent:function(t,e){var i,n=this.options.content,o=this,s=e?e.type:null;return"string"==typeof n?this._open(e,t,n):(i=n.call(t[0],function(i){o._delay(function(){t.data("ui-tooltip-open")&&(e&&(e.type=s),this._open(e,t,i))})}),void(i&&this._open(e,t,i)))},_open:function(e,i,n){function o(t){u.of=t,r.is(":hidden")||r.position(u)}var s,r,a,l,u=t.extend({},this.options.position);if(n){if(s=this._find(i))return void s.tooltip.find(".ui-tooltip-content").html(n);i.is("[title]")&&(e&&"mouseover"===e.type?i.attr("title",""):i.removeAttr("title")),s=this._tooltip(i),r=s.tooltip,this._addDescribedBy(i,r.attr("id")),r.find(".ui-tooltip-content").html(n),this.liveRegion.children().hide(),n.clone?(l=n.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=n,t("<div>").html(l).appendTo(this.liveRegion),this.options.track&&e&&/^mouse/.test(e.type)?(this._on(this.document,{mousemove:o}),o(e)):r.position(t.extend({of:i},this.options.position)),r.hide(),this._show(r,this.options.show),this.options.show&&this.options.show.delay&&(a=this.delayedShow=setInterval(function(){r.is(":visible")&&(o(u.of),clearInterval(a))},t.fx.interval)),this._trigger("open",e,{tooltip:r})}},_registerCloseHandlers:function(e,i){var n={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var n=t.Event(e);n.currentTarget=i[0],this.close(n,!0)}}};i[0]!==this.element[0]&&(n.remove=function(){this._removeTooltip(this._find(i).tooltip)}),e&&"mouseover"!==e.type||(n.mouseleave="close"),e&&"focusin"!==e.type||(n.focusout="close"),this._on(!0,i,n)},close:function(e){var i,n=this,o=t(e?e.currentTarget:this.element),s=this._find(o);return s?(i=s.tooltip,void(s.closing||(clearInterval(this.delayedShow),o.data("ui-tooltip-title")&&!o.attr("title")&&o.attr("title",o.data("ui-tooltip-title")),this._removeDescribedBy(o),s.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){n._removeTooltip(t(this))}),o.removeData("ui-tooltip-open"),this._off(o,"mouseleave focusout keyup"),o[0]!==this.element[0]&&this._off(o,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete n.parents[e]}),s.closing=!0,this._trigger("close",e,{tooltip:i}),s.hiding||(s.closing=!1)))):void o.removeData("ui-tooltip-open")},_tooltip:function(e){var i=t("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),n=i.uniqueId().attr("id");return t("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[n]={element:e,tooltip:i}},_find:function(t){var e=t.data("ui-tooltip-id");return e?this.tooltips[e]:null},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,n){var o=t.Event("blur"),s=n.element;o.target=o.currentTarget=s[0],e.close(o,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title")||s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}})});