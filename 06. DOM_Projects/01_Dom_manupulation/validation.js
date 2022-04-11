function myValidation() {
  let myValue = document.querySelector("#myForm").value;

  if (isNaN(myValue) || myValue < 1 || myValue > 30) {
    document.querySelector("#someId").textContent = "Not a valid input";
  } else {
    document.querySelector("#someId").textContent = "Valid input";
  }
}

//Advance form validation
document.querySelector(".form_1").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.realname.value);
  event.target.username.value = "";
  event.target.realname.value = "";
});
