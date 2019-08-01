//Basic Info

// Intializes basic info fieldset by focusing name field and hiding other job input
$('#name').focus();
$('#other-title').hide();

let noError = true;

$('#name').change(function() {
  if($(this).val().trim() === '') {
      $(this).css('border-color', 'red');
      noError = false;
  } else {
    $(this).css('border-color', '#b0d3e2');
    noError = true;
  }
});

// Sets email regex to variable to be used for real time validation and preventing form submission
const emailRegex = /\w+@\w+\.(com|net)/;

// Initializes div for error message that is updated in real time
$("label[for='mail']").append('<div id="email-validator"></div>');

// keyup called on email input for real time validation
$('#mail').keyup(function(){
  //Checks for valid email using emailRegex
  if(!emailRegex.test($(this).val())){
    // If a valid email hasn't been inputted, an error message is displayed
    document.querySelector('#email-validator').innerHTML = '<p>Must be valid email address</p>';
    $('#email-validator').css('color', 'red');
    $(this).css('border-color', 'red');
    noError = false;
  } else {
    // Once a valid email has been inputted, the message is erased
    document.querySelector('#email-validator').innerHTML = '';
    $(this).css('border-color', '#b0d3e2');
    noError = true;
  }
});

// Shows Other job text input, if other is selected
$('#title').change(function(){
  if(this.value === 'other') {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
})

// T-Shirt Info

// Initializes T-shirt info by hiding color option before a design is chosen
$('#colors-js-puns').hide();

// Shows and hides the color select and filters which options are available based on chosen design
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
document.getElementById("running-total").innerHTML = '<p>Total: $0</p>';

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
    noError = true;
  });
  // Resets runningTotal to 0 if all boxes are unchecked
  if(!$('input:checked').length){
    runningTotal = 0;
    document.getElementById("running-total").innerHTML = `<p>Total: $${runningTotal}</p></br><p style='color: red'>Please Select at Least One activity</p>`;
    noError = false;
  }

});

// Payment Info
$("#payment option:contains('Credit Card')").prop('selected', true);
$('#paypalJS').hide();
$('#bitcoinJS').hide();
$('#payment option[value="select_method"]').hide();

$('#payment').change(function(){
  if(this.value === 'credit card') {
    $('#credit-card').show();
    $('#paypalJS').hide();
    $('#bitcoinJS').hide();
  } else if(this.value === 'paypal'){
    $('#paypalJS').show();
    $('#credit-card').hide();
    $('#bitcoinJS').hide();
  } else if(this.value === 'bitcoin'){
    $('#bitcoinJS').show();
    $('#paypalJS').hide();
    $('#credit-card').hide();
  }
});

  $('label[for="cc-num"]').append('<div id="cc-num-validator" style="color: red"></div>');
// Credit Card validator
$('#cc-num').keyup(function(){
  if($('#payment').val() === 'credit card'){
    if($(this).val().length < 13 ||
       $(this).val().length > 16 ||
       /^\d+$/.test($(this).val()) === false) {
         $(this).css('border-color', 'red');
         document.getElementById('cc-num-validator').innerHTML = '<p>Must be a Number between 13 and 16 digits long</p>';

       } else {
         $(this).css('border-color', '#b0d3e2');
         document.getElementById('cc-num-validator').innerHTML = '';
       }
  }
});

$('label[for="zip"]').append('<div id="zip-validator" style="color: red"></div>');
// Zip Code Validator
$('#zip').keyup(function(){
  if($('#payment').val() === 'credit card') {
    if($(this).val().length != 5) {
      $(this).css('border-color', 'red');
      document.getElementById('zip-validator').innerHTML = '<p>Must be a Number that is 5 digits long</p>';
      noError = false;
    } else {
      $(this).css('border-color', '#b0d3e2');
      document.getElementById('zip-validator').innerHTML = '';
      noError = true;
    }
  }
});

// Prepares CVV error validator div
$('label[for="cvv"]').append('<div id="cvv-validator" style="color: red"></div>');
// CVV Validator
$('#cvv').keyup(function(){
  if($('#payment').val() === 'credit card') {
    if($(this).val().length != 3) {
      $(this).css('border-color', 'red');
      document.getElementById('cvv-validator').innerHTML = '<p>Must be a Number that is 3 digits long</p>';
      noError = false;
    } else {
      $(this).css('border-color', '#b0d3e2');
      document.getElementById('cvv-validator').innerHTML = '';
      noError = true;
    }
  }
});



// Form Validation
$('form').submit(function() {
  
});

// else if(!$('input:checked').length) {
//  document.getElementById('submit-validator').innerHTML = '<p>Please Verify that all information to be submitted is filled out and correct(Length)</p>';
//  noError = false;
// }
