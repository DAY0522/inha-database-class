var num = document.getElementById("num");
var max = document.getElementById("js-range");
var resultSpan = document.querySelector("#js-result span");
var printForm = document.getElementById("js-guess");

var handlePrint = (e) => {
  e.preventDefault(); // Prevents the window from moving

  var numValue = parseInt(num.value);
  var maxValue = parseInt(max.value);
  var ranValue = Math.floor(Math.random() * max.value + 1);

  if (numValue == ranValue) {
    resultSpan.innerHTML = ` You choose: ${numValue} , the machine choose: ${ranValue}. <br> You win!`;
  } else if (numValue > maxValue) {
    resultSpan.innerHTML = ` ${maxValue}보다 작은 수를 입력해주세요`;
  } else {
    resultSpan.innerHTML = ` You choose: ${numValue} , the machine choose: ${ranValue}. <br> You lost! `;
  }
};

printForm.addEventListener("submit", handlePrint);
