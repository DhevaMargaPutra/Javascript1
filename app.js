var num1 = 0;
var num2 = 0;
var opId = 0;

var num1txt = document.getElementById("num1");
var num2txt = document.getElementById("num2");
var opTxt = document.getElementById("op");
var resText = document.getElementById("rslt");

var numLeftBtn = document.getElementById("num1-left");
numLeftBtn.addEventListener("click", function() {
  num1--;
  num1txt.innerHTML = num1;
});

var numRightBtn = document.getElementById("num1-right");
numRightBtn.addEventListener("click", function() {
  num1++;
  num1txt.innerHTML = num1;
});

var numLeftBtn = document.getElementById("num2-left");
numLeftBtn.addEventListener("click", function() {
  num2--;
  num2txt.innerHTML = num2;
});

var numRightBtn = document.getElementById("num2-right");
numRightBtn.addEventListener("click", function() {
  num2++;
  num2txt.innerHTML = num2;
});

function updateOperator(id) {
  switch(id) {
    case 0:
      opTxt.innerHTML = "X";
      break;
    case 1:
      opTxt.innerHTML = "/";
      break;
    case 2:
      opTxt.innerHTML = "+";
      break;
    case 3:
      opTxt.innerHTML = "-";
      break;
  }
}

updateOperator(opId);

var opRightBtn = document.getElementById("op-right");
opRightBtn.addEventListener("click", function() {
  if (opId < 3) {
    opId++;
  } else {
    opId = 0;
  }
  updateOperator(opId);
  console.log(opId);
})

var opLeftBtn = document.getElementById("op-left");
opLeftBtn.addEventListener("click", function() {
  if (opId > 0) {
    opId--;
  } else {
    opId = 3;
  }
  updateOperator(opId);
  console.log(opId);
})

var subBtn = document.getElementById("sub");
subBtn.addEventListener("click", function() {
  var result = 0;
  switch(opId) {
    case 0:
      result = num1 * num2;
      break;
    case 1:
      result = num1 / num2;
      break;
    case 2:
      result = num1 + num2;
      break;
    case 3:
      result = num1 - num2;
      break;
  }
  resText.innerHTML = result;
})