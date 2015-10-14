window.Modernizr=function(t,e,i){function n(t){b.cssText=t}function o(t,e){return n(S.join(t+";")+(e||""))}function r(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var n in t){var o=t[n];if(!s(o,"-")&&b[o]!==i)return"pfx"==e?o:!0}return!1}function l(t,e,n){for(var o in t){var s=e[t[o]];if(s!==i)return n===!1?t[o]:r(s,"function")?s.bind(n||e):s}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+C.join(n+" ")+n).split(" ");return r(e,"string")||r(e,"undefined")?a(o,e):(o=(t+" "+$.join(n+" ")+n).split(" "),l(o,e,i))}function u(){f.input=function(i){for(var n=0,o=i.length;o>n;n++)I[i[n]]=!!(i[n]in w);return I.list&&(I.list=!(!e.createElement("datalist")||!t.HTMLDataListElement)),I}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var n,o,r,s=0,a=t.length;a>s;s++)w.setAttribute("type",o=t[s]),n="text"!==w.type,n&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==i?(g.appendChild(w),r=e.defaultView,n=r.getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(n=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),L[t[s]]=!!n;return L}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,h="2.8.3",f={},m=!0,g=e.documentElement,v="modernizr",y=e.createElement(v),b=y.style,w=e.createElement("input"),x=":)",T={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",C=k.split(" "),$=k.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},A={},L={},I={},D=[],F=D.slice,_=function(t,i,n,o){var r,s,a,l,c=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=o?o[n]:v+(n+1),c.appendChild(a);return r=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(u?c:d).innerHTML+=r,d.appendChild(c),u||(d.style.background="",d.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),s=i(c,t),u?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),g.style.overflow=l),!!s},j=function(e){var i=t.matchMedia||t.msMatchMedia;if(i)return i(e)&&i(e).matches||!1;var n;return _("@media "+e+" { #"+v+" { position: absolute; } }",function(e){n="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),n},O=function(){function t(t,o){o=o||e.createElement(n[t]||"div"),t="on"+t;var s=t in o;return s||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),s=r(o[t],"function"),r(o[t],"undefined")||(o[t]=i),o.removeAttribute(t))),o=null,s}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),N={}.hasOwnProperty;p=r(N,"undefined")||r(N.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return N.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=F.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,i.concat(F.call(arguments)));return Object(s)===s?s:r}return e.apply(t,i.concat(F.call(arguments)))};return n}),A.flexbox=function(){return c("flexWrap")},A.flexboxlegacy=function(){return c("boxDirection")},A.canvas=function(){var t=e.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},A.canvastext=function(){return!(!f.canvas||!r(e.createElement("canvas").getContext("2d").fillText,"function"))},A.webgl=function(){return!!t.WebGLRenderingContext},A.touch=function(){var i;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?i=!0:_(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){i=9===t.offsetTop}),i},A.geolocation=function(){return"geolocation"in navigator},A.postmessage=function(){return!!t.postMessage},A.websqldatabase=function(){return!!t.openDatabase},A.indexedDB=function(){return!!c("indexedDB",t)},A.hashchange=function(){return O("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},A.history=function(){return!(!t.history||!history.pushState)},A.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},A.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},A.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),s(b.backgroundColor,"rgba")},A.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),s(b.backgroundColor,"rgba")||s(b.backgroundColor,"hsla")},A.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},A.backgroundsize=function(){return c("backgroundSize")},A.borderimage=function(){return c("borderImage")},A.borderradius=function(){return c("borderRadius")},A.boxshadow=function(){return c("boxShadow")},A.textshadow=function(){return""===e.createElement("div").style.textShadow},A.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},A.cssanimations=function(){return c("animationName")},A.csscolumns=function(){return c("columnCount")},A.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+S.join(i+t)).slice(0,-t.length)),s(b.backgroundImage,"gradient")},A.cssreflections=function(){return c("boxReflect")},A.csstransforms=function(){return!!c("transform")},A.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&_("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e,i){t=9===e.offsetLeft&&3===e.offsetHeight}),t},A.csstransitions=function(){return c("transition")},A.fontface=function(){var t;return _('@font-face {font-family:"font";src:url("https://")}',function(i,n){var o=e.getElementById("smodernizr"),r=o.sheet||o.styleSheet,s=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"";t=/src/i.test(s)&&0===s.indexOf(n.split(" ")[0])}),t},A.generatedcontent=function(){var t;return _(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},A.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},A.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},A.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},A.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},A.webworkers=function(){return!!t.Worker},A.applicationcache=function(){return!!t.applicationCache},A.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},A.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},A.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(T.call(e.createElementNS(E.svg,"animate")))},A.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(T.call(e.createElementNS(E.svg,"clipPath")))};for(var P in A)p(A,P)&&(d=P.toLowerCase(),f[d]=A[P](),D.push((f[d]?"":"no-")+d));return f.input||u(),f.addTest=function(t,e){if("object"==typeof t)for(var n in t)p(t,n)&&f.addTest(n,t[n]);else{if(t=t.toLowerCase(),f[t]!==i)return f;e="function"==typeof e?e():e,"undefined"!=typeof m&&m&&(g.className+=" "+(e?"":"no-")+t),f[t]=e}return f},n(""),y=w=null,f._version=h,f._prefixes=S,f._domPrefixes=$,f._cssomPrefixes=C,f.mq=j,f.hasEvent=O,f.testProp=function(t){return a([t])},f.testAllProps=c,f.testStyles=_,f.prefixed=function(t,e,i){return e?c(t,e,i):c(t,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+D.join(" "):""),f}(this,this.document),function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=S.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=T[t[w]];return e||(e={},x++,t[w]=x,T[x]=e),e}function r(t,i,n){if(i||(i=e),m)return i.createElement(t);n||(n=o(i));var r;return r=n.cache[t]?n.cache[t].cloneNode():b.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),!r.canHaveChildren||y.test(t)||r.tagUrn?r:n.frag.appendChild(r)}function s(t,i){if(t||(t=e),m)return t.createDocumentFragment();i=i||o(t);for(var r=i.frag.cloneNode(),s=0,a=n(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(i){return S.shivMethods?r(i,t,e):e.createElem(i)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(S,e.frag)}function l(t){t||(t=e);var n=o(t);return!S.shivCSS||f||n.hasCSS||(n.hasCSS=!!i(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||a(t,n),t}function c(t){for(var e,i=t.getElementsByTagName("*"),o=i.length,r=RegExp("^(?:"+n().join("|")+")$","i"),s=[];o--;)e=i[o],r.test(e.nodeName)&&s.push(e.applyElement(u(e)));return s}function u(t){for(var e,i=t.attributes,n=i.length,o=t.ownerDocument.createElement(C+":"+t.nodeName);n--;)e=i[n],e.specified&&o.setAttribute(e.nodeName,e.nodeValue);return o.style.cssText=t.style.cssText,o}function d(t){for(var e,i=t.split("{"),o=i.length,r=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+C+"\\:$2";o--;)e=i[o]=i[o].split("}"),e[e.length-1]=e[e.length-1].replace(r,s),i[o]=e.join("}");return i.join("{")}function p(t){for(var e=t.length;e--;)t[e].removeNode()}function h(t){function e(){clearTimeout(s._removeSheetTimer),n&&n.removeNode(!0),n=null}var n,r,s=o(t),a=t.namespaces,l=t.parentWindow;return!$||t.printShived?t:("undefined"==typeof a[C]&&a.add(C),l.attachEvent("onbeforeprint",function(){e();for(var o,s,a,l=t.styleSheets,u=[],p=l.length,h=Array(p);p--;)h[p]=l[p];for(;a=h.pop();)if(!a.disabled&&k.test(a.media)){try{o=a.imports,s=o.length}catch(f){s=0}for(p=0;s>p;p++)h.push(o[p]);try{u.push(a.cssText)}catch(f){}}u=d(u.reverse().join("")),r=c(t),n=i(t,u)}),l.attachEvent("onafterprint",function(){p(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(e,500)}),t.printShived=!0,t)}var f,m,g="3.7.0",v=t.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",x=0,T={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",f="hidden"in t,m=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(i){f=!0,m=!0}}();var S={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:v.shivCSS!==!1,supportsUnknownElements:m,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:s};t.html5=S,l(e);var k=/^$|\b(?:all|print)\b/,C="html5shiv",$=!m&&function(){var i=e.documentElement;return!("undefined"==typeof e.namespaces||"undefined"==typeof e.parentWindow||"undefined"==typeof i.applyElement||"undefined"==typeof i.removeNode||"undefined"==typeof t.attachEvent)}();S.type+=" print",S.shivPrint=h,h(e)}(this,document),function(t,e,i){function n(t){return"[object Function]"==g.call(t)}function o(t){return"string"==typeof t}function r(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();y=1,t?t.t?f(function(){("c"==t.t?p.injectCss:p.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):y=0}function l(t,i,n,o,r,l,c){function u(e){if(!h&&s(d.readyState)&&(b.r=h=1,!y&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&f(function(){x.removeChild(d)},50);for(var n in $[i])$[i].hasOwnProperty(n)&&$[i][n].onload()}}var c=c||p.errorTimeout,d=e.createElement(t),h=0,g=0,b={t:n,s:i,e:r,a:l,x:c};1===$[i]&&(g=1,$[i]=[]),"object"==t?d.data=i:(d.src=i,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=t&&(g||2===$[i]?(x.insertBefore(d,w?null:m),f(u,c)):$[i].push(d))}function c(t,e,i,n,r){return y=0,e=e||"j",o(t)?l("c"==e?S:T,t,e,this.i++,i,n,r):(v.splice(this.i++,0,t),1==v.length&&a()),this}function u(){var t=p;return t.loader={load:c,i:0},t}var d,p,h=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in h.style,w=b&&!!e.createRange().compareNode,x=w?h:m.parentNode,h=t.opera&&"[object Opera]"==g.call(t.opera),h=!!e.attachEvent&&!h,T=b?"object":h?"script":"img",S=h?"script":T,k=Array.isArray||function(t){return"[object Array]"==g.call(t)},C=[],$={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};p=function(t){function e(t){var e,i,n,t=t.split("!"),o=C.length,r=t.pop(),s=t.length,r={url:r,origUrl:r,prefixes:t};for(i=0;s>i;i++)n=t[i].split("="),(e=E[n.shift()])&&(r=e(r,n));for(i=0;o>i;i++)r=C[i](r);return r}function s(t,o,r,s,a){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=n(o)?o:o[t]||o[s]||o[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,o,r,s,a):($[l.url]?l.noexec=!0:$[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":i,l.noexec,l.attrs,l.timeout),(n(o)||n(c))&&r.load(function(){u(),o&&o(l.origUrl,a,s),c&&c(l.origUrl,a,s),$[l.url]=2})))}function a(t,e){function i(t,i){if(t){if(o(t))i||(d=function(){var t=[].slice.call(arguments);p.apply(this,t),h()}),s(t,d,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(l)&&(!i&&!--a&&(n(d)?d=function(){var t=[].slice.call(arguments);p.apply(this,t),h()}:d[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(p[l])),s(t[l],d,e,l,c))}else!i&&h()}var a,l,c=!!t.test,u=t.load||t.both,d=t.callback||r,p=d,h=t.complete||r;i(c?t.yep:t.nope,!!u),u&&i(u)}var l,c,d=this.yepnope.loader;if(o(t))s(t,0,d,0);else if(k(t))for(l=0;l<t.length;l++)c=t[l],o(c)?s(c,0,d,0):k(c)?p(c):Object(c)===c&&a(c,d);else Object(t)===t&&a(t,d)},p.addPrefix=function(t,e){E[t]=e},p.addFilter=function(t){C.push(t)},p.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,i,n,o,l,c){var u,d,h=e.createElement("script"),o=o||p.errorTimeout;h.src=t;for(d in n)h.setAttribute(d,n[d]);i=c?a:i||r,h.onreadystatechange=h.onload=function(){!u&&s(h.readyState)&&(u=1,i(),h.onload=h.onreadystatechange=null)},f(function(){u||(u=1,i(1))},o),l?h.onload():m.parentNode.insertBefore(h,m)},t.yepnope.injectCss=function(t,i,n,o,s,l){var c,o=e.createElement("link"),i=l?a:i||r;o.href=t,o.rel="stylesheet",o.type="text/css";for(c in n)o.setAttribute(c,n[c]);s||(m.parentNode.insertBefore(o,m),f(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};