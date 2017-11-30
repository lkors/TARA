$('#accordion div').click(function(){
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up')
});

function setFooterStyle() {
  var docHeight = $(window).height();
  var footerHeight = $('#footer').outerHeight();
  var footerTop = $('#footer').position().top + footerHeight;
  if (footerTop < docHeight) {
    $('#footer').css('margin-top', (docHeight - footerTop) + 'px');
  } else {
    $('#footer').css('margin-top', '');
  }
  $('#footer').removeClass('invisible');
}
$(document).ready(function() {
  setFooterStyle();
  window.onresize = setFooterStyle;
});

$('#accordion').click(function(e) {
  $('.collapse').collapse('hide');
});
