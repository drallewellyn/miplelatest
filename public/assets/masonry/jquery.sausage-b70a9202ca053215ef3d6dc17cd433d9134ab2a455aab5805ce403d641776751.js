!function(t,e){t.widget("cc.sausage",{options:{page:".page",content:function(t,e){return'<span class="sausage-span">'+(t+1)+"</span>"}},_create:function(){var e=this,i=e.element;e.$outer=i,e.$inner=t.isWindow(e.element.get(0))?t("body"):i.children(":first-child"),e.$sausages=t('<div class="sausage-set"/>'),e.sausages=e.$sausages.get(0),e.offsets=[],e.$sausages.appendTo(e.$inner),e._trigger("create")},_init:function(){var t=this;return t.$outer.height()>=t.$inner.height()?void t.destroy():(t.draw(),t._update(),t._events(),t._delegates(),t.$sausages.addClass("sausage-set-init"),t.blocked=!1,void t._trigger("init"))},_events:function(){var t=this;t.hasScrolled=!1,t.$outer.bind("resize.sausage",function(){t.draw()}).bind("scroll.sausage",function(e){t.hasScrolled=!0}),setInterval(function(){t.hasScrolled&&(t.hasScrolled=!1,t._update())},250)},_getCurrent:function(){var t=this,e=t.$outer.scrollTop()+t._getHandleHeight(t.$outer,t.$inner)/4,i=(t.$outer.height(),t.$inner.height(),0);for(l=t.offsets.length;i<l;i++){if(!t.offsets[i+1])return i;if(e<=t.offsets[i])return i;if(e>t.offsets[i]&&e<=t.offsets[i+1])return i}return i},_delegates:function(){var e=this;e.$sausages.delegate(".sausage","hover",function(){e.blocked||t(this).toggleClass("sausage-hover")}).delegate(".sausage","click",function(i){if(i.preventDefault(),!e.blocked){var n=t(this),o=n.index(),r=e.$inner.find(e.options.page).eq(o).offset().top;e._scrollTo(r),e._trigger("onClick",i,{$sausage:n,i:o}),n.hasClass("current")||e._trigger("onUpdate",i,{$sausage:n,i:o})}})},_scrollTo:function(e){var i=this,n=i.$outer,o=2,r=i.offsets[i.current]-e,s=Math.abs(r/o);s=1e3>s?s:1e3,i.$outer.get(0)===window&&(n=t("body, html, document")),n.stop(!0).animate({scrollTop:e},s)},_handleClick:function(){},_update:function(){var t=this;i=t._getCurrent(),c="sausage-current",i===t.current||t.blocked||(t.current=i,t.$sausages.children().eq(i).addClass(c).siblings().removeClass(c),t._trigger("update"))},_getHandleHeight:function(t,e){var i=t.height(),n=e.height();return i/n*i},draw:function(){var t,e,i,n=this,o=n.$outer.height(),r=n.$inner.height(),s=n.$inner.find(n.options.page),a=[];n.offsets=[],n.count=s.length,n.$sausages.detach().empty();for(var l=0;l<n.count;l++)t=s.eq(l),e=t.offset(),i=e.top/r*o,a.push('<div class="sausage'+(l===n.current?" sausage-current":"")+'" style="height:'+t.outerHeight()/r*o+"px;top:"+i+'px;">'+n.options.content(l,t)+"</div>"),n.offsets.push(e.top);n.sausages.innerHTML=a.join(""),n.$sausages.appendTo(n.$inner)},block:function(){var t=this,e="sausage-set-blocked";t.blocked=!0,t.$sausages.addClass(e)},unblock:function(){var t=this,e="sausage-set-blocked";t.$sausages.removeClass(e),t.blocked=!1},destroy:function(){var t=this;t.$outer.unbind(".sausage"),t.$sausages.remove()}})}(jQuery);