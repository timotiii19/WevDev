// Laboratory 7 - Task 1..4
// Name: Timothy Talagtag
// Description: Implements tasks for Lab 7 (alerts, console, DOM, events, calculator)

/* ---------- Task 1: Display & Variables ---------- */
alert("Welcome to JavaScript Lab 7!"); // pop-up alert
console.log("Lab 7 script loaded. Welcome message shown."); // console message

(function showStudentInfo() {
  const studentName = "Timothy Talagtag";
  const section = "BSIT - 3A";
  const today = new Date();
  const info = `
    <strong>Student:</strong> ${studentName} <br>
    <strong>Section:</strong> ${section} <br>
    <strong>Date:</strong> ${today.toDateString()}
  `;
  const pageInfo = document.getElementById('pageInfo');
  if (pageInfo) pageInfo.innerHTML = info;
})();

/* ---------- Task 2: Simple Calculator ---------- */
function getNums() {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  return { n1, n2 };
}

function showResult(value) {
  const resultEl = document.getElementById('result');
  if (resultEl) resultEl.innerText = "Result: " + value;
}

function add() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 + n2);
}

function subtract() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 - n2);
}

function multiply() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  showResult(n1 * n2);
}

function divide() {
  const { n1, n2 } = getNums();
  if (isNaN(n1) || isNaN(n2)) { alert("Please enter both numbers."); return; }
  if (n2 === 0) { alert("Division by zero is not allowed!"); return; }
  showResult(n1 / n2);
}

/* ---------- Task 3: Change Background Color (light colors, actual page background) ---------- */
function randomLightColor() {
  const r = Math.floor(Math.random() * 76) + 180;
  const g = Math.floor(Math.random() * 76) + 180;
  const b = Math.floor(Math.random() * 76) + 180;
  return `rgb(${r}, ${g}, ${b})`;
}

(function initBackgroundButton() {
  const colorBtn = document.getElementById('colorBtn');
  const colorHexEl = document.getElementById('colorHex');
  if (!colorBtn) return;

  colorBtn.addEventListener('click', function() {
    const color = randomLightColor();
    // Set the actual page background (overrides CSS background-color)
    document.body.style.background = color;
    // Show the RGB value to the user
    if (colorHexEl) colorHexEl.innerText = "Background: " + color;

  });
})();

/* ---------- Task 4: Event Handling (Form) ---------- */
(function initForm() {
  const form = document.getElementById('sampleForm');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = (document.getElementById('name') || {}).value;
    const messageEl = document.getElementById('message');
    if (!name || !name.trim()) {
      if (messageEl) {
        messageEl.innerText = "Please enter your name.";
        messageEl.style.color = "#d9534f";
      } else {
        alert("Please enter your name.");
      }
      return;
    }

    const cleanName = name.trim();
    if (messageEl) {
      messageEl.innerText = `Thank you, ${cleanName}! Your form has been submitted successfully.`;
      messageEl.style.color = "#1e7e34";
    } else {
      alert(`Thank you, ${cleanName}!`);
    }

    console.log(`Form submitted for ${cleanName} at ${new Date().toLocaleString()}`);
    form.reset();
  });
})();
