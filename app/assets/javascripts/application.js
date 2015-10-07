// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require twitter/bootstrap
//= require jquery-ui


//= require js/bootstrap.min


//= require js/unpacked/bootstrap
//= require js/unpacked/jquery-1.11.1
//= require js/unpacked/jquery.cookie
//= require js/unpacked/jquery.form
//= require js/unpacked/jquery.isotope.masonry
//= require js/unpacked/jquery.magnific-popup
//= require js/unpacked/jquery.main
//= require js/unpacked/jquery.slick-slider
//= require js/unpacked/jquery.touch-swipe
//= require js/unpacked/jquery.validate
//= require js/unpacked/modernizr.2.8.3-un-packed

//= require bootstrap
//= require jquery.bootstrap.addon
//this needs to go at end
//= require turbolinks 
//= require_tree .



$(document).ready(function() {
  $('.has-tooltip').tooltip();
});
