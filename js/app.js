(function(){
  'use strict';
  $(document).ready(onPageLoad);
  function onPageLoad(){
    $(window).resize(onWindowResize);
    function onWindowResize(){
      var height = $(window).height();
      $('.jumbotron').css("height", height+"px");
    }
    onWindowResize();
  }
})()