$('.j-button-1').click(function() {
  $('.j-alert').show();
  
  setTimeout(() => {
    $('.j-alert').hide();
  }, 2000);
});

let newprogress = 75;

$('.j-button-2').click(function() {
	newprogress = $('#exampleInputEmail1').val();
	console.log(newprogress);
	$('.j-progress-bar').attr('aria-valuenow', newprogress).css('width', newprogress+'%');
});
