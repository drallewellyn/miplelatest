!function(t){var e,i,n,o,r=!1,s=!r,a=r,l=".pageless",c="scroll"+l,u="resize"+l,d={container:window,currentPage:1,distance:100,pagination:".pagination",params:{},url:location.href,loaderImage:"/images/load.gif"};t.pageless=function(e){t.isFunction(e)?d.call():h(e)};var p=function(){return d.loaderHtml||'\n<div id="pageless-loader" style="display:none;text-align:center;width:100%;">\n  <div class="msg" style="color:#e9e9e9;font-size:2em"></div>\n  <img src="'+d.loaderImage+'" alt="loading more results" style="margin:10px auto" />\n</div>'},h=function(e){d.inited||(d.inited=s,e&&t.extend(d,e),n=d.container,o=t(n),d.pagination&&t(d.pagination).remove(),v())};t.fn.pageless=function(n){var o=t(this),r=t(n.loader,o);h(n),e=o,n.loader&&r.length?i=r:(i=t(p()),o.append(i),n.loaderHtml||t("#pageless-loader .msg").html(n.loaderMsg).css(n.msgStyles||{}))};var f=function(t){(a=t)?i&&i.fadeIn("normal"):i&&i.fadeOut("normal")},m=function(){return n===window?t(document).height()-o.scrollTop()-o.height():o[0].scrollHeight-o.scrollTop()-o.height()},g=function(){o.unbind(l)},v=function(){o.bind(c+" "+u,y).trigger(c)},y=function(){return d.totalPages<=d.currentPage?(g(),void(d.end&&d.end.call())):void(!a&&m()<d.distance&&(f(s),d.currentPage++,t.extend(d.params,{page:d.currentPage}),t.get(d.url,d.params,function(n){t.isFunction(d.scrape)?d.scrape(n):n,i?i.before(n):e.append(n),f(r),d.complete&&d.complete.call()},"html")))}}(jQuery);