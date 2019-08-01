# Interactive Form TD Project 3
 JavaScript project that makes a website form more user friendly by adding customized, conditional behavior, validating user input and providing helpful error message

 Since there are no dedicated functions, instead this readme will be broken down by section of the form and listing the variables used

## Global variables
* `emailRegex` - Used to store the email checking Regex to be used for real time form Validation
* `noError` - Boolean value to help check for potential errors later in the submission process

## Basic Info
In this section, the name is focused automatically when the user loads the page.

Then some divs for the Name and Email field are created to display any error messages if they occur. For the name field, there is an error if the user leaves it empty after interacting with it. For the email, there is a error if it is left blank or is an invalid email address.

The other job role text input field is originally hidden with JavaScript but reappears if the other option is selected from Job Role. This text input disappears again if another option is selected.

## T-Shirt Info
In this section, the color options are originally hidden and displays a message to choose a theme, once a theme is chosen, the colors options appear, with corresponding choices to the design chosen, and the previous message is erased. If no design is chosen, the colors options disappear once more and the original message is displayed.

## Register for Activities
In this section, options are filtered and disabled if conflicting events were chosen. A running total is also displayed at the bottom. An error message is displayed if no events are chosen.

## Payment Info
In this section, the bitcoin and paypal messages are hidden with the credit card option being the initial choice presented to the user. Errors are show if the fields are empty or are of insufficient length. These values are also checked to ensure no non digits were entered.

## Form Validation
One final check is done once the submit button is clicked. This first checks for the `noError` value and highlights any text fields left empty. After that, all other fields are checked and approriate error messages are displayed in the button and in it's corresponding field.
