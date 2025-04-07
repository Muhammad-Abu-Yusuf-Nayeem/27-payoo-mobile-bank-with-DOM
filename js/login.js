// set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // prevent default behavior(reloading browser)
    event.preventDefault();

    // get phone number and pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    // this is the temporary. you should not do like this.
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = "/home.html";
    } else {
      alert("wrong phone number or pin");
    }
    // console.log(phoneNumber,pinNumber);
  });
