function checker() {
  var fname = String(document.getElementById("fname").value);
  var email = String(document.getElementById("email").value);
  var address = String(document.getElementById("address").value);

  if (fname === "" || email === "" || address === "") {
    alert("Mohon semua form diisi");
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
  }
}
