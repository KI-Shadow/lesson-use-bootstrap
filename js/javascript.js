$('.j-button-1').click(function() {
  $('.j-alert').show();
  
  setTimeout(() => {
    $('.j-alert').hide();
  }, 2000);
});

let newprogress = 75;

$('.j-button-2').click(function() {
	newprogress = $('#exampleInputEmail1').val();
	if (newprogress >=0 && newprogress <= 100) {
		$('.j-progress-bar').attr('aria-valuenow', newprogress).css('width', newprogress+'%');
	} else {
		alert("Вы ввели некорректное число, задайте число в диапазоне от 0-100.");
	}
});
