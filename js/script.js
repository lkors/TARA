$('#accordion div').click(function(){
    $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up')
});

$('#accordion').click(function(e) {
  $('.collapse').collapse('hide');
});
