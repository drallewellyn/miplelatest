window.Modernizr=function(t,e,i){function n(){}function o(t,e){var i=t.charAt(0).toUpperCase()+t.substr(1),n=(t+" "+y.join(i+" ")+i).split(" ");return!!r(n,e)}function r(t,e){for(var n in t)if(g[t[n]]!==i&&(!e||e(t[n],m)))return!0}function s(t,e){return typeof t===e}function a(t){g.cssText=t}var l,c,u="1.7",d={},p=!0,h=e.documentElement,f=(e.head||e.getElementsByTagName("head")[0],"modernizr"),m=e.createElement(f),g=m.style,v=e.createElement("input"),y=(Object.prototype.toString," -webkit- -moz- -o- -ms- -khtml- ".split(" "),"Webkit Moz O ms Khtml".split(" ")),b={},w=[],x=(function(){function t(t,o){o=o||e.createElement(n[t]||"div");var r=(t="on"+t)in o;return r||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),r=s(o[t],"function"),s(o[t],i)||(o[t]=i),o.removeAttribute(t))),o=null,r}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),{}.hasOwnProperty);c=s(x,i)||s(x.call,i)?function(t,e){return e in t&&s(t.constructor.prototype[e],i)}:function(t,e){return x.call(t,e)},b.csstransitions=function(){return o("transitionProperty")};for(var C in b)c(b,C)&&(l=C.toLowerCase(),d[l]=b[C](),w.push((d[l]?"":"no-")+l));return d.input||n(),d.crosswindowmessaging=d.postmessage,d.historymanagement=d.history,d.addTest=function(t,e){return t=t.toLowerCase(),d[t]?void 0:(e=!!e(),h.className+=" "+(e?"":"no-")+t,d[t]=e,d)},a(""),m=v=null,d._enableHTML5=p,d._version=u,h.className=h.className.replace(/\bno-js\b/,"")+" js "+w.join(" "),d}(this,this.document);