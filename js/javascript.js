$('button').click(function() {
  $('.j-alert').show();
  
  setTimeout(() => {
    $('.j-alert').hide();
  }, 1000);
});
