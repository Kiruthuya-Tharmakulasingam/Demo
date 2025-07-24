function add() {
  let number_one = document.getElementById("num1").value;
  let number_two = document.getElementById("num2").value;
  let result1 = parseFloat(number_one) + parseFloat(number_two);
  document.getElementById("result").value = result1;
};

function sub() {
  let number_one = document.getElementById("num1").value;
  let number_two = document.getElementById("num2").value;
  let result2 = parseFloat(number_one) - parseFloat(number_two);
  document.getElementById("result").value = result2;
}

function mul() {
  let number_one = document.getElementById("num1").value;
  let number_two = document.getElementById("num2").value;
  let result3 = parseFloat(number_one) * parseFloat(number_two);
  document.getElementById("result").value = result3;
}

function div() {
  let number_one = document.getElementById("num1").value;
  let number_two = document.getElementById("num2").value;
  let result = parseFloat(number_one) / parseFloat(number_two);
  document.getElementById("result").value = result;
}

function cleary() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}
