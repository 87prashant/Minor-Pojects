const sendInvoiceEl = document.querySelector(".send-invoice");
sendInvoiceEl.addEventListener("click", sendInvoice);

const sOneEl = document.querySelector(".one");
const sTwoEl = document.querySelector(".two");
const sThreeEl = document.querySelector(".three");

sOneEl.addEventListener("click", addServiceOne);
sTwoEl.addEventListener("click", addServiceTwo);
sThreeEl.addEventListener("click", addServiceThree);

let amount = 0;

let serviceOneAdded = false;
let serviceTwoAdded = false;
let serviceThreeAdded = false;

function addServiceOne() {
  document.querySelector(".one-display").innerHTML = `
    <p class="service-name">Wash Car</p>
    <button class="remove-btn remOne-display">remove</button>
    <p>$10</p>
    `;
  const rOneEl = document.querySelector(".remOne-display");
  rOneEl.addEventListener("click", remServiceOne);
  if(!serviceOneAdded) {
    amount += 10;
    serviceOneAdded = true;
    sOneEl.style.backgroundColor = "#3A69D2";
    sOneEl.style.color = "white";
  }
  updateAmount();
}
function addServiceTwo() {
  document.querySelector(".two-display").innerHTML = `
    <p class="service-name">Mow Loan</p>
    <button class="remove-btn remTwo-display">remove</button>
    <p>$20</p>
    `;
  const rTwoEl = document.querySelector(".remTwo-display");
  rTwoEl.addEventListener("click", remServiceTwo);
  if(!serviceTwoAdded) {
    amount += 20;
    serviceTwoAdded = true;
    sTwoEl.style.backgroundColor = "#3A69D2";
    sTwoEl.style.color = "white";
  }
  updateAmount();
}
function addServiceThree() {
  document.querySelector(".three-display").innerHTML = `
    <p class="service-name">Pull Weeds</p>
    <button class="remove-btn remThree-display">remove</button>
    <p>$30</p>
    `;
  const rThreeEl = document.querySelector(".remThree-display");
  rThreeEl.addEventListener("click", remServiceThree);
  if(!serviceThreeAdded) {
    amount += 30;
    serviceThreeAdded = true;
    sThreeEl.style.backgroundColor = "#3A69D2";
    sThreeEl.style.color = "white";
  }
  updateAmount();
}

function remServiceOne() {
  document.querySelector(".one-display").innerHTML = ``;
  if(serviceOneAdded) {
    amount -= 10;
  }
  sOneEl.style.backgroundColor = "#e6e8e6";
  sOneEl.style.color = "black";
  serviceOneAdded = false;
  updateAmount();
}
function remServiceTwo() {
  document.querySelector(".two-display").innerHTML = ``;
  if(serviceTwoAdded){
    amount -= 20;
  }
  sTwoEl.style.backgroundColor = "#e6e8e6";
  sTwoEl.style.color = "black";
  serviceTwoAdded = false;
  updateAmount();
}
function remServiceThree() {
  document.querySelector(".three-display").innerHTML = ``;
  if(serviceThreeAdded) {
    amount -= 30;
  }
  sThreeEl.style.backgroundColor = "#e6e8e6";
  sThreeEl.style.color = "black";
  serviceThreeAdded = false;
  updateAmount();
}

function updateAmount() {
    document.querySelector(".amount").textContent = `$${amount}`;
}

function sendInvoice() {
    remServiceOne();
    remServiceTwo();
    remServiceThree();
}
