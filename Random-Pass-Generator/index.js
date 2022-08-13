// storing all the characters and symbols in the array
let randCharArray = [];
for (let i = 33; i < 127; i++) {
  randCharArray.push(String.fromCharCode(i));
}

// returns random characters
function returnRandom() {
  let ranValue = Math.floor(Math.random() * 94);
  return randCharArray[ranValue];
}

//size of passwords and password array
let size;
let passArray;

// Array store new passwords
function newpass() {
  size = document.querySelector("#size-selector").value;
  if (size < 19 && size > 5) {
    validLength();
    passArray = [];
    for (let i = 0; i < 4; i++) {
      let pass = "";
      for (let j = 0; j < size; j++) {
        pass += returnRandom();
      }
      passArray.push(pass);
    }
  } else {
    passArray = [];
    inValidLength();
  }
}

// Rendering the passwords
function renderPass() {
  newpass();
  let firstpass = document.querySelector(".one");
  firstpass.textContent = passArray[0];

  let secondpass = document.querySelector(".two");
  secondpass.textContent = passArray[1];

  let thirdpass = document.querySelector(".three");
  thirdpass.textContent = passArray[2];

  let fourthpass = document.querySelector(".four");
  fourthpass.textContent = passArray[3];
}

// functions for valid/invalid length
let noticeEl = document.querySelector("#notice");
let passEl = document.querySelectorAll(".password");
function validLength() {
  noticeEl.style.color = "#009564";
  noticeEl.textContent = "Four random passwords are generated (Click to copy):";
  for (let i = 0; i < passEl.length; i++) {
    passEl[i].style.display = "flex";
  }
}
function inValidLength() {
  noticeEl.style.color = "red";
  noticeEl.textContent = "Select length between 5 and 19!!";
  for (let i = 0; i < passEl.length; i++) {
    passEl[i].style.display = "none";
  }
}

//copy passwords
function copyPass(i) {
  //don't know why this is not working (removing the previous notification and re-animating it)
  removeNotif()
  let copyArray = document.querySelectorAll(".password");
  currentPass = copyArray[i];
  // copyText.setSelectionRange(0, 99999);
  let currentCopy = navigator.clipboard.writeText(currentPass.textContent);
  let notifEl = document.querySelector(".notification");
  notifEl.classList.add("notification-new");
}

//on reload
function onReload() {
  renderPass();
}

//remove the notification
function removeNotif() {
  let notifEl = document.querySelector(".notification");
  notifEl.classList.remove("notification-new");
}
