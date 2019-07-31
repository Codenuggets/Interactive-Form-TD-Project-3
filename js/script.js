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
$('input[name="js-frameworks"]').change(function() {
  if(this.checked) {
    $('input[name="express"]').prop("disabled", "disabled");
    $('#express-label').css("color", "grey");
  } else {
    $('input[name="express"]').prop("disabled", "");
    $('#express-label').css("color", "#000");
  }
});
$('input[name="express"]').change(function() {
  if(this.checked) {
    $('input[name="js-frameworks"]').prop("disabled", "disabled");
    $('#frameworks-label').css("color", "grey");
  } else {
    $('input[name="js-frameworks"]').prop("disabled", "");
    $('#frameworks-label').css("color", "#000");
  }
});
$('input[name="js-libs"]').change(function() {
  if(this.checked) {
    $('input[name="node"]').prop("disabled", "disabled");
    $('#node-label').css("color", "grey");
  } else {
    $('input[name="node"]').prop("disabled", "");
    $('#node-label').css("color", "#000");
  }
});
$('input[name="node"]').change(function() {
  if(this.checked) {
    $('input[name="js-libs"]').prop("disabled", "disabled");
    $('#libraries-label').css("color", "grey");
  } else {
    $('input[name="js-libs"]').prop("disabled", "");
    $('#libraries-label').css("color", "#000");
  }
});

$(".activities").append('<div id="running-total"></div>');


$('.activities input[type=checkbox]').change(function(){
  let runningTotal = 0;
  $('input:checked').each(function(){
    let price = this.parentNode.innerText.match(/\$\d+/g);
    price = price.join();
    price = price.replace(/\$/, '');
    console.log(this.parentNode.innerText);
    console.log(price);
    runningTotal += parseInt(price);
    document.getElementById("running-total").innerHTML = `<p>Total: $${runningTotal}</p>`;
  });
  // Resets runningTotal to 0 if all boxes are unchecked
  if(!$('input:checked').length){
    runningTotal = 0;
    document.getElementById("running-total").innerHTML = `<p>Total: $${runningTotal}</p>`;
  }

});

// Payment Info
$("#payment option:contains('Credit Card')").prop('selected', true);
$('#paypalJS').hide();
$('#bitcoinJS').hide();
