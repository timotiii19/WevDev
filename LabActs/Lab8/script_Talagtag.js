/* <-- TALAGTAG, TIMOTHY A. -->
<!-- BSIT-3A. -->
<!-- Quick JavaScript Quiz --> */


function checkAnswer() {
  // Get the value typed by the user
  const userAnswer = document.getElementById("answer").value.trim();

  // The correct answer (string concatenation)
  const correctAnswer = "22";

  /* 
     Compare the user's input with the correct answer.
     === is used to check BOTH value and data type.
  */
  if (userAnswer === correctAnswer) {

    document.getElementById("feedback").innerHTML =
      "Correct! JavaScript treats 2 + '2' as string concatenation.";

  } else {

    document.getElementById("feedback").innerHTML =
      "Incorrect. Try again!";
  }
}
