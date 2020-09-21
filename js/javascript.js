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


let time = 0;
let nIntervId = null;

function changeTime() {
  $('.j-time').text(time);
}

$('.j-start').click(function() {
  if (!nIntervId) {
    nIntervId = setInterval(() => {
      time = time + 1;
      changeTime();
    }, 1000); 
  }
});

$('.j-end').click(function() {
  if (nIntervId) {
    clearInterval(nIntervId);
    nIntervId = null;
    time = 0;
    changeTime();
  }
});

const maxAllowedChecks = 2; 

function trackChecks() {
  let checkCount = $("input[type=checkbox]:checked").length;
  if (checkCount >= maxAllowedChecks) { 
    $("input[type=checkbox]:not(:checked)").prop("disabled", true);
  } else {
    $("input[type=checkbox]:not(:checked)").prop("disabled", false);
  }
}

function init1() {

  $("input[type=checkbox]").change(trackChecks); 

  console.log("скрипт подгрузился");
}

$(document).ready(init1);


function trackRadios() {
  let checkCount = $("input[type=radio]:checked").length;
  $("input[type=radio]:not(:checked)").prop("disabled", checkCount >= 1);
}


function init() {
  $("input[type=radio]").change(trackRadios);

  trackRadios(); 
  console.log("скрипт подгрузился");
}

$(document).ready(init);

$("#my-carousel").carousel({
  interval: 625
})