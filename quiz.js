// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    // 
    const userAnswer = selectedAnswer.value;

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an answer is selected
    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
        return;
    }

    // Compare the user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
