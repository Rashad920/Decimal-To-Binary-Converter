const result = document.querySelector("#result");
const submit = document.querySelector("#submit");
submit.addEventListener("click", function (PreloadOff) {
  PreloadOff.preventDefault();
  const num = document.querySelector("#number").value;
  if (num === "") {
    alert("Please Enter a number");
  } else if (num < 0) {
    alert("Please Enter a Positive number");
  } else {
    result.style.visibility = "visible";
  }
  // Converting Binary Number
  const binaryNumber = Number(num).toString(2);
  result.innerText = binaryNumber;
});