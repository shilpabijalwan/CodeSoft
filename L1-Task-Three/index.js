const result = document.getElementById("res");
console.log(result);
const allInput = document.querySelectorAll("input");
// console.log(allInput);
let cal = "";
function addNumb() {
  allInput.forEach((ele) => {
    console.log(ele.value);
    ele.addEventListener("click", (e) => {
      if (e.target.value == "=") {
        calculateResult();
      } else if (e.target.value == "C" || e.target.value == "CE") {
        clearRes();
      } else if (e.target.value == "del") {
        del();
      } else {
        cal += e.target.value;
        result.innerHTML = cal;
      }
    });
  });
}
addNumb();

function clearRes() {
  cal = "";
  result.innerHTML = 0;
}

function calculateResult() {
  cal = eval(cal);
  result.innerHTML = cal;
}

function del() {
  cal = cal.substring(0, cal.length - 1);
  console.log(cal);
  result.innerHTML = cal;
}
