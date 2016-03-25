(function(){
  'use strict';
  $(document).ready(onPageLoad);
  function onPageLoad(){
    $(window).resize(onWindowResize);
    function onWindowResize(){
      var height = $(window).height() - 50;
      $('.jumbotron').css("height", height+"px");
    }
    onWindowResize();
  }
})()