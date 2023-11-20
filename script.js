const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearsInp = document.getElementById("year");
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const btn = document.getElementById("submit");
const submitBtn = document.querySelector(".submit-btn");

const dayOut = document.getElementById("dd");
const monthOut = document.getElementById("mm");
const yearOut = document.getElementById("yy");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

function validate() {
  const inputs = document.querySelectorAll("input");

  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.border = "1.5px solid red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (monthInp.value > 12) {
      monthInp.style.border = "1.5px solid red";
      monthInp.parentElement.querySelector("small").innerText =
        "must be valid month.";
      validator = false;
    } else if (dayInp.value > 31) {
      dayInp.style.border = "1.5px solid red";
      dayInp.parentElement.querySelector("small").innerText =
        "must be valid day.";
      validator = false;
    } else {
      i.style.border = "1.5px solid hsl(259, 100%, 65%)";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearsInp.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
}

btn.addEventListener("click", handleSubmit);
