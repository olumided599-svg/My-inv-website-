// Investment button click
document.addEventListener("DOMContentLoaded", function () {
  
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.addEventListener("click", function () {

      if (index === 0) {
        alert("Starter Plan selected. Backend will be connected later.");
      }

      if (index === 1) {
        alert("Premium Plan selected. Backend will be connected later.");
      }

      if (index === 2) {
        let referralCode = "INVEST" + Math.floor(Math.random() * 10000);
        alert("Your referral code: " + referralCode);
      }

    });
  });

});
