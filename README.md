# ALX_Simple_Quiz
## Build a Calcultor usinf JS

### Identify the Correct Answer:

Inside the checkAnswer function, declare a variable named correctAnswer and assign it the string value "4". This represents the correct answer to your quiz question.
Retrieve the User’s Answer:

### Use document.querySelector to select the checked radio button by its name attribute name="quiz". Since radio inputs are used for the answers, this will effectively capture the user’s selection.
Access the value property of the selected radio button to get the user’s answer. Store this value in a variable named userAnswer.
Compare the User’s Answer with the Correct Answer:

### Implement an if statement to compare userAnswer with correctAnswer.
If the values match, indicating the user’s answer is correct, change the textContent of the element with the ID feedback to "Correct! Well done.".
If the values do not match, indicating the user’s answer is incorrect, update the textContent of the feedback element to "That's incorrect. Try again!".
Add an Event Listener to the Submit Button:

### Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
Add a click event listener to this button, passing in the checkAnswer function as the callback to be executed when the button is clicked. Ensure you are not calling the checkAnswer function directly in the event listener (i.e., do not add () after the function name in the addEventListener call).