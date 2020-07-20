let value = "initialValue";
// initial rendering
detectChange();

function renderHTML() {
  document.getElementById("dataDiv").innerText = value;
}

function detectChange() {
  const currentValue = document.getElementById("dataDiv").innerText;
  if (currentValue !== value) {
    renderHTML();
  }
}

// Example 1: update data inside button click event handler
document.getElementById("btn").addEventListener("click", () => {
  // update value
  value = "You are the best!";
  // call detectChange manually
  detectChange();
});
