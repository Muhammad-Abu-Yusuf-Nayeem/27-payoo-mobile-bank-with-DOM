//add money to account
// add event handler
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after submit the form
    event.preventDefault;
    // console.log("add money inside the form");

    //get money to be added to the account balance
    const addMoney = document.getElementById("input-add-money").value;

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;
    // console.log(addMoney, pinNumberInput);

    // verify the pin number. wrong way to validate pin number
    if (pinNumberInput === "1234") {
      //   console.log("adding money to account");
      // get the current balance
      const balance = document.getElementById("account-Balance").innerText;
      //   console.log(balance);

      //  add moneyInput with balance
      const prevBalance = parseFloat(balance);
      const addMoneyNumber = parseFloat(addMoney);
      const newBalance = prevBalance + addMoneyNumber;

      // update the balance in the UI/DOM
      document.getElementById("account-Balance").innerText = newBalance;
    } else {
      alert("Failed to add money! please try again");
    }
  });
