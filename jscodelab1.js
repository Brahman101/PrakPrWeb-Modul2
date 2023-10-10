function calculateSum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var sum = num1 + num2;
  alert("Penjumlahan dari " + num1 + "+" + num2 + " = " + sum);
}

function repeater() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("sum").value = "";
}
