
let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin() {
  let mobile = document.getElementById("mobile").value.trim();
  let password = document.getElementById("pass").value.trim();
  let count = 0;

  if (mobile.length !== 10) {
    alert("Mobile number should be 10 digits");
    return;
  }

  if (mobile === "") {
    alert("Enter Mobile Number");
    return;
  }

  for (let i = 0; i < getUsersdata.length; i++) {
    if (mobile === getUsersdata[i].mobile) {
      if (password === getUsersdata[i].password) {
        alert("Sign in Successful");

        // ✅ Store active user in localStorage
        localStorage.setItem("activeUser", JSON.stringify(getUsersdata[i]));

        // ✅ If needed, you can also create an empty cart for them if not already present
        let fullCart = JSON.parse(localStorage.getItem("cart")) || {};
        if (!fullCart[mobile]) {
          fullCart[mobile] = [];
          localStorage.setItem("cart", JSON.stringify(fullCart));
        }

        window.location.href = "index.html";
        return;
      } else {
        alert("Invalid Password");
        return;
      }
    } else {
      count++;
    }
  }

  if (count === getUsersdata.length) {
    alert("User is not registered, please sign up to continue.");
    window.location.href = "signup.html";
  }
}
