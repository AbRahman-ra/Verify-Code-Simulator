// Create cells here for dynamic
const NUMOFCELLS = 6; // change when necessary ONLY
let verificationForm = document.getElementById("verificationForm");

// User Message SetUp
const h1 = document.querySelector("h1");
let pUnderH1 = document.createElement("p");
pUnderH1.innerHTML =
  TEXTABOVECELLS = `We've sent a ${NUMOFCELLS}-digit code to your phone number...`;
h1.after(pUnderH1);

//Creating cells
let digitsDiv = document.querySelector(".digitsDiv");
for (let j = 0; j < NUMOFCELLS; j++) {
  let cell = document.createElement("input");
  cell.setAttribute("type", "text");
  cell.setAttribute("class", "digits");
  cell.setAttribute("id", `digit${j + 1}`);
  cell.setAttribute("placeholder", "*");
  cell.setAttribute("required", "required");
  if (j === NUMOFCELLS - 1) {
    cell.setAttribute("maxlength", 1);
  }
  digitsDiv.append(cell);
}

const DIGITS = document.getElementsByClassName("digits");
let secLeft = 10;
let timerOnScr = document.createElement("span");
let resendBtn = document.getElementsByClassName("button")[0];
let verificationDiv = document.getElementById("verificationDiv");

// Event 1: Window initialization
window.addEventListener("DOMContentLoaded", function () {
  DIGITS[0].focus();
});

// Event 2: Accept Numeric Values only
for (let i = 0; i < DIGITS.length; i++) {
  DIGITS[i].addEventListener("input", function () {
    this.value = this.value.replaceAll(" ", "");
    this.value = this.value.replace(/\D/g, "");
    if (this.value.length === 0) {
      this.setAttribute("fill", "false");
    }
  });
}

// Event 3: Go to next digit
for (let i = 0; i < DIGITS.length; i++) {
  DIGITS[i].addEventListener("input", function () {
    if (this.value.length === 1) {
      this.setAttribute("fill", "true");
      if (i < DIGITS.length - 1) {
        DIGITS[i + 1].focus();
      }

      // Dealing with Pasted Text
    } else if (this.value.length > 1) {
      // Ensuring pasted text will not exceed the boundaries
      if (i + this.value.length > DIGITS.length) {
        this.value = this.value.slice(0, DIGITS.length - i);
      }

      // Pasting
      for (
        let j = i, k = 0;
        j < i + this.value.length - 1, k < this.value.length - 1;
        j++, k++
      ) {
        DIGITS[j + 1].setAttribute("fill", "true");
        DIGITS[j + 1].focus();
        DIGITS[j + 1].value = this.value[k + 1];
      }
      this.value = this.value[0];
      this.setAttribute("fill", "true");
    }
  });
}

// Event 4: Back on Backspace
for (let i = 0; i < DIGITS.length; i++) {
  DIGITS[i].addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
      this.setAttribute("fill", "false");
      this.value = "";
      if (i >= 1) {
        DIGITS[i - 1].focus();
      }
      e.preventDefault();
    }
  });
}

// Event 5: Timer for resending code
timerOnScr.textContent = `Wait ${secLeft} Seconds`;
verificationDiv.appendChild(timerOnScr);

window.onload = function () {
  let timer2Resend = setInterval(function () {
    timerOnScr.textContent = `Wait ${secLeft - 1} Seconds`;
    resendBtn.setAttribute("disabled", "disabled");
    resendBtn.setAttribute("disabled-Btn", "true");
    secLeft--;
    if (secLeft === 0) {
      clearInterval(timer2Resend);
      timerOnScr.style.display = "none";
      resendBtn.removeAttribute("disabled");
      resendBtn.setAttribute("disabled-Btn", "false");
    }
  }, 1000);
};
