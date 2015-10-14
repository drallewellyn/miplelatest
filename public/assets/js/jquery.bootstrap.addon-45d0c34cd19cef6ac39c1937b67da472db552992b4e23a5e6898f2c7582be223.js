/*!
 * Small bootstrap plugin that switches bootstrap tabs component to collapse component for small screens.
 * The MIT License (MIT) // Copyright (c) 2014 flatlogic.com // https://github.com/flatlogic/bootstrap-tabcollapse
 */
!function(t){var e=function(e,n){this.options=n,this.$tabs=t(e),this._accordionVisible=!1,this._initAccordion(),this._checkStateOnResize(),this.checkState()};e.DEFAULTS={accordionClass:"visible-xs",tabsClass:"hidden-xs",accordionTemplate:function(t,e,n,i){return'<div class="panel panel-default">   <div class="panel-heading">      <h4 class="panel-title">        <a class="'+(i?"":"collapsed")+'" data-toggle="collapse" data-parent="#'+n+'" href="#'+e+'">           '+t+'        </a>      </h4>   </div>   <div id="'+e+'" class="panel-collapse collapse '+(i?"in":"")+'">       <div class="panel-body">       </div>   </div></div>'}},e.prototype.checkState=function(){this.$tabs.is(":visible")&&this._accordionVisible?(this.showTabs(),this._accordionVisible=!1):this.$accordion.is(":visible")&&!this._accordionVisible&&(this.showAccordion(),this._accordionVisible=!0)},e.prototype.showTabs=function(){this.$tabs.trigger(t.Event("show-tabs.bs.tabcollapse"));var e=this.$accordion.find(".panel-body");e.each(function(){var e=t(this),n=e.data("bs.tabcollapse.tabpane");n.append(e.children("*").detach())}),this.$accordion.html(""),this.$tabs.trigger(t.Event("shown-tabs.bs.tabcollapse"))},e.prototype.showAccordion=function(){this.$tabs.trigger(t.Event("show-accordion.bs.tabcollapse"));var e=this.$tabs.find('li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'),n=this;e.each(function(){var e=t(this);n.$accordion.append(n._createAccordionGroup(n.$accordion.attr("id"),e))}),this.$tabs.trigger(t.Event("shown-accordion.bs.tabcollapse"))},e.prototype._checkStateOnResize=function(){var e=this;t(window).resize(function(){clearTimeout(e._resizeTimeout),e._resizeTimeout=setTimeout(function(){e.checkState()},100)})},e.prototype._initAccordion=function(){this.$accordion=t('<div class="panel-group '+this.options.accordionClass+'" id="'+this.$tabs.attr("id")+'-accordion"></div>'),this.$tabs.after(this.$accordion),this.$tabs.addClass(this.options.tabsClass),this.$tabs.siblings(".tab-content").addClass(this.options.tabsClass)},e.prototype._createAccordionGroup=function(e,n){var i=n.attr("data-target"),o=n.parent().is(".active");i||(i=n.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,""));var r=t(i),s=r.attr("id")+"-collapse",a=t(this.options.accordionTemplate(n.html(),s,e,o));return a.find(".panel-body").append(r.children("*").detach()).data("bs.tabcollapse.tabpane",r),a},t.fn.tabCollapse=function(n){return this.each(function(){var i=t(this),o=i.data("bs.tabcollapse"),r=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);o||i.data("bs.tabcollapse",new e(this,r))})},t.fn.tabCollapse.Constructor=e}(window.jQuery),$(function(){var t=$(window),e=$(document.body);e.scrollspy({target:".spying-sidebar",offset:160}),t.on("load",function(){e.scrollspy("refresh")}),$(".affix-page-container .spying-sidebar [href=#]").click(function(t){t.preventDefault()}),$(".nav-tabs a").click(function(t){t.preventDefault(),$(this).tab("show")}),$(".sidebar-tabs").tabCollapse({tabsClass:"sidebar-tabcollapse-visible-xl",accordionClass:"sidebar-tabcollapse-hidden-xl"}),$(".narrow-tabs").tabCollapse({tabsClass:"narrow-tabcollapse-visible-xl",accordionClass:"narrow-tabcollapse-hidden-xl"}),$(".content-tabs").tabCollapse({tabsClass:"content-tabcollapse-visible-xl",accordionClass:"content-tabcollapse-hidden-xl"}),$("html").hasClass("no-touch")&&($('[data-hover="tooltip"]').tooltip({trigger:"hover",container:"body"}),$('[data-hover="popover"]').popover({trigger:"hover"})),$('[data-toggle="tooltip"]').tooltip({trigger:"click",container:"body"}),$('[data-toggle="popover"]').popover({trigger:"click"}),$(".new-pagination-toggle").click(function(t){$(this).next(".new-pagination").slideToggle(),$(this).toggleClass("active"),t.preventDefault()}),$(".theme-carousel").carousel({}).on("slide.bs.carousel",function(t){var e=$(t.relatedTarget).height();$(this).find("div.active").parent().animate({height:e},500)}),$(".carousel-inner").swipe({swipeLeft:function(t,e,n,i,o){$(this).parent().carousel("prev")},swipeRight:function(){$(this).parent().carousel("next")},threshold:50}),$(".carousel-inner").on({mousedown:function(t){return $(this).addClass("mouseDown"),!1},mouseup:function(){$(this).removeClass("mouseDown")}})}),$("body").on("mouseup",function(t){$('[data-toggle="tooltip"]').each(function(){$(this).is(t.target)||0!==$(this).has(t.target).length||0!==$(".tooltip").has(t.target).length||$(this).tooltip("hide")})}),$("body").on("mouseup",function(t){$('[data-toggle="popover"]').each(function(){$(this).is(t.target)||0!==$(this).has(t.target).length||0!==$(".popover").has(t.target).length||$(this).popover("hide")})});