//***********Basic Info******************//

// Intializes basic info fieldset by focusing name field and hiding other job input
$('#name').focus();
$('#other-title').hide();

// global varbiable to keep track of form errors for final form submission check
let noError = true;

// Initializes name validator error message div
$("label[for='name']").append('<div id="name-validator" style="color: red"></div>');

// Checks to make sure user doesn't leave field empty
$('#name').keyup(function() {
  if($(this).val().trim() === '') {
      document.querySelector('#name-validator').innerHTML = '<p>Please Enter Your Name</p>';
      $(this).css('border-color', 'red');
      noError = false;
  } else {
    document.querySelector('#name-validator').innerHTML = '';
    $(this).css('border-color', '#b0d3e2');
    noError = true;
  }
});

// Sets email regex to variable to be used for real time validation and preventing form submission
const emailRegex = /\w+@\w+\.(com|net)/;

// Initializes div for error message that is updated in real time
$("label[for='mail']").append('<div id="email-validator" style="color: red"></div>');

// keyup called on email input for real time validation
$('#mail').keyup(function(){
  //Checks for valid email using emailRegex
  if(!emailRegex.test($(this).val())){
    // If a valid email hasn't been inputted, an error message is displayed
    document.querySelector('#email-validator').innerHTML = '<p>Must be valid email address</p>';
    //$('#email-validator').css('color', 'red');
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
    // If the user switches to something other than other, the job role input field is hidden and reset
    $('#other-title').hide();
    $('#other-title').css('border-color', '#b0d3e2');
    noError = true;
  }
});


$('#other-title').change(function(){
  if(this.value.length === 0) {
    $(this).css('border-color', 'red');
  } else {
    $(this).css('border-color', '#b0d3e2');
    noError = true;
  }
});

//*********************T-Shirt Info*******************//

// Initializes T-shirt info by hiding color option before a design is chosen
$('#colors-js-puns select').hide();
// While no design is chosen, a message displays, instructing user to select design first
$("#colors-js-puns").append('<div id="select-design"><p>Please select a T-shirt theme</p></div>');


// Shows and hides the color select and filters which options are available based on chosen design
$('#design').change(function(){
  if(this.value === 'js puns') {
    // Erases message about selecting design and displays color options specific to design choice
    document.getElementById('select-design').innerHTML = '';
    $('#colors-js-puns select').show();
    $('#color option[value="cornflowerblue"]').show().prop("selected", true);
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
  } else if(this.value === 'heart js') {
    // Erases message about selecting design and displays color options specific to design choice
    document.getElementById('select-design').innerHTML = '';
    $('#colors-js-puns select').show();
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    $('#color option[value="tomato"]').show().prop("selected", true);
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  } else {
    // Redisplays select a design message and hides color options, if no design is chosen
    document.getElementById('select-design').innerHTML = 'Please select a T-shirt theme';
    $('#colors-js-puns select').hide();
  }
});

//***************Register for activities Info********************//

// Checks for conflicting schedules for js frameworks event
$('input[name="js-frameworks"]').change(function() {
  // Checks for conflicting events and disables them if checked
  if(this.checked) {
    $('input[name="express"]').prop("disabled", "disabled");
    // greys out for visual indication
    $('#express-label').css("color", "grey");
  } else {
    // Reenbles events if unchecked
    $('input[name="express"]').prop("disabled", "");
    // returns color to black if greyed out
    $('#express-label').css("color", "#000");
  }
});

// Checks for conflicting schedules for express event
$('input[name="express"]').change(function() {
  if(this.checked) {
    $('input[name="js-frameworks"]').prop("disabled", "disabled");
    $('#frameworks-label').css("color", "grey");
  } else {
    $('input[name="js-frameworks"]').prop("disabled", "");
    $('#frameworks-label').css("color", "#000");
  }
});

// Checks for conflicting schedules for js libraries event
$('input[name="js-libs"]').change(function() {
  if(this.checked) {
    $('input[name="node"]').prop("disabled", "disabled");
    $('#node-label').css("color", "grey");
  } else {
    $('input[name="node"]').prop("disabled", "");
    $('#node-label').css("color", "#000");
  }
});
// Checks for conflicting schedules for node event
$('input[name="node"]').change(function() {
  if(this.checked) {
    $('input[name="js-libs"]').prop("disabled", "disabled");
    $('#libraries-label').css("color", "grey");
  } else {
    $('input[name="js-libs"]').prop("disabled", "");
    $('#libraries-label').css("color", "#000");
  }
});

// Creates and attaches running total div
$(".activities").append('<div id="running-total"></div>');
document.getElementById("running-total").innerHTML = '<p>Total: $0</p>';

// Checks each time a box is unchecked/checked and updates runningTotal price
$('.activities input[type=checkbox]').change(function(){
  let runningTotal = 0;
  $('input:checked').each(function(){
    // grabs price from inner text of event description
    let price = this.parentNode.innerText.match(/\$\d+/g);

    // Cleans up price to just be an number
    price = price.join();
    price = price.replace(/\$/, '');

    // Converts price into int from string and adds to running total
    runningTotal += parseInt(price);

    //updates running total
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

//*************Payment Info******************//

// Starts with showing credit card as initial option
$("#payment option:contains('Credit Card')").prop('selected', true);

// Hides the paypal and bitcoin messages since credit card is selected
$('#paypalJS').hide();
$('#bitcoinJS').hide();
// hides select method option since payment is required
$('#payment option[value="select_method"]').hide();

// Checks for which payment option is selects and shows the message/ form inputs that coorelate with the selected option
$('#payment').change(function(){
  if(this.value === 'credit card') {
    $('#credit-card').show();
    $('#paypalJS').hide();
    $('#bitcoinJS').hide();
  } else if(this.value === 'paypal'){
    $('#paypalJS').show();
    $('#credit-card').hide();
    $('#bitcoinJS').hide();
    noError = true;
  } else if(this.value === 'bitcoin'){
    $('#bitcoinJS').show();
    $('#paypalJS').hide();
    $('#credit-card').hide();
    noError = true;
  }
});

// Gets div ready for cc number validator message
$('label[for="cc-num"]').append('<div id="cc-num-validator" style="color: red"></div>');
// Credit Card validator
$('#cc-num').keyup(function(){
  // Prechecks that the payment method selected is the credit card
  if($('#payment').val() === 'credit card'){
    // Checks to make sure a number has been inputted before checking other issues
    if($(this).val().length === 0) {
      $(this).css('border-color', 'red');
      document.getElementById('cc-num-validator').innerHTML = '<p>Please Enter your Credit Card Number</p>';
      noError = false;
    } else {
      // Checks to see that the length is correct and that all that inputs are numbers
      if($(this).val().length < 13 ||
         $(this).val().length > 16 ||
         /^\d+$/.test($(this).val()) === false) {
           $(this).css('border-color', 'red');
           document.getElementById('cc-num-validator').innerHTML = '<p>Must be a Number between 13 and 16 digits long</p>';
           noError = false;
         } else {
           $(this).css('border-color', '#b0d3e2');
           document.getElementById('cc-num-validator').innerHTML = '';
           noError = true;
         }
    }
  }
});

// Sets up validator message div for zip code
$('label[for="zip"]').append('<div id="zip-validator" style="color: red"></div>');

// Zip Code Validator
$('#zip').keyup(function(){
  if($('#payment').val() === 'credit card') {
    if($(this).val().length === 0) {
      $(this).css('border-color', 'red');
      document.getElementById('zip-validator').innerHTML = '<p>Please Enter your Billing Zip Code</p>';
      noError = false;
    }
    // Checks to make sure length is 5 and a number
    else {
      if ($(this).val().length != 5 || /^\d+$/.test($(this).val()) === false) {
      $(this).css('border-color', 'red');
      document.getElementById('zip-validator').innerHTML = '<p>Must be a Number that is 5 digits long</p>';
      noError = false;
    } else {
      $(this).css('border-color', '#b0d3e2');
      document.getElementById('zip-validator').innerHTML = '';
      noError = true;
    }
  }
}
});

// Prepares CVV error validator div
$('label[for="cvv"]').append('<div id="cvv-validator" style="color: red"></div>');
// CVV Validator
$('#cvv').keyup(function(){
  if($('#payment').val() === 'credit card') {
    if($(this).val().length === 0) {
      $(this).css('border-color', 'red');
      document.getElementById('cvv-validator').innerHTML = '<p>Please Enter your CVV Code</p>';
      noError = false;
    } else {
    // Checks to make sure cvv is 3 digits long
    if($(this).val().length != 3 || /^\d+$/.test($(this).val()) === false) {
      $(this).css('border-color', 'red');
      document.getElementById('cvv-validator').innerHTML = '<p>Must be a Number that is 3 digits long</p>';
      noError = false;
    } else {
      $(this).css('border-color', '#b0d3e2');
      document.getElementById('cvv-validator').innerHTML = '';
      noError = true;
    }
  }
}
});

//*****************Form Validation***********************//

$('form').submit(function() {
  // Prepares submission validation error message div
  $('button[type="submit"]').append('<div id="submit-validator" style="color: red"></div>');
  // First checks for noError value if something was already caught
  if(noError === false) {
    document.getElementById('submit-validator').innerHTML = '<p>Please Verify that all information to be submitted is filled out and correct</p>';
  }

  // Checks to make sure at least one activity is selected
  else if($('input:checked').length === 0) {
    document.getElementById('running-total').innerHTML = `<p>Total: $0</p></br><p style='color: red'>Please Select at Least One activity</p>`;
    document.getElementById('submit-validator').innerHTML = '<p>Please Verify that all information to be submitted is filled out and correct(Please Select at least one activity)</p>';
    noError = false;
  }
  // Before submission, all input fields are checked to see if empty
  $('input[type="text"]').each(function() {
    // If empty, they will be marked
    if($(this).val().trim() === '' && this.id != 'other-title') {
      if(this.id != 'name' && $('#payment').val() === 'credit card') {
        document.getElementById(`${this.id}-validator`).innerHTML = '<p>This field cannot be empty</p>';
        $(this).css('border-color', 'red');
        noError = false;
      } else if(this.id === 'name'){
        // Checks name field, if empty, it highlights and prevents form submission
        document.getElementById(`${this.id}-validator`).innerHTML = '<p>This field cannot be empty</p>';
        $(this).css('border-color', 'red');
        noError = false;
      }

    } else if($('#title').val() === 'other' && this.id === 'other-title' && $('#other-title').val() === '') {
      // If other job is selected but role isn't, it will be indicated that it has to be filled
      $(this).css('border-color', 'red');
      console.log($(this));
      noError = false;
    } else if($('#mail').val() === '') {
      // Email is checked, if empty it's flagged
      document.querySelector('#email-validator').innerHTML = '<p>Please enter your email address</p>';
      $('#mail').css('border-color', 'red');
      noError = false;
        }
  });
  // After all conditions are checked, noError is returned, if there is an error, false is returned with an error message
  return noError;
});
