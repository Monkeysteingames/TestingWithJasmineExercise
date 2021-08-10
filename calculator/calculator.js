window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmt = document.getElementById("loan-amount").value
  let loanDur = document.getElementById("loan-years").value
  let loanRate = document.getElementById("loan-rate").value
  calculateMonthlyPayment(loanAmt, loanDur, loanRate);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  vals = {
    loanAmt: document.getElementById("loan-amount").value,
    loanDur: document.getElementById("loan-years").value,
    loanRate: document.getElementById("loan-rate").value
  }
  calculateMonthlyPayment(vals);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
function calculateMonthlyPayment(vals) {
  let numPayments = vals.loanDur * 12;
  let intRate = (vals.loanRate / 100) / 12;
  monthlyRaw = (vals.loanAmt * intRate) / (1 - (1 + intRate) ** -numPayments);
  //show 2 decimal places always
  monthlyPayment = roundDecimals(monthlyRaw);
  updateMonthly(monthlyPayment);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  if (!(isNaN(monthly))) {
    document.getElementById('monthly-payment').innerText = `$${monthly}`;
  } else {
    document.getElementById('monthly-payment').innerText = '$0';
  }
}

function roundDecimals(monthly) {
  monthlyPayment = (Math.round(monthly * 100) / 100).toFixed(2);
  return monthlyPayment;
}

