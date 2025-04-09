// Get DOM elements once
const balanceElement = document.getElementById("account-Balance");
const addMoneyForm = document.getElementById("add-money-form");
const cashOutForm = document.getElementById("cash-out-form");

// PIN validation constant
const CORRECT_PIN = "1234";

// Reusable: update balance
function updateBalance(amount) {
  const prev = parseFloat(balanceElement.innerText);
  const newBalance = prev + amount;
  balanceElement.innerText = newBalance.toFixed(2);
}

// Reusable: show form and hide the other
function toggleForms(showAddMoney) {
  addMoneyForm.classList.toggle("hidden", !showAddMoney);
  cashOutForm.classList.toggle("hidden", showAddMoney);
}

// Reusable: clear inputs inside a form
function clearInputs(...inputIds) {
  inputIds.forEach((id) => (document.getElementById(id).value = ""));
}

// Add Money Handler
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("input-add-money").value);
    const pin = document.getElementById("input-pin-number").value;

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (pin !== CORRECT_PIN) {
      alert("Incorrect PIN. Please try again.");
      return;
    }

    updateBalance(amount);
    alert("Money added successfully!");
    clearInputs("input-add-money", "input-pin-number");
  });

// Cash Out Handler
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById("input-cash-out").value);
    const pin = document.getElementById("cash-out-pin").value;
    const currentBalance = parseFloat(balanceElement.innerText);

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (amount > currentBalance) {
      alert("Insufficient balance!");
      return;
    }

    if (pin !== CORRECT_PIN) {
      alert("Incorrect PIN. Please try again.");
      return;
    }

    updateBalance(-amount);
    alert("Cash out successful!");
    clearInputs("input-cash-out", "cash-out-pin");
  });

// Toggle to Add Money Form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    toggleForms(true);
  });

// Toggle to Cash Out Form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    toggleForms(false);
  });
