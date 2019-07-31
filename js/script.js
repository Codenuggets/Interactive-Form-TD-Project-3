//Basic Info
$('#name').focus();
$('#other-title').hide();

// T-Shirt Info
$('#colors-js-puns').hide();
$('#design').change(function(){
  if(this.value === 'js puns') {
    $('#colors-js-puns').show();
    $('#color option[value="cornflowerblue"]').show().prop("selected", true);
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if(this.value === 'heart js') {
    $('#colors-js-puns').show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="tomato"]').show().prop("selected", true);
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  } else {
    $('#colors-js-puns').hide();
  }
});

// Register for activities Info


// Payment Info
$("#payment option:contains('Credit Card')").prop('selected', true);
$('#paypalJS').hide();
$('#bitcoinJS').hide();
