document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault;

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("cash-out-pin").value;

    //wrong way to verify pin number
    if (pinNumber === "1234") {
      console.log("money is reducing....");
      const balance = document.getElementById("account-Balance").innerText;
      const prevBalance = parseFloat(balance);
      const cashOutBalance = parseFloat(cashOut);
      const newBalance = prevBalance - cashOutBalance;
      document.getElementById("account-Balance").innerText = newBalance;
    } else {
      alert("Failed to cash out. please try again later");
    }
  });
