document.getElementById("main-btn").onclick = function () {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
};

let links = document.querySelectorAll(".header-nav-item > a");

for (let index = 0; index < links.length; index++) {
  links[index].onclick = function () {
    document
      .getElementById(links[index].getAttribute("data-link"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

let buttons = document.getElementsByClassName("product-btnText");

for (let index = 0; index < buttons.length; index++) {
  buttons[index].onclick = function () {
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  };
}

const burger = document.getElementById("burger");
const nameInput = document.getElementById("name");
const phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function (event) {
  event.preventDefault();
  let hasArror = false;
  [burger, nameInput, phone].forEach((item) => {
    if (!item.value) {
      item.parentElement.style.background = "red";
      hasArror = true;
    } else {
      item.parentElement.style.background = "";
    }
  });
  if (!hasArror) {
    [burger, nameInput, phone].forEach((item) => {
      item.value = "";
    });
    alert("Thank you for order");
  }
};
[burger, nameInput, phone].forEach((item) => {
  item.addEventListener("input", function () {
    // При вводе данных снимаем красное выделение
    item.parentElement.style.background = "";
  });
});

let prices = document.getElementsByClassName("product-price");
document.getElementById("change-currency").onclick = function (e) {
  let currentCurrency = e.target.innerText;

  let newCurrency = "$";
  let coefficient = 1;

  //   if (currentCurrency === "$") {
  //     newCurrency = "€";
  //     coefficient = 0.92;
  //   }
  if (currentCurrency === "$") {
    newCurrency = "₽";
    coefficient = 80;
  } else if (currentCurrency === "₽") {
    newCurrency = "BYN";
    coefficient = 3;
  } else if (currentCurrency === "BYN") {
    newCurrency = "€";
    coefficient = 0.9;
  } else if (currentCurrency === "€") {
    newCurrency = "¥";
    coefficient = 6.9;
  }
  e.target.innerText = newCurrency;
  for (let index = 0; index < prices.length; index++) {
    prices[index].innerText =
      +(prices[index].getAttribute("data-base-price") * coefficient).toFixed(
        1
      ) +
      " " +
      newCurrency;
  }
};
