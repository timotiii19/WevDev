// script.js
// Reconstructed using identifiers and method calls from your uploaded lab file.
// Uses: alert(...), console.log(...), document.getElementById('name').value, document.getElementById('message').innerHTML

// ---------- Task 1: Display & Variables ----------
alert("Welcome to JavaScript Lab 7!"); // present in sample snippets
console.log("Lab 7."); // matches console.log usage

// Use innerHTML to show student info (the PDF referenced document.write / DOM output)
(function showStudentInfo() {
  const studentName = "Timothy A. Talagtag"; // replace if needed
  const section = "BSIT - 3rd Year";         // replace if needed
  const today = new Date();
  const info = `
    <strong>Student:</strong> ${studentName} <br>
    <strong>Section:</strong> ${section} <br>
    <strong>Date:</strong> ${today.toDateString()}
  `;
  // snippet in file included document.getElementById('message') style calls,
  // we mirror that pattern for the page info element
  document.getElementById('pageInfo').innerHTML = info;

  // If the professor expects document.write specifically, it's here as a commented example:
  // document.write("Student: " + studentName + " Section: " + section);
})();


// ---------- Task 2: Simple Calculator (uses parseFloat as referenced in file) ----------
function getNums() {
  // The PDF had references to parseFloat and reading input values
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  return { n1, n2 };
}

function showResult(value) {
  // PDF showed use of document.getElementById(...).innerHTML / innerText to show results
  document.getElementById('result').innerText = "Result: " + value;
}

document.getElementById('addBtn').addEventListener('click', function() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 + n2);
});

document.getElementById('subBtn').addEventListener('click', function() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 - n2);
});

document.getElementById('mulBtn').addEventListener('click', function() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 * n2);
});

document.getElementById('divBtn').addEventListener('click', function() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  if (n2 === 0) { alert("Division by zero is not allowed!"); return; }
  showResult(n1 / n2);
});


// ---------- Task 3: Change Background Color (random hex - matches style of lab) ----------
function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

document.getElementById('colorBtn').addEventListener('click', function() {
  const color = randomHexColor();
  document.body.style.backgroundColor = color;
  // PDF snippet used document.getElementById('message').innerHTML patterns; we use colorHex element
  document.getElementById('colorHex').innerText = "Background: " + color;
  console.log("Background color changed to " + color); // matches console.log usage in file
});


// ---------- Task 4: Event Handling (Form) ----------
document.getElementById('sampleForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent refresh (common lab requirement)
  // The file included document.getElementById('name').value; so we use that exact call
  const nameValue = document.getElementById('name').value.trim();
  if (!nameValue) {
    // The file used document.getElementById('message').innerHTML in places; we mirror that
    document.getElementById('message').innerHTML = "Please enter your name.";
    return;
  }
  document.getElementById('message').innerHTML = `Thank you, ${nameValue}! Your form has been submitted successfully.`;
  console.log("Form submitted for " + nameValue + " at " + new Date().toLocaleString());
});
